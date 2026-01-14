
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from '../constants';

const getSystemInstruction = () => {
  const projectContext = PROJECTS.map(p => 
    `- ${p.name} (${p.year}): ${p.description} Role: ${p.role}`
  ).join('\n');

  return `You are the AI Concierge for "Moscilez", a high-performance personal brand specializing in Strategy, Technology, and Design. 
  Your tone is authoritative, highly professional, direct, and slightly mysterious—reminiscent of a top-tier consultancy partner.
  
  Moscilez's core philosophy is "The Winner's Peak": absolute excellence and strategic precision.
  
  Here is the portfolio of projects you can speak about:
  ${projectContext}
  
  When people ask about working with Moscilez, emphasize excellence and the "peak mentality."
  Keep answers brief but impactful (1-2 sentences).`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    // Fix: Initializing GoogleGenAI with process.env.API_KEY directly inside the function
    // as per the requirement to ensure the most up-to-date key is used.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    // Fix: Ensure we use the .text property (not a method) and handle potential undefined
    return result.text || "I apologize, I am unable to formulate a response at this moment.";
  } catch (error) {
    console.error("Moscilez Concierge Error:", error);
    return "The server is currently processing at high capacity. Please try again.";
  }
};
