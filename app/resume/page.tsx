"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
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
const about = {
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
};

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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-w-[80pv] flex items-start justify-center py-12 xl:py-0">
      
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-5">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* container */}
          <div className="min-h-[70vh] w-full">

            {/* Experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.descriptions}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col items-center justify-center lg:items-start lg:ps-9">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[269px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      ) 
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.descriptions}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 rounded-xl flex flex-col items-center justify-center lg:items-start lg:ps-9">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[269px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institutions}</p>
                          </div>
                        </li>
                      ) 
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.descriptions}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillsList.map((skills, index) => {
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] rounded-xl flex justify-center items-center bg-[#232329] group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skills.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.descriptions}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item,index) => {
                    return <li key={index} className="flex items-center justify-between xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span> 
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.section>
  )
}

export default Resume