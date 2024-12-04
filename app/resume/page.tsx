"use client";

import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNeos,
} from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// AboutData
const about = [
  {
    title: "About me",
    descriptions: "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres calque dicta id. Nostrum.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Junayed Hassan",
      },
      {
        fieldName: "Phone",
        fieldValue: "+88 01948493880",
      },
      {
        fieldName: "Experience",
        fieldValue: "10- month",
      },
      {
        fieldName: "skype",
        fieldValue: "Junayed.01",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Junayed Hassan",
      },
      {
        fieldName: "Bangladeshi",
        fieldValue: "Junayed Hassan",
      },
      {
        fieldName: "Email",
        fieldValue: "junayedhassan102045@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Language",
        fieldValue: "English Arabian Urdu Bangla",
      },
    ]
  }
];

// ExperienceData
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",
  descriptions: "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres calque dicta id. Nostrum.",
  items:[
    {
      company: "Tech Solutions Inc",
      position: "fountain web developer",
      duration: "2024 - present"
    },
    {
      company: "Tech Solutions Inc",
      position: "fountain web developer",
      duration: "2024 - present"
    },
    {
      company: "Tech Solutions Inc",
      position: "fountain web developer",
      duration: "2024 - present"
    },
    {
      company: "Tech Solutions Inc",
      position: "fountain web developer",
      duration: "2024 - present"
    },
    {
      company: "Tech Solutions Inc",
      position: "fountain web developer",
      duration: "2024 - present"
    },
    {
      company: "Tech Solutions Inc",
      position: "fountain web developer",
      duration: "2024 - present"
    },
  ]
};

// EducationData
const education = {
  icon: "assets/resume/badge.svg",
  title: "My education",
  descriptions: "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres calque dicta id. Nostrum.",
  items:[
    {
      institutions: "Ahmad's Education",
      degree: "full stack web development",
      duration: "2024 - present"
    },
    {
      institutions: "online course PlatFrom",
      degree: "front-end Track",
      duration: "2024 - present"
    },
    {
      institutions: "online course",
      degree: "programming course",
      duration: "2024 - present"
    },
    {
      institutions: "teach Institute",
      degree: "Certified web development",
      duration: "2024 - present"
    },
    {
      institutions: "online course PlatFrom",
      degree: "front-end Track",
      duration: "2024 - present"
    },
    ,
    {
      institutions: "online course",
      degree: "programming course",
      duration: "2024 - present"
    },
    
  ]
};

// SkillsData
const skills = {
  title: "My skills",
  descriptions: "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres calque dicta id. Nostrum.",
  skillsList: [
    {
      icon:<FaHtml5/>,
      name: "html 5",
    },
    {
      icon:<FaCss3/>,
      name: "css 3",
    },
    {
      icon:<FaJs/>,
      name: "javaScript",
    },
    {
      icon:<FaReact/>,
      name: "react.js",
    },
    {
      icon:<SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon:<SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon:<FaNeos/>,
      name: "naos",
    },
    {
      icon:<FaFigma/>,
      name: "figma",
    },
  ]
};

function Resume() {
  return (
    <div>Resume page</div>
  )
}

export default Resume