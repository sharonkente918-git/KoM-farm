export interface PoultryProduct {
  id: string;
  name: string;
  category: 'chicks' | 'eggs' | 'feed' | 'equipment';
  breedOrType: string;
  priceKes: number;
  priceUgx: number;
  unit: string;
  minOrder: number;
  description: string;
  specs: string[];
  badge?: string;
  inStock: boolean;
  hatchSchedule?: string;
}

export const POULTRY_PRODUCTS: PoultryProduct[] = [
  {
    id: 'kuroiler-chicks',
    name: 'Kuroiler Day-Old Chicks',
    category: 'chicks',
    breedOrType: 'Dual-Purpose Hybrid',
    priceKes: 110,
    priceUgx: 3100,
    unit: 'per chick',
    minOrder: 50,
    description: 'Vigorous indigenous-hardy dual-purpose birds. Excellent scavenging ability, high disease resistance, and rapid growth.',
    specs: [
      'Day 1 Marek’s & Newcastle vaccinated',
      'Mature weight: 2.8kg - 3.5kg in 4-5 months',
      'Egg production: 180 - 220 large brown eggs/year',
      '98.5% batch livability guarantee'
    ],
    badge: 'Best Seller for Smallholders',
    inStock: true,
    hatchSchedule: 'Hatching every Tuesday & Friday'
  },
  {
    id: 'broiler-chicks',
    name: 'Cobb 500 / Ross 308 Broilers',
    category: 'chicks',
    breedOrType: 'Commercial Meat Breed',
    priceKes: 105,
    priceUgx: 2950,
    unit: 'per chick',
    minOrder: 50,
    description: 'World-renowned fast-growth commercial broilers with unmatched feed conversion ratio (FCR 1.6-1.7) and high breast meat yield.',
    specs: [
      'Ready for market in 35 - 42 days',
      'Average target live weight: 2.2kg - 2.6kg',
      'Pre-vaccinated against Marek’s disease',
      'Uniform batch sizing for commercial off-takers'
    ],
    badge: 'Fastest 35-Day Cycle',
    inStock: true,
    hatchSchedule: 'Hatching every Monday & Thursday'
  },
  {
    id: 'layer-chicks',
    name: 'Isa Brown Commercial Layers',
    category: 'chicks',
    breedOrType: 'High-Yield Egg Layer',
    priceKes: 125,
    priceUgx: 3500,
    unit: 'per chick',
    minOrder: 50,
    description: 'The golden standard in commercial egg production. Exceptional persistence, calm demeanor, and world-class shell strength.',
    specs: [
      'Annual output: 300 - 325 rich brown eggs',
      'Point of lay: 18 - 20 weeks',
      'Low daily feed consumption (~115g/day)',
      'High internal egg quality & golden yolk'
    ],
    badge: 'Maximum Egg Yield',
    inStock: true,
    hatchSchedule: 'Weekly dispatch'
  },
  {
    id: 'improved-kienyeji',
    name: 'Improved Kienyeji (KALRO)',
    category: 'chicks',
    breedOrType: 'Indigenous Improved',
    priceKes: 115,
    priceUgx: 3250,
    unit: 'per chick',
    minOrder: 50,
    description: 'Resilient indigenous selection bred for high meat flavor, low veterinary costs, and high open-market consumer demand.',
    specs: [
      'Thrives in semi-free range systems',
      'Target weight: 2.2kg - 2.8kg at 5 months',
      'Premium market price for organic meat',
      'Fully vaccinated against Marek’s at day 1'
    ],
    badge: 'High Market Price',
    inStock: true,
    hatchSchedule: 'Hatching every Wednesday'
  },
  {
    id: 'organic-table-eggs',
    name: 'Farm-Fresh Brown Table Eggs',
    category: 'eggs',
    breedOrType: 'Grade A Large',
    priceKes: 480,
    priceUgx: 13500,
    unit: 'per crate (30 eggs)',
    minOrder: 5,
    description: 'Nutrient-rich, deep golden yolk table eggs from clean, grain-fed hens. Collected daily, candled, and inspected for freshness.',
    specs: [
      'Zero synthetic hormones or antibiotics',
      'Strong, crack-resistant brown shells',
      'Sorted into standard 30-egg pulp trays',
      'Wholesale bulk pricing for hotels & grocers'
    ],
    badge: 'Daily Fresh Harvest',
    inStock: true
  },
  {
    id: 'fertile-hatching-eggs',
    name: 'Tested Fertile Hatching Eggs',
    category: 'eggs',
    breedOrType: 'Kuroiler & Layer Breeders',
    priceKes: 45,
    priceUgx: 1250,
    unit: 'per egg',
    minOrder: 30,
    description: 'Candled and certified fertile hatching eggs for local incubator operators. Maintained at optimal 15°C storage until dispatch.',
    specs: [
      'Verified >90% fertility rate in test batches',
      'Breeder flock under strict bio-security',
      'Uniform shape and shell thickness',
      'Shock-absorbent cellular packaging'
    ],
    badge: '>90% Verified Fertility',
    inStock: true
  },
  {
    id: 'chick-starter-feed',
    name: 'KoM Hi-Protein Chick Starter Mash',
    category: 'feed',
    breedOrType: '0 - 4 Weeks Formulation',
    priceKes: 3450,
    priceUgx: 96000,
    unit: '50kg bag',
    minOrder: 1,
    description: 'Precision-blended starter crumbs fortified with 21% crude protein, essential amino acids (Lysine/Methionine), and digestive enzymes.',
    specs: [
      'Crude protein: 21% min',
      'Includes prebiotic gut stabilizers',
      'Prevents stunted growth in brooding stage',
      'Dust-free crumb texture for high intake'
    ],
    badge: '21% Crude Protein',
    inStock: true
  },
  {
    id: 'brooder-kit',
    name: 'Complete Bio-Brooder Setup Kit',
    category: 'equipment',
    breedOrType: '500-Chick Capacity',
    priceKes: 6800,
    priceUgx: 190000,
    unit: 'per complete kit',
    minOrder: 1,
    description: 'All-in-one starter brooder gear including infrared ceramic heat emitter, adjustable drinker founts, chick feeders, and digital thermometer.',
    specs: [
      'Accommodates 300 to 500 day-old chicks',
      'Includes 4 bell drinkers + 4 feed trays',
      'Precision digital temperature/humidity sensor',
      'Includes free brooding management chart'
    ],
    badge: 'Starter Essential',
    inStock: true
  }
];

export interface Testimonial {
  name: string;
  role: string;
  location: string;
  flockSize: string;
  outcome: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Peter Mwangi',
    role: 'Commercial Broiler Grower',
    location: 'Kiambu / Nairobi Metro',
    flockSize: '1,500 Broilers',
    outcome: 'Average 2.35kg live weight in 37 days (1.68 FCR)',
    quote: 'The Cobb 500 chicks from KoM Poultry had 0% day-1 mortality on arrival in Kikuyu. They gained weight evenly with almost zero runts. Their phone support during week 2 was exceptional.'
  },
  {
    name: 'Grace Namatovu',
    role: 'Kuroiler Egg & Meat Farmer',
    location: 'Busia Cross-Border Hub',
    flockSize: '600 Kuroiler Birds',
    outcome: '98.2% 8-week brooding survival rate',
    quote: 'Shipping cross-border from Nairobi was smooth. Chicks arrived lively and already vaccinated. After 5 months my hens started dropping rich brown eggs and local hotels buy every crate.'
  },
  {
    name: 'Stephen Otieno',
    role: 'Layer Operations Manager',
    location: 'Nakuru County',
    flockSize: '2,000 Isa Brown Layers',
    outcome: '89.4% peak laying curve sustained for 24 weeks',
    quote: 'KoM Poultry Farm supplies honest genetics. We tested three hatcheries last year and KoM gave us the highest uniformity and most durable eggshells. Call them directly; they deliver on time.'
  }
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How do I place an order and how fast is delivery?',
    answer: 'You can order directly by calling +256700719468, messaging us on WhatsApp, or using the booking form on this page. For Nairobi and Kiambu, deliveries take 24–48 hours depending on hatch day. For upcountry Kenya and cross-border delivery, we dispatch via dedicated ventilated courier shuttles.'
  },
  {
    question: 'What vaccinations are administered before the chicks leave the hatchery?',
    answer: 'Every day-old chick from KoM Poultry Farm receives mandatory Marek’s disease vaccination and Day 1 Newcastle disease (ND) eye drop/spray. We supply you with a printed vaccination timetable (Gumboro, Fowl Pox, Deworming) tailored for your specific bird type.'
  },
  {
    question: 'What is the minimum order quantity for day-old chicks?',
    answer: 'Our standard minimum order is 50 chicks (1 standard partitioned chick box). For wholesale orders of 500+ or 1,000+ birds, we offer specialized bulk discounts and free brooding consultation.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept M-Pesa (Till / Paybill), direct bank transfer (Kenya & Uganda), and cash on pickup at our dispatch depot in Nairobi.'
  },
  {
    question: 'Can you advise a beginner farmer setting up their first poultry structure?',
    answer: 'Yes! We provide all customers with a complimentary Brooding Checklist and Feed Consumption Chart. Our team is available on WhatsApp (+256700719468) to inspect photos of your brooder setup, temperature, and ventilation before your batch arrives.'
  }
];
