"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "Penguin"
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    // 1. แก้ padding และจัดกึ่งกลาง: ใช้ flex-col บนมือถือเพื่อให้เรียงลงมาสวยๆ
    <main className="min-h-screen bg-[#0f0f11] text-white flex flex-col items-center justify-center p-6 md:p-24 overflow-x-hidden">
      
      {/* 2. Grid: บนมือถือ gap-12 (ห่างพอดีๆ) บนจอใหญ่ gap-16 */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* --- ส่วนรูปภาพ (ซ้ายบนจอใหญ่ / ล่างสุดบนมือถือ) --- */}
        {/* เพิ่ม mt-12 บนมือถือ เพื่อดันรูปให้ห่างจากปุ่ม Download Resume ด้านบน */}
        <div className="md:col-span-4 relative flex flex-col items-center md:items-end order-last md:order-first mt-12 md:mt-0">
          
          <div className="absolute -top-10 right-0 md:right-10 flex items-center gap-2 text-gray-500 animate-bounce z-10">
            <span className="text-sm font-handwriting">Flip to view profile!</span>
          </div>
          
          <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-40 rounded-full transform translate-y-5 scale-90"></div>

          {/* --- COIN FLIP --- */}
          <div 
            className="relative w-64 h-64 cursor-pointer perspective-1000"
            onClick={handleFlip}
          >
             <motion.div
               className="w-full h-full relative"
               initial={false}
               animate={{ rotateY: isFlipped ? 180 : 0 }}
               transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
               style={{ transformStyle: "preserve-3d" }}
             >
               {/* ด้านหน้า */}
               <div className="absolute inset-0 backface-hidden overflow-hidden rounded-full border-2 border-red-500 bg-gradient-to-b from-red-800 to-gray-900 flex items-center justify-center">
                  <Image 
                    src="/profile_front.png"
                    alt="Front Side"
                    width={300} height={300}
                    priority
                    className="object-cover"
                  />
               </div>
               {/* ด้านหลัง */}
               <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden rounded-full border-2 border-red-500 bg-gradient-to-b from-red-800 to-gray-900 flex items-center justify-center">
                  <Image 
                    src="/profile_back.png" 
                    alt="Back Side"
                    width={300} height={300}
                    className="scale-x-[-1] object-cover"
                  />
               </div>
             </motion.div>
          </div>
        </div>

        {/* --- ส่วนข้อความ (ขวาบนจอใหญ่ / บนสุดบนมือถือ) --- */}
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          
          <h2 className="text-lg md:text-xl font-medium text-gray-400">
            Portfolio
          </h2>

          {/* 3. ลดขนาด Font Header บนมือถือ: text-4xl -> md:text-7xl */}
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Hi, I'm Phiraphat.
          </h1>

          {/* 4. ส่วนข้อความเปลี่ยนอัตโนมัติ */}
          {/* เปลี่ยน h-20 เป็น min-h เพื่อให้ยืดขยายได้ และใช้ flex-col บนมือถือ */}
          <div className="min-h-[80px] md:h-20 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2">
            
            <span className="text-2xl md:text-4xl font-bold">I'm a</span>
            
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                // 5. ลดขนาด Font ตัววิ่ง: text-3xl -> md:text-4xl (ไม่ให้ใหญ่จนล้นจอ)
                // text-center บนมือถือ เพื่อไม่ให้มันเอียงซ้ายขวาแปลกๆ
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 block text-center md:text-left"
              >
                {roles[index]}
              </motion.span>
            </AnimatePresence>
            
          </div>

          <p className="text-gray-400 leading-relaxed max-w-xl text-sm md:text-base mt-4 mx-auto md:mx-0">
            A full-stack developer specializing in web applications and interactive user experiences
          </p>

          <div className="flex justify-center md:justify-start">
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="mt-6 flex items-center justify-center gap-2 w-fit px-6 py-2.5 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-100 hover:text-white hover:bg-red-600 transition-all duration-300"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

        </div>
        
      </div>
      
      {/* Spacer */}
      <div className="pt-20 md:pt-32"></div>
      
      <WorkExperience />
      <Education />

    </main>
  );
}