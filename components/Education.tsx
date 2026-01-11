"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Users} from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 px-6 md:px-24 text-white border-t border-gray-900">
        
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Education & Hobby</h2>
        <p className="text-gray-500 mt-4">All projects</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* --- ฝั่งซ้าย: การศึกษา --- */}
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2 mb-8 text-red-400">
            <GraduationCap /> Education
          </h3>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border-l-2 border-gray-800 pl-6 space-y-8"
          >
            {/* รายการที่ 1 */}
            <div className="relative">
              <span className="absolute -left-[31px] bg-red-500 w-3 h-3 rounded-full mt-1.5 ring-4 ring-[#0a0a0c]"></span>
              <h4 className="text-xl font-semibold">Bachelor's Degree in Computer Engineering</h4>
              <p className="text-gray-400 text-sm mt-1">Naresuan University (Phitsanulok)</p>
              <p className="text-gray-500 text-xs mt-1">2022 - 2026</p>
            </div>
            
            {/* รายการที่ 2 (มัธยม - ถ้าอยากใส่) */}
             <div className="relative">
              <span className="absolute -left-[31px] bg-gray-700 w-3 h-3 rounded-full mt-1.5 ring-4 ring-[#0a0a0c]"></span>
              <h4 className="text-lg text-gray-400">High School (Science-Math)</h4>
              <p className="text-gray-400 text-sm mt-1">Phothitham School (Phichit)</p>
              <p className="text-gray-500 text-xs mt-1">2016 - 2022</p>
            </div>
          </motion.div>
        </div>

        {/* --- ฝั่งขวา: กิจกรรม & ตัวตน --- */}
        <div>
          <h3 className="text-2xl font-bold flex items-center gap-2 mb-8 text-red-400">
            <Trophy /> Hobby
          </h3>

          <div className="space-y-6">
            {/* Card 1: บาสเกตบอล */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/50 p-5 rounded-xl border border-gray-800 flex gap-4 items-start"
            >
              <div className="bg-orange-900/30 p-3 rounded-lg text-orange-400">
                🏀
              </div>
              <div>
                <h4 className="font-bold">Basketball</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Instilling discipline, understanding of the game, and teamwork.
                </p>
              </div>
            </motion.div>

            {/* Card 2: สอนหนังสือ */}
            <motion.div 
               whileHover={{ scale: 1.02 }}
               className="bg-gray-900/50 p-5 rounded-xl border border-gray-800 flex gap-4 items-start"
            >
              <div className="bg-orange-900/30 p-3 rounded-lg text-orange-400">
                💪
              </div>
              <div>
                <h4 className="font-bold">Weight Training</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Focused on strength, mobility, and consistency through structured training.
                </p>
              </div>
            </motion.div>
            
            

          </div>
        </div>

      </div>
    </section>
  );
}