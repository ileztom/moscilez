
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface CooperationPageProps {
  onBack: () => void;
}

const CooperationPage: React.FC<CooperationPageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // !!! ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ ПЕРЕД ЗАГРУЗКОЙ НА ХОСТИНГ !!!
  const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE'; 
  const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN.includes('YOUR_BOT')) {
      setStatus('error');
      setErrorMessage('Система уведомлений не настроена (требуется TOKEN бота).');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    const text = `<b>🚀 Новая заявка на сотрудничество!</b>\n\n<b>👤 Имя:</b> ${formData.name}\n<b>📞 Телефон:</b> ${formData.phone}\n<b>📧 Email:</b> ${formData.email}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.description || 'Не удалось отправить данные. Проверьте настройки бота.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Сетевая ошибка. Возможно, доступ к API Telegram ограничен вашим провайдером.');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen pt-40 px-6 bg-white flex flex-col items-center text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-10 shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Заявка оставлена</h1>
        <p className="text-xl text-gray-500 font-light max-w-lg mb-12">
          Спасибо за проявленный интерес. Я свяжусь с вами в ближайшее время для обсуждения деталей.
        </p>
        <button onClick={onBack} className="px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all">
          Вернуться на главную
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 md:pt-40 px-6 bg-white animate-fade-in-up">
      <div className="max-w-[1200px] mx-auto pb-32">
        <button onClick={onBack} className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors mb-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          Назад
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-8 block">Форма связи</span>
            <h1 className="text-6xl md:text-8xl font-serif text-black mb-10 tracking-tighter leading-[0.9]">Начнем <br/> восхождение.</h1>
            <p className="text-xl text-gray-500 font-light max-w-md">
              Оставьте свои данные, и я свяжусь с вами для реализации вашего видения.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Имя</label>
              <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ваше имя" className="w-full border-b border-black/10 py-4 text-xl font-light outline-none focus:border-black transition-colors bg-transparent" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Телефон</label>
              <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="+7 (___) ___-__-__" className="w-full border-b border-black/10 py-4 text-xl font-light outline-none focus:border-black transition-colors bg-transparent" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Email</label>
              <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="example@mail.com" className="w-full border-b border-black/10 py-4 text-xl font-light outline-none focus:border-black transition-colors bg-transparent" />
            </div>

            {status === 'error' && <p className="text-red-500 text-sm italic">{errorMessage}</p>}

            <button disabled={status === 'sending'} type="submit" className="bg-black text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gray-800 transition-all disabled:opacity-50 shadow-xl">
              {status === 'sending' ? 'Отправка...' : 'Оставить заявку'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CooperationPage;
