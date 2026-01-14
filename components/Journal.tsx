
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
  limit?: number;
  onShowAll?: () => void;
  isFullPage?: boolean;
  onBack?: () => void;
}

const Journal: React.FC<JournalProps> = ({ 
  onArticleClick, 
  limit, 
  onShowAll, 
  isFullPage = false,
  onBack 
}) => {
  const displayArticles = limit ? JOURNAL_ARTICLES.slice(0, limit) : JOURNAL_ARTICLES;

  return (
    <section id="journal" className={`bg-[#F5F2EB] px-6 md:px-12 ${isFullPage ? 'pt-32 pb-40' : 'py-32'}`}>
      <div className="max-w-[1800px] mx-auto">
        {isFullPage && onBack && (
          <button onClick={onBack} className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            Назад
          </button>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6D1C7]">
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">
                  {isFullPage ? 'Все статьи' : 'Последние статьи'}
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">Журнал</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {displayArticles.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-left" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#EBE7DE]">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <span className="text-xs font-medium uppercase tracking-widest text-[#A8A29E] mb-3">{article.date}</span>
                        <h3 className="text-2xl font-serif text-[#2C2A26] mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4">{article.title}</h3>
                        <p className="text-[#5D5A53] font-light leading-relaxed">{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>

        {!isFullPage && onShowAll && JOURNAL_ARTICLES.length > (limit || 0) && (
          <div className="mt-20 flex justify-center">
            <button onClick={onShowAll} className="px-12 py-5 border border-[#2C2A26] text-[#2C2A26] text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#2C2A26] hover:text-[#F5F2EB] transition-all duration-500">
              Все статьи
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Journal;
