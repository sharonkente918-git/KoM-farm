import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#26201B] bg-[#0E0D0C] text-[#A89E92] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1: Wordmark & Bio */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C89B6D] text-[#121110] font-black text-sm">
                KoM
              </div>
              <span className="font-display font-bold text-lg text-[#FAF6F0]">
                KoM Poultry Farm
              </span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[#8E8376]">
              Quality-first poultry genetics, day-old chicks, organic eggs, and commercial feed distribution based in Nairobi, Kenya.
            </p>
            <div className="mt-4 text-xs text-[#7A6F62]">
              Biosecurity Registration &amp; Veterinary Approved
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C89B6D] mb-3">
              Breeds &amp; Products
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-[#FAF6F0] transition-colors">
                  Kuroiler Dual-Purpose Chicks
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FAF6F0] transition-colors">
                  Cobb 500 / Ross 308 Broilers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FAF6F0] transition-colors">
                  Isa Brown Commercial Layers
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FAF6F0] transition-colors">
                  Improved Kienyeji (KALRO)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#FAF6F0] transition-colors">
                  Farm-Fresh Brown Table Eggs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Tools */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C89B6D] mb-3">
              Farmer Resources
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#calculator" className="hover:text-[#FAF6F0] transition-colors">
                  Flock &amp; Feed Cost Calculator
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#FAF6F0] transition-colors">
                  Vaccination Protocols
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-[#FAF6F0] transition-colors">
                  Brooding Preparation Checklist
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#FAF6F0] transition-colors">
                  Smallholder Case Studies
                </a>
              </li>
              <li>
                <a href="#order-section" className="hover:text-[#FAF6F0] transition-colors">
                  Wholesale Supply Contracts
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C89B6D] mb-3">
              Contact &amp; Dispatch
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#C89B6D] shrink-0 mt-0.5" />
                <span>Nairobi, Kenya (Regional East Africa Dispatch)</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-[#C89B6D] shrink-0 mt-0.5" />
                <a href="tel:+256700719468" className="hover:text-[#FAF6F0] text-[#FAF6F0] font-semibold">
                  +256 700 719 468
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                <a 
                  href="https://wa.me/256700719468?text=Hello%20KoM%20Poultry%20Farm" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#FAF6F0]"
                >
                  WhatsApp: +256 700 719 468
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 text-[#C89B6D] shrink-0 mt-0.5" />
                <span>Mon – Sat: 7:00 AM – 6:30 PM EAT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-12 pt-6 border-t border-[#1C1815] flex flex-col sm:flex-row items-center justify-between text-xs text-[#73685C] gap-3">
          <div>
            &copy; {new Date().getFullYear()} KoM Poultry Farm. All rights reserved. Nairobi, Kenya.
          </div>
          <div className="flex items-center gap-4">
            <a href="#standards" className="hover:text-[#FAF6F0] transition-colors">Biosecurity Code</a>
            <span>·</span>
            <a href="#order-section" className="hover:text-[#FAF6F0] transition-colors">Dispatch Terms</a>
            <span>·</span>
            <a href="tel:+256700719468" className="hover:text-[#FAF6F0] transition-colors">Direct Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
