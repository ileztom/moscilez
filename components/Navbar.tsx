
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-black' : 'text-white';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={`text-4xl font-serif font-medium tracking-tighter z-50 transition-colors duration-500 ${textColorClass}`}
          >
            {BRAND_NAME}
          </a>
          
          <div className={`hidden md:flex items-center gap-16 text-xs font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${textColorClass}`}>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')} className="hover:opacity-50 transition-opacity">Портфолио</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-50 transition-opacity">Экспертиза</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-50 transition-opacity">Статьи</a>
          </div>

          <div className="flex items-center gap-6 z-50 relative">
             <button 
              className={`md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? 'ЗАКРЫТЬ' : 'МЕНЮ'}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-12 text-2xl font-serif font-medium text-black">
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Портфолио</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>Экспертиза</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')}>Статьи</a>
          </div>
      </div>
    </>
  );
};

export default Navbar;
