
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  role: string;
  description: string;
  fullStory?: string;
  year: string;
  category: 'Strategy' | 'Technology' | 'Design' | 'Advisory' | 'Investments';
  imageUrl: string;
  outcomes: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'project', project: Project }
  | { type: 'journal', article: JournalArticle }
  | { type: 'cooperation' }
  | { type: 'all-projects' }
  | { type: 'all-journal' };
