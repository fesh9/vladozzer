import React from 'react';
import { Send } from 'lucide-react';

export default function Navbar({ brand }) {
  return (
    <header className="sticky top-0 z-50 bg-[#151515]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-3.5 h-3.5 bg-[#e2ff00] rounded-full animate-pulse group-hover:scale-125 transition-transform"></span>
            </a>
          </div>

          {/* Center: vladozzer title */}
          <div className="text-center">
            <a href="#" className="text-xl font-extrabold tracking-widest text-white uppercase hover:text-[#e2ff00] transition-colors">
              {brand?.name || 'vladozzer'}
            </a>
          </div>

          {/* Right: Telegram link */}
          <div className="flex items-center">
            <a
              href={brand?.telegramUrl || 'https://t.me/vladozzer'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e2ff00] text-black px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#e2ff00]/10"
            >
              <span>TG</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
