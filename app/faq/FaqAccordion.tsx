'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
  alwaysOpen?: boolean;
}

interface FaqSection {
  category: string;
  items: FaqItem[];
}

interface FaqAccordionProps {
  sections: FaqSection[];
}

export default function FaqAccordion({ sections }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {sections.map((section) => (
        <div key={section.category}>
          {/* Category heading */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-loadlink-orange text-sm font-bold tracking-widest uppercase">
              {section.category}
            </span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="space-y-4">
            {section.items.map((item, index) => {
              const key = `${section.category}-${index}`;
              const isOpen = !!openItems[key];

              // Static card — always shows content, no accordion
              if (item.alwaysOpen) {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-200 hover:border-loadlink-orange/20 transition-colors duration-300 hover:shadow-md p-8"
                  >
                    <h2 className="text-xl font-bold text-loadlink-navy mb-4 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-loadlink-orange/10 text-loadlink-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {item.question}
                    </h2>
                    <div className="text-gray-600 leading-relaxed space-y-3 pl-9">
                      {item.answer}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-loadlink-orange/40 shadow-md'
                      : 'border-gray-200 hover:border-loadlink-orange/20 hover:shadow-sm'
                  }`}
                >
                  {/* Question / Toggle button */}
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-center justify-between gap-4 p-8 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-loadlink-orange text-white'
                            : 'bg-loadlink-orange/10 text-loadlink-orange'
                        }`}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="text-xl font-bold text-loadlink-navy">{item.question}</span>
                    </span>

                    {/* Chevron */}
                    <svg
                      className={`w-5 h-5 flex-shrink-0 text-loadlink-orange transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer (collapsible) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="text-gray-600 leading-relaxed space-y-3 pl-9 pr-8 pb-8">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
