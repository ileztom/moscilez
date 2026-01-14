
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CooperationPage from './components/CooperationPage';
import { Project, JournalArticle, ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view.type]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (view.type !== 'home') {
      setView({ type: 'home' });
      setTimeout(() => scrollToSection(targetId), 100);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navigateToCooperation = () => setView({ type: 'cooperation' });
  const navigateToAllProjects = () => setView({ type: 'all-projects' });
  const navigateToAllJournal = () => setView({ type: 'all-journal' });

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans text-[#000000] selection:bg-[#000000] selection:text-[#FFFFFF]">
      <Navbar onNavClick={handleNavClick} />
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero />
            <ProductGrid 
              limit={3} 
              onProductClick={(p) => setView({ type: 'project', project: p })} 
              onShowAll={navigateToAllProjects}
            />
            <About />
            <Journal 
              limit={3}
              onArticleClick={(a) => setView({ type: 'journal', article: a })} 
              onShowAll={navigateToAllJournal}
            />
          </>
        )}

        {view.type === 'all-projects' && (
          <ProductGrid 
            isFullPage
            onProductClick={(p) => setView({ type: 'project', project: p })}
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'all-journal' && (
          <Journal 
            isFullPage
            onArticleClick={(a) => setView({ type: 'journal', article: a })}
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'project' && (
          <ProductDetail 
            project={view.project} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'cooperation' && (
          <CooperationPage onBack={() => setView({ type: 'home' })} />
        )}
      </main>

      <Footer onLinkClick={handleNavClick} onCooperationClick={navigateToCooperation} />
    </div>
  );
}

export default App;
