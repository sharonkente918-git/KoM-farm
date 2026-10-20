import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Award, Truck, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: (productId?: string) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, onScrollToCalculator }) => {
  return (
    <section className="relative overflow-hidden border-b border-[#2A241F] bg-[#121110] pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle warm earthy radial background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#C89B6D]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 -translate-y-1/2 rounded-full bg-[#8C5E32]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Zero-Pill Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
              <span>Nairobi, Kenya</span>
              <span aria-hidden="true" className="text-[#554A40]">·</span>
              <span>Regional Hatchery</span>
              <span aria-hidden="true" className="text-[#554A40]">·</span>
              <span>Day-1 Vaccinated</span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.12] [text-wrap:balance]">
              Healthy Day-Old Chicks &amp; Organic Farm Eggs in Nairobi
            </h1>

            {/* Value Proposition */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#BDB2A6] sm:text-lg">
              Supplying commercial poultry farmers, smallholders, and agribusinesses across Kenya and East Africa with disease-free Cobb 500 broilers, Isa Brown layers, hardy Kuroiler, and Improved Kienyeji chicks. Hatching under strict veterinary biosecurity.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/256700719468?text=Hello%20KoM%20Poultry%20Farm,%20I%20am%20interested%20in%20ordering%20day-old%20chicks%20and%20fresh%20eggs."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#C89B6D] px-6 py-3.5 text-sm font-semibold text-[#121110] shadow-md hover:bg-[#D7AA7C] active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5 fill-[#121110] text-[#C89B6D]" />
                <span>Chat on WhatsApp (+256700719468)</span>
              </a>

              <button
                onClick={onScrollToCalculator}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#3A322B] bg-[#1E1A17] px-5 py-3.5 text-sm font-medium text-[#FAF6F0] hover:bg-[#28221D] hover:border-[#C89B6D]/50 transition-colors whitespace-nowrap"
              >
                <span>Calculate Batch Cost</span>
                <ArrowRight className="h-4 w-4 text-[#C89B6D]" />
              </button>
            </div>

            {/* Key trust bullets */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A89E92]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#C89B6D]" />
                <span>Marek’s &amp; Newcastle Pre-Vaccinated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#C89B6D]" />
                <span>Ventilated 48-Hour Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#C89B6D]" />
                <span>Complimentary Brooding Guide</span>
              </div>
            </div>
          </div>

          {/* Right Column: Artisan Hatchery Status Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#342D26] bg-[#1A1714] p-6 shadow-2xl">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#2C251F] pb-4">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
                    Hatchery Live Operations
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#FAF6F0]">
                    KoM Central Facility · Nairobi
                  </h3>
                </div>
                <div className="rounded-md bg-[#25201A] px-2.5 py-1 text-xs font-medium text-[#D4A373] border border-[#3D3328]">
                  Open for Orders
                </div>
              </div>

              {/* Graphical Hatchery Visual Representation (Custom SVG & Stats) */}
              <div className="my-5 rounded-xl border border-[#2B241E] bg-[#13110F] p-4">
                <div className="flex items-center justify-between text-xs text-[#9E9284] mb-2">
                  <span>Weekly Incubation Cycle</span>
                  <span className="font-mono text-[#D4A373] font-semibold">Stage: Optimal 37.5°C</span>
                </div>

                {/* Illustrated Incubation / Egg Tray Graphic */}
                <div className="grid grid-cols-6 gap-2 py-3">
                  {[...Array(12)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-11 rounded-lg border flex items-center justify-center transition-all ${
                        i % 3 === 0 
                          ? 'border-[#C89B6D]/50 bg-[#C89B6D]/15 text-[#D4A373]' 
                          : 'border-[#2D2620] bg-[#1D1916] text-[#695D50]'
                      }`}
                    >
                      <svg className="w-5 h-6" viewBox="0 0 24 28" fill="currentColor">
                        <path d="M12 2C7.5 2 3.5 11 3.5 18C3.5 22.5 7.3 26 12 26C16.7 26 20.5 22.5 20.5 18C20.5 11 16.5 2 12 2Z" />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs border-t border-[#241F1A] pt-3">
                  <span className="text-[#8E8376]">Verified Hatchability</span>
                  <span className="font-mono font-bold text-[#FAF6F0] tabular-nums">98.4% Average</span>
                </div>
              </div>

              {/* Grid of Key Hatchery Specs */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-[#2B241E] bg-[#161311] p-3">
                  <div className="text-xs text-[#8E8376]">Next Dispatch Day</div>
                  <div className="font-display font-semibold text-sm text-[#FAF6F0] mt-0.5">Tuesday &amp; Friday</div>
                  <div className="text-[11px] text-[#C89B6D] mt-1">Nairobi &amp; Regional Hubs</div>
                </div>

                <div className="rounded-lg border border-[#2B241E] bg-[#161311] p-3">
                  <div className="text-xs text-[#8E8376]">Batch Minimum</div>
                  <div className="font-display font-semibold text-sm text-[#FAF6F0] mt-0.5">50 Chicks / 5 Crates</div>
                  <div className="text-[11px] text-[#C89B6D] mt-1">Full Box Partitioning</div>
                </div>
              </div>

              {/* Direct Booking Strip in Card */}
              <div className="mt-5 pt-4 border-t border-[#2A231C]">
                <button
                  onClick={() => onOpenOrderModal()}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#28211B] border border-[#C89B6D]/40 py-2.5 text-xs font-semibold text-[#D4A373] hover:bg-[#C89B6D] hover:text-[#121110] transition-all"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Reserve Upcoming Hatch Batch</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Trust Proof Strip Below Hero (Claim-to-Proof Adjacency) */}
        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[#26201B] pt-10 sm:grid-cols-4 lg:gap-8">
          <div className="border-r border-[#26201B] pr-4 last:border-none">
            <div className="font-display text-2xl font-bold tracking-tight text-[#FAF6F0] sm:text-3xl tabular-nums">
              15,000+
            </div>
            <div className="mt-1 text-xs sm:text-sm text-[#9E9284]">
              Chicks Hatched Weekly
            </div>
          </div>

          <div className="border-r border-[#26201B] pr-4 last:border-none">
            <div className="font-display text-2xl font-bold tracking-tight text-[#FAF6F0] sm:text-3xl tabular-nums">
              98.4%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-[#9E9284]">
              Brooding Livability Rate
            </div>
          </div>

          <div className="border-r border-[#26201B] pr-4 last:border-none">
            <div className="font-display text-2xl font-bold tracking-tight text-[#FAF6F0] sm:text-3xl tabular-nums">
              48 Hours
            </div>
            <div className="mt-1 text-xs sm:text-sm text-[#9E9284]">
              Express Regional Delivery
            </div>
          </div>

          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-[#FAF6F0] sm:text-3xl tabular-nums">
              100%
            </div>
            <div className="mt-1 text-xs sm:text-sm text-[#9E9284]">
              Veterinary Certified Stock
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
