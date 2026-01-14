
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onCooperationClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick, onCooperationClick }) => {
  return (
    <footer className="bg-black pt-40 pb-20 px-6 text-white">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20">
        
        <div className="md:col-span-6">
          <h4 className="text-6xl font-serif mb-10 tracking-tighter">Moscilez</h4>
          <p className="max-w-md font-light text-xl text-gray-400 leading-relaxed mb-10">
            Для тех, кто требует большего. Для тех, кто видит вершину и отказывается останавливаться на полпути.
          </p>
          <div className="flex flex-wrap gap-8 text-xs font-bold tracking-[0.3em] uppercase opacity-50">
             <a href="https://www.instagram.com/moscilez" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
             <a href="https://github.com/ileztom" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
             <a href="https://t.me/moscilez" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Telegram</a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-gray-500 mb-10 tracking-[0.3em] text-[10px] uppercase">Навигация</h4>
          <ul className="space-y-6 text-lg font-light">
            <li><a href="#projects" onClick={(e) => onLinkClick(e, 'projects')} className="hover:text-gray-400 transition-colors">Портфолио</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-gray-400 transition-colors">Экспертиза</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-gray-400 transition-colors">Статьи</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-3">
          <h4 className="font-bold text-gray-500 mb-10 tracking-[0.3em] text-[10px] uppercase">Запросы</h4>
          <p className="text-lg font-light mb-8">moscilez@gmail.com</p>
          <button 
            onClick={onCooperationClick}
            className="px-10 py-4 border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
          >
             Сотрудничество
          </button>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-40 pt-10 border-t border-white/10 flex justify-between items-center text-[10px] uppercase tracking-[0.4em] text-gray-500">
        <p>© 2025-2026 MOSCILEZ</p>
        <p>REACH THE PEAK</p>
      </div>
    </footer>
  );
};

export default Footer;
