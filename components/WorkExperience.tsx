"use client";

import { motion } from "framer-motion"; // เอามาทำ Animation ลอยขึ้น
import { ArrowRight, Star, Clock, Bot, FileText, Code2, Database, Layout } from "lucide-react";
import Image from "next/image";

// ข้อมูลโปรเจกต์

// Card Data
const projects = [
  {
    title: "Thesis : Application for Banana Species Identification",
    description: "Web application built with Flutter, Lite to identify banana species in real-time.",
    icon: <FileText className="text-red-500" size={32} />, // icon
    gradient: "from-red-900 to-gray-900", // Card background gradient
  },
  {
    title: "Internship : Botnoi Consulting",
    description: "Strategic auto-battler mechanics design featuring insects like Beetles and Bees.",
    icon: <Bot className="text-blue-500" size={32} />, // icon
    gradient: "from-blue-900 to-gray-900", // Card background gradient
  },
];

// Tech Stack Icons
const techStack = [
    { src: "/flutter.svg", name: "Flutter" },
    { src: "/mongodb.svg", name: "mongodb" },
    { src: "/python.svg", name: "Python" },
    { src: "/c--4.svg", name: "C#" },
    { src: "/docker.svg", name: "Docker" },
    { src: "/nextjs.svg", name: "NextJS" },
    { src: "/react.svg", name: "React" },
    { src: "/tailwind-css.svg", name: "Tailwind" },
    { src: "/typescript.svg", name: "Typescript" },
    { src: "/unity.svg", name: "Unity" },
    { src: "/fastapi.svg", name: "FastAPI" },
];

// Main Component
export default function WorkExperience() {
  return (
    <section className="min-h-screen bg-[#0f0f11] text-white py-20 px-6 md:px-24">
      
      {/*Section*/}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
        <p className="text-gray-500 mt-4">All projects</p>
      </div>

      {/*Grid Cards*/}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} // เริ่มโชว์เมื่อเลื่อนมาเจอ
            transition={{ duration: 0.5, delay: index * 0.2 }} // หน่วงเวลาให้ขึ้นทีละอัน
            viewport={{ once: true }}
            className={`group relative p-8 rounded-3xl border border-gray-800 bg-gradient-to-br ${project.gradient} hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/20`}
          >
            {/* ไอคอนมุมซ้ายบน */}
            <div className="mb-6 bg-gray-800/50 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
              {project.icon}
            </div>

            {/* เนื้อหา */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-red-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* ปุ่ม Learn More */}
            <a href="https://banana-split-a2a48.web.app/" className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={16} />
            </a>

          </motion.div>
        ))}
      </div>

      {/* --- ส่วน Footer เล็กๆ (Looking to join...) --- */}
      <div className="mt-24 text-center">
        <h3 className="text-xl md:text-2xl text-gray-300">
          I'm currently looking for <span className="text-red-400 font-bold">Banana</span>
        </h3>
        <p className="text-sm text-gray-500 mt-2">
          that values improving people's lives through accessible design
        </p>

        {/* Tech Stack Icons */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {techStack.map((tech, i) => (
            <div 
              key={i} 
              className="w-14 h-14 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-red-700 hover:scale-110 transition-all cursor-pointer p-3" // p-3 คือ padding เพื่อไม่ให้โลโก้ชิดขอบเกินไป
              title={tech.name}
            >
              {/* ใช้ Next/Image แทน icon เดิม */}
              <Image 
                src={tech.src} 
                alt={tech.name} 
                width={40} 
                height={40} 
                className="object-contain w-full h-full" // object-contain ช่วยให้รูปไม่เบี้ยว แม้ขนาดจะไม่เท่ากัน
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}