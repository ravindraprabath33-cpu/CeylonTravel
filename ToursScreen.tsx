import React from 'react';
import { TOURS, Tour } from '../data/travelData';

interface ToursScreenProps {
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tour: Tour) => void;
  onDownloadBrochure: (tourTitle: string) => void;
}

export const ToursScreen: React.FC<ToursScreenProps> = ({
  onSelectTour,
  onBookTour,
  onDownloadBrochure,
}) => {
  return (
    <div className="w-full pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#123d32] text-white pt-28 pb-16 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a4f3ca]/20 text-[#a4f3ca] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a4f3ca]"></span>
            Multi-Day Private Expeditions
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            Curated Sri Lanka Itineraries
          </h1>
          <p className="font-body-lg text-[#deebe5] max-w-2xl leading-relaxed">
            Every expedition is private, flexible, and accompanied by our licensed English-speaking chauffeur-guides and master naturalists. Tailor any route to your personal pace.
          </p>
        </div>
      </div>

      {/* Tour List */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-12 space-y-12">
        {TOURS.map((tour) => (
          <div
            key={tour.id}
            className="rounded-3xl bg-white overflow-hidden shadow-md border border-[#c0c8c4]/30 grid grid-cols-1 lg:grid-cols-12 transition-shadow hover:shadow-xl"
          >
            {/* Image (5 cols) */}
            <div
              onClick={() => onSelectTour(tour)}
              className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden cursor-pointer group"
            >
              <img
                src={tour.heroImage}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/80 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#00261e] font-label-md text-xs font-bold shadow-xs">
                  {tour.duration}
                </span>
                {tour.isFeatured && (
                  <span className="px-3 py-1 rounded-full bg-[#e68743] text-white text-xs font-bold">
                    Signature
                  </span>
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-[#a4f3ca] font-semibold block mb-0.5">
                  Private Expedition
                </span>
                <span className="font-display text-2xl font-bold text-white">
                  From ${tour.pricePerPerson}{' '}
                  <span className="text-xs font-normal text-[#deebe5]">/ guest</span>
                </span>
              </div>
            </div>

            {/* Content (7 cols) */}
            <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-2">
                  {tour.tag}
                </span>
                <h2
                  onClick={() => onSelectTour(tour)}
                  className="font-headline-sm text-2xl md:text-3xl text-[#00261e] mb-3 font-semibold hover:text-[#176b4b] cursor-pointer transition-colors"
                >
                  {tour.title}
                </h2>
                <p className="font-body-md text-sm md:text-base text-[#414845] leading-relaxed mb-6">
                  {tour.overview}
                </p>

                {/* Route Flow */}
                <div className="p-4 bg-[#effdf6] rounded-2xl border border-[#c0c8c4]/30 mb-6">
                  <span className="text-xs font-bold text-[#176b4b] uppercase tracking-wider block mb-2">
                    Curated Route:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#00261e]">
                    {tour.routeStops.map((stop, i) => (
                      <React.Fragment key={i}>
                        <span className="px-2.5 py-1 rounded-lg bg-white border border-[#c0c8c4]/30">
                          {stop}
                        </span>
                        {i < tour.routeStops.length - 1 && (
                          <span className="material-symbols-outlined text-[#e68743] text-[14px]">
                            east
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-1.5 mb-8">
                  {tour.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-[#414845]">
                      <span className="material-symbols-outlined text-[#e68743] text-[16px] shrink-0">
                        check_circle
                      </span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#e3f1ea] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onDownloadBrochure(tour.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176b4b] hover:text-[#00261e] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Brochure PDF</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="px-5 py-2.5 rounded-full border border-[#00261e] text-[#00261e] hover:bg-[#e9f7f0] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    View Day-by-Day
                  </button>
                  <button
                    onClick={() => onBookTour(tour)}
                    className="px-6 py-2.5 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-xs md:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    Customize Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
