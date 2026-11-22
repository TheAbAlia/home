// Navigation
const navBar = {
  show: true,
};

// Hero
const mainBody = {
  firstName: "Abdalla",
  middleName: "",
  lastName: "Alia, Ph.D.",

  message:
    "I design data platforms, intelligent systems and technical products around problems that deserve more than an off-the-shelf answer.",

  icons: [
    {
      image: "fa-github",
      url: "https://github.com/TheAbAlia",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abalia/",
    },
    {
      image: "fa-xing",
      url: "https://www.xing.com/profile/Abdalla_Alia",
    },
  ],
};

// Profile / About
const about = {
  show: true,

  heading: "Profile",

  imageLink: require("../editable-stuff/abdallaalia.png"),

message:
  "I work across data, software and applied AI, with a particular interest in problems where the technical challenge is only part of the picture. My background in mathematics taught me to look for structure before tools, and that still shapes how I work today.",

  resume:
    "https://drive.google.com/file/d/131kxhDhTdIYzipwaD_Mdfq5vqtmJGNVU/view?usp=sharing",
};

// Selected Work
const selectedWork = {
  show: true,

  items: [
    {
      number: "001",

      title: "Independent Projects",

      eyebrow: "Independent technology studio",

      year: "2026 —",

      description:
        "I founded Independent Projects to build digital products, intelligent systems and technical infrastructure with an emphasis on clarity, reliability and long-term usefulness.",

      meta: [
        "Founder",
        "Strategy",
        "Architecture",
        "Engineering",
      ],

      link: "#contact",
    },
  ],
};

// Legacy GitHub Projects
// Kept disabled while Selected Work becomes the primary portfolio section.
const repos = {
  show: false,

  heading: "Recent Projects",

  gitHubUsername: "TheAbAlia",

  reposLength: 4,

  specificRepos: [],
};

// Experience
const experiences = {
  show: true,

  heading: "Experience",

  data: [
    {
      role:
        "Business Intelligence and Machine Learning Consultant",

      company: "Süwag",

      companylogo: require("../assets/img/suewag.png"),

      date: "May 2022 – Present",

      summary:
        "Working across business intelligence, data engineering and machine learning in the energy sector, with a focus on scalable data foundations, analytical workflows and decision-support systems.",

      tags: [
        "Data Engineering",
        "Machine Learning",
        "Business Intelligence",
        "Energy",
      ],
    },

    {
      role: "Data Analyst (Werkstudent)",

      company: "Veeva Systems",

      companylogo: require("../assets/img/veeva.png"),

      date: "Feb 2019 – Sep 2019",

      summary:
        "Data analysis and reporting work focused on turning structured business data into clearer analytical insight.",

      tags: [
        "Data Analysis",
        "Reporting",
        "Analytics",
      ],
    },
  ],
};

// Capabilities
// ==========================================================
// CAPABILITIES
// Professional capabilities, technologies and areas of depth
// ==========================================================

const skills = {
  show: true,

  heading: "Capabilities",

  categories: [
    // ------------------------------------------------------
    // 01 — Programming
    // ------------------------------------------------------

    {
      title: "Programming & Scripting",
      shortTitle: "Programming",

      description:
        "Programming for data-intensive applications, analytical workflows and automation, from exploratory work through to maintainable production code.",

      technologies: [
        "Python",
        "R",
        "Bash",
        "Git",
      ],

      expertise: [
        "Data processing & transformation",
        "Workflow automation",
        "Analytical programming",
        "API & system integration",
        "Reproducible development",
        "Technical scripting",
      ],
    },

    // ------------------------------------------------------
    // 02 — Data Engineering
    // ------------------------------------------------------

    {
      title: "Data Engineering & Platforms",
      shortTitle: "Data Engineering",

      description:
        "Designing data platforms and pipelines that turn fragmented operational data into reliable, accessible foundations for analytics, applications and AI.",

      technologies: [
        "Apache Airflow",
        "Apache Spark",
        "Apache Kafka",
        "Oracle SQL",
        "MongoDB",
        "SAP BW",
      ],

      expertise: [
        "ETL & ELT architecture",
        "Data pipeline engineering",
        "Data modelling",
        "Distributed data processing",
        "Streaming & event-driven systems",
        "Data integration & orchestration",
      ],
    },

    // ------------------------------------------------------
    // 03 — AI & Machine Learning
    // ------------------------------------------------------

    {
      title: "AI & Machine Learning",
      shortTitle: "AI & Machine Learning",

      description:
        "Developing applied machine learning and AI solutions around concrete business and operational problems, with attention to how models integrate into the systems around them.",

      technologies: [
        "Python",
        "Machine Learning",
        "Predictive Modelling",
        "AI Applications",
      ],

      expertise: [
        "End-to-end ML pipelines",
        "Predictive modelling",
        "Segmentation & classification",
        "Churn & acquisition modelling",
        "AI application integration",
        "Model operationalisation",
      ],
    },

    // ------------------------------------------------------
    // 04 — Business Intelligence
    // ------------------------------------------------------

    {
      title: "Business Intelligence & Analytics",
      shortTitle: "BI & Analytics",

      description:
        "Building analytical products and reporting systems that make complex operational data easier to understand, interrogate and use in decision-making.",

      technologies: [
        "Power BI",
        "SAP Analytics Cloud",
        "Shiny",
        "R",
      ],

      expertise: [
        "BI solution development",
        "KPI & metric design",
        "Executive reporting",
        "Analytical applications",
        "Data visualisation",
        "Decision-support systems",
      ],
    },

    // ------------------------------------------------------
    // 05 — Technical Delivery
    // ------------------------------------------------------

    {
      title: "Technical Architecture & Delivery",
      shortTitle: "Architecture & Delivery",

      description:
        "Taking technical work beyond implementation: shaping solutions, establishing sound engineering practices and carrying systems from initial problem definition into delivery.",

      technologies: [
        "Git",
        "Jupyter",
        "VS Code",
        "JIRA",
        "Confluence",
      ],

      expertise: [
        "Solution architecture",
        "Technical design",
        "CI/CD-aware development",
        "Technical documentation",
        "Agile delivery",
        "Technical stakeholder collaboration",
      ],
    },
  ],
};

// Background / Education
const leadership = {
  show: true,

  heading: "Background",

  images: [
    {
      img: require("../editable-stuff/UniMarburg.png"),

      name: "Philipps-Universität Marburg",

      ort: "Marburg, Germany",

      degree: "Doctorate of Mathematics",

      timeline: "September 2018 – April 2022",

      mark: "Cum laude",
    },

    {
      img: require("../editable-stuff/UniBonn.png"),

      name:
        "Rheinische Friedrich-Wilhelms-Universität Bonn",

      ort: "Bonn, Germany",

      degree: "Master of Science in Mathematics",

      timeline: "September 2015 – April 2018",

      mark: "Overall grade: 1.9",
    },

    {
      img: require("../editable-stuff/UniDamas.png"),

      name: "University of Damascus",

      ort: "Damascus, Syria",

      degree: "Bachelor of Science",

      timeline: "September 2009 – September 2014",

      mark: "Overall grade: 81.99%",
    },
  ],
};

// Contact
const getInTouch = {
  show: true,

  heading: "Have something worth building?",

  message:
    "Whether it is a data platform, an intelligent system, a technical product or simply an interesting problem, start with a conversation.",

  email: "abdalla.alia.dev@hotmail.com",
};

export {
  navBar,
  mainBody,
  about,
  selectedWork,
  repos,
  experiences,
  skills,
  leadership,
  getInTouch,
};
