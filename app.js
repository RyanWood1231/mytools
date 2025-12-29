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
    docTitle: "我的工具站",
    searchPlaceholder: "搜索工具...",

    nav: { tools: "Tools", services: "Services", contact: "Contact" },

    buttons: { langTo: "English", theme: "切换主题", author: "作者信息" },

    hero: {
      eyebrow: "我的工具站",
      headlineHTML: "把重复工作自动化<br/>让流程更稳更快<span class=\"dot\">。</span>",
      subHTML:
        "我做 <strong>VBA / Power Automate / Python</strong> 自动化与数据处理，也做轻量 Web 工具。这里是我的作品集与工具入口，可用于求职展示，也欢迎联系我承接小型项目。",
      ctaPrimary: "查看作品集",
      ctaGhost: "Let’s connect",
      badges: [
        { k: "VBA / Excel", t: "报表 · 模板 · 一键化" },
        { k: "Power Automate", t: "审批 · 提醒 · M365" },
        { k: "Python", t: "ETL · 清洗 · 定时任务" }
      ]
    },

    deliver: {
      title: "What I deliver",
      items: [
        "✅ 可维护脚本 / 可交接文档",
        "✅ 面向业务的“省时省错”结果",
        "✅ 快速迭代，小步交付"
      ],
      mini: [
        { k: "常用", t: "Excel · SharePoint · Teams" },
        { k: "交付", t: "模板 · 脚本 · 自动化流程" }
      ]
    },

    services: {
      title: "我能提供的服务",
      link: "Read about what I do ↗",
      cards: [
        { title: "VBA / Excel 自动化", desc: "报表生成、数据整理、模板化导出、按钮化操作，让 Excel 真正“像软件”。" },
        { title: "Power Automate 流程", desc: "审批流、提醒通知、Teams/SharePoint 集成，把人肉流程变成可追踪的自动化。" },
        { title: "Python 数据处理", desc: "ETL、清洗合并、定时报表、接口抓取，把一次性需求变成可复用工具。" }
      ]
    },

    portfolio: { title: "作品集 / 工具入口" },

    contact: {
      title: "Let’s connect",
      desc: "如果你想把重复工作自动化、搭建报表流程、做一个小型数据处理/网页工具，欢迎联系我。我通常在 24–48 小时内回复。",
      chips: ["Excel/VBA", "Power Automate", "Python", "Web Tools"],
      more: "更多联系方式：点击右上角「作者信息」。",
      mailboxLabel: "联系方式"
    },

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
    docTitle: "My Tools",
    searchPlaceholder: "Search tools...",

    nav: { tools: "Tools", services: "Services", contact: "Contact" },

    buttons: { langTo: "中文", theme: "Toggle Theme", author: "About" },

    hero: {
      eyebrow: "My Tools",
      headlineHTML: "Automate repetitive work<br/>Make workflows steadier & faster<span class=\"dot\">.</span>",
      subHTML:
        "I build <strong>VBA / Power Automate / Python</strong> automation and data workflows, and also ship lightweight web tools. This page is my portfolio + tool hub—useful for job applications, and I’m also available for small projects.",
      ctaPrimary: "View portfolio",
      ctaGhost: "Let’s connect",
      badges: [
        { k: "VBA / Excel", t: "Reports · Templates · One-click" },
        { k: "Power Automate", t: "Approvals · Reminders · M365" },
        { k: "Python", t: "ETL · Cleaning · Scheduled jobs" }
      ]
    },

    deliver: {
      title: "What I deliver",
      items: [
        "✅ Maintainable scripts + handover docs",
        "✅ Business-facing outcomes that save time & reduce errors",
        "✅ Fast iterations with small, reliable deliveries"
      ],
      mini: [
        { k: "Stack", t: "Excel · SharePoint · Teams" },
        { k: "Outputs", t: "Templates · Scripts · Automation flows" }
      ]
    },

    services: {
      title: "Services I offer",
      link: "Read about what I do ↗",
      cards: [
        { title: "VBA / Excel Automation", desc: "Report generation, data cleanup, templated exports, and button-driven workflows—making Excel feel like real software." },
        { title: "Power Automate Flows", desc: "Approvals, reminders, and Teams/SharePoint integrations—turn manual processes into trackable automation." },
        { title: "Python Data Processing", desc: "ETL, merge & clean, scheduled reports, and API integrations—convert one-off needs into reusable tools." }
      ]
    },

    portfolio: { title: "Portfolio / Tools" },

    contact: {
      title: "Let’s connect",
      desc: "If you want to automate repetitive work, set up reporting workflows, or build a small data/web tool—feel free to reach out. I usually reply within 24–48 hours.",
      chips: ["Excel/VBA", "Power Automate", "Python", "Web Tools"],
      more: "More contact options: click “About” on the top-right.",
      mailboxLabel: "Contact"
    },

    toolsText: {
      excel_ai: {
        title: "AI Excel Processor",
        desc: "Upload Excel or enter instructions to let AI clean and process data.",
        linkText: "Open Tool 🚀"
      },
      excel_cleanup: {
        title: "Excel Cleanup Tool",
        desc: "Organize data, remove blank lines and format it consistently.",
        linkText: "Coming Soon"
      },
      batch_copier: {
        title: "Python Keyword Batch Copier",
        desc: "Batch copy files by keywords into a target folder.",
        linkText: "Open Online 🚀"
      },
      order_tracking: {
        title: "Order Tracking Tool",
        desc: "Enter an order number to check the current status.",
        linkText: "Use Tool Online 🚀"
      },
      smartwear26: {
        title: "Smart Wear 26",
        desc: "Enter a city name to get current weather + outfit suggestions.",
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
    pLink.className = "tool-link";
    const a = document.createElement("a");
    a.className = "tool-link";
    a.textContent = text.linkText;

    if (base.enabled) {
      a.href = base.href;

      // External links open in a new tab; internal tools open in the same tab
      const isExternal = /^https?:\/\//i.test(base.href);
      if (isExternal) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }

      // Make the whole card clickable
      card.classList.add("is-clickable");
      card.tabIndex = 0;
      const go = () => {
        if (isExternal) window.open(base.href, "_blank", "noopener,noreferrer");
        else window.location.href = base.href;
      };
      card.addEventListener("click", go);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      });
    } else {
      a.href = "javascript:void(0)";
      a.classList.add("disabled");
      a.setAttribute("aria-disabled", "true");
      card.classList.add("is-disabled");
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
 * 默认：亮色
 *****************************************************************/
function applyThemeFromStorage() {
  const theme = localStorage.getItem(LS_KEYS.theme) || "light";
  const light = theme === "light";
  document.body.classList.toggle("light-mode", light);
}

function toggleTheme() {
  const isLight = document.body.classList.contains("light-mode");
  document.body.classList.toggle("light-mode", !isLight);
  localStorage.setItem(LS_KEYS.theme, !isLight ? "light" : "dark");
}

/*****************************************************************
 * H) 应用语言（固定文本 + 重新渲染工具）
 *****************************************************************/
function applyLanguage() {
  const dict = i18n[currentLang];

  document.documentElement.lang = dict.htmlLang;

  // document title
  const docTitleEl = document.getElementById("docTitle");
  if (docTitleEl) docTitleEl.textContent = dict.docTitle;
  document.title = dict.docTitle;

  // top nav
  document.getElementById("navTools").textContent = dict.nav.tools;
  document.getElementById("navServices").textContent = dict.nav.services;
  document.getElementById("navContact").textContent = dict.nav.contact;

  // hero
  document.getElementById("pageTitle").textContent = dict.hero.eyebrow;
  document.getElementById("heroHeadline").innerHTML = dict.hero.headlineHTML;
  document.getElementById("heroSub").innerHTML = dict.hero.subHTML;
  document.getElementById("ctaPrimary").textContent = dict.hero.ctaPrimary;
  document.getElementById("ctaGhost").textContent = dict.hero.ctaGhost;

  document.getElementById("badge1k").textContent = dict.hero.badges[0].k;
  document.getElementById("badge1t").textContent = dict.hero.badges[0].t;
  document.getElementById("badge2k").textContent = dict.hero.badges[1].k;
  document.getElementById("badge2t").textContent = dict.hero.badges[1].t;
  document.getElementById("badge3k").textContent = dict.hero.badges[2].k;
  document.getElementById("badge3t").textContent = dict.hero.badges[2].t;

  // deliver panel
  document.getElementById("deliverTitle").textContent = dict.deliver.title;
  document.getElementById("deliver1").textContent = dict.deliver.items[0];
  document.getElementById("deliver2").textContent = dict.deliver.items[1];
  document.getElementById("deliver3").textContent = dict.deliver.items[2];
  document.getElementById("mini1k").textContent = dict.deliver.mini[0].k;
  document.getElementById("mini1t").textContent = dict.deliver.mini[0].t;
  document.getElementById("mini2k").textContent = dict.deliver.mini[1].k;
  document.getElementById("mini2t").textContent = dict.deliver.mini[1].t;

  // services
  document.getElementById("servicesTitle").textContent = dict.services.title;
  document.getElementById("servicesLink").textContent = dict.services.link;
  document.getElementById("svc1Title").textContent = dict.services.cards[0].title;
  document.getElementById("svc1Desc").textContent = dict.services.cards[0].desc;
  document.getElementById("svc2Title").textContent = dict.services.cards[1].title;
  document.getElementById("svc2Desc").textContent = dict.services.cards[1].desc;
  document.getElementById("svc3Title").textContent = dict.services.cards[2].title;
  document.getElementById("svc3Desc").textContent = dict.services.cards[2].desc;

  // portfolio
  document.getElementById("toolsTitle").textContent = dict.portfolio.title;
  document.getElementById("searchInput").placeholder = dict.searchPlaceholder;

  // contact
  document.getElementById("contactTitle").textContent = dict.contact.title;
  document.getElementById("contactDesc").textContent = dict.contact.desc;
  document.getElementById("chip1").textContent = dict.contact.chips[0];
  document.getElementById("chip2").textContent = dict.contact.chips[1];
  document.getElementById("chip3").textContent = dict.contact.chips[2];
  document.getElementById("chip4").textContent = dict.contact.chips[3];
  document.getElementById("contactMore").textContent = dict.contact.more;

  document.getElementById("mailboxLabel").textContent = dict.contact.mailboxLabel;
  document.getElementById("mailboxHint").textContent = dict.contact.mailboxHint;

  // buttons
  document.getElementById("langToggleBtn").textContent = dict.buttons.langTo;
  document.getElementById("themeToggleBtn").textContent = dict.buttons.theme;
  document.getElementById("authorBtn").textContent = dict.buttons.author;

  renderTools();
  filterTools();
  localStorage.setItem(LS_KEYS.lang, currentLang);
}

function toggleLanguage() {
  currentLang = (currentLang === "cn") ? "en" : "cn";
  applyLanguage();
}

/*****************************************************************
 * I) 启动与事件绑定
 *****************************************************************/
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("langToggleBtn").addEventListener("click", toggleLanguage);
  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);
  document.getElementById("searchInput").addEventListener("input", filterTools);

  applyThemeFromStorage();
  applyLanguage();
});
