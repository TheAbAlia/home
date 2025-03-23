// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Abdalla",
  middleName: "",
  lastName: "Alia, Ph.D.",
  message: " Empowering companies to harness their data for smarter decision-making. ",
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

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/abdallaalia.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/abdallaalia.png"),
  imageSize: 375,
  message:
    "As an expert in data analytics and engineering with deep expertise in Germany's energy sector, I combine strategic foresight with a robust technical background in business intelligence, data pipelines, and big data ecosystems. My career is built on a respected academic foundation and a proven track record of delivering actionable insights and scalable data solutions that drive business growth and operational excellence.",
  resume: "https://drive.google.com/file/d/1C75-UIcSydRHMc2I4RikTEXY6m7KsL3s/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Education",
  images: [
    { 
      img: require("../editable-stuff/UniMarburg.png"), 
      name: "Philipps-Universität Marburg", 
      ort: "Marburg, Germany",
      degree: "Doctorate of Mathematics",
      timeline: "September 2018 - April 2022",
      mark: "Overall note: cum laude"
    },
    { 
      img: require("../editable-stuff/UniBonn.png"), 
      name: "Rheinische Friedrich-Wilhelms-Universität Bonn", 
      degree: "Master of Science in Mathematics",
      ort: "Bonn, Germany",
      timeline: "September 2015 - April 2018",
      mark: "Overall note: 1,9"

    },
    { 
      img: require("../editable-stuff/UniDamas.png"), 
      name: "University of Damascus", 
      degree: "Bachelor of Science",
      ort: "Damascus, Syria",
      timeline: "September 2009 - September 2014",
      mark: "Overall note: 81.99%"

    },
  ],
  imageSize: {
    width:"10",
    height:"300"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 100 },
    { name: "R", value: 100 },
    { name: "Bash scripting", value: 100 },
    { name: "Git", value: 100 },
    { name: "Confluence", value: 100 },
    { name: "JIRA", value: 100 },
  ],
  softSkills: [
    { name: "Apache Spark", value: 100 },
    { name: "Apache Airflow", value: 100 },
    { name: "Apache Kafka", value: 100 },
    { name: "MySQL (Oracle)", value: 100 },
    { name: "NoSQL (MangoDB)", value: 100 },
    { name: "Azure (Data Lakes)", value: 100 },
  ],
  mixSkills: [
    { name: "KNIME", value: 100 },
    { name: "Power BI", value: 100 },
    { name: "Shiny", value: 100 },
    { name: "RMarkdowns", value: 100 },
    { name: "SAC (SAP Analytics Cloud)", value: 100 },
    { name: "BW Query Design & Development (SAP)", value: 100 },
  ],
};


// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Discuss a project or just want to say hi? My Inbox is open for all at:",
  email: "abdalla.alia.dev@hotmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Business Intelligence and Machine Learning Consultant',// Here Add Company Name
      companylogo: require('../assets/img/suewag.png'),
      date: 'Mai 2022 – Present',
    },
    {
      role: 'Data Analyst (Werkstudent)',
      companylogo: require('../assets/img/veeva.png'),
      date: 'Feb 2019 – Sep 2019',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

console.log('Skills data before render:', {
  heading: skills.heading,
  hardSkills: skills.hardSkills,
  softSkills: skills.softSkills,
  mixSkills: skills.mixSkills
});


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
