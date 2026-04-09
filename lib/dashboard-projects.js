const sharedDashboardContent = {
  order: {
    id: "UMR-01",
    title: "Umrao Cashmere",
    subtitle:
      "Editorial luxury website build covering brand storytelling, catalog, and commerce flows",
    status: "In Progress",
    progress: 84,
    currentStage: "Commerce wiring and final QA are running alongside content polish",
    latestUpdate:
      "The Umrao Cashmere codebase now includes the homepage, brand pages, sustainability, blog views, catalog, product detail, cart, search, and admin-facing routes. Remaining work is concentrated around final integration review and launch readiness.",
    nextStep: "Final integration review",
    eta: "April 18",
    remainingTime: "48 hours left",
    owner: "Editorial Precision Studio",
  },
  aiSummary: {
    title: "AI Summary",
    text:
      "The Umrao Cashmere project is already well advanced. The repository shows a broad page set for the editorial website, active commerce routes, structured product data, and Laravel controllers for products, blogs, brands, categories, inquiries, and auth. The main remaining work appears to be integration cleanup, launch checks, and final operational polish rather than large new feature construction.",
    highlights: [
      "Editorial and brand storytelling pages are already implemented across the site map",
      "Commerce surfaces exist for shop, product detail, cart, product search, and content routes",
      "Risk level: moderate-low, with most remaining risk concentrated in QA, content review, and deployment readiness",
    ],
  },
  projectLinks: [
    {
      label: "Primary codebase",
      type: "Build",
      href: "https://example.com/umrao-cashmere-codebase",
    },
    {
      label: "Launch checklist",
      type: "Ops",
      href: "https://example.com/umrao-cashmere-launch-checklist",
    },
  ],
  phases: [
    {
      id: "discovery",
      label: "Phase 1 - Brand Direction",
      status: "complete",
      stamp: "Completed from approved design direction",
      reason: "",
      summary:
        "The premium editorial direction, visual principles, and site positioning for Umrao Cashmere were established before build execution.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      steps: [
        {
          id: "received",
          label: "Brand brief aligned",
          stamp: "Completed",
          summary:
            "The luxury positioning, editorial visual language, and high-level site goals were aligned for the Umrao Cashmere experience.",
          clientDetails: [
            "Homepage tone and premium storytelling direction were defined.",
            "The project scope expanded beyond a simple landing page into a full branded website.",
            "Navigation requirements for content, commerce, and brand pages were established.",
          ],
          internalDetails: [
            "Design direction matches the documented editorial guidance in the Umrao repository.",
            "The project was framed as a high-end fashion and heritage storytelling build.",
          ],
          attachments: [{ label: "Approved brief", type: "PDF" }],
        },
        {
          id: "discussion",
          label: "Information architecture",
          stamp: "Completed",
          summary:
            "The route structure now confirms a multi-section experience including about, cashmere, craftsmanship, sustainability, blog, shop, and contact.",
          clientDetails: [
            "Core public pages were mapped around storytelling and product discovery.",
            "Multiple about and craftsmanship variants were explored in code.",
            "The project supports both brand presentation and commerce flows.",
          ],
          internalDetails: [
            "Public routes and content paths are already implemented in Laravel/Inertia routing.",
            "The page inventory provides a strong basis for launch readiness review.",
          ],
          attachments: [{ label: "Requirements summary", type: "DOC" }],
        },
      ],
    },
    {
      id: "design",
      label: "Phase 2 - Editorial Design System",
      status: "complete",
      stamp: "Implemented in live page components",
      reason: "",
      summary:
        "The homepage and supporting sections already reflect a premium editorial visual system with motion, imagery, and high-contrast typography.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      steps: [
        {
          id: "design-approved",
          label: "Design system applied",
          stamp: "Completed",
          summary:
            "The codebase includes a dedicated design guideline and page implementations that follow the established Umrao editorial style.",
          clientDetails: [
            "The homepage uses parallax, animated headings, and editorial imagery.",
            "Luxury styling is consistent across hero, story, and collection sections.",
            "Supporting content pages inherit the same brand feel.",
          ],
          internalDetails: [
            "The repository contains explicit design guidance for typography, whitespace, and motion.",
            "Reusable page patterns are already present across landing and sustainability sections.",
          ],
          attachments: [
            {
              label: "Homepage visual system",
              type: "PNG",
              src: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
            },
            {
              label: "Editorial mobile direction",
              type: "PNG",
              src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
            },
          ],
        },
      ],
    },
    {
      id: "build",
      label: "Phase 3 - Content And Commerce Build",
      status: "current",
      stamp: "Core routes and pages are present in the repository",
      reason:
        "Most of the site is implemented, but the project still needs final content review, integration checks, and confirmation that all commerce flows are production-ready.",
      summary:
        "Umrao Cashmere already has broad frontend coverage including the homepage, about variants, cashmere, craftsmanship, experience center, sustainability, blogs, product list, product detail, and cart.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      steps: [
        {
          id: "development",
          label: "Frontend build in place",
          stamp: "Implemented",
          summary:
            "The page inventory and route definitions show the branded website experience has been built across content and commerce sections.",
          clientDetails: [
            "Public pages exist for homepage, about, craftsmanship, cashmere, sustainability, blog, shop, and contact.",
            "Commerce views include product listing, product detail, cart, and product search endpoints.",
            "The site structure already supports a full branded browsing journey.",
          ],
          internalDetails: [
            "Laravel routes and Inertia pages cover the major frontend surfaces.",
            "Structured product data and dedicated controllers exist for products, blogs, categories, and brands.",
            "The main remaining task is validating wiring quality rather than building large missing sections.",
          ],
          attachments: [{ label: "Sprint notes", type: "DOC" }],
        },
        {
          id: "content-review",
          label: "Content and catalog review",
          stamp: "Active before launch",
          summary:
            "Product copy, editorial messaging, and route-to-content consistency need a final pass before handoff.",
          clientDetails: [
            "Brand language is already strong, but final copy needs a launch-level review.",
            "Product and page metadata should be validated against the final content plan.",
          ],
          internalDetails: [
            "Some route naming and page variants suggest there are still internal alternatives to consolidate.",
            "Catalog and editorial assets should be checked for production consistency.",
          ],
          attachments: [{ label: "Review checklist", type: "DOC" }],
        },
      ],
    },
    {
      id: "delivery",
      label: "Phase 4 - QA And Launch Operations",
      status: "current",
      stamp: "Launch prep underway",
      reason:
        "The repo is feature-rich and clean, but that does not by itself prove production readiness. QA, admin validation, and deployment preparation remain the final gate.",
      summary:
        "Backend surfaces exist for authentication, dashboard access, inquiries, and product or blog controllers, so the final phase is to verify those flows and prepare the launch package.",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      steps: [
        {
          id: "testing",
          label: "QA and regression review",
          stamp: "In progress",
          summary:
            "The implemented public routes and commerce flows need end-to-end validation across navigation, content, and interactive states.",
          clientDetails: [
            "Desktop and mobile presentation should be reviewed across core brand pages.",
            "Shop, product detail, and cart behavior should be checked before release.",
          ],
          internalDetails: [
            "Regression should cover route integrity, page variants, search, and inquiry handling.",
            "Any unfinished wiring between static content and backend-managed data should be resolved here.",
          ],
          attachments: [
            {
              label: "QA checklist",
              type: "DOC",
            },
            {
              label: "Completed screens",
              type: "PNG",
              src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
            },
          ],
        },
        {
          id: "deployment",
          label: "Launch and handoff",
          stamp: "Queued after QA signoff",
          summary:
            "Once QA closes, the final deployment package and operating notes can be prepared for release.",
          clientDetails: [
            "Final launch timing will depend on QA closure and operational approval.",
            "The client handoff should include route map, content ownership, and support notes.",
          ],
          internalDetails: [
            "Production configuration, smoke testing, and content freeze are the remaining launch steps.",
          ],
          attachments: [{ label: "Launch runbook", type: "PDF" }],
        },
      ],
    },
  ],
  quickLinks: [
    { id: "gantt", label: "Gantt Chart" },
    { id: "summary", label: "AI Summary" },
    { id: "timeline", label: "Timeline" },
    { id: "details", label: "Step Details" },
    { id: "contact", label: "Contact" },
  ],
  ganttMonths: [
    { id: "apr", label: "Apr" },
    { id: "may", label: "May" },
    { id: "jun", label: "Jun" },
    { id: "jul", label: "Jul" },
  ],
  ganttTracks: [
    {
      id: "brand",
      label: "Brand",
      start: 0,
      span: 17,
      progress: 100,
      status: "complete",
    },
    {
      id: "design",
      label: "Design",
      start: 10,
      span: 20,
      progress: 100,
      status: "complete",
    },
    {
      id: "content",
      label: "Content",
      start: 24,
      span: 28,
      progress: 92,
      status: "current",
    },
    {
      id: "commerce",
      label: "Commerce",
      start: 34,
      span: 25,
      progress: 78,
      status: "current",
    },
    {
      id: "launch",
      label: "Launch",
      start: 63,
      span: 18,
      progress: 0,
      status: "upcoming",
    },
  ],
};

function createDashboardProject({ routeLabel, slug, overrides = {} }) {
  return {
    slug,
    routeLabel,
    ...sharedDashboardContent,
    ...overrides,
    order: {
      ...sharedDashboardContent.order,
      ...overrides.order,
    },
    aiSummary: {
      ...sharedDashboardContent.aiSummary,
      ...overrides.aiSummary,
    },
    projectLinks: overrides.projectLinks ?? sharedDashboardContent.projectLinks,
    phases: overrides.phases ?? sharedDashboardContent.phases,
    quickLinks: overrides.quickLinks ?? sharedDashboardContent.quickLinks,
    ganttMonths: overrides.ganttMonths ?? sharedDashboardContent.ganttMonths,
    ganttTracks: overrides.ganttTracks ?? sharedDashboardContent.ganttTracks,
  };
}

const umraoCashmereProject = createDashboardProject({
  slug: "umraocashmere",
  routeLabel: "Umrao Cashmere",
  overrides: {
    defaultStepId: "integration-rollout",
    order: {
      id: "UMR-2026-01",
      title: "Umrao Cashmere",
      subtitle:
        "Laravel + Inertia JS + Filament build covering editorial storytelling, catalog experience, inquiry flow, and CMS operations.",
      status: "Integration And QA",
      progress: 76,
      currentStage:
        "Core UI, backend foundation, and frontend page delivery are in place; the main remaining work is integration, analytics, messaging setup, QA, handover, and final QoL polish.",
      latestUpdate: "Started 14 Jan 2026 · Deadline 25 Mar 2026 · Scope A tracked against a 10-12 week delivery window",
      nextStep: "Close integration and pending service setup",
      nextStepNote:
        "WhatsApp and social integrations, analytics tooling, and final content setup should be closed before full QA signoff.",
      eta: "25 March 2026",
      remainingTime: "10-12 week scope window from finalized UI design",
      owner: "Editorial Precision Studio",
      ownerNote:
        "Delivery is split across UI, frontend, backend, integration, QA, and handover workstreams for easier review.",
    },
    aiSummary: {
      title: "Project Summary",
      text:
        "Scope A for Umrao Cashmere covers the brand site, commerce inquiry journey, backend management sections, CMS setup, launch content, and post-launch support. Work began on January 14, 2026 using Laravel, Inertia JS, and Filament. Homepage, About Us, Craftsmanship, and Cashmere UI moved early in the schedule, backend management sections were handled at the start by the backend team, and the remaining frontend pages were completed around mid-March. The open items now center on integrations, analytics, content setup, QA, and handover.",
      highlights: [
        "Start date: 14 January 2026. Contract deadline: 25 March 2026.",
        "Technical stack: Laravel, Inertia JS, and Filament.",
        "Rough completion estimate: about 75-80%, with integrations, QA, and QoL refinements still pending.",
      ],
    },
    projectLinks: [
      {
        label: "Laravel staging",
        type: "Staging",
        href: "https://umraocashmere.infinitydevelopmententerprise.com/",
      },
      {
        label: "Shop staging",
        type: "Staging",
        href: "https://umraocashmere-shop.infinitydevelopmententerprise.com/",
      },
    ],
    phases: [
      {
        id: "ui-development",
        label: "UI Development",
        status: "complete",
        stamp: "January to April 2026",
        reason: "",
        summary:
          "The visual direction started in January and continued through April as the brand-led pages and review-driven interface refinements evolved across the delivery cycle.",
        image:
          "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
        steps: [
          {
            id: "ui-core-pages",
            label: "Core UI pages completed",
            stamp: "Completed",
            summary:
              "Homepage, About Us, Craftsmanship, and Cashmere UI were completed in the earlier part of the project window.",
            clientDetails: [
              "The foundational branded pages were delivered first so the visual direction could be locked early.",
              "These sections established the tone, layout style, and design rhythm for the broader website.",
              "Review feedback from these pages feeds into the final integration and polish cycle.",
            ],
            internalDetails: [
              "Early UI completion reduced risk for downstream frontend implementation.",
              "The completed base pages now serve as the reference pattern for remaining refinements.",
            ],
            attachments: [{ label: "UI review set", type: "PNG" }],
          },
        ],
      },
      {
        id: "backend-development",
        label: "Backend Development",
        status: "complete",
        stamp: "Started at the beginning of the project",
        reason: "",
        summary:
          "The backend team handled the administration and operations foundation in the initial part of the schedule so content and inquiry workflows could support the frontend.",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        steps: [
          {
            id: "backend-admin-modules",
            label: "Admin and CMS modules delivered",
            stamp: "Completed",
            summary:
              "Backend User Management, Product Management, Sales or Inquiry handling, and CMS backend were implemented early by the backend team.",
            clientDetails: [
              "The operational backend scope was completed before the full frontend surface was closed.",
              "This created the foundation for product, inquiry, and content workflows.",
            ],
            internalDetails: [
              "Laravel and Filament were used to support admin workflows and management views.",
              "Backend readiness reduced the risk of late-stage data and CMS blockers.",
            ],
            attachments: [{ label: "Backend module checklist", type: "DOC" }],
          },
        ],
      },
      {
        id: "frontend-development",
        label: "Frontend Development",
        status: "complete",
        stamp: "Completed around mid-March 2026",
        reason: "",
        summary:
          "The remaining public-facing scope was built through the later delivery window and reached working frontend completion around the middle of March.",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        steps: [
          {
            id: "frontend-remaining-pages",
            label: "Remaining pages delivered",
            stamp: "Completed",
            summary:
              "Experience Center, Product Catalog, Product Detail, Inquiry Cart and Request for Quote flow, Media or Press, Insights or Blogs, and Support or Contact were completed in the frontend stream.",
            clientDetails: [
              "The broader page inventory was closed in the later phase after the early brand pages were already in place.",
              "The public journey now covers discovery, inquiry, media, and support surfaces.",
            ],
            internalDetails: [
              "Frontend completion around mid-March aligned the final page set with the agreed Scope A list.",
              "The next risk area shifted from page creation to integration and quality control.",
            ],
            attachments: [{ label: "Frontend delivery notes", type: "DOC" }],
          },
        ],
      },
      {
        id: "integration",
        label: "Integration",
        status: "current",
        stamp: "Final delivery phase",
        reason:
          "The remaining work is centered on service integration and launch-readiness items rather than large new page builds.",
        summary:
          "The core site is built, but the final integrations and setup tasks still need implementation before the project can be treated as fully complete.",
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
        steps: [
          {
            id: "integration-rollout",
            label: "Pending integrations and setup",
            stamp: "In progress",
            summary:
              "WhatsApp and social media integration, Messenger setup, Google Analytics, Google Search Console, other analytical tools, and launch content work are the main remaining implementation items.",
            clientDetails: [
              "The largest unfinished items are external integrations and launch setup rather than core page development.",
              "Once these services are connected, the project can move cleanly into final QA and handover.",
            ],
            internalDetails: [
              "Integration should cover WhatsApp, Messenger, social entry points, and analytics instrumentation.",
              "Content writing for initial launch setup also needs to be finalized in this phase.",
            ],
            attachments: [{ label: "Integration checklist", type: "DOC" }],
          },
        ],
      },
      {
        id: "qa-testing",
        label: "QA Testing",
        status: "current",
        stamp: "Runs after integration closure",
        reason:
          "The public journey, inquiry flows, admin modules, and integrations still need coordinated validation before release and handover.",
        summary:
          "QA is the final control layer to confirm that UI, frontend, backend, and integrations behave correctly across the full project scope.",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        steps: [
          {
            id: "qa-regression",
            label: "Regression and cross-flow validation",
            stamp: "In progress",
            summary:
              "Testing should cover page integrity, inquiry behavior, backend management sections, content accuracy, and all new integrations before handover.",
            clientDetails: [
              "The QA pass confirms the finished experience across both content pages and inquiry-led workflows.",
              "This is the point where final issues should be identified before delivery closure.",
            ],
            internalDetails: [
              "Regression should include Homepage, About Us, Craftsmanship, Cashmere, catalog pages, detail pages, inquiry flow, blogs, media, and support routes.",
              "CMS and admin-side sections also need validation alongside frontend journeys.",
            ],
            attachments: [{ label: "QA matrix", type: "DOC" }],
          },
        ],
      },
      {
        id: "handover",
        label: "Handover",
        status: "upcoming",
        stamp: "Final step after QA signoff",
        reason:
          "Handover depends on integrated services being completed and the QA pass being closed without blocking issues.",
        summary:
          "The final handover should package the finished website, operational notes, and the agreed post-launch support period.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        steps: [
          {
            id: "handover-closeout",
            label: "Delivery and support handoff",
            stamp: "Queued",
            summary:
              "Handover will include final delivery closure, CMS and operations notes, and the agreed two months of free bug-fix support after launch.",
            clientDetails: [
              "The project handoff should happen only after integration and QA are signed off.",
              "The post-launch support window includes two months of free bug fixes.",
            ],
            internalDetails: [
              "Handover should bundle route ownership, CMS guidance, support notes, and release confirmation.",
            ],
            attachments: [{ label: "Handover checklist", type: "PDF" }],
          },
        ],
      },
    ],
    ganttMonths: [
      { id: "jan", label: "Jan" },
      { id: "feb", label: "Feb" },
      { id: "mar", label: "Mar" },
    ],
    ganttTracks: [
      {
        id: "ui",
        label: "UI Development",
        start: 0,
        span: 42,
        progress: 100,
        status: "complete",
      },
      {
        id: "backend",
        label: "Backend Development",
        start: 0,
        span: 30,
        progress: 100,
        status: "complete",
      },
      {
        id: "frontend",
        label: "Frontend Development",
        start: 32,
        span: 50,
        progress: 80,
        status: "current",
      },
      {
        id: "integration",
        label: "Integration",
        start: 76,
        span: 20,
        progress: 55,
        status: "current",
      },
      {
        id: "qa",
        label: "QA Testing",
        start: 86,
        span: 12,
        progress: 25,
        status: "current",
      },
      {
        id: "handover",
        label: "Handover",
        start: 97,
        span: 3,
        progress: 0,
        status: "upcoming",
      },
    ],
  },
});

export const dashboardProjects = {
  umraocashmere: umraoCashmereProject,
  "setu-solutions": createDashboardProject({
    slug: "setu-solutions",
    routeLabel: "Setu Solutions",
    overrides: {
      defaultStepId: "social-media-setup",
      order: {
        id: "SETU-CIB-2026-01",
        title: "Setu Solutions",
        subtitle:
          "Corporate identity branding and website delivery tracker covering brand discovery, identity assets, static collateral, social media setup, UI/UX, and development progress.",
        status: "Branding And Website In Progress",
        progress: 78,
        currentStage:
          "Corporate identity foundations and core website pages are complete; social media profile setup and the website insights section remain active.",
        latestUpdate:
          "Brand discovery ran from February 16, 2026 to February 20, 2026. Corporate identity guidelines closed by March 2, 2026. Static branding assets are mostly complete, social media setup is still in progress, and website development that started in late February 2026 remains ongoing.",
        nextStep: "Close social setup and complete insights page",
        nextStepNote:
          "The main unfinished items are social media profile setup, remaining collateral requests, and the website insights page before full closeout.",
        eta: "April 2026",
        remainingTime: "Ongoing until pending setup items are signed off",
        owner: "Editorial Precision Studio",
        ownerNote:
          "This dashboard combines the Corporate Identity Branding service and the parallel website workstream for client review.",
      },
      aiSummary: {
        title: "Project Summary",
        text:
          "Setu Solutions is being tracked across two linked workstreams: Corporate Identity Branding and website delivery. The branding side covered voice and visual direction, identity guidelines, logo refinement, logo animation, static collateral, and social setup support. The website side covered UI/UX design in January 2026 and development from late February 2026 onward. Most core deliverables are complete, with social profile setup and the insights page still open.",
        highlights: [
          "Phase 1 brand discovery completed from February 16, 2026 to February 20, 2026.",
          "Corporate identity guideline preparation completed by March 2, 2026.",
          "Website UI/UX and development remain ongoing, with most major pages already completed and the insights page still open.",
        ],
      },
      projectLinks: [
        {
          label: "CIB workspace",
          type: "Reference",
          href: "https://infinitydigital-my.sharepoint.com/personal/saswat_gautam_infinitydigitalagency_com_np/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsaswat%5Fgautam%5Finfinitydigitalagency%5Fcom%5Fnp%2FDocuments%2FCorporate%20Identity%20Branding%20%28CIB%29%2FSETU&ga=1",
        },
        {
          label: "Website staging",
          type: "Staging",
          href: "https://setusoln.infinitydevelopmententerprise.com/",
        },
        {
          label: "Figma design",
          type: "Design",
          href: "https://www.figma.com/design/KWXcOgv0glNGdnLASVWwKH/SETU-Solutions?node-id=3-446&t=Fq5eeglZilcOO0wQ-1",
        },
      ],
      phases: [
        {
          id: "brand-discovery",
          label: "Phase 1 - Brand Discovery",
          status: "complete",
          stamp: "February 16, 2026 to February 20, 2026",
          reason: "",
          summary:
            "The initial discovery phase established the business context, brand voice, story, slogan direction, messaging, and the foundation for the corporate identity system.",
          image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
          steps: [
            {
              id: "discovery-alignment",
              label: "Business, industry, and values review completed",
              stamp: "Completed",
              summary:
                "Review, analysis, and discussions on the business, industry, and values were completed to define the strategic direction of the brand.",
              clientDetails: [
                "Business context and market positioning were reviewed before design execution.",
                "The tone of voice, story, slogan direction, and key marketing messages were shaped in this phase.",
                "Content direction was aligned around how the brand should present itself.",
              ],
              internalDetails: [
                "This phase set the strategic base for later identity guideline work.",
                "Discovery outputs reduced ambiguity for both branding and website execution.",
              ],
              attachments: [{ label: "Discovery notes", type: "DOC" }],
            },
          ],
        },
        {
          id: "identity-guideline",
          label: "Phase 2 - Corporate Identity Guideline",
          status: "complete",
          stamp: "February 20, 2026 to March 2, 2026",
          reason: "",
          summary:
            "The corporate identity guideline was prepared and completed, translating the approved voice and visual direction into a structured brand system.",
          image:
            "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
          steps: [
            {
              id: "guideline-preparation",
              label: "Corporate identity guideline prepared",
              stamp: "Completed",
              summary:
                "The identity guideline package was completed, covering voice and visual branding direction for consistent future use.",
              clientDetails: [
                "Logo optimization and refinement were part of the identity workstream.",
                "The branding kit and guidelines were prepared as the core reference package.",
                "The direction now supports later collateral and digital rollout.",
              ],
              internalDetails: [
                "This phase acts as the source of truth for later brand asset production.",
                "The approved guideline reduced rework in collateral and website styling.",
              ],
              attachments: [{ label: "Identity guideline", type: "PDF" }],
            },
          ],
        },
        {
          id: "static-designs",
          label: "Phase 3 - Static Designs And Social Media Setup",
          status: "current",
          stamp: "March 2026 onward",
          reason:
            "Most static branding outputs are completed, but social media profile setup is still in progress and additional collateral requests may continue as ongoing work.",
          summary:
            "Static collateral production is largely complete, including core print and motion items, while social media setup remains the main open branding task.",
          image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
          steps: [
            {
              id: "static-assets",
              label: "Static collateral and brand assets delivered",
              stamp: "Mostly completed",
              summary:
                "Letterhead, brochure, business card, email signature, and logo animation have been completed, alongside broader branding collateral design support.",
              clientDetails: [
                "Letterhead design is done.",
                "Email signature is done.",
                "Brochure and business card are done.",
                "Logo animation for the end screen is done.",
              ],
              internalDetails: [
                "This phase also covers collateral support for items such as app icon, badge, T-shirt, cup, tote bag, office space, pen, and signage as required.",
                "Remaining collateral outside the completed core set should be treated as ongoing requested work.",
              ],
              attachments: [{ label: "Collateral pack", type: "ZIP" }],
            },
            {
              id: "social-media-setup",
              label: "Social media profile setup in progress",
              stamp: "In progress",
              summary:
                "Social media setup designs are underway and remain the key unfinished item in the branding stream.",
              clientDetails: [
                "Profile setup work is active and not yet signed off.",
                "This remains the primary open item on the CIB side.",
              ],
              internalDetails: [
                "Consultations and meetings continue to support final rollout decisions.",
                "Any remaining social cover, profile, or branded setup graphics should close in this phase.",
              ],
              attachments: [{ label: "Social setup checklist", type: "DOC" }],
            },
          ],
        },
        {
          id: "website-ui-ux",
          label: "Phase 4 - Website UI And UX",
          status: "current",
          stamp: "February 2026 to April 2026",
          reason:
            "The core UI/UX page designs are completed, but the website workstream is still active overall and design review continues alongside development progress.",
          summary:
            "The website interface and user experience direction is established, with the main page designs completed and the overall stream still tracked as ongoing.",
          image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
          steps: [
            {
              id: "ui-pages",
              label: "Core website page designs completed",
              stamp: "Completed within ongoing phase",
              summary:
                "Homepage, About Us, Contact Us, Services and Industries, and inner page designs were all completed in the UI/UX phase.",
              clientDetails: [
                "Homepage design is done.",
                "About Us page design is done.",
                "Contact Us page design is done.",
                "Services and Industries page design is done, along with inner pages.",
              ],
              internalDetails: [
                "The UI foundation is complete even though the broader website stream remains active.",
                "Design review continues to support final implementation and closeout.",
              ],
              attachments: [{ label: "UI approval set", type: "PNG" }],
            },
          ],
        },
        {
          id: "website-development",
          label: "Phase 5 - Website Development",
          status: "current",
          stamp: "Started in late February 2026 and ongoing",
          reason:
            "Most major pages are already implemented, but the insights page is still ongoing and final closeout depends on finishing that remaining work.",
          summary:
            "Website development has covered the main public-facing pages, with the insights page remaining the principal open build item.",
          image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
          steps: [
            {
              id: "development-pages",
              label: "Primary website pages implemented",
              stamp: "Mostly completed",
              summary:
                "Homepage, About Us, Contact Us, Services and Industries, and the main inner pages are implemented in the development stream.",
              clientDetails: [
                "Homepage is done.",
                "About Us is done.",
                "Contact Us is done.",
                "Services and Industries and inner pages are done.",
              ],
              internalDetails: [
                "The main site structure is already built and aligned with the completed UI/UX phase.",
                "Development focus has shifted from core page creation to finishing the remaining open section.",
              ],
              attachments: [{ label: "Development notes", type: "DOC" }],
            },
            {
              id: "insights-page",
              label: "Insights page ongoing",
              stamp: "In progress",
              summary:
                "The insights page remains under development and is the main unfinished website deliverable.",
              clientDetails: [
                "This is the primary open item in the website build stream.",
                "Website closeout depends on this page and any final adjustments that follow.",
              ],
              internalDetails: [
                "This phase should also absorb any final content or styling refinements discovered during review.",
                "Completion of the insights section is the clearest remaining milestone for the website side.",
              ],
              attachments: [{ label: "Insights page tracker", type: "DOC" }],
            },
          ],
        },
      ],
      ganttMonths: [
        { id: "feb", label: "Feb" },
        { id: "mar", label: "Mar" },
        { id: "apr", label: "Apr" },
      ],
      ganttTracks: [
        {
          id: "ui-ux",
          label: "Website UI/UX",
          start: 0,
          span: 68,
          progress: 90,
          status: "current",
        },
        {
          id: "brand-discovery-track",
          label: "Brand Discovery",
          start: 14,
          span: 9,
          progress: 100,
          status: "complete",
        },
        {
          id: "identity-track",
          label: "Identity Guideline",
          start: 23,
          span: 18,
          progress: 100,
          status: "complete",
        },
        {
          id: "development-track",
          label: "Website Development",
          start: 38,
          span: 50,
          progress: 82,
          status: "current",
        },
        {
          id: "branding-assets-track",
          label: "Static Designs And SM",
          start: 42,
          span: 46,
          progress: 74,
          status: "current",
        },
      ],
    },
  }),
};

export const defaultDashboardProject = dashboardProjects.umraocashmere;

export function getDashboardProject(slug) {
  return dashboardProjects[slug] ?? null;
}

export function getDashboardProjectSlugs() {
  return Object.keys(dashboardProjects);
}
