import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Package, AlertCircle } from 'lucide-react';

interface CalculatorProps {
  onPreloadOrder: (birdType: string, quantity: number) => void;
}

export const PoultryCalculator: React.FC<CalculatorProps> = ({ onPreloadOrder }) => {
  const [birdType, setBirdType] = useState<'broiler' | 'kuroiler' | 'layer'>('broiler');
  const [flockSize, setFlockSize] = useState<number>(300);

  // Constants for East African market conditions (KES)
  const broilerConfig = {
    name: 'Commercial Broilers (Cobb 500 / Ross 308)',
    chickPrice: 105,
    cycleDays: 40,
    feedPerBirdKg: 4.2,
    feedPricePer50kg: 3600,
    vetCostPerBird: 15,
    expectedWeightKg: 2.35,
    sellingPricePerBird: 530,
    mortalityEstimateRate: 0.03,
  };

  const kuroilerConfig = {
    name: 'Kuroiler / Improved Kienyeji',
    chickPrice: 110,
    cycleDays: 140,
    feedPerBirdKg: 9.5,
    feedPricePer50kg: 3300,
    vetCostPerBird: 25,
    expectedWeightKg: 2.8,
    sellingPricePerBird: 950,
    mortalityEstimateRate: 0.035,
  };

  const layerConfig = {
    name: 'Commercial Layers (Isa Brown)',
    chickPrice: 125,
    cycleDays: 130,
    feedPerBirdKg: 7.8,
    feedPricePer50kg: 3400,
    vetCostPerBird: 40,
    layingRatePeak: 0.88,
    eggCratePrice: 480,
    mortalityEstimateRate: 0.04,
  };

  const currentChickPrice = birdType === 'broiler' ? broilerConfig.chickPrice : birdType === 'kuroiler' ? kuroilerConfig.chickPrice : layerConfig.chickPrice;
  const currentFeedPerBirdKg = birdType === 'broiler' ? broilerConfig.feedPerBirdKg : birdType === 'kuroiler' ? kuroilerConfig.feedPerBirdKg : layerConfig.feedPerBirdKg;
  const currentFeedPricePer50kg = birdType === 'broiler' ? broilerConfig.feedPricePer50kg : birdType === 'kuroiler' ? kuroilerConfig.feedPricePer50kg : layerConfig.feedPricePer50kg;
  const currentVetCostPerBird = birdType === 'broiler' ? broilerConfig.vetCostPerBird : birdType === 'kuroiler' ? kuroilerConfig.vetCostPerBird : layerConfig.vetCostPerBird;
  const currentMortalityRate = birdType === 'broiler' ? broilerConfig.mortalityEstimateRate : birdType === 'kuroiler' ? kuroilerConfig.mortalityEstimateRate : layerConfig.mortalityEstimateRate;

  const survivingBirds = Math.round(flockSize * (1 - currentMortalityRate));

  // Costs
  const chickCost = flockSize * currentChickPrice;
  const totalFeedKg = flockSize * currentFeedPerBirdKg;
  const feedBags = Math.ceil(totalFeedKg / 50);
  const feedCost = feedBags * currentFeedPricePer50kg;
  const vetCost = flockSize * currentVetCostPerBird;
  const totalInvestment = chickCost + feedCost + vetCost;

  // Revenue & Margins
  let estimatedRevenue = 0;
  let revenueSubtitle = '';

  if (birdType === 'broiler') {
    estimatedRevenue = survivingBirds * broilerConfig.sellingPricePerBird;
    revenueSubtitle = `${survivingBirds} mature broilers @ KES ${broilerConfig.sellingPricePerBird} avg in 40 days`;
  } else if (birdType === 'kuroiler') {
    estimatedRevenue = survivingBirds * kuroilerConfig.sellingPricePerBird;
    revenueSubtitle = `${survivingBirds} live birds @ KES ${kuroilerConfig.sellingPricePerBird} indigenous market value`;
  } else {
    // Layer: monthly egg revenue during peak lay (88% of surviving flock)
    const dailyEggs = Math.round(survivingBirds * layerConfig.layingRatePeak);
    const monthlyEggs = dailyEggs * 30;
    const monthlyCrates = Math.floor(monthlyEggs / 30);
    estimatedRevenue = monthlyCrates * layerConfig.eggCratePrice;
    revenueSubtitle = `~${monthlyCrates} crates/month at 88% peak lay (@ KES ${layerConfig.eggCratePrice}/crate)`;
  }

  const projectedGrossMargin = birdType === 'layer'
    ? estimatedRevenue // Monthly cashflow for layers
    : estimatedRevenue - totalInvestment; // Net margin for meat batches

  return (
    <section id="calculator" className="py-16 lg:py-24 border-b border-[#2A241F] bg-[#121110]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
            <span>Farm Planning Tool</span>
            <span aria-hidden="true" className="text-[#554A40]">·</span>
            <span>Commercial Economics</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-4xl">
            Flock Feed &amp; Profitability Estimator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#BDB2A6]">
            Estimate your required day-old chicks, feed bags (50kg), vaccination outlay, and projected revenues based on real Nairobi market data.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-[#2F2721] bg-[#181513] p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Select Bird Breed */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#C89B6D] mb-3">
                1. Select Poultry Enterprise
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setBirdType('broiler')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    birdType === 'broiler'
                      ? 'border-[#C89B6D] bg-[#29221C] text-[#FAF6F0]'
                      : 'border-[#2F2721] bg-[#141210] text-[#9E9284] hover:border-[#44382F]'
                  }`}
                >
                  <div className="font-semibold text-sm">Broilers</div>
                  <div className="text-xs text-[#C89B6D] mt-0.5">38 - 42 Day Meat</div>
                  <div className="text-[11px] text-[#7A6F62] mt-1">Cobb 500 Fast Growth</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBirdType('kuroiler')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    birdType === 'kuroiler'
                      ? 'border-[#C89B6D] bg-[#29221C] text-[#FAF6F0]'
                      : 'border-[#2F2721] bg-[#141210] text-[#9E9284] hover:border-[#44382F]'
                  }`}
                >
                  <div className="font-semibold text-sm">Kuroiler / Kienyeji</div>
                  <div className="text-xs text-[#C89B6D] mt-0.5">Dual Purpose</div>
                  <div className="text-[11px] text-[#7A6F62] mt-1">Hardy &amp; High Meat Value</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBirdType('layer')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    birdType === 'layer'
                      ? 'border-[#C89B6D] bg-[#29221C] text-[#FAF6F0]'
                      : 'border-[#2F2721] bg-[#141210] text-[#9E9284] hover:border-[#44382F]'
                  }`}
                >
                  <div className="font-semibold text-sm">Commercial Layers</div>
                  <div className="text-xs text-[#C89B6D] mt-0.5">Table Egg Flock</div>
                  <div className="text-[11px] text-[#7A6F62] mt-1">Isa Brown (300+ Eggs/yr)</div>
                </button>
              </div>
            </div>

            {/* Step 2: Flock Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#C89B6D]">
                  2. Flock Quantity: <span className="text-[#FAF6F0] font-mono text-base font-bold tabular-nums">{flockSize} Birds</span>
                </label>
                <span className="text-xs text-[#8E8376]">Min: 50 · Max: 5,000</span>
              </div>

              {/* Range slider */}
              <input
                type="range"
                min="50"
                max="2500"
                step="50"
                value={flockSize}
                onChange={(e) => setFlockSize(Number(e.target.value))}
                className="w-full h-2 bg-[#28211B] rounded-lg appearance-none cursor-pointer accent-[#C89B6D]"
              />

              {/* Quick preset buttons */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[50, 100, 200, 300, 500, 1000, 2000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setFlockSize(preset)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors ${
                      flockSize === preset
                        ? 'bg-[#C89B6D] text-[#121110] border-[#C89B6D] font-bold'
                        : 'bg-[#151210] text-[#A89E92] border-[#2E2721] hover:text-[#FAF6F0]'
                    }`}
                  >
                    {preset} Birds
                  </button>
                ))}
              </div>
            </div>

            {/* Breakdown of costs */}
            <div className="pt-6 border-t border-[#29221C]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C89B6D] mb-4">
                Estimated Input Breakdown (KES)
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141210] border border-[#27211B]">
                  <span className="text-[#A89E92]">
                    Chicks Acquisition ({flockSize} × KES {currentChickPrice})
                  </span>
                  <span className="font-mono font-semibold text-[#FAF6F0] tabular-nums">
                    KES {chickCost.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141210] border border-[#27211B]">
                  <span className="text-[#A89E92]">
                    Feed Requirement (~{feedBags} bags of 50kg, total {totalFeedKg.toFixed(0)}kg)
                  </span>
                  <span className="font-mono font-semibold text-[#FAF6F0] tabular-nums">
                    KES {feedCost.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#141210] border border-[#27211B]">
                  <span className="text-[#A89E92]">
                    Vaccination, Disinfectants &amp; Brooding Heating
                  </span>
                  <span className="font-mono font-semibold text-[#FAF6F0] tabular-nums">
                    KES {vetCost.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Projection Card (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-[#3A3026] bg-[#1B1714] p-6 sm:p-8 shadow-xl">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C89B6D] mb-2">
              Financial &amp; Production Summary
            </div>
            <h3 className="font-display text-xl font-bold text-[#FAF6F0]">
              {flockSize} {birdType === 'broiler' ? 'Broilers' : birdType === 'kuroiler' ? 'Kuroiler' : 'Layers'}
            </h3>

            {/* Total Input Capital Box */}
            <div className="mt-6 p-4 rounded-xl border border-[#302720] bg-[#14110F]">
              <div className="text-xs text-[#8E8376]">Estimated Total Input Outlay</div>
              <div className="font-display text-3xl font-black text-[#FAF6F0] mt-1 tabular-nums">
                KES {totalInvestment.toLocaleString()}
              </div>
              <div className="mt-1 text-[11px] text-[#A89E92]">
                Includes {flockSize} vaccinated chicks + {feedBags} bags feed + brooding care.
              </div>
            </div>

            {/* Projected Output Revenue */}
            <div className="mt-4 p-4 rounded-xl border border-[#C89B6D]/40 bg-[#241E18]">
              <div className="text-xs text-[#C89B6D] font-medium">
                {birdType === 'layer' ? 'Projected Monthly Egg Revenue (Peak)' : 'Estimated Market Gross Revenue'}
              </div>
              <div className="font-display text-3xl font-black text-[#E8BD93] mt-1 tabular-nums">
                KES {estimatedRevenue.toLocaleString()}
              </div>
              <div className="mt-1 text-xs text-[#FAF6F0]">
                {revenueSubtitle}
              </div>
            </div>

            {/* Projected Margin Indicator */}
            <div className="mt-4 p-4 rounded-xl border border-[#2F2721] bg-[#14110F] flex items-center justify-between">
              <div>
                <div className="text-xs text-[#8E8376]">
                  {birdType === 'layer' ? 'Monthly Operational Surplus' : 'Estimated Net Farm Margin'}
                </div>
                <div className="font-display text-lg font-bold text-[#FAF6F0] tabular-nums mt-0.5">
                  KES {projectedGrossMargin.toLocaleString()}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-[#C89B6D] font-semibold bg-[#26201A] px-2.5 py-1.5 rounded-lg border border-[#3D3328]">
                <TrendingUp className="h-4 w-4" />
                <span>Profitable Cycle</span>
              </div>
            </div>

            {/* Action button */}
            <div className="mt-6 pt-4 border-t border-[#2C241D]">
              <button
                type="button"
                onClick={() => onPreloadOrder(birdType, flockSize)}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#C89B6D] py-3.5 px-4 text-xs sm:text-sm font-semibold text-[#121110] hover:bg-[#D7AA7C] active:scale-95 transition-all shadow-md"
              >
                <span>Book This {flockSize}-Bird Batch Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-3 text-center">
                <a
                  href={`https://wa.me/256700719468?text=${encodeURIComponent(
                    `Hello KoM Poultry Farm, I ran your flock calculator for ${flockSize} ${birdType} chicks (Est investment KES ${totalInvestment.toLocaleString()}). I would like to confirm dispatch to Nairobi.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#BDB2A6] hover:text-[#FAF6F0] underline decoration-[#C89B6D]/50"
                >
                  Or discuss this flock setup on WhatsApp directly
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
