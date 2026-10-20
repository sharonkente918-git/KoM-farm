import React from 'react';
import { ShieldCheck, Thermometer, Truck, Stethoscope, CheckCircle2 } from 'lucide-react';

export const BiosecurityFeatures: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Certified Disease-Free Parent Breeder Stock',
      description: 'Our breeder stock is routinely screened by registered veterinarians for Salmonella pullorum, Mycoplasma gallisepticum, and Avian Influenza to ensure zero egg-transmitted pathogens.',
      points: [
        'HACCP-compliant sanitation protocols',
        'Routine veterinary blood serology testing',
        'Strict biosecure shower-in footbaths for staff'
      ]
    },
    {
      num: '02',
      title: 'Precision Climate-Controlled Incubation',
      description: 'Multi-stage incubators automatically regulate temperature at 37.5°C, humidity at 65%, and hourly 45-degree egg turning to guarantee strong bone structure and high hatchability.',
      points: [
        'Digital airflow monitoring to eliminate hotspots',
        'Automatic backup generators on standby 24/7',
        'Gentle humidity candling prior to hatch transfer'
      ]
    },
    {
      num: '03',
      title: 'Pre-Dispatch Day-1 Veterinary Vaccination',
      description: 'Every single chick is inspected for umbilical healing, vigorous alertness, and vaccinated against Marek’s Disease and Newcastle Disease (ND) before leaving the hatchery.',
      points: [
        'Vaccine batch traceability certificates provided',
        'Aerosol spray and subcutaneous Marek’s dosing',
        'Physical grading to eliminate weak runts'
      ]
    },
    {
      num: '04',
      title: 'Specialized Ventilated Regional Transport',
      description: 'We deliver across Nairobi, Central Kenya, Western Kenya, and cross-border via custom ventilated chick crates designed to avoid heat buildup, suffocation, or chill stress during transit.',
      points: [
        '48-hour delivery SLA across East African transit routes',
        'Perforated cellular crates with non-slip bedding',
        'Driver tracking and customer dispatch alerts'
      ]
    }
  ];

  return (
    <section id="standards" className="py-16 lg:py-24 border-b border-[#2A241F] bg-[#141210]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
            <span>Veterinary Assurance</span>
            <span aria-hidden="true" className="text-[#554A40]">·</span>
            <span>Nairobi Hatchery Protocols</span>
          </div>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#FAF6F0] sm:text-4xl">
            Why East African Farmers Trust KoM Poultry
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#BDB2A6]">
            Poultry farming profitability starts with pathogen-free day-old chicks and verified incubation science. Here is our operational guarantee.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#2D2620] bg-[#171412] p-8 hover:border-[#C89B6D]/50 transition-colors"
            >
              {/* Clean Human Editorial Numbering */}
              <div className="flex items-baseline justify-between border-b border-[#26201A] pb-4 mb-4">
                <span className="font-display text-2xl font-black text-[#C89B6D]">
                  {pillar.num}.
                </span>
                <span className="text-xs text-[#7A6F62] uppercase tracking-wider font-semibold">
                  Standard Operating Procedure
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#FAF6F0] mb-3">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-[#A89E92] mb-6">
                {pillar.description}
              </p>

              <div className="space-y-2.5 border-t border-[#231E19] pt-4">
                {pillar.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#CDC4B9]">
                    <CheckCircle2 className="h-4 w-4 text-[#C89B6D] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Free Farm Guide Banner */}
        <div className="mt-12 rounded-xl border border-[#3A3026] bg-[#1A1613] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C89B6D]">
              Complimentary Resource
            </span>
            <h4 className="font-display text-lg font-bold text-[#FAF6F0] mt-1">
              Free 7-Week Brooding Guide &amp; Vaccination Chart
            </h4>
            <p className="text-xs sm:text-sm text-[#A89E92] mt-1 max-w-2xl">
              Every customer receives our comprehensive field manual detailing brooder temperatures, feeder spacing, lighting programs, and vaccination timings.
            </p>
          </div>
          <a
            href="https://wa.me/256700719468?text=Hello%20KoM%20Poultry%20Farm,%20please%20send%20me%20your%20free%20poultry%20brooding%20guide%20and%20vaccination%20chart."
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 text-xs font-bold text-[#121110] bg-[#C89B6D] rounded-lg hover:bg-[#D7AA7C] active:scale-95 transition-all whitespace-nowrap shadow-sm"
          >
            Request Free Guide on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
