import React, { useState } from 'react';
import { Tour } from '../data/travelData';

interface TourDetailModalProps {
  tour: Tour | null;
  onClose: () => void;
  onBookTour: (tour: Tour) => void;
  onDownloadBrochure: (tourTitle: string) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  onClose,
  onBookTour,
  onDownloadBrochure,
}) => {
  const [activeDay, setActiveDay] = useState(1);
  const [guestCount, setGuestCount] = useState(2);

  if (!tour) return null;

  const calculatedTotal = tour.pricePerPerson * guestCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00261e]/75 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0c8c4]/30 my-8">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00261e] via-[#00261e]/40 to-transparent"></div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-widest block mb-1">
              {tour.tag} · {tour.duration}
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-white font-semibold">
              {tour.title}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                From ${tour.pricePerPerson} / person
              </span>
              <span className="text-xs bg-[#176b4b] px-3 py-1 rounded-full text-white">
                Private Chauffeur-Guide
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <p className="font-body-md text-sm md:text-base text-[#414845] leading-relaxed">
              {tour.overview}
            </p>
          </div>

          {/* Curated Route Flow Stepper */}
          <div className="p-5 bg-[#e9f7f0] rounded-2xl">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-3">
              Curated Journey Route ({tour.routeStops.length} Destinations)
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#00261e]">
              {tour.routeStops.map((stop, i) => (
                <React.Fragment key={i}>
                  <span className="px-3 py-1.5 rounded-full bg-white border border-[#c0c8c4]/40 shadow-xs">
                    {stop}
                  </span>
                  {i < tour.routeStops.length - 1 && (
                    <span className="material-symbols-outlined text-[#e68743] text-[16px]">
                      east
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Day by Day Interactive Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-lg text-[#00261e]">
                Day-by-Day Journey Itinerary
              </h3>
              <span className="text-xs text-[#717975]">
                Click day below to preview route
              </span>
            </div>

            {/* Day Selector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#e3f1ea]">
              {tour.itinerary.map((dayItem) => (
                <button
                  key={dayItem.day}
                  onClick={() => setActiveDay(dayItem.day)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                    activeDay === dayItem.day
                      ? 'bg-[#123d32] text-white shadow-xs'
                      : 'bg-[#effdf6] text-[#414845] hover:bg-[#d8e6df]'
                  }`}
                >
                  Day {dayItem.day}
                </button>
              ))}
            </div>

            {/* Active Day Card */}
            {(() => {
              const current =
                tour.itinerary.find((d) => d.day === activeDay) || tour.itinerary[0];
              return (
                <div className="p-5 mt-4 rounded-2xl border border-[#c0c8c4]/40 bg-[#effdf6]/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#176b4b] uppercase tracking-wider">
                      Day {current.day} · {current.location}
                    </span>
                    <span className="text-xs text-[#717975]">{current.meals}</span>
                  </div>
                  <h4 className="font-headline-sm text-base text-[#00261e] font-semibold">
                    {current.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#414845] leading-relaxed">
                    {current.description}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-[#00261e]">
                    <span className="material-symbols-outlined text-[16px] text-[#e68743]">
                      hotel
                    </span>
                    <span className="font-semibold">Curated Sanctuary:</span>
                    <span className="text-[#176b4b] font-medium">{current.stay}</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Inclusions & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-headline-sm text-sm font-semibold text-[#00261e] uppercase tracking-wider mb-2">
                What's Included
              </h4>
              <ul className="space-y-1.5 text-xs text-[#414845]">
                {tour.included.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#176b4b] text-[16px] shrink-0">
                      check
                    </span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline-sm text-sm font-semibold text-[#00261e] uppercase tracking-wider mb-2">
                Highlights & Privileged Access
              </h4>
              <ul className="space-y-1.5 text-xs text-[#414845]">
                {tour.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#e68743] text-[16px] shrink-0">
                      star
                    </span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Calculator Bar */}
          <div className="p-4 bg-[#e9f7f0] rounded-2xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#00261e] font-semibold">Guests Traveling:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-[#c0c8c4] flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-6 text-center text-sm font-bold text-[#00261e]">
                  {guestCount}
                </span>
                <button
                  onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
                  className="w-8 h-8 rounded-lg bg-white border border-[#c0c8c4] flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#717975]">Indicative Total:</div>
              <div className="text-xl font-bold text-[#00261e]">
                ${calculatedTotal.toLocaleString()}
                <span className="text-xs text-[#717975] font-normal">
                  {' '}
                  (${tour.pricePerPerson} / person)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-6 bg-[#effdf6] border-t border-[#e3f1ea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onDownloadBrochure(tour.title)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-[#176b4b] text-[#176b4b] hover:bg-[#e9f7f0] text-xs font-semibold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            Download Detailed PDF Brochure
          </button>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#c0c8c4] text-xs font-semibold text-[#414845] hover:bg-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTour(tour);
              }}
              className="flex-1 sm:flex-none px-7 py-2.5 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-xs md:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Customize This Expedition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
