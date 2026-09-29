import React from 'react';
import { JournalArticle } from '../data/travelData';

interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onPlanTrip: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onPlanTrip,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00261e]/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0c8c4]/30 my-8">
        {/* Header Image */}
        <div className="relative h-64 md:h-72 w-full overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
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
            <div className="flex items-center gap-2 text-xs text-[#a4f3ca] font-semibold mb-1">
              <span>{article.category}</span>
              <span>·</span>
              <span>{article.readTime}</span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
            <h2 className="font-headline-md text-2xl md:text-3xl text-white font-semibold">
              {article.title}
            </h2>
            <p className="text-xs text-[#deebe5] mt-1">By {article.author}</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[55vh] overflow-y-auto font-body-md text-sm md:text-base text-[#414845] leading-relaxed">
          <p className="text-base md:text-lg font-medium text-[#00261e] italic border-l-2 border-[#176b4b] pl-4">
            {article.summary}
          </p>

          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Travel Tips Callout Box */}
          <div className="p-5 bg-[#effdf6] rounded-2xl border border-[#a4f3ca]/60 my-4">
            <h4 className="font-headline-sm text-sm font-semibold text-[#00261e] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#176b4b] text-[18px]">
                tips_and_updates
              </span>
              Curator Insights & Practical Advice
            </h4>
            <ul className="space-y-1.5 text-xs md:text-sm text-[#414845]">
              {article.travelTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#176b4b] font-bold">›</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#effdf6] border-t border-[#e3f1ea] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#717975]">
            Explore these places on a private bespoke itinerary with Travel Ceylon.
          </span>
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
                onPlanTrip();
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#123d32] hover:bg-[#176b4b] text-white font-label-lg text-xs md:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Plan a Journey to These Places
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
