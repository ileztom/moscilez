
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project } from '../types';

interface ProductDetailProps {
  project: Project;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ project, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-white animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-32">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Назад к портфолио
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden grayscale contrast-110">
            <img 
              src={project.imageUrl} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
             <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">{project.category}</span>
                <div className="w-12 h-px bg-gray-200"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">{project.year}</span>
             </div>
             
             <h1 className="text-6xl md:text-8xl font-serif text-black mb-10 tracking-tighter">{project.name}</h1>
             
             <div className="space-y-8 mb-16">
                <div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">Моя роль</span>
                   <p className="text-xl font-medium">{project.role}</p>
                </div>
                <div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-2">Суть проекта</span>
                   <p className="text-xl font-light leading-relaxed text-gray-600">
                     {project.fullStory || project.description}
                   </p>
                </div>
             </div>

             <div className="border-t border-black/10 pt-12">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-8">Результаты и достижения</span>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {project.outcomes.map((outcome, idx) => (
                   <li key={idx} className="flex items-start gap-4">
                     <span className="w-2 h-2 bg-black mt-2"></span>
                     <span className="text-lg font-medium">{outcome}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
