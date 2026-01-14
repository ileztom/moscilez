
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome. I am the Moscilez Concierge. How can I assist your ascent today?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);
    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
    } catch (error) {} finally { setIsThinking(false); }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-white border border-black shadow-2xl w-[90vw] sm:w-[400px] h-[600px] mb-6 flex flex-col overflow-hidden animate-slide-up-fade">
          <div className="bg-black p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-serif italic text-xl tracking-tighter">Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-white" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-6 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-black border border-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && <div className="flex justify-start"><div className="bg-gray-100 p-4 border border-gray-200 flex gap-1"><div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-75"></div><div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce delay-150"></div></div></div>}
          </div>

          <div className="p-6 bg-white border-t border-black/10">
            <div className="flex gap-4">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyPress} placeholder="Message Concierge..." className="flex-1 border-b border-black py-4 text-sm outline-none bg-transparent placeholder-gray-300" />
              <button onClick={handleSend} disabled={!inputValue.trim() || isThinking} className="bg-black text-white px-6 hover:bg-gray-800 disabled:opacity-30"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></button>
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setIsOpen(!isOpen)} className="bg-black text-white w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300">
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg> : <span className="font-serif italic text-2xl">M</span>}
      </button>
    </div>
  );
};

export default Assistant;
