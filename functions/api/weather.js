export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const city = url.searchParams.get("city");

  // 1) 参数检查
  if (!city) {
    return json({ error: "Missing city" }, 400);
  }

  // 2) Origin 校验
  const origin = request.headers.get("Origin");
  const allowedOrigins = new Set([
    "https://xtoolshub.com",
    "https://www.xtoolshub.com",
  ]);

  if (origin && !allowedOrigins.has(origin)) {
    return new Response("Forbidden", { status: 403 });
  }

  // 3) 读取 Secret
  const apiKey = env.WEATHER_API_KEY;
  if (!apiKey) {
    return json({ error: "Server missing API key" }, 500);
  }

  // 4) 调 WeatherAPI
  const apiUrl =
    `https://api.weatherapi.com/v1/forecast.json` +
    `?key=${apiKey}` +
    `&q=${encodeURIComponent(city)}` +
    `&days=1&aqi=no&alerts=no`;

  const res = await fetch(apiUrl);

  // 5) 透传结果
  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": origin && allowedOrigins.has(origin) ? origin : "https://xtoolshub.com",
      "Vary": "Origin",
      "Cache-Control": "public, max-age=600",
    },
  });
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
