/*****************************************************************
 * A) 工具公共信息（无需翻译）
 *****************************************************************/
const toolsBase = [
  { id: "excel_ai",       icon: "📊", href: "excel_ai.html", enabled: false }, 
  { id: "excel_cleanup",  icon: "🔧", href: "https://github.com/yourusername/excel-cleanup-tool", enabled: false },
  { id: "batch_copier",   icon: "🐍", href: "https://mytools-d4exbdecqsrzidtgsmoy7e.streamlit.app/", enabled: true },
  { id: "order_tracking", icon: "📦", href: "order_tracking.html", enabled: true },
  { id: "smartwear26",    icon: "👕", href: "SmartWear26.html", enabled: true }
];

/*****************************************************************
 * B) 所有文本翻译集中管理
 *****************************************************************/
const i18n = {
  zh: {
    htmlLang: "zh-CN",
    pageTitle: "Ryan Studio",
    searchPlaceholder: "搜索工具…",
    nav: { tools: "Tools", services: "Services", contact: "Contact" },
    buttons: {
      langTo: "English",
      theme: "切换主题",
      author: "作者信息"
    },
    hero: {
      small: "我的工具站",
      title: "把重复工作自动化\n让流程更稳更快。",
      desc:
        "我做 VBA / Power Automate / Python 自动化与数据处理，也做轻量 Web 工具。\n这里是我的作品集与工具入口，可用于求职展示，也欢迎联系我承接小型项目。",
      primary: "查看作品集",
      secondary: "Let's connect"
    },
    deliver: {
      title: "What I deliver",
      items: ["可维护脚本 / 可交接文档", "面向业务的“省时省错”结果", "快速迭代，小步交付"],
      leftTag: "常用",
      leftValue: "Excel • SharePoint • Teams",
      rightTag: "交付",
      rightValue: "模板 • 脚本 • 自动化流程"
    },
    services: {
      title: "我能提供的服务",
      more: "Read about what I do ↗",
      cards: [
        {
          title: "VBA / Excel 自动化",
          desc: "报表生成、数据整理、模板化导出、按钮化操作，让 Excel 更像“软件”。"
        },
        {
          title: "Power Automate 流程",
          desc: "审批流、提醒通知、Teams/SharePoint 集成，把人肉流程变成可追踪的自动化。"
        },
        {
          title: "Python 数据处理",
          desc: "ETL、清洗合并、定时报表、接口抓取，把一次性需求变成可复用工具。"
        }
      ]
    },
    tools: {
      title: "作品集 / 工具入口",
      open: "打开工具 🚀",
      online: "在线使用工具 🚀",
      offline: "暂未开放",
      list: {
        excel_ai: {
          title: "AI Excel处理工具",
          desc: "上传Excel或输入需求，让AI帮你清洗、处理数据。",
          cta: "打开工具 🚀"
        },
        excel_cleanup: {
          title: "Excel自动整理工具",
          desc: "用于整理数据，去除空行并格式化。",
          cta: "暂未开放"
        },
        batch_copier: {
          title: "Python根据关键词文件批量复制",
          desc: "根据关键词把目录下文件批量整理到指定文件夹的小工具。",
          cta: "在线使用工具 🚀"
        },
        order_tracking: {
          title: "订单追踪工具",
          desc: "输入订单号查询当前状态，支持简单的数据处理。",
          cta: "在线使用工具 🚀"
        },
        smartwear26: {
          title: "智能穿衣推荐",
          desc: "输入城市名（英文）并自动查询天气，给出今日穿衣推荐的小工具。",
          cta: "在线使用工具 🚀"
        }
      }
    },
    contact: {
      title: "Let’s connect",
      desc:
        "如果你想把重复工作自动化、搭建报表流程、做一个小型数据处理/网页工具，欢迎联系我。\n我通常会在 24–48 小时内回复。",
      tags: ["Excel/VBA", "Power Automate", "Python", "Web Tools"],
      helper: "更多联系方式：点击右上角「作者信息」。",
      formTitle: "快速说明需求",
      formPh: "一句话描述你想自动化的流程 / 数据来源 / 期望交付物",
      send: "Send (demo)",
      note: "（你若有表单/后端，我可以帮你接上。）"
    },
    author: {
      title: "作者信息",
      text:
        "Hi，我是 Ryan。\n\n我主要做：\n- Excel/VBA 自动化\n- Power Automate / M365 流程\n- Python 数据处理、接口抓取、报表自动化\n- 轻量 Web 工具（用于展示/交付）\n\n如果你有重复工作想提效，欢迎联系我！"
    }
  },
  en: {
    htmlLang: "en",
    pageTitle: "Ryan Studio",
    searchPlaceholder: "Search tools…",
    nav: { tools: "Tools", services: "Services", contact: "Contact" },
    buttons: {
      langTo: "中文",
      theme: "Toggle theme",
      author: "About"
    },
    hero: {
      small: "My tools hub",
      title: "Automate repetitive work\nand make workflows stable & fast.",
      desc:
        "I build VBA / Power Automate / Python automations and data tooling, and also lightweight web tools.\nThis site is a portfolio + tool hub for demos, job search, and small projects.",
      primary: "View tools",
      secondary: "Let’s connect"
    },
    deliver: {
      title: "What I deliver",
      items: ["Maintainable scripts + handover docs", "Business-facing time & error savings", "Fast iteration, small releases"],
      leftTag: "Stack",
      leftValue: "Excel • SharePoint • Teams",
      rightTag: "Deliverables",
      rightValue: "Templates • Scripts • Automated flows"
    },
    services: {
      title: "Services",
      more: "Read about what I do ↗",
      cards: [
        {
          title: "VBA / Excel Automation",
          desc: "Report generation, cleaning, template export, buttonized workflows — make Excel feel like software."
        },
        {
          title: "Power Automate Flows",
          desc: "Approvals, reminders, Teams/SharePoint integrations — turn manual processes into trackable automation."
        },
        {
          title: "Python Data Processing",
          desc: "ETL, cleaning/merging, scheduled reports, API ingestion — turn one-off needs into reusable tools."
        }
      ]
    },
    tools: {
      title: "Portfolio / Tools",
      open: "Open tool 🚀",
      online: "Use online 🚀",
      offline: "Coming soon",
      list: {
        excel_ai: {
          title: "AI Excel Processing Tool",
          desc: "Upload an Excel file or type requirements — AI helps clean and process your data.",
          cta: "Open tool 🚀"
        },
        excel_cleanup: {
          title: "Excel Cleanup Tool",
          desc: "Quickly tidy tables: remove blanks and normalize formats.",
          cta: "Coming soon"
        },
        batch_copier: {
          title: "Batch Copy by Keywords (Python)",
          desc: "Organize files by keywords: batch copy matching files into a target folder.",
          cta: "Use online 🚀"
        },
        order_tracking: {
          title: "Order Tracking Tool",
          desc: "Check status by order number, with basic data processing features.",
          cta: "Use online 🚀"
        },
        smartwear26: {
          title: "Smart Outfit Recommender",
          desc: "Enter a city name (English) — fetch live weather and suggest outfits for today.",
          cta: "Use online 🚀"
        }
      }
    },
    contact: {
      title: "Let’s connect",
      desc:
        "If you want to automate repetitive work, build reporting workflows, or ship a small data/web tool, feel free to reach out.\nI usually reply within 24–48 hours.",
      tags: ["Excel/VBA", "Power Automate", "Python", "Web Tools"],
      helper: "More contact info: click “About” in the top-right.",
      formTitle: "Quick request",
      formPh: "One sentence: workflow to automate / data source / expected deliverables",
      send: "Send (demo)",
      note: "(If you have a backend/form, I can help wire it up.)"
    },
    author: {
      title: "About",
      text:
        "Hi, I’m Ryan.\n\nI focus on:\n- Excel/VBA automation\n- Power Automate / M365 workflows\n- Python data processing, API ingestion, reporting automation\n- Lightweight web tools for delivery & demos\n\nIf you have repetitive work to streamline, feel free to contact me."
    }
  }
};

const LS_KEYS = {
  lang: "lang",
  theme: "theme"
};

let currentLang = localStorage.getItem(LS_KEYS.lang) || "zh";

function tTool(id) {
  const dict = i18n[currentLang];
  return (dict && dict.tools && dict.tools.list && dict.tools.list[id]) || null;
}


function renderTools() {
  const container = document.getElementById("toolsContainer");
  if (!container) return; 
  container.innerHTML = "";

  toolsBase.forEach(base => {
    const text = tTool(base.id);
    if (!text) return;

    const card = document.createElement("div");
    card.className = "tool-card";
    card.dataset.id = base.id;

    const h2 = document.createElement("h2");
    h2.className = "tool-title";
    h2.textContent = `${base.icon} ${text.title}`;

    const p = document.createElement("p");
    p.className = "tool-desc";
    p.textContent = text.desc;

    const cta = document.createElement("a");
    cta.className = "tool-cta";
    cta.textContent = base.enabled ? text.cta : i18n[currentLang].tools.offline;
    cta.href = base.enabled ? base.href : "javascript:void(0)";
    cta.target = base.enabled && /^https?:\/\//.test(base.href) ? "_blank" : "_self";
    cta.rel = cta.target === "_blank" ? "noopener noreferrer" : "";

    // Make whole card clickable only when enabled
    if (base.enabled) {
      card.classList.add("is-clickable");
      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");

      const go = () => {
        if (/^https?:\/\//.test(base.href)) {
          window.open(base.href, "_blank", "noopener");
        } else {
          window.location.href = base.href;
        }
      };

      card.addEventListener("click", go);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      });
    } else {
      // Disabled: show as a non-navigable card
      card.classList.add("is-disabled");
      card.setAttribute("aria-disabled", "true");

      // Ensure CTA cannot navigate even if clicked
      cta.removeAttribute("href");
      cta.setAttribute("role", "button");
      cta.setAttribute("aria-disabled", "true");
      cta.tabIndex = -1;
      cta.addEventListener("click", (e) => e.preventDefault());
    }


    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(cta);
    container.appendChild(card);
  });
}

function filterTools() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  const q = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll(".tool-card");

  cards.forEach(card => {
    const id = card.dataset.id;
    const text = tTool(id);
    if (!text) return;

    const hay = `${text.title} ${text.desc}`.toLowerCase();
    card.style.display = hay.includes(q) ? "" : "none";
  });
}

function applyThemeFromStorage() {
  // ✅ 默认主题：light
  const saved = localStorage.getItem(LS_KEYS.theme);
  const theme = saved || "light";
  if (!saved) localStorage.setItem(LS_KEYS.theme, theme);

  const light = theme === "light";
  document.body.classList.toggle("light-mode", light);

  const modal = document.getElementById("authorModal");
  if (modal) modal.classList.toggle("light-mode", light);
}

function toggleTheme() {
  const isLight = document.body.classList.contains("light-mode");
  const next = isLight ? "dark" : "light";
  document.body.classList.toggle("light-mode", !isLight);
  localStorage.setItem(LS_KEYS.theme, next);

  const modal = document.getElementById("authorModal");
  if (modal) modal.classList.toggle("light-mode", !isLight);
}


function toggleLanguage() {
  currentLang = currentLang === "zh" ? "en" : "zh";
  applyLanguage();
}

function applyLanguage() {
  const dict = i18n[currentLang];
  if (!dict) return;

  const setText = (id, v) => {
    const el = document.getElementById(id);
    if (el && v !== undefined && v !== null) el.textContent = v;
  };

  const setHTML = (id, v) => {
    const el = document.getElementById(id);
    if (!el || v === undefined || v === null) return;
    // 支持自动换行（兼容 \n 和 \r\n）
    el.innerHTML = String(v).replace(/\r?\n/g, "<br/>");
  };

  const setPH = (id, v) => {
    const el = document.getElementById(id);
    if (el && v !== undefined && v !== null) el.placeholder = v;
  };

  // html lang + <title>
  document.documentElement.lang = dict.htmlLang;
  const titleEl = document.getElementById("docTitle");
  if (titleEl) titleEl.textContent = dict.pageTitle;
  document.title = dict.pageTitle;

  // Top nav
  setText("navTools", dict.nav.tools);
  setText("navServices", dict.nav.services);
  setText("navContact", dict.nav.contact);

  // Buttons
  setText("langToggleBtn", dict.buttons.langTo);
  setText("themeToggleBtn", dict.buttons.theme);
  setText("authorBtn", dict.buttons.author);

  // Hero
  setText("pageTitle", dict.hero.small);
  setHTML("heroHeadline", dict.hero.title);
  setHTML("heroSub", dict.hero.desc);
  setText("ctaPrimary", dict.hero.primary);
  setText("ctaGhost", dict.hero.secondary);

  // Deliver panel
  setText("deliverTitle", dict.deliver.title);
  setText("deliver1", "✅ " + dict.deliver.items[0]);
  setText("deliver2", "✅ " + dict.deliver.items[1]);
  setText("deliver3", "✅ " + dict.deliver.items[2]);
  setText("mini1k", dict.deliver.leftTag);
  setText("mini1t", dict.deliver.leftValue);
  setText("mini2k", dict.deliver.rightTag);
  setText("mini2t", dict.deliver.rightValue);

  // Services
  setText("servicesTitle", dict.services.title);
  setText("servicesLink", dict.services.more);
  setText("svc1Title", dict.services.cards[0].title);
  setText("svc1Desc", dict.services.cards[0].desc);
  setText("svc2Title", dict.services.cards[1].title);
  setText("svc2Desc", dict.services.cards[1].desc);
  setText("svc3Title", dict.services.cards[2].title);
  setText("svc3Desc", dict.services.cards[2].desc);

  // Tools section
  setText("toolsTitle", dict.tools.title);
  setPH("searchInput", dict.searchPlaceholder);

  // Contact
  setText("contactTitle", dict.contact.title);
  setHTML("contactDesc", dict.contact.desc);
  setText("chip1", dict.contact.tags[0]);
  setText("chip2", dict.contact.tags[1]);
  setText("chip3", dict.contact.tags[2]);
  setText("chip4", dict.contact.tags[3]);
  setText("contactMore", dict.contact.helper);

  
  if (dict.contact?.mailboxLabel) setText("mailboxLabel", dict.contact.mailboxLabel);
  if (dict.contact?.mailboxHint) setText("mailboxHint", dict.contact.mailboxHint);

  // Author modal
  setText("authorTitle", dict.author.title);
  setHTML("authorText", dict.author.text);

  // Re-render tools list
  renderTools();
  filterTools();

  localStorage.setItem(LS_KEYS.lang, currentLang);
}


function openAuthorModal() {
  const modal = document.getElementById("authorModal");
  if (modal) modal.style.display = "block";
}
function closeAuthorModal() {
  const modal = document.getElementById("authorModal");
  if (modal) modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) langBtn.addEventListener("click", toggleLanguage);

  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.addEventListener("input", filterTools);


  const authorBtn = document.getElementById("authorBtn");
  const authorModal = document.getElementById("authorModal");
  if (authorBtn && authorModal) {
    authorBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openAuthorModal();
    });
  }

  const authorClose = document.getElementById("authorClose");
  if (authorClose) authorClose.addEventListener("click", closeAuthorModal);

  if (authorModal) {
    authorModal.addEventListener("click", (e) => {
      if (e.target && e.target.id === "authorModal") closeAuthorModal();
    });
  }

  applyThemeFromStorage();
  applyLanguage();
});
