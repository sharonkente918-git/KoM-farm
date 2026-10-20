import React, { useState } from 'react';
import { FAQS } from '../data/poultryData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 border-b border-[#2A241F] bg-[#121110]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-[#554A40]">·</span>
            <span>Hatchery Guidelines</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-4xl">
            Everything You Need to Know
          </h2>
          <p className="mt-3 text-sm text-[#A89E92]">
            Got questions regarding chick delivery, vaccination certificates, or brooder preparation? Find answers below.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#2D2620] bg-[#171412] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-[#FAF6F0] hover:text-[#C89B6D] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#C89B6D] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#BDB2A6] leading-relaxed border-t border-[#241F1A] pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
