'use client';

import { useState } from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

export default function FAQ({ question, answer }: FAQProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden transition-colors hover:border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
      >
        <span className="font-semibold text-brand-dark text-[15px] pr-4">
          {question}
        </span>
        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          open ? 'bg-brand-gold rotate-180' : 'bg-gray-100'
        }`}>
          <svg
            className={`w-4 h-4 transition-colors ${open ? 'text-brand-dark' : 'text-brand-gray'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-sm text-brand-gray leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}
