import React, { useState, useMemo } from 'react';
import { DESTINATIONS, EXPERIENCES, TOURS, JOURNAL_ARTICLES, Destination, Experience, Tour, JournalArticle } from '../data/travelData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDestination: (dest: Destination) => void;
  onSelectExperience: (exp: Experience) => void;
  onSelectTour: (tour: Tour) => void;
  onSelectArticle: (article: JournalArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectDestination,
  onSelectExperience,
  onSelectTour,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'destinations' | 'experiences' | 'tours' | 'journal'>('all');

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      return {
        destinations: DESTINATIONS.slice(0, 4),
        experiences: EXPERIENCES.slice(0, 3),
        tours: TOURS.slice(0, 2),
        articles: JOURNAL_ARTICLES.slice(0, 2),
      };
    }

    return {
      destinations: DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.highlights.some((h) => h.toLowerCase().includes(q))
      ),
      experiences: EXPERIENCES.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.categoryLabel.toLowerCase().includes(q) ||
          e.shortDesc.toLowerCase().includes(q)
      ),
      tours: TOURS.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.overview.toLowerCase().includes(q) ||
          t.routeStops.some((r) => r.toLowerCase().includes(q))
      ),
      articles: JOURNAL_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-[#00261e]/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#ffffff] rounded-3xl shadow-2xl overflow-hidden border border-[#c0c8c4]/30 flex flex-col max-h-[85vh]">
        {/* Search Header Input */}
        <div className="p-6 border-b border-[#e3f1ea] flex items-center gap-4 bg-[#effdf6]/60">
          <span className="material-symbols-outlined text-[24px] text-[#176b4b]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Ella, leopards, tea trails, Sigiriya, surf..."
            className="flex-1 text-lg font-subhead-lg text-[#00261e] placeholder:text-[#717975] outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#717975] hover:text-[#00261e] px-2 py-1 rounded-md bg-[#e3f1ea]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#e3f1ea] text-[#414845]"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-[#e3f1ea] bg-white overflow-x-auto text-xs">
          <span className="text-[#717975] font-semibold pr-2">Filter:</span>
          {(['all', 'destinations', 'experiences', 'tours', 'journal'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-full capitalize font-label-md transition-colors cursor-pointer ${
                filterType === type
                  ? 'bg-[#00261e] text-white'
                  : 'bg-[#e9f7f0] text-[#176b4b] hover:bg-[#d8e6df]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* Destinations */}
          {(filterType === 'all' || filterType === 'destinations') &&
            filtered.destinations.length > 0 && (
              <div>
                <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-3">
                  Destinations ({filtered.destinations.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filtered.destinations.map((d) => (
                    <div
                      key={d.id}
                      onClick={() => {
                        onSelectDestination(d);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-3 rounded-2xl border border-[#e3f1ea] hover:border-[#176b4b] hover:bg-[#e9f7f0]/50 transition-all cursor-pointer group"
                    >
                      <img
                        src={d.image}
                        alt={d.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-headline-sm text-sm font-semibold text-[#00261e] group-hover:text-[#176b4b] truncate">
                            {d.name}
                          </h4>
                          <span className="text-[11px] text-[#176b4b] font-medium shrink-0 ml-2">
                            {d.regionLabel}
                          </span>
                        </div>
                        <p className="text-xs text-[#414845] line-clamp-1 mt-0.5">{d.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Tours */}
          {(filterType === 'all' || filterType === 'tours') && filtered.tours.length > 0 && (
            <div>
              <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-3">
                Curated Expeditions ({filtered.tours.length})
              </span>
              <div className="space-y-3">
                {filtered.tours.map((t) => (
                  <div
                    key={t.id}
                    onClick={() => {
                      onSelectTour(t);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-2xl border border-[#e3f1ea] hover:border-[#176b4b] hover:bg-[#e9f7f0]/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={t.heroImage}
                        alt={t.title}
                        className="w-16 h-12 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-headline-sm text-sm font-semibold text-[#00261e] group-hover:text-[#176b4b] truncate">
                          {t.title}
                        </h4>
                        <span className="text-xs text-[#717975]">{t.duration} · {t.routeStops.slice(0, 4).join(' → ')}</span>
                      </div>
                    </div>
                    <span className="font-label-md text-xs text-[#e68743] font-bold whitespace-nowrap pl-3">
                      From ${t.pricePerPerson}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experiences */}
          {(filterType === 'all' || filterType === 'experiences') &&
            filtered.experiences.length > 0 && (
              <div>
                <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-3">
                  Signature Experiences ({filtered.experiences.length})
                </span>
                <div className="space-y-2.5">
                  {filtered.experiences.map((exp) => (
                    <div
                      key={exp.id}
                      onClick={() => {
                        onSelectExperience(exp);
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 rounded-2xl border border-[#e3f1ea] hover:border-[#176b4b] hover:bg-[#e9f7f0]/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-[#00261e] group-hover:text-[#176b4b] truncate">
                            {exp.title}
                          </h4>
                          <span className="text-xs text-[#717975]">{exp.categoryLabel} · {exp.duration}</span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#176b4b] shrink-0 pl-2">
                        {exp.priceEst}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Articles */}
          {(filterType === 'all' || filterType === 'journal') &&
            filtered.articles.length > 0 && (
              <div>
                <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-3">
                  Travel Journal Stories ({filtered.articles.length})
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filtered.articles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="p-3.5 rounded-2xl border border-[#e3f1ea] hover:border-[#176b4b] hover:bg-[#e9f7f0]/50 transition-all cursor-pointer group"
                    >
                      <span className="text-[11px] text-[#176b4b] font-semibold">{art.category}</span>
                      <h4 className="font-headline-sm text-sm font-semibold text-[#00261e] group-hover:text-[#176b4b] line-clamp-1 mt-0.5">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#414845] line-clamp-1 mt-1">{art.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* No results */}
          {filtered.destinations.length === 0 &&
            filtered.experiences.length === 0 &&
            filtered.tours.length === 0 &&
            filtered.articles.length === 0 && (
              <div className="text-center py-12 text-[#717975]">
                <span className="material-symbols-outlined text-[40px] text-[#c0c8c4] block mb-2">
                  travel_explore
                </span>
                <p className="text-sm font-medium">No results found for "{query}"</p>
                <p className="text-xs text-[#414845] mt-1">Try searching for Ella, Safari, Train, or Mirissa</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
