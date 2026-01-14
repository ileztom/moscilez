
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#FFFFFF]">
      <div className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32">
        <div className="md:w-1/3">
          <h2 className="text-5xl md:text-7xl font-serif text-black leading-[0.9] tracking-tighter">
            Сферы <br/> влияния.
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-xl md:text-2xl text-black font-light leading-relaxed mb-8">
            Moscilez работает на пересечении высокоуровневой стратегии и авангардного дизайна. Мы не просто решаем проблемы; мы переосмысляем потребность.
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed mb-8">
            Обладая опытом в архитектуре сложных систем и креативном руководстве, Moscilez привносит уникальный «менталитет вершины» в каждый проект.
          </p>
          <div className="w-full h-[500px] overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 shadow-2xl">
             <img 
                src="https://live.staticflickr.com/65535/55037916548_347bee9a16_b.jpg" 
                alt="Профессиональный рабочий процесс" 
                className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 lg:order-1 relative h-[600px] lg:h-auto overflow-hidden">
           <img 
             src="https://live.staticflickr.com/65535/55037736361_8172e167df_b.jpg" 
             alt="Интерьер офиса" 
             className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:brightness-100"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-black text-white">
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-6">Стратегическое мышление</span>
           <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
             Абсолютная <br/> точность.
           </h3>
           <p className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
             Успех не случаен. Он спроектирован. Мы гарантируем, что каждое ваше видение достигнет своего наивысшего потенциала через строгий анализ и безупречное исполнение.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
