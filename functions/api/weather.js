export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const city = url.searchParams.get("city");

  if (!city) {
    return new Response(JSON.stringify({ error: "Missing city" }), {
      status: 400,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  const apiKey = env.WEATHER_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Server missing API key" }), {
      status: 500,
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
  }

  const apiUrl =
    `https://api.weatherapi.com/v1/forecast.json` +
    `?key=${apiKey}` +
    `&q=${encodeURIComponent(city)}` +
    `&days=1&aqi=no&alerts=no`;

  const res = await fetch(apiUrl);

  // 直接把 WeatherAPI 的结果透传给前端
  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // 同域（xtoolshub.com）访问其实不需要 CORS；加了也无妨
      "Access-Control-Allow-Origin": "*",
      // 可选：缓存 10 分钟，省调用次数
      "Cache-Control": "public, max-age=600",
    },
  });
}
