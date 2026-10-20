import React from 'react';
import { TESTIMONIALS } from '../data/poultryData';
import { Quote, Award, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 lg:py-24 border-b border-[#2A241F] bg-[#121110]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
            <span>Field Evidence &amp; Proof</span>
            <span aria-hidden="true" className="text-[#554A40]">·</span>
            <span>Commercial Smallholders</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-4xl">
            Success Stories from Fellow Farmers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#BDB2A6]">
            Real outcomes from poultry producers in Kiambu, Nakuru, Busia, and greater Nairobi who run batches with KoM Poultry Farm stock.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#2E2721] bg-[#181513] p-6 lg:p-7 shadow-sm"
            >
              <div>
                {/* Attributable Outcome Banner */}
                <div className="mb-4 rounded-lg border border-[#3A3127] bg-[#221C17] p-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#C89B6D]">
                    Verified Metric Outcome
                  </div>
                  <div className="font-display text-xs font-bold text-[#FAF6F0] mt-0.5">
                    {t.outcome}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#CDC4B9] italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-[#27211B] flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-[#FAF6F0]">
                    {t.name}
                  </h4>
                  <div className="text-xs text-[#8E8376]">
                    {t.role}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#C89B6D] mt-0.5">
                    <MapPin className="h-3 w-3" />
                    <span>{t.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] text-[#8E8376] block">Flock</span>
                  <span className="font-mono text-xs font-bold text-[#FAF6F0] tabular-nums">
                    {t.flockSize}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
