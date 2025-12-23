/*****************************************************************
 * A) 工具公共信息（无需翻译）
 *****************************************************************/
const toolsBase = [
  { id: "excel_ai",       icon: "📊", href: "excel_ai.html", enabled: true  },
  { id: "excel_cleanup",  icon: "🔧", href: "https://github.com/yourusername/excel-cleanup-tool", enabled: false },
  { id: "batch_copier",   icon: "🐍", href: "https://mytools-d4exbdecqsrzidtgsmoy7e.streamlit.app/", enabled: true },
  { id: "order_tracking", icon: "📦", href: "order_tracking.html", enabled: true },
  { id: "smartwear26",    icon: "👕", href: "SmartWear26.html", enabled: true }
];

/*****************************************************************
 * B) 所有文本翻译集中管理
 *****************************************************************/
const i18n = {
  cn: {
    htmlLang: "zh-CN",
    pageTitle: "我的工具站",
    searchPlaceholder: "搜索工具...",
    buttons: { langTo: "English", theme: "切换主题", author: "作者信息" },
    author: { title: "关于作者", text: "嗨，这里是Ryan。" },
    toolsText: {
      excel_ai: {
        title: "AI Excel处理工具",
        desc: "上传Excel或输入需求，让AI帮你清洗、处理数据。",
        linkText: "打开工具 🚀"
      },
      excel_cleanup: {
        title: "Excel自动整理工具",
        desc: "用于整理数据，去除空行并格式化。",
        linkText: "暂未开放"
      },
      batch_copier: {
        title: "Python根据关键词文件批量复制",
        desc: "根据关键词批量复制文件到指定文件夹的小工具。",
        linkText: "在线打开工具 🚀"
      },
      order_tracking: {
        title: "订单追踪工具",
        desc: "输入订单号并查询当前状态的网页小工具。",
        linkText: "在线使用工具 🚀"
      },
      smartwear26: {
        title: "智能穿衣推荐",
        desc: "输入城市名（英文）并查询当前天气以及穿衣推荐的小工具。",
        linkText: "在线使用工具 🚀"
      }
    }
  },

  en: {
    htmlLang: "en",
    pageTitle: "My Tools",
    searchPlaceholder: "Search tools...",
    buttons: { langTo: "中文", theme: "Toggle Theme", author: "Author Info" },
    author: { title: "About Author", text: "Hi, this is Ryan." },
    toolsText: {
      excel_ai: {
        title: "AI Excel Processor",
        desc: "Upload Excel or enter instructions to let AI process data.",
        linkText: "Open Tool 🚀"
      },
      excel_cleanup: {
        title: "Excel Cleanup Tool",
        desc: "Organize data, remove blank lines and format.",
        linkText: "Coming Soon"
      },
      batch_copier: {
        title: "Python Batch File Copier",
        desc: "Copy files by keywords in batch to target folder.",
        linkText: "Open Online 🚀"
      },
      order_tracking: {
        title: "Order Tracking Tool",
        desc: "Input order number to track current status.",
        linkText: "Use Tool Online 🚀"
      },
      smartwear26: {
        title: "Smart Wear 26",
        desc: "Input city name to get clothing recommendations.",
        linkText: "Use Tool Online 🚀"
      }
    }
  }
};

/*****************************************************************
 * C) 状态 & 本地存储 key
 *****************************************************************/
const LS_KEYS = { theme: "theme", lang: "lang" };
let currentLang = localStorage.getItem(LS_KEYS.lang) || "cn";

/*****************************************************************
 * D) 安全取翻译（避免漏写报错）
 *****************************************************************/
function tTool(toolId) {
  const dict = i18n[currentLang];
  const fallbackLang = currentLang === "cn" ? "en" : "cn";
  return (
    dict.toolsText[toolId] ||
    i18n[fallbackLang].toolsText[toolId] ||
    { title: toolId, desc: "", linkText: "" }
  );
}

/*****************************************************************
 * E) 渲染工具卡
 *****************************************************************/
function renderTools() {
  const container = document.getElementById("toolsContainer");
  container.innerHTML = "";

  toolsBase.forEach(base => {
    const text = tTool(base.id);

    const card = document.createElement("div");
    card.className = "tool-card";
    card.dataset.id = base.id;

    const h2 = document.createElement("h2");
    h2.className = "tool-title";
    h2.textContent = `${base.icon} ${text.title}`;

    const pDesc = document.createElement("p");
    pDesc.className = "tool-desc";
    pDesc.textContent = text.desc;

    const pLink = document.createElement("p");
    const a = document.createElement("a");
    a.className = "tool-link";
    a.textContent = text.linkText;

    if (base.enabled) {
      a.href = base.href;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    } else {
      a.href = "javascript:void(0)";
      a.classList.add("disabled");
      a.setAttribute("aria-disabled", "true");
    }

    pLink.appendChild(a);
    card.appendChild(h2);
    card.appendChild(pDesc);
    card.appendChild(pLink);
    container.appendChild(card);
  });
}

/*****************************************************************
 * F) 搜索过滤（按当前语言 title+desc）
 *****************************************************************/
function filterTools() {
  const kw = document.getElementById("searchInput").value.trim().toLowerCase();
  const cards = Array.from(document.querySelectorAll(".tool-card"));

  const map = new Map(
    toolsBase.map(b => {
      const text = tTool(b.id);
      return [b.id, (text.title + " " + text.desc).toLowerCase()];
    })
  );

  cards.forEach(card => {
    const id = card.dataset.id;
    const text = map.get(id) || "";
    card.style.display = text.includes(kw) ? "block" : "none";
  });
}

/*****************************************************************
 * G) 主题
 *****************************************************************/
function applyThemeFromStorage() {
  const theme = localStorage.getItem(LS_KEYS.theme) || "dark";
  const light = theme === "light";
  document.body.classList.toggle("light-mode", light);
  document.getElementById("authorModal").classList.toggle("light-mode", light);
}

function toggleTheme() {
  const isLight = document.body.classList.contains("light-mode");
  document.body.classList.toggle("light-mode", !isLight);
  document.getElementById("authorModal").classList.toggle("light-mode", !isLight);
  localStorage.setItem(LS_KEYS.theme, !isLight ? "light" : "dark");
}

/*****************************************************************
 * H) 应用语言（固定文本 + 重新渲染工具）
 *****************************************************************/
function applyLanguage() {
  const dict = i18n[currentLang];

  document.documentElement.lang = dict.htmlLang;
  document.getElementById("pageTitle").textContent = dict.pageTitle;
  document.getElementById("searchInput").placeholder = dict.searchPlaceholder;

  document.getElementById("langToggleBtn").textContent = dict.buttons.langTo;
  document.getElementById("themeToggleBtn").textContent = dict.buttons.theme;
  document.getElementById("authorBtn").textContent = dict.buttons.author;

  document.getElementById("authorTitle").textContent = dict.author.title;
  document.getElementById("authorText").textContent = dict.author.text;

  renderTools();
  filterTools();
  localStorage.setItem(LS_KEYS.lang, currentLang);
}

function toggleLanguage() {
  currentLang = (currentLang === "cn") ? "en" : "cn";
  applyLanguage();
}

/*****************************************************************
 * I) 模态框
 *****************************************************************/
function openAuthorModal() {
  document.getElementById("authorModal").style.display = "block";
}
function closeAuthorModal() {
  document.getElementById("authorModal").style.display = "none";
}

/*****************************************************************
 * J) 启动与事件绑定
 *****************************************************************/
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langToggleBtn").addEventListener("click", toggleLanguage);
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);
  document.getElementById("authorBtn").addEventListener("click", openAuthorModal);

  document.getElementById("authorClose").addEventListener("click", closeAuthorModal);
  document.getElementById("authorModal").addEventListener("click", (e) => {
    if (e.target.id === "authorModal") closeAuthorModal();
  });

  document.getElementById("searchInput").addEventListener("input", filterTools);

  applyThemeFromStorage();
  applyLanguage();
});
