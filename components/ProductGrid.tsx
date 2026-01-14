
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  onProductClick: (project: Project) => void;
  limit?: number;
  onShowAll?: () => void;
  isFullPage?: boolean;
  onBack?: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  onProductClick, 
  limit, 
  onShowAll, 
  isFullPage = false,
  onBack 
}) => {
  const displayProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="projects" className={`px-6 md:px-12 bg-[#F2F2F2] ${isFullPage ? 'pt-32 pb-40' : 'py-40'}`}>
      <div className="max-w-[1800px] mx-auto">
        {isFullPage && onBack && (
          <button onClick={onBack} className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Назад
          </button>
        )}

        <div className="flex flex-col items-start mb-24 space-y-8">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400">
            {isFullPage ? 'Все работы' : 'Последние работы'}
          </span>
          <h2 className="text-5xl md:text-8xl font-serif text-black tracking-tighter">
            {isFullPage ? 'Портфолио' : 'Проекты'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-24">
          {displayProjects.map(project => (
            <ProductCard key={project.id} product={project} onClick={onProductClick} />
          ))}
        </div>

        {!isFullPage && onShowAll && PROJECTS.length > (limit || 0) && (
          <div className="mt-24 flex justify-center">
            <button onClick={onShowAll} className="px-12 py-5 border border-black text-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500">
              Все работы
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
