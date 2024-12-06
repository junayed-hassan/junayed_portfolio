"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    num: "01",
    Category: "frontend",
    title: "Project 1",
    descriptions:
      "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
    image: "/public/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    Category: "fullstack",
    title: "Project 2",
    descriptions:
      "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/public/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    Category: "frontend",
    title: "Project 3",
    descriptions:
      "Lorem, ipsum dolor sit amat consectetur adipisicing eit. Voluptuous maitres",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/public/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.select
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto ms-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full "></div>
          <div className="w-full "></div>
        </div>
      </div>
    </motion.select>
  );
}

export default Work;
