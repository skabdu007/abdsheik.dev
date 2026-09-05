export const projectsData = [
  {
    id: 1,
    slug: "fashion-ecommerce-auction-platform",
    aliases: ["ecommerce-react"],
    year: "2026",
    title: "Fashion E-Commerce Platform with Auction Module",
    tagline: "Full-Stack MERN Architecture with Real-Time Bidding Engine & JWT RBAC",
    description: "Architected and built a scalable full-stack e-commerce application featuring real-time auction bidding, dynamic highest-bid validation, and role-based access control.",
    category: "MERN Stack",
    featured: true,
    image: "/assets/projects/ecommerce.svg",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "RESTful APIs",
      "Tailwind CSS"
    ],
    github: "https://github.com/skabdu007/abdsheik.dev",
    demo: "https://fashion-zeta-ten.vercel.app/",
    overview: "A flagship full-stack MERN application architected with end-to-end user lifecycle management, live auction bidding mechanics, and role-based access control (Admin / Vendor / User). Developed as a major postgraduate engineering capstone project.",
    problem: "Conventional e-commerce platforms lack real-time bidding synchronization, atomic highest-bid validation, and granular role permissions across admin, vendor, and customer dashboards.",
    solution: "Engineered modular Express.js REST API endpoints backed by normalized MongoDB schemas, JWT RBAC security, and an atomic highest-bid validation engine paired with a responsive React.js storefront.",
    features: [
      {
        title: "Role-Based Access Control (RBAC)",
        description: "Granular permission layers for Admin, Vendor, and Customer personas secured by cryptographic JWT tokens."
      },
      {
        title: "Real-Time Bidding Engine",
        description: "Atomic highest-bid validation logic preventing race conditions with interactive countdown auction timers."
      },
      {
        title: "Normalized MongoDB Schemas",
        description: "Optimized document collections for users, catalog products, live bids, and transaction order processing."
      },
      {
        title: "Modular REST API Endpoints",
        description: "Clean RESTful contracts for inventory management, user registration, bidding operations, and third-party integrations."
      }
    ],
    architecture: {
      flow: [
        "Client (React.js Single-Page Storefront & Bidding Interface)",
        "Routing (React Router DOM with Role-Based Route Guards)",
        "API Layer (Axios HTTP Client with Bearer Token Attachment)",
        "Backend Controller (Express.js REST Endpoints with Error Trapping)",
        "Security (JWT Token Signing & RBAC Middleware)",
        "Database (MongoDB / Mongoose ODM Schemas with Optimized Indexing)"
      ],
      description: "End-to-end full-stack MERN architecture where client actions communicate with Express REST API controllers, authenticated by JWT tokens and persisted in normalized MongoDB collections."
    },
    componentStructure: [
      "AuctionLobby.jsx - Live countdown and highest-bid broadcast component",
      "ProductGrid.jsx - Dynamic catalog container with facet sorting",
      "BidModal.jsx - Atomic bid placement form with real-time validation",
      "AdminPortal.jsx - Vendor and product inventory moderation console",
      "UserAuthContext.jsx - Centralized JWT token and session manager"
    ],
    apiIntegration: "Structured Axios HTTP client connecting to modular Express.js routes (`/api/auth`, `/api/products`, `/api/bids`, `/api/orders`) with bearer auth headers and unified JSON responses.",
    stateManagement: "Predictable state architecture utilizing React Context for user authentication, coupled with local state reducers for bidding timers and cart management.",
    challenges: [
      {
        problem: "Preventing race conditions where multiple users submit bids on an item concurrently.",
        resolution: "Constructed server-side atomic validation logic in MongoDB ensuring that every incoming bid strictly exceeds the highest verified bid recorded."
      },
      {
        problem: "Synchronizing auction countdown timers across varying client device system clocks.",
        resolution: "Calculated time remaining relative to server-issued UTC expiration timestamps rather than local device time."
      }
    ],
    results: [
      { metric: "2026", label: "Year Completed" },
      { metric: "<100ms", label: "Bid Validation Latency" },
      { metric: "100%", label: "MERN Stack Parity" },
      { metric: "Zero", label: "Concurrency Bidding Collisions" }
    ]
  },
  {
    id: 2,
    slug: "biopure-stp-web-application",
    year: "2026",
    title: "Biopure STP – Web Application Project",
    tagline: "Industrial Wastewater Monitoring Dashboard (Friendzion Technologies)",
    description: "Contributed to the development and enhancement of the Biopure STP web application using the MERN Stack, developing responsive interfaces and RESTful APIs.",
    category: "MERN Stack",
    featured: false,
    image: "/assets/projects/admin-dashboard.svg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "HTML5",
      "CSS3",
      "RESTful APIs"
    ],
    github: "https://github.com/skabdu007/abdsheik.dev",
    demo: "https://skabdu007.github.io/abdsheik.dev/",
    overview: "Commercial web application engineered for Biopure STP during internship at Friendzion Technologies. Provides live telemetry monitoring, wastewater treatment plant diagnostics, and dynamic data reporting.",
    problem: "Industrial monitoring systems often require manual data collation and lack real-time web dashboards for operating personnel.",
    solution: "Developed responsive and user-friendly interfaces using React.js and integrated frontend components with backend RESTful APIs and MongoDB-based data services.",
    features: [
      {
        title: "Responsive Telemetry Dashboard",
        description: "Clear visualization of sewage treatment plant sensor metrics and operational statuses."
      },
      {
        title: "RESTful API Integration",
        description: "Connected frontend React components with Node.js and Express services for real-time telemetry."
      },
      {
        title: "Reusable Component Hierarchy",
        description: "Standardized UI controls for form validation, status alerts, and tabular telemetry logs."
      },
      {
        title: "MongoDB Data Operations",
        description: "Structured document schemas for sensor readings, historical logs, and plant reports."
      }
    ],
    architecture: {
      flow: [
        "Frontend (React.js Responsive Industrial Portal)",
        "Backend (Node.js & Express RESTful API Services)",
        "Database (MongoDB Telemetry Collections)",
        "Version Control (Git & GitHub Collaborative Workflows)"
      ],
      description: "MERN stack industrial telemetry system streaming real-time sensor metrics to an accessible browser interface."
    },
    componentStructure: [
      "TelemetryBoard.jsx - High-level operational metrics display",
      "SensorStatusGrid.jsx - Real-time status badges and alerts",
      "ReportGenerator.jsx - Historical telemetry export workflow"
    ],
    apiIntegration: "Node.js REST endpoints feeding JSON telemetry data to Axios clients with automatic polling and error boundaries.",
    stateManagement: "React Hooks (`useState`, `useEffect`, `useCallback`) managing live telemetry streams and alert banners.",
    challenges: [
      {
        problem: "Rendering continuous real-time telemetry updates without browser frame drop.",
        resolution: "Memoized chart and grid components using React.memo to isolate high-frequency sensor updates."
      }
    ],
    results: [
      { metric: "2026", label: "Year Completed" },
      { metric: "MERN", label: "Technology Stack" },
      { metric: "35%", label: "Render Cycle Optimization" }
    ]
  },
  {
    id: 3,
    slug: "frametronix-global-web-application",
    year: "2026",
    title: "Frametronix Global – Web Application Project",
    tagline: "Corporate Engineering Portal & Product Matrix (Friendzion Technologies)",
    description: "Contributed to the development and enhancement of the Frametronix Global corporate web application using the MERN Stack, building responsive UI modules and API integrations.",
    category: "MERN Stack",
    featured: false,
    image: "/assets/projects/business-website.svg",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "RESTful APIs",
      "Git",
      "GitHub"
    ],
    github: "https://github.com/skabdu007/abdsheik.dev",
    demo: "https://skabdu007.github.io/abdsheik.dev/",
    overview: "Corporate web application engineered for Frametronix Global during internship at Friendzion Technologies. Delivers modular product portfolios, customer inquiry pipelines, and high-performance branding.",
    problem: "Global engineering enterprise required a responsive, fast-loading web application to display industrial specifications and route customer technical inquiries.",
    solution: "Developed responsive frontend modules using React.js and JavaScript, integrating backend RESTful APIs and MongoDB data operations for seamless inquiry processing.",
    features: [
      {
        title: "Modular Product Catalog",
        description: "Structured technical product matrices with download specifications and category sorting."
      },
      {
        title: "Dynamic Inquiry & Lead System",
        description: "Form validation, API integration, and email notification pipelines for international business leads."
      },
      {
        title: "Collaborative Git Workflow",
        description: "Active participation in team debugging, code reviews, testing, and Git version control."
      },
      {
        title: "Mobile-First Responsiveness",
        description: "Optimized layout delivering flawless performance on mobile devices and desktop workstations."
      }
    ],
    architecture: {
      flow: [
        "Presentation (React.js Corporate View Layer)",
        "Controller (Express.js Form & Product Routes)",
        "Storage (MongoDB Product & Lead Documents)",
        "Deployment (Production Web Build with Optimized Bundles)"
      ],
      description: "Full-stack MERN enterprise website connecting prospective clients with technical product catalogs and quotation pipelines."
    },
    componentStructure: [
      "ProductShowcase.jsx - Modular grid displaying engineering products",
      "InquiryModal.jsx - Validated customer quotation inquiry form",
      "CompanyTimeline.jsx - Interactive corporate heritage timeline"
    ],
    apiIntegration: "Express RESTful endpoints handling product queries, customer feedback, and validation payloads.",
    stateManagement: "Clean component state utilizing custom hooks for form validation and responsive drawer states.",
    challenges: [
      {
        problem: "Ensuring zero layout shifts across complex technical product specification tables on mobile devices.",
        resolution: "Constructed fluid CSS Grid layouts with responsive horizontal scroll wrappers."
      }
    ],
    results: [
      { metric: "2026", label: "Year Completed" },
      { metric: "100%", label: "Mobile Parity" },
      { metric: "Zero", label: "Broken Endpoints" }
    ]
  },
  {
    id: 4,
    slug: "modern-fullstack-portfolio",
    year: "2026",
    title: "Modern Full Stack Developer Portfolio",
    tagline: "Futuristic Developer Portfolio with Vite, Tailwind CSS & Framer Motion",
    description: "The complete personal portfolio website showcasing verified full stack MERN capabilities, interactive code editor, and instant access to CV, DOC, and PPT deliverables.",
    category: "Full Stack UI",
    featured: false,
    image: "/assets/projects/modern-portfolio.svg",
    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion"
    ],
    github: "https://github.com/skabdu007/abdsheik.dev",
    demo: "https://skabdu007.github.io/abdsheik.dev/",
    overview: "Engineered from scratch to showcase verified skills in full-stack MERN development, complete with an interactive code editor, dynamic project case studies, and instant downloads of official documentation and presentation slides.",
    problem: "Traditional portfolios rely on static templates that don't demonstrate real-world full-stack architecture or provide access to comprehensive academic and technical assets.",
    solution: "Designed a tailored dark-navy glassmorphism interface featuring interactive terminal tabs, responsive navigation, and embedded viewers for CV, DOC, and PPT assets.",
    features: [
      {
        title: "Deliverables Hub (CV, DOC & PPT)",
        description: "Direct download and embedded preview of candidate CV, 7.0 MB engineering report, and 6.6 MB defense deck."
      },
      {
        title: "Interactive Code Editor",
        description: "Interactive window showcasing React component code and Express/MongoDB backend API logic."
      },
      {
        title: "Dynamic Asset Resolution",
        description: "Seamless asset loading across both local development servers and GitHub Pages production environments."
      },
      {
        title: "Responsive Glass Aesthetics",
        description: "Dark navy palette (#050816) with subtle glowing accents and fluid micro-animations."
      }
    ],
    architecture: {
      flow: [
        "Page (Home / ProjectDetails / ProjectsArchive / 404)",
        "Components (Navbar, Hero, CodeWindow, About, Skills, Experience, Projects, DeliverablesHub, Education, Contact)",
        "Context (DocumentModalContext for PDF & Presentation Viewers)",
        "Build (Vite ESM Bundling & GitHub Pages CI/CD)"
      ],
      description: "Component-driven React single-page application with modular data separation and zero runtime bloat."
    },
    componentStructure: [
      "DeliverablesHub.jsx - Interactive cards for CV, DOC, and PPT with preview and download",
      "DocumentViewerModal.jsx - Embedded modal viewer for technical assets",
      "CodeWindow.jsx - Interactive syntax-highlighted code editor"
    ],
    apiIntegration: "Static asset resolvers, dynamic modal dispatchers, and clean client-side routing.",
    stateManagement: "React Context for global document viewer modals and local component state for filters and navigation.",
    challenges: [
      {
        problem: "Rendering large technical assets (7 MB PDF, 6.6 MB PPTX) reliably across various browser security settings.",
        resolution: "Engineered dual-action controls providing both embedded modal previews and direct new-window viewer links."
      }
    ],
    results: [
      { metric: "2026", label: "Year Completed" },
      { metric: "100/100", label: "Lighthouse Best Practices" },
      { metric: "<1.0s", label: "Initial Page Load" }
    ]
  },
  {
    id: 5,
    slug: "school-administration-management-system",
    year: "2024",
    title: "School Administration Management System",
    tagline: "Academic Portal with Session Authentication & Relational MySQL Schema",
    description: "Developed separate Admin and Student portals with session-based authentication, CRUD operations for records and attendance, and a relational MySQL database.",
    category: "Full Stack (PHP & MySQL)",
    featured: false,
    image: "/assets/projects/task-management.svg",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/skabdu007/abdsheik.dev",
    demo: "https://skabdu007.github.io/abdsheik.dev/",
    overview: "Academic administrative system developed as an undergraduate capstone project. Features secure multi-portal access for staff and students, centralized attendance tracking, and relational database records management.",
    problem: "Educational institutions require dependable, session-secured portals to track student attendance, academic marks, and personnel records without data redundancy.",
    solution: "Designed and implemented separate Admin and Student portals using PHP and MySQL, featuring session-based authentication, complete CRUD operations, and normalized schema referential integrity.",
    features: [
      {
        title: "Separate Admin & Student Portals",
        description: "Distinct user interfaces and access permissions secured with PHP server-side session handling."
      },
      {
        title: "CRUD Operations for Academic Data",
        description: "Comprehensive record management for student admissions, daily attendance, examination scores, and reports."
      },
      {
        title: "Relational MySQL Database Schema",
        description: "Normalized tables with primary and foreign keys guaranteeing referential integrity and zero data corruption."
      },
      {
        title: "Interactive Client Interfaces",
        description: "JavaScript-enhanced form validation, dynamic table filtering, and attendance summary calculations."
      }
    ],
    architecture: {
      flow: [
        "Client (HTML5/CSS3/JavaScript Frontend Forms)",
        "Server (PHP Controller Scripts with Session Guards)",
        "Database (MySQL Relational Tables with Foreign Key Constraints)",
        "Security (SQL Injection Sanitization & Password Hashing)"
      ],
      description: "Classic relational three-tier architecture ensuring robust transaction handling and secure academic record management."
    },
    componentStructure: [
      "AdminDashboard.php - Central administrator control console",
      "StudentPortal.php - Individual student attendance and grade viewer",
      "AttendanceTracker.php - Real-time daily attendance logger"
    ],
    apiIntegration: "PHP PDO database driver executing prepared SQL queries with parameter binding.",
    stateManagement: "Server-side PHP sessions tracking authenticated user roles and permissions.",
    challenges: [
      {
        problem: "Preventing unauthorized direct URL access to administrative pages.",
        resolution: "Implemented centralized session verification middleware on every protected script."
      }
    ],
    results: [
      { metric: "2024", label: "Year Completed" },
      { metric: "100%", label: "CRUD Reliability" },
      { metric: "Zero", label: "Referential Integrity Breaches" }
    ]
  }
];
