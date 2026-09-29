import React, { useState } from 'react';
import { EXPERIENCES, Experience } from '../data/travelData';

interface ExperiencesScreenProps {
  onSelectExperience: (exp: Experience) => void;
  onBookExperience: (exp: Experience) => void;
}

export const ExperiencesScreen: React.FC<ExperiencesScreenProps> = ({
  onSelectExperience,
  onBookExperience,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Curated Experiences' },
    { id: 'wildlife', label: 'Wildlife Safaris' },
    { id: 'rail-tea', label: 'Highland Rail & Tea' },
    { id: 'coastal', label: 'Coastal & Ocean' },
    { id: 'cultural', label: 'Living Heritage' },
    { id: 'trekking', label: 'Pekoe Trail & Peaks' },
    { id: 'culinary', label: 'Culinary Masterclasses' },
  ];

  const filtered = EXPERIENCES.filter(
    (exp) => selectedCategory === 'all' || exp.category === selectedCategory
  );

  return (
    <div className="w-full pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#123d32] text-white pt-28 pb-16 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a4f3ca]/20 text-[#a4f3ca] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a4f3ca]"></span>
            Curated Access & Immersion
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            Signature Sri Lankan Experiences
          </h1>
          <p className="font-body-lg text-[#deebe5] max-w-2xl leading-relaxed">
            Unhurried journeys of discovery designed with master naturalists, private catamaran skippers, colonial tea sommelier hosts, and Buddhist scholars.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 border-t border-[#254e42]/60 pt-6 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#e68743] text-white shadow-sm'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="group rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#c0c8c4]/30"
            >
              <div
                onClick={() => onSelectExperience(exp)}
                className="relative h-64 overflow-hidden cursor-pointer"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 font-label-caps text-label-caps text-[#00261e]">
                  {exp.categoryLabel}
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#123d32]/90 text-[#a4f3ca] text-xs font-bold backdrop-blur-xs">
                  {exp.priceEst}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-xs text-[#717975] mb-1">
                    Duration: {exp.duration}
                  </div>
                  <h3
                    onClick={() => onSelectExperience(exp)}
                    className="font-headline-sm text-xl text-[#00261e] mb-3 font-semibold hover:text-[#176b4b] cursor-pointer transition-colors"
                  >
                    {exp.title}
                  </h3>
                  <p className="font-body-md text-xs md:text-sm text-[#414845] leading-relaxed mb-6">
                    {exp.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3f1ea] flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectExperience(exp)}
                    className="text-xs font-bold text-[#176b4b] hover:text-[#00261e] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <button
                    onClick={() => onBookExperience(exp)}
                    className="px-4 py-2 rounded-full bg-[#123d32] hover:bg-[#176b4b] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
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
