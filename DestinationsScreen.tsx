import React, { useState } from 'react';
import { DESTINATIONS, Destination } from '../data/travelData';

interface DestinationsScreenProps {
  onSelectDestination: (dest: Destination) => void;
  onPlanTrip: (destId: string) => void;
}

export const DestinationsScreen: React.FC<DestinationsScreenProps> = ({
  onSelectDestination,
  onPlanTrip,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'highlands', label: 'Central Highlands' },
    { id: 'cultural', label: 'Cultural Triangle' },
    { id: 'southern', label: 'Southern Coast' },
    { id: 'wildlife', label: 'Wild Dry Zone' },
    { id: 'east-north', label: 'East Coast & Bays' },
  ];

  const filteredDestinations = DESTINATIONS.filter((d) => {
    const matchesRegion = selectedRegion === 'all' || d.region === selectedRegion;
    const matchesQuery =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesQuery;
  });

  return (
    <div className="w-full pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#123d32] text-white pt-28 pb-16 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a4f3ca]/20 text-[#a4f3ca] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a4f3ca]"></span>
            Island Geography & Microclimates
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            Curated Island Destinations
          </h1>
          <p className="font-body-lg text-[#deebe5] max-w-2xl leading-relaxed">
            From the cool misty ridges of the central massifs to ancient royal citadels and secret southern surf coves, discover handpicked havens across Sri Lanka.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-[#254e42]/60">
            {/* Region Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {regions.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setSelectedRegion(reg.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    selectedRegion === reg.id
                      ? 'bg-[#e68743] text-white shadow-sm'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[240px]">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a4f3ca] text-[18px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destination..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder:text-[#deebe5]/60 text-xs border border-white/20 outline-none focus:border-[#a4f3ca]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-12">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs text-[#717975] font-semibold">
            Showing {filteredDestinations.length} destinations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((d) => (
            <div
              key={d.id}
              className="group rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#c0c8c4]/30"
            >
              <div
                onClick={() => onSelectDestination(d)}
                className="relative h-64 overflow-hidden cursor-pointer"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 font-label-caps text-label-caps text-[#00261e] uppercase">
                  {d.tag}
                </span>
                <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#00261e]/80 text-white text-[11px] font-semibold backdrop-blur-xs">
                  {d.averageTemp}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#176b4b]">
                      {d.regionLabel}
                    </span>
                    <span className="text-xs text-[#717975]">
                      Stay: {d.recommendedStayDays} Days
                    </span>
                  </div>
                  <h3
                    onClick={() => onSelectDestination(d)}
                    className="font-headline-sm text-2xl text-[#00261e] mb-2 font-semibold hover:text-[#176b4b] cursor-pointer transition-colors"
                  >
                    {d.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-[#414845] line-clamp-3 mb-4 leading-relaxed">
                    {d.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {d.highlights.slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#effdf6] text-[#00261e] border border-[#c0c8c4]/30"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e3f1ea] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDestination(d)}
                    className="text-xs font-bold text-[#176b4b] hover:text-[#00261e] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Sights & Guide</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => onPlanTrip(d.id)}
                    className="px-4 py-2 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                  >
                    Add to Route
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
