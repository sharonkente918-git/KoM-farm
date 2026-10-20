import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: (productId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Day-Old Chicks', href: '#products' },
    { label: 'Table Eggs & Feed', href: '#products' },
    { label: 'Flock Calculator', href: '#calculator' },
    { label: 'Biosecurity Standards', href: '#standards' },
    { label: 'Farmer Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2A241F] bg-[#141210]/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#FAF6F0] whitespace-nowrap shrink-0"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C89B6D] text-[#121110] font-black text-base shadow-sm transition-transform group-hover:scale-105">
            KoM
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-[#FAF6F0]">
            KoM Poultry Farm
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#C2B7AC]">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="whitespace-nowrap shrink-0 transition-colors hover:text-[#FAF6F0] hover:underline underline-offset-8 decoration-[#C89B6D]/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:+256700719468"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#141210] bg-[#C89B6D] rounded-lg hover:bg-[#D7AA7C] active:scale-95 transition-all whitespace-nowrap shrink-0 shadow-sm"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>+256 700 719 468</span>
          </a>
          <button
            onClick={() => onOpenOrderModal()}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#FAF6F0] bg-[#221D19] border border-[#3A322B] rounded-lg hover:bg-[#2A241F] hover:border-[#C89B6D]/40 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Order Batch</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="tel:+256700719468"
            aria-label="Call KoM Poultry Farm"
            className="p-2 text-[#C89B6D] bg-[#221D19] border border-[#3A322B] rounded-lg"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#C2B7AC] hover:text-[#FAF6F0] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#2A241F] bg-[#161412] px-4 pt-3 pb-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-medium text-[#C2B7AC] hover:text-[#FAF6F0] border-b border-[#241F1B]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="tel:+256700719468"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#141210] bg-[#C89B6D] rounded-lg"
              >
                <Phone className="h-4 w-4" />
                <span>Call +256 700 719 468</span>
              </a>
              <a
                href="https://wa.me/256700719468?text=Hello%20KoM%20Poultry%20Farm,%20I%20would%20like%20to%20order%20chicks%20or%20eggs"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#FAF6F0] bg-[#221D19] border border-[#3A322B] rounded-lg"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
