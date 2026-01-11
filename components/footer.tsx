import { Github, Linkedin, Mail, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-gray-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* ฝั่งซ้าย: Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-left">
          <p>© 2026 <span className="text-white font-semibold">PP</span>. All rights reserved.</p>
        </div>

        {/* ฝั่งขวา: Social Icons */}
        <div className="flex gap-6">
          {/* GitHub */}
          <a 
            href="https://github.com/LemoneyShark" 
            target="_blank" 
            className="text-gray-400 hover:text-white hover:scale-110 transition-transform"
          >
            <Github size={20} />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/phiraphat-thiangthit/" 
            target="_blank" 
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-transform"
          >
            <Linkedin size={20} />
          </a>

          {/* Email */}
          <a 
            href="mailto:phiraphatthiangthit@gmail.com" 
            className="text-gray-400 hover:text-purple-400 hover:scale-110 transition-transform"
          >
            <Mail size={20} />
          </a>
          
          {/* Facebook (ถ้ามี) */}
           <a 
            href="https://www.facebook.com/phiraphat.thiangtit" 
            className="text-gray-400 hover:text-blue-600 hover:scale-110 transition-transform"
          >
            <Facebook size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}