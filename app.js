/*****************************************************************
 * Ryan's Tool Hub - App (v3)
 * - i18n for new hero/sections
 * - clickable tool cards
 * - safe guards for pages that don't contain some elements
 *****************************************************************/

/*****************************************************************
 * A) Tools base (no translation)
 *****************************************************************/
const toolsBase = [
  { id: "excel_ai",       icon: "📊", href: "excel_ai.html", enabled: true  },
  { id: "excel_cleanup",  icon: "🔧", href: "https://github.com/yourusername/excel-cleanup-tool", enabled: false },
  { id: "batch_copier",   icon: "🐍", href: "https://mytools-d4exbdecqsrzidtgsmoy7e.streamlit.app/", enabled: true },
  { id: "order_tracking", icon: "📦", href: "order_tracking.html", enabled: true },
  { id: "smartwear26",    icon: "👕", href: "SmartWear26.html", enabled: true }
];

/*****************************************************************
 * B) i18n
 *****************************************************************/
const i18n = {
  cn: {
    htmlLang: "zh-CN",
    brand: "Ryan • Automation",
    pageTitle: "我的工具站",
    nav: { tools: "Tools", about: "About", contact: "Contact" },

    hero: {
      eyebrow: "Automation / VBA / Power Automate / Python",
      headline: ["把重复工作自动化，", "让流程更稳更快。"],
      sub: "我专注于 VBA、Power Automate 与 Python 自动化数据处理，也会做轻量 Web 工具。这里是我的工具与作品集入口。",
      ctaPrimary: "查看工具与作品",
      ctaSecondary: "联系我接单",
      badges: [
        { kpi: "Excel / VBA 自动化", label: "报表、模板、按钮、一键化" },
        { kpi: "Power Automate 流程", label: "审批、提醒、M365 集成" },
        { kpi: "Python 数据处理", label: "清洗、ETL、定时任务" }
      ]
    },

    sections: {
      servicesTitle: "我能提供什么",
      servicesLink: "了解更多 →",
      toolsTitle: "工具 & 作品集",
      toolsHint: "点击卡片跳转到工具或项目页面",
      aboutTitle: "关于我",
      aboutBody: "我在日常工作中用自动化解决重复劳动：从 Excel/VBA 的模板与报表，到 Power Automate 的流程串联，再到 Python 的数据处理与脚本化交付。",
      aboutCta: "打开我的介绍页 →",
      contactTitle: "Let's connect",
      contactBody: "如果你想把重复工作自动化，或需要一个小型数据处理/网页工具，我可以帮你快速落地。",
      contactNote: "你也可以先用邮件/微信联系我；如果你想启用表单，我可以帮你接 Cloudflare 的后端。"
    },

    aboutPage: {
      title: "关于我",
      introTitle: "一句话介绍",
      introHint: "（你可以在这里写：我是谁 + 我擅长什么 + 我能带来什么结果）",
      skillsTitle: "技能与工具栈",
      skillsHint: "（示例：VBA/Excel、Power Automate、Python、HTML/CSS、Power BI 等）",
      highlightsTitle: "代表性成果",
      highlightsHint: "（示例：节省工时、减少错误、自动化覆盖范围等）",
      journeyTitle: "学习与经历",
      journeyHint: "（用时间线写：开始 → 项目 → 成长）",
      servicesTitle: "我可承接的项目",
      servicesHint: "（写清楚交付物与边界：报表自动化/流程自动化/数据处理脚本等）",
      contactTitle: "联系我",
      contactHint: "（写邮箱/微信/可用时间/合作方式）"
    }, [
      { title: "VBA / Excel 自动化", desc: "报表一键生成、数据清洗、模板化输出、可交接。", tags: ["Excel", "VBA", "Automation"] },
      { title: "Power Automate 流程", desc: "审批流、提醒、Teams/SharePoint 集成、流程可视化。", tags: ["Power Platform", "M365", "Workflow"] },
      { title: "Python 数据处理", desc: "ETL、定时报表、脚本化数据处理、接口抓取。", tags: ["Python", "Pandas", "ETL"] }
    ],

    searchPlaceholder: "搜索工具...",
    buttons: { langTo: "English", theme: "切换主题", author: "作者信息" },
    author: { title: "关于作者", text: "嗨，这里是 Ryan。你可以在 about 页面补充更完整的经历、技能、项目与联系方式。" },

    toolsText: {
      excel_ai: {
        title: "AI Excel 处理工具",
        desc: "上传 Excel 或输入需求，让 AI 帮你清洗、处理数据。",
        linkText: "打开工具 🚀"
      },
      excel_cleanup: {
        title: "Excel 清洗脚本（示例）",
        desc: "一个用于批量清洗 Excel 的脚本项目（当前未开放）。",
        linkText: "查看代码 →"
      },
      batch_copier: {
        title: "批量复制/改名工具",
        desc: "用 Python/Streamlit 做的批处理小工具。",
        linkText: "打开工具 🚀"
      },
      order_tracking: {
        title: "订单跟踪面板",
        desc: "输入订单信息，快速查看进度（演示）。",
        linkText: "打开页面 →"
      },
      smartwear26: {
        title: "SmartWear 26 介绍页",
        desc: "项目展示/产品说明页面（演示）。",
        linkText: "查看页面 →"
      }
    }
  },

  en: {
    htmlLang: "en",
    brand: "Ryan • Automation",
    pageTitle: "My Tool Hub",
    nav: { tools: "Tools", about: "About", contact: "Contact" },

    hero: {
      eyebrow: "Automation / VBA / Power Automate / Python",
      headline: ["Automate repetitive work,", "make workflows stable & fast."],
      sub: "I build automation with VBA, Power Automate and Python, and ship lightweight web tools when needed. This is the entry point to my tools and portfolio.",
      ctaPrimary: "View tools & work",
      ctaSecondary: "Hire / Contact",
      badges: [
        { kpi: "Excel / VBA Automation", label: "Reports, templates, one-click tools" },
        { kpi: "Power Automate Workflows", label: "Approvals, alerts, M365 integrations" },
        { kpi: "Python Data Processing", label: "Cleaning, ETL, scheduled jobs" }
      ]
    },

    sections: {
      servicesTitle: "Services",
      servicesLink: "Read more →",
      toolsTitle: "Tools & Portfolio",
      toolsHint: "Click a card to open the tool or project page",
      aboutTitle: "About",
      aboutBody: "I use automation to eliminate manual and repetitive work—from Excel/VBA templates and reporting, to Power Automate flows, to Python scripts for data processing and delivery.",
      aboutCta: "Open my about page →",
      contactTitle: "Let’s connect",
      contactBody: "If you want to automate repetitive work or need a small data/web tool, I can help you ship quickly.",
      contactNote: "You can reach out via email/WeChat first. If you want a form, I can wire it to a Cloudflare backend."
    },

    aboutPage: {
      title: "About",
      introTitle: "One-line intro",
      introHint: "(Write: who you are + what you do + the outcome you deliver)",
      skillsTitle: "Skills & stack",
      skillsHint: "(Example: VBA/Excel, Power Automate, Python, HTML/CSS, Power BI, etc.)",
      highlightsTitle: "Highlights",
      highlightsHint: "(Example: hours saved, errors reduced, workflows automated)",
      journeyTitle: "Journey",
      journeyHint: "(A simple timeline: start → projects → growth)",
      servicesTitle: "What I can take on",
      servicesHint: "(Be explicit about deliverables and scope)",
      contactTitle: "Contact",
      contactHint: "(Email/WeChat/availability/how you work)"
    }, [
      { title: "VBA / Excel Automation", desc: "One-click reporting, data cleaning, templated outputs, handover-ready.", tags: ["Excel", "VBA", "Automation"] },
      { title: "Power Automate", desc: "Approvals, reminders, Teams/SharePoint integrations, visible flows.", tags: ["Power Platform", "M365", "Workflow"] },
      { title: "Python Data", desc: "ETL, scheduled reports, scriptable pipelines, API ingestion.", tags: ["Python", "Pandas", "ETL"] }
    ],

    searchPlaceholder: "Search tools...",
    buttons: { langTo: "中文", theme: "Toggle theme", author: "Author" },
    author: { title: "About the author", text: "Hi, I'm Ryan. You can add a fuller bio, skills, projects and contact details on the About page." },

    toolsText: {
      excel_ai: {
        title: "AI Excel Helper",
        desc: "Upload an Excel file or describe your task, and let AI help clean & process data.",
        linkText: "Open tool 🚀"
      },
      excel_cleanup: {
        title: "Excel Cleanup Script (sample)",
        desc: "A batch Excel cleanup script project (not public yet).",
        linkText: "View code →"
      },
      batch_copier: {
        title: "Batch Copy/Rename Tool",
        desc: "A small batch-processing utility built with Python/Streamlit.",
        linkText: "Open tool 🚀"
      },
      order_tracking: {
        title: "Order Tracking Panel",
        desc: "Enter order info and view status quickly (demo).",
        linkText: "Open page →"
      },
      smartwear26: {
        title: "SmartWear 26 Page",
        desc: "A project/product showcase page (demo).",
        linkText: "View page →"
      }
    }
  }
};

/*****************************************************************
 * C) State + storage
 *****************************************************************/
const LS_KEYS = { lang: "ryan_toolhub_lang", theme: "ryan_toolhub_theme" };
let currentLang = localStorage.getItem(LS_KEYS.lang) || "cn";

/*****************************************************************
 * Helpers
 *****************************************************************/
function $(id){ return document.getElementById(id); }
function safeSetText(id, text){ const el=$(id); if(el) el.textContent=text; }
function safeSetHTML(id, html){ const el=$(id); if(el) el.innerHTML=html; }

function tTool(id){
  const dict = i18n[currentLang];
  return (dict.toolsText && dict.toolsText[id]) ? dict.toolsText[id] : { title:id, desc:"", linkText:"Open" };
}

/*****************************************************************
 * Render tools (clickable card)
 *****************************************************************/
function renderTools(){
  const container = $("toolsContainer");
  if(!container) return;

  container.innerHTML = "";

  toolsBase.forEach(base => {
    const text = tTool(base.id);

    const card = document.createElement("a");
    card.className = "tool-card";
    card.dataset.id = base.id;

    // Link behavior
    const isExternal = /^https?:\/\//i.test(base.href);
    card.href = base.enabled ? base.href : "#";
    if(isExternal) { card.target = "_blank"; card.rel = "noreferrer"; }
    if(!base.enabled){
      card.classList.add("disabled");
      card.setAttribute("aria-disabled", "true");
    }

    card.innerHTML = `
      <div class="tool-card__head">
        <div class="tool-icon" aria-hidden="true">${base.icon}</div>
        <div class="tool-title">${text.title}</div>
      </div>
      <div class="tool-desc">${text.desc}</div>
      <div class="tool-link">${text.linkText}</div>
    `;

    // Disabled click guard
    card.addEventListener("click", (e)=>{
      if(!base.enabled){
        e.preventDefault();
        alert(currentLang === "cn" ? "该工具暂未开放。" : "This tool is not available yet.");
      }
    });

    container.appendChild(card);
  });
}

/*****************************************************************
 * Filter tools
 *****************************************************************/
function filterTools(){
  const input = $("searchInput");
  if(!input) return;

  const query = input.value.trim().toLowerCase();
  document.querySelectorAll(".tool-card").forEach(card=>{
    const id = card.dataset.id;
    const t = tTool(id);
    const hay = (t.title + " " + t.desc).toLowerCase();
    card.style.display = hay.includes(query) ? "" : "none";
  });
}

/*****************************************************************
 * Render services from i18n (so they translate)
 *****************************************************************/
function renderServices(){
  const container = $("servicesGrid");
  if(!container) return;

  const dict = i18n[currentLang];
  container.innerHTML = dict.services.map(s => `
    <article class="service-card">
      <div class="service-illus" aria-hidden="true"></div>
      <h3 class="service-title">${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
      <div class="tags">${s.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    </article>
  `).join("");
}

/*****************************************************************
 * Hero badges
 *****************************************************************/
function renderHeroBadges(){
  const wrap = $("heroBadges");
  if(!wrap) return;

  const dict=i18n[currentLang];
  wrap.innerHTML = dict.hero.badges.map(b=>`
    <div class="badge">
      <div class="badge__kpi">${b.kpi}</div>
      <div class="badge__label">${b.label}</div>
    </div>
  `).join("");
}

/*****************************************************************
 * Language apply
 *****************************************************************/
function applyLanguage(){
  const dict = i18n[currentLang];

  document.documentElement.lang = dict.htmlLang;

  safeSetText("brandText", dict.brand);
  safeSetText("pageTitle", dict.pageTitle);

  // Nav
  safeSetText("navTools", dict.nav.tools);
  safeSetText("navAbout", dict.nav.about);
  safeSetText("navContact", dict.nav.contact);

  // Hero
  safeSetText("heroEyebrow", dict.hero.eyebrow);
  safeSetHTML("heroHeadline", dict.hero.headline.map(l=>`<span>${l}</span>`).join("<br/>"));
  safeSetText("heroSub", dict.hero.sub);
  safeSetText("ctaPrimary", dict.hero.ctaPrimary);
  safeSetText("ctaSecondary", dict.hero.ctaSecondary);

  // Sections
  safeSetText("servicesTitle", dict.sections.servicesTitle);
  safeSetText("servicesLink", dict.sections.servicesLink);
  safeSetText("toolsTitle", dict.sections.toolsTitle);
  safeSetText("toolsHint", dict.sections.toolsHint);
  safeSetText("toolsHint2", dict.sections.toolsHint);
  safeSetText("aboutTitle", dict.sections.aboutTitle);
  safeSetText("aboutBody", dict.sections.aboutBody);
  safeSetText("aboutCta", dict.sections.aboutCta);
  safeSetText("aboutCtaBtn", dict.sections.aboutCta);
  safeSetText("contactTitle", dict.sections.contactTitle);
  safeSetText("contactBody", dict.sections.contactBody);
  safeSetText("contactNote", dict.sections.contactNote);

  // About page (optional)
  safeSetText("aboutPageTitle", dict.aboutPage?.title);
  safeSetText("aboutIntroTitle", dict.aboutPage?.introTitle);
  safeSetText("aboutIntroHint", dict.aboutPage?.introHint);
  safeSetText("aboutSkillsTitle", dict.aboutPage?.skillsTitle);
  safeSetText("aboutSkillsHint", dict.aboutPage?.skillsHint);
  safeSetText("aboutHighlightsTitle", dict.aboutPage?.highlightsTitle);
  safeSetText("aboutHighlightsHint", dict.aboutPage?.highlightsHint);
  safeSetText("aboutJourneyTitle", dict.aboutPage?.journeyTitle);
  safeSetText("aboutJourneyHint", dict.aboutPage?.journeyHint);
  safeSetText("aboutServicesTitle", dict.aboutPage?.servicesTitle);
  safeSetText("aboutServicesHint", dict.aboutPage?.servicesHint);
  safeSetText("aboutContactTitle", dict.aboutPage?.contactTitle);
  safeSetText("aboutContactHint", dict.aboutPage?.contactHint);

  // Search & buttons
  const search = $("searchInput");
  if(search) search.placeholder = dict.searchPlaceholder;

  safeSetText("langToggleBtn", dict.buttons.langTo);
  safeSetText("themeToggleBtn", dict.buttons.theme);
  safeSetText("authorBtn", dict.buttons.author);
  safeSetText("authorTitle", dict.author.title);
  safeSetText("authorText", dict.author.text);

  renderServices();
  renderHeroBadges();
  renderTools();
  filterTools();

  localStorage.setItem(LS_KEYS.lang, currentLang);
}

/*****************************************************************
 * Theme
 *****************************************************************/
function applyTheme(){
  const saved = localStorage.getItem(LS_KEYS.theme) || "dark";
  document.body.classList.toggle("light-mode", saved === "light");
}
function toggleTheme(){
  const isLight = document.body.classList.contains("light-mode");
  localStorage.setItem(LS_KEYS.theme, isLight ? "dark" : "light");
  applyTheme();
}

/*****************************************************************
 * Author modal
 *****************************************************************/
function openAuthor(){
  const m = $("authorModal");
  if(m) m.classList.add("open");
}
function closeAuthor(){
  const m = $("authorModal");
  if(m) m.classList.remove("open");
}

/*****************************************************************
 * Boot
 *****************************************************************/
document.addEventListener("DOMContentLoaded", ()=>{
  applyTheme();

  const langBtn = $("langToggleBtn");
  if(langBtn){
    langBtn.addEventListener("click", ()=>{
      currentLang = (currentLang === "cn") ? "en" : "cn";
      applyLanguage();
    });
  }

  const themeBtn = $("themeToggleBtn");
  if(themeBtn) themeBtn.addEventListener("click", toggleTheme);

  const authorBtn = $("authorBtn");
  if(authorBtn) authorBtn.addEventListener("click", openAuthor);

  const authorClose = $("authorClose");
  if(authorClose) authorClose.addEventListener("click", closeAuthor);

  const authorModal = $("authorModal");
  if(authorModal){
    authorModal.addEventListener("click", (e)=>{
      if(e.target === authorModal) closeAuthor();
    });
    document.addEventListener("keydown", (e)=>{
      if(e.key === "Escape") closeAuthor();
    });
  }

  const search = $("searchInput");
  if(search) search.addEventListener("input", filterTools);

  applyLanguage();
});
