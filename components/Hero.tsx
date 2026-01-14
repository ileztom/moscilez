
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://live.staticflickr.com/65535/55037736471_fe3d63957f_b.jpg" 
            alt="Moscilez Peak" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-transform duration-[20s] scale-110 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up">
          <span className="block text-xs font-bold uppercase tracking-[0.4em] text-white/60 mb-8 px-6 py-2 border border-white/20 rounded-full mx-auto w-fit backdrop-blur-sm">
            The Pinnacle of Performance
          </span>
          <h1 className="text-7xl md:text-9xl font-serif font-normal text-white tracking-tighter mb-8">
            Conquer <span className="italic text-gray-400">Everything.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 uppercase tracking-widest">
            Moscilez — Стратегическое лидерство. <br/>
            Бескомпромиссное совершенство. Определено вершиной.
          </p>
          
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="group relative px-12 py-5 bg-white text-black rounded-none text-sm font-bold uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-500 shadow-2xl inline-block"
          >
            Смотреть проекты
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
