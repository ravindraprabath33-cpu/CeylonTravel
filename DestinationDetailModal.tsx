import React from 'react';
import { Destination } from '../data/travelData';

interface DestinationDetailModalProps {
  destination: Destination | null;
  onClose: () => void;
  onPlanTrip: (destId: string) => void;
  isSaved?: boolean;
  onToggleSave?: (destId: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onPlanTrip,
  isSaved,
  onToggleSave,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00261e]/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0c8c4]/30 my-8">
        {/* Hero Image */}
        <div className="relative h-72 md:h-96 w-full overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00261e] via-[#00261e]/30 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Save Bookmark button */}
          {onToggleSave && (
            <button
              onClick={() => onToggleSave(destination.id)}
              aria-label="Save Destination"
              className={`absolute top-4 left-4 h-10 px-4 rounded-full flex items-center gap-2 backdrop-blur-sm text-xs font-semibold transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-[#176b4b] text-white'
                  : 'bg-black/40 hover:bg-black/60 text-white'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isSaved ? 'bookmark_added' : 'bookmark_border'}
              </span>
              <span>{isSaved ? 'Saved in Itinerary' : 'Bookmark Place'}</span>
            </button>
          )}

          {/* Title in Scrim */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-widest block mb-1">
              {destination.regionLabel} · {destination.tag}
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-semibold">
              {destination.name}
            </h2>
            <p className="text-sm text-[#deebe5] mt-1 italic">{destination.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#e9f7f0] rounded-2xl text-xs">
            <div>
              <span className="text-[#717975] block">Best Season</span>
              <span className="font-bold text-[#00261e]">{destination.bestMonths}</span>
            </div>
            <div>
              <span className="text-[#717975] block">Recommended Stay</span>
              <span className="font-bold text-[#00261e]">{destination.recommendedStayDays} Days</span>
            </div>
            <div>
              <span className="text-[#717975] block">Climate / Temp</span>
              <span className="font-bold text-[#00261e]">{destination.averageTemp}</span>
            </div>
            <div>
              <span className="text-[#717975] block">Curated Journeys</span>
              <span className="font-bold text-[#176b4b]">{destination.journeysCount} Expeditions</span>
            </div>
          </div>

          {/* Long Description */}
          <div>
            <h3 className="font-headline-sm text-lg text-[#00261e] mb-2">The Spirit of the Place</h3>
            <p className="font-body-md text-sm md:text-base text-[#414845] leading-relaxed">
              {destination.longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-headline-sm text-base text-[#00261e] mb-3">Key Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {destination.highlights.map((h, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-[#effdf6] border border-[#c0c8c4]/40 text-[#176b4b] text-xs font-semibold"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Must Experience */}
          <div>
            <h4 className="font-headline-sm text-base text-[#00261e] mb-3">
              Serendipitous Moments Not to Miss
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-[#414845]">
              {destination.mustSee.map((ms, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e68743] text-[18px] shrink-0">
                    stars
                  </span>
                  <span>{ms}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#effdf6] border-t border-[#e3f1ea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#717975] text-center sm:text-left">
            Want to include <span className="font-bold text-[#00261e]">{destination.name}</span> in your tailor-made route?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#c0c8c4] text-xs font-semibold text-[#414845] hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onPlanTrip(destination.id);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-xs md:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Plan Trip with {destination.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
