"use client"; // บรรทัดนี้สำคัญมาก! บอก Next.js ว่าหน้านี้มีการใช้ State และ Animation

import { useState } from "react"; // เรียกใช้ State เพื่อจำการคลิก
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import { motion } from "framer-motion"; // เรียกใช้ Framer Motion
import { Download } from "lucide-react";

// นำเข้า Component ย่อย
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";

export default function Home() {
  // --- STATE ---
  const [isFlipped, setIsFlipped] = useState(false);

  // ฟังก์ชันสำหรับสลับด้านเมื่อคลิก
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <main className="min-h-screen bg-[#0f0f11] text-white items-center justify-center p-6 md:p-50 overflow-hidden">
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-15 items-center">
        
        {/* --- ส่วนรูปภาพ (ซ้าย) --- */}
        <div className="md:col-span-4 relative flex flex-col items-center md:items-end order-last md:order-first mt-10 md:mt-0">
          
          <div className="absolute -top-10 right-0 md:right-15 flex items-center gap-2 text-gray-500 animate-bounce z-10">
            <span className="text-sm font-handwriting">Flip to view profile!</span>
          </div>
          <div className="absolute inset-0 bg-red-600 blur-[80px] opacity-40 rounded-full transform translate-y-5 scale-85 "></div>

          {/* --- ส่วน COIN FLIP --- */}
          <div 
            className="relative w-64 h-64 cursor-pointer perspective-1000" // perspective ช่วยให้ดูเป็น 3D
            onClick={handleFlip}
          >
             <motion.div
               className="w-full h-full relative"
               initial={false}
               animate={{ rotateY: isFlipped ? 180 : 0 }} // ถ้า isFlipped=true ให้หมุน 180 องศา
               transition={{ duration: 0.6, type: "spring", stiffness: 100 }} // ตั้งค่าความเร็วและความเด้ง
               style={{ transformStyle: "preserve-3d" }} // สำคัญ: บอกให้ลูกๆ ข้างในคงสภาพ 3D ไว้
             >
               
               {/* --- ด้านหน้า (Front) --- */}
               <div className="absolute inset-0 backface-hidden overflow-hidden rounded-full border-2 border-red-500 bg-gradient-to-b from-red-800 to-gray-900 flex items-center justify-center">
                  {/* ใส่รูปด้านหน้า */}
                  <Image 
                    src="/profile_front.png"
                    alt="Front Side"
                    width={300} height={300}
                    priority
                  />
               </div>

               {/* --- ด้านหลัง (Back) --- */}
               {/* rotate-y-180 คือจับรูปนี้หันหลังเตรียมไว้ก่อนเลย */}
               <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden rounded-full border-2 border-red-500 bg-gradient-to-b from-red-800 to-gray-900 flex items-center justify-center">
                  {/* ใส่รูปด้านหลัง */}
                  <Image 
                    src="/profile_back.png" 
                    alt="Back Side"
                    width={400} height={400}
                    className=" scale-x-[-1]"
                  />
               </div>
             </motion.div>
          </div>
          {/* --- จบส่วน COIN FLIP --- */}

        </div>

        {/* --- ส่วนข้อความ (ขวา) --- */}
        <div className="md:col-span-8 space-y-1 text-center md:text-left">
          
          <h2 className="text-xl font-medium text-gray-400">
            Portfolio
          </h2>

          {/* หัวข้อใหญ่ */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm Peerapat. <br />
            {/* เทคนิคทำวงกลมล้อมรอบคำ */}
          </h1>
          {/* ส่วนพิมพ์ดีด (Typewriter Effect แบบบ้านๆ) */}
          <div className="pt-5">
            <h3 className="text-4xl font-bold">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Full-Stack Developer</span>
            </h3>
          </div>

          {/* คำอธิบายยาวๆ */}
          <p className="text-gray-400 leading-relaxed max-w-xl text-sm mt-6">
            A full-stack developer specializing in web applications and interactive user experiences
          </p>

          {/* ปุ่มโหลด Resume */}
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="mt-8 flex items-center justify-center gap-2 w-fit px-6 py-2.5 border border-gray-600 rounded-lg text-gray-400 hover:border-gray-1000 hover:text-white hover:bg-red-600 transition-all duration-300">
              <Download size={18} /> Download Resume
            </a>

        </div>
        
      </div>
      <div className="pt-30"></div>
      <WorkExperience />

      <Education />

    </main>
  );
}