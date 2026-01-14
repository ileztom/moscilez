
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project } from '../types';

interface ProductCardProps {
  product: Project;
  onClick: (project: Project) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="group flex flex-col gap-8 cursor-pointer" onClick={() => onClick(product)}>
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-black">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-in-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="bg-white text-black px-8 py-4 font-bold text-[10px] uppercase tracking-[0.3em]">
                Смотреть кейс
            </span>
        </div>
      </div>
      
      <div className="flex justify-between items-start">
        <div className="max-w-[70%]">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">{product.category} — {product.year}</span>
          <h3 className="text-3xl font-serif text-black group-hover:text-gray-500 transition-colors">{product.name}</h3>
        </div>
        <div className="w-10 h-10 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
