import React, { useState } from 'react';
import { POULTRY_PRODUCTS, PoultryProduct } from '../data/poultryData';
import { Check, MessageCircle, ShoppingBag, ArrowUpRight, ShieldCheck, Calendar } from 'lucide-react';

interface ProductsCatalogProps {
  onSelectProductForOrder: (product: PoultryProduct) => void;
}

export const ProductsCatalog: React.FC<ProductsCatalogProps> = ({ onSelectProductForOrder }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'chicks' | 'eggs' | 'feed' | 'equipment'>('all');
  const [currency, setCurrency] = useState<'KES' | 'UGX'>('KES');

  const filteredProducts = activeCategory === 'all'
    ? POULTRY_PRODUCTS
    : POULTRY_PRODUCTS.filter(p => p.category === activeCategory);

  const formatPrice = (priceKes: number, priceUgx: number) => {
    if (currency === 'KES') {
      return `KES ${priceKes.toLocaleString()}`;
    }
    return `UGX ${priceUgx.toLocaleString()}`;
  };

  return (
    <section id="products" className="py-16 lg:py-24 border-b border-[#2A241F] bg-[#141210]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
              <span>Verified Genetics &amp; Fresh Harvest</span>
              <span aria-hidden="true" className="text-[#554A40]">·</span>
              <span>Nairobi Facility</span>
            </div>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-4xl">
              Poultry Breeds &amp; Farm Products
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#A89E92]">
              Select from commercial meat broilers, prolific brown layers, indigenous dual-purpose birds, and daily harvested table eggs.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1 bg-[#1E1B18] border border-[#332B25] rounded-lg self-start md:self-auto">
            <span className="text-xs px-2 text-[#8E8376] font-medium">Currency:</span>
            <button
              onClick={() => setCurrency('KES')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                currency === 'KES'
                  ? 'bg-[#C89B6D] text-[#121110]'
                  : 'text-[#B2A699] hover:text-[#FAF6F0]'
              }`}
            >
              KES (Kenya)
            </button>
            <button
              onClick={() => setCurrency('UGX')}
              className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors ${
                currency === 'UGX'
                  ? 'bg-[#C89B6D] text-[#121110]'
                  : 'text-[#B2A699] hover:text-[#FAF6F0]'
              }`}
            >
              UGX (Uganda)
            </button>
          </div>
        </div>

        {/* Category Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center gap-2 p-1 bg-[#191613] border border-[#2D2620] rounded-xl mb-10 w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-[#C89B6D] text-[#121110] font-semibold shadow-sm'
                : 'text-[#B0A598] hover:text-[#FAF6F0]'
            }`}
          >
            All Offerings ({POULTRY_PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveCategory('chicks')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'chicks'
                ? 'bg-[#C89B6D] text-[#121110] font-semibold shadow-sm'
                : 'text-[#B0A598] hover:text-[#FAF6F0]'
            }`}
          >
            Day-Old Chicks (4 Breeds)
          </button>
          <button
            onClick={() => setActiveCategory('eggs')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'eggs'
                ? 'bg-[#C89B6D] text-[#121110] font-semibold shadow-sm'
                : 'text-[#B0A598] hover:text-[#FAF6F0]'
            }`}
          >
            Table &amp; Hatching Eggs
          </button>
          <button
            onClick={() => setActiveCategory('feed')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'feed'
                ? 'bg-[#C89B6D] text-[#121110] font-semibold shadow-sm'
                : 'text-[#B0A598] hover:text-[#FAF6F0]'
            }`}
          >
            Poultry Feeds
          </button>
          <button
            onClick={() => setActiveCategory('equipment')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'equipment'
                ? 'bg-[#C89B6D] text-[#121110] font-semibold shadow-sm'
                : 'text-[#B0A598] hover:text-[#FAF6F0]'
            }`}
          >
            Brooding Gear
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const waText = encodeURIComponent(
              `Hello KoM Poultry Farm! I want to order/inquire about: ${product.name} (Min order: ${product.minOrder} ${product.unit}). Please confirm availability and delivery to Nairobi/my location.`
            );
            const waUrl = `https://wa.me/256700719468?text=${waText}`;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-xl border border-[#2E2721] bg-[#181513] p-6 hover:border-[#C89B6D]/60 transition-all shadow-sm"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="text-[#C89B6D] font-medium tracking-wide">
                      {product.breedOrType}
                    </span>
                    {product.badge && (
                      <span className="text-[11px] font-semibold text-[#E5B584] bg-[#29221C] border border-[#3E3329] px-2 py-0.5 rounded">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-[#FAF6F0] group-hover:text-[#E8BD93] transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline gap-2 border-b border-[#27211B] pb-4">
                    <span className="font-display text-2xl font-black text-[#FAF6F0] tabular-nums">
                      {formatPrice(product.priceKes, product.priceUgx)}
                    </span>
                    <span className="text-xs text-[#8E8376]">
                      {product.unit}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs leading-relaxed text-[#BDB2A6]">
                    {product.description}
                  </p>

                  {/* Specs List */}
                  <div className="mt-5 space-y-2">
                    {product.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#9E9284]">
                        <Check className="h-3.5 w-3.5 text-[#C89B6D] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule & Min Order Unboxed Info */}
                  <div className="mt-6 pt-4 border-t border-[#26201B] flex flex-col gap-1.5 text-xs text-[#8E8376]">
                    <div className="flex items-center justify-between">
                      <span>Minimum Order</span>
                      <span className="text-[#E0D8CE] font-semibold tabular-nums">
                        {product.minOrder} {product.unit}
                      </span>
                    </div>
                    {product.hatchSchedule && (
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1 text-[#C89B6D]">
                          <Calendar className="h-3 w-3" />
                          <span>Hatch Schedule:</span>
                        </span>
                        <span className="text-[#BDB2A6]">{product.hatchSchedule}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-[#26201B] grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectProductForOrder(product)}
                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[#C89B6D] py-2.5 px-3 text-xs font-semibold text-[#121110] hover:bg-[#D7AA7C] active:scale-95 transition-all whitespace-nowrap"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Book Batch</span>
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-lg border border-[#382E26] bg-[#1E1A17] py-2.5 px-3 text-xs font-medium text-[#FAF6F0] hover:bg-[#2A231C] hover:border-[#C89B6D]/50 transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quality Notice Banner */}
        <div className="mt-12 rounded-xl border border-[#332A22] bg-[#191512] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C89B6D]/15 text-[#C89B6D]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#FAF6F0]">
                Commercial Quantity Discounts Available
              </h4>
              <p className="text-xs text-[#A89E92]">
                Placing a bulk order of 1,000+ chicks or weekly commercial egg supply? Contact our Nairobi dispatch desk for customized contract pricing.
              </p>
            </div>
          </div>
          <a
            href="tel:+256700719468"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-[#121110] bg-[#C89B6D] rounded-lg hover:bg-[#D7AA7C] transition-colors"
          >
            Direct Desk: +256 700 719 468
          </a>
        </div>

      </div>
    </section>
  );
};
