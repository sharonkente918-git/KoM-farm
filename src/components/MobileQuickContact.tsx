import React from 'react';
import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';

interface MobileQuickContactProps {
  onOpenOrder: () => void;
}

export const MobileQuickContact: React.FC<MobileQuickContactProps> = ({ onOpenOrder }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#161311]/95 backdrop-blur-md border-t border-[#2F2721] px-3 py-2">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href="tel:+256700719468"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#251F1A] border border-[#3A322B] py-2 px-2 text-xs font-semibold text-[#FAF6F0] active:scale-95 transition-all"
        >
          <Phone className="h-3.5 w-3.5 text-[#C89B6D]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/256700719468?text=Hello%20KoM%20Poultry%20Farm,%20I%20would%20like%20to%20order%20chicks%20or%20eggs"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#25D366] py-2 px-2 text-xs font-bold text-[#121110] active:scale-95 transition-all"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Order Now Button */}
        <button
          onClick={onOpenOrder}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#C89B6D] py-2 px-2 text-xs font-bold text-[#121110] active:scale-95 transition-all"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          <span>Order</span>
        </button>
      </div>
    </div>
  );
};
