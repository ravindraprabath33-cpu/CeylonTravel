import React from 'react';
import { Experience } from '../data/travelData';

interface ExperienceDetailModalProps {
  experience: Experience | null;
  onClose: () => void;
  onBookExperience: (exp: Experience) => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  experience,
  onClose,
  onBookExperience,
}) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00261e]/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0c8c4]/30 my-8">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
          <img
            src={experience.image}
            alt={experience.title}
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
              {experience.categoryLabel}
            </span>
            <h2 className="font-headline-md text-2xl md:text-3xl text-white font-semibold">
              {experience.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          {/* Key Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#e9f7f0] rounded-2xl text-xs">
            <div>
              <span className="text-[#717975] block">Duration</span>
              <span className="font-bold text-[#00261e]">{experience.duration}</span>
            </div>
            <div>
              <span className="text-[#717975] block">Estimated Cost</span>
              <span className="font-bold text-[#e68743]">{experience.priceEst}</span>
            </div>
            <div>
              <span className="text-[#717975] block">Ideal For</span>
              <span className="font-bold text-[#176b4b]">{experience.idealFor}</span>
            </div>
          </div>

          <div>
            <h3 className="font-headline-sm text-base text-[#00261e] mb-2">The Experience</h3>
            <p className="font-body-md text-sm md:text-base text-[#414845] leading-relaxed">
              {experience.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="font-headline-sm text-base text-[#00261e] mb-3">Highlights</h4>
            <div className="space-y-1.5 text-xs md:text-sm text-[#414845]">
              {experience.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#176b4b] text-[18px]">
                    check_circle
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline-sm text-base text-[#00261e] mb-3">What's Included</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#414845]">
              {experience.included.map((inc, i) => (
                <div key={i} className="p-2.5 bg-[#effdf6] rounded-xl flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#176b4b] text-[16px]">
                    done
                  </span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#effdf6] border-t border-[#e3f1ea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#717975]">
            Private, unhurried expeditions arranged exclusively for your party.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#c0c8c4] text-xs font-semibold text-[#414845] hover:bg-white"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBookExperience(experience);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#123d32] hover:bg-[#176b4b] text-white font-label-lg text-xs md:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Add to Bespoke Route
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
