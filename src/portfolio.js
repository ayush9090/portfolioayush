/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ayush Variyava",
  title: "Hi all, I'm Ayush",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://ayushvariyava.com/ayush_variyava_resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ayush9090",
  linkedin: "https://www.linkedin.com/in/ayush-variyava/",
  gmail: "avariyava@gmail.com",
  gitlab: "https://gitlab.com/ayush9090",
  facebook: "https://www.facebook.com/Ayush.variyava7",
  medium: "https://medium.com/@avariyava",
  stackoverflow: "https://stackoverflow.com/users/10422806/Ayush-variyava",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of texas at Arlington",
      logo: require("./assets/images/UTA_logomark.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Auguest 2022 - may 2024",
      desc: "The Master of Science in Computer Science program at the University of Texas at Arlington has equipped me with a strong theoretical foundation and practical skills in modern computing technologies. During this program, I have focused on advanced coursework, research projects, and collaborative team efforts to enhance my understanding of software development, data systems, and cloud computing. My education has been complemented by hands-on experiences in designing, developing, and optimizing software applications, aligning with industry standards and emerging trends in computer science.",
      descBullets: [
        "Gained expertise in software development methodologies, including Agile practices and Test-Driven Development (TDD)",
        "Developed advanced knowledge in programming languages such as Java, Python, JavaScript, and C#, and frameworks like React.js, Django, and .NET Core",
        "Completed coursework in cloud computing, data structures, algorithms, and database management systems, emphasizing scalability and optimization",
        "Participated in team-based research and projects, fostering strong collaborative and problem-solving skills",
        "Designed and implemented scalable, secure, and user-friendly software applications through practical coursework and internships",
        "Worked on data-driven projects, utilizing tools like SQL, AWS DynamoDB, and Google Cloud Platform to build efficient solutions",
        "Enhanced understanding of CI/CD pipelines, Docker, Kubernetes, and cloud-based deployment strategies",
        "Prepared for a career in the tech industry by integrating academic knowledge with hands-on professional experiences"
      ]
    },
    {
      schoolName: "Gujarat technological University",
      logo: require("./assets/images/gtu_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "The Bachelor of Science in Computer Science program at Gujarat Technological University provided me with a comprehensive foundation in computer science principles and programming. Through this program, I developed a strong understanding of software engineering, database management, and problem-solving techniques. Practical exposure to projects and internships allowed me to apply theoretical concepts to real-world scenarios, preparing me for challenges in the tech industry.",
      descBullets: [ "Acquired a solid foundation in computer science principles, including algorithms, data structures, and software engineering",
        "Developed proficiency in programming languages such as Java, C++, and Python, along with hands-on experience in web technologies",
        "Completed coursework in database management, operating systems, and computer networks",
        "Participated in team projects to design and implement software solutions, fostering teamwork and collaboration skills",
        "Undertook a capstone project that involved developing a scalable web application, integrating both frontend and backend technologies",
        "Gained exposure to industry practices through internships, enhancing practical knowledge and problem-solving abilities",
        "Prepared for advanced studies and a career in the tech industry by integrating academic learning with real-world applications"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Developer",
      company: "Mansfield Om Sai LLC",
      companylogo: require("./assets/images/mansfieldllc.png"),
      date: "Sep 2024 – Present",
      desc: "Lead the development and enhancement of web-based applications, ensuring scalability, security, and performance.",
      descBullets: [
        "Developed responsive web pages using React.js and TypeScript, increasing user engagement by 30%",
        "Integrated APIs and databases like MySQL and DynamoDB, optimizing data retrieval efficiency by 20%",
        "Refined codebase through code reviews, reducing bugs by 20% and improving team productivity",
        "Designed and implemented dashboards using .NET Core and React.js to enhance user insights by 25%",
        "Converted Figma designs into responsive web pages, improving usability and accessibility"
      ]
    },
    {
      role: "Software Developer",
      company: "Saviom Software",
      companylogo: require("./assets/images/saviomsoftwarelogo.jpeg"),
      date: "Jun 2021 – Jul 2022",
      desc: "Contributed to the development of enterprise solutions, focusing on efficiency and user experience.",
      descBullets: [
        "Led projects using .NET Core, improving system efficiency by 15%",
        "Developed dynamic UI components in React.js, enhancing load times and interaction",
        "Migrated legacy VB code to C#, reducing technical debt by 30%",
        "Created and optimized 10+ APIs and SQL queries, improving data retrieval by 40%",
        "Developed a mobile app using Swift and SQL Server, receiving positive user feedback from 90% of users"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "IIHT",
      companylogo: require("./assets/images/iihtlogo.png"),
      date: "Aug 2019 – May 2021",
      desc: "Assisted in developing full-stack applications with a focus on performance and scalability.",
      descBullets: [
        "Built backend solutions using .NET Core and created responsive front-end interfaces with HTML/CSS and VanillaJS",
        "Optimized SQL queries, resulting in a 40% increase in sales performance",
        "Enhanced query efficiency with ES6, reducing page load time by 50%",
        "Improved testing coverage using Jest and Enzyme, decreasing critical bugs by 20%",
        "Developed responsive interfaces with Bootstrap, increasing user satisfaction by 15%"
      ]
    }
  ]
  
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tipsmagnets.jpeg"),
      projectName: "TipsMagnets",
      projectDesc: "Tips Magnets is revolutionizing the way motels and their guests handle tipping. Our platform provides a seamless, digital tipping solution that enhances the guest experience while ensuring staff receive the appreciation they deserve. No more fumbling for cash—our secure, easy-to-use system allows guests to tip directly from their mobile devices, creating a more convenient and modern approach to gratitude.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://demo.tipsmagnet.co/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logoztxhosp.png"),
      projectName: "ZTX Hospitality",
      projectDesc: "Ztx Hospitality specializes in the hotel business, focusing on partnerships, management, and development to deliver exceptional services and properties across the USA.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ZTXHospitality.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards:   [
    {
      title: "Portfolio Diversification using Correlation Matrix",
      subtitle: "Completed a project with Coursera Project Network and achieved a perfect grade.",
      image: require("./assets/images/courseralogo.webp"),
      imageAlt: "Coursera Project Network Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/portfolio-correlation-matrix"
        }
      ]
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      subtitle: "Achieved 99.17% in a certification course from the University of Michigan.",
      image: require("./assets/images/pythonlogoi.png"),
      imageAlt: "Python Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/python-programming-intro"
        }
      ]
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      subtitle: "Successfully completed a foundational course on cybersecurity tools and practices.",
      image: require("./assets/images/cyber-security-logo.jpg"),
      imageAlt: "Cybersecurity Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/cybersecurity-tools"
        }
      ]
    }
  ], 
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section


const blogSection = {
  title: "Blogs",
  subtitle: "Documenting my journey and sharing insights on modern technologies like Docker, Kubernetes, and CPanel hosting.",
  blogs: [
    {
      url: "https://medium.com/@avariyava/exploring-kubernetes-and-docker-a-journey-into-modern-containerization-a3d055229a8d",
      title: "Exploring Docker and Kubernetes: A Beginner's Journey",
      description: "Learn how Docker and Kubernetes simplify application deployment and management, with insights from real-world experience using Civo Kubernetes clusters."
    },
    {
      url: "https://medium.com/@avariyava/cpanel-hosting-an-affordable-and-efficient-solution-for-your-web-applications-2a6bd422df75",
      title: "Efficient CPanel Hosting with PHP and MySQL",
      description: "A guide to leveraging CPanel for affordable and scalable web hosting, including setting up PHP, MySQL databases, and professional email accounts."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/ayushvariyava-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Ayush-variyava"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+16823748215",
  email_address: "avariyava@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
