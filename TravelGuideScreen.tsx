import React, { useState } from 'react';
import { JOURNAL_ARTICLES, JournalArticle } from '../data/travelData';

interface TravelGuideScreenProps {
  onSelectArticle: (article: JournalArticle) => void;
  onPlanTrip: () => void;
}

export const TravelGuideScreen: React.FC<TravelGuideScreenProps> = ({
  onSelectArticle,
  onPlanTrip,
}) => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');

  const monthsData: Record<
    string,
    { southWest: string; northEast: string; highlands: string; recommendation: string }
  > = {
    Jan: {
      southWest: 'Sunny, calm seas, perfect beach days',
      northEast: 'Intermittent northeast showers',
      highlands: 'Crisp, sunny mornings, cool evenings (14°C)',
      recommendation: 'Prime season for Galle, Mirissa, Yala, and the Hill Country.',
    },
    Feb: {
      southWest: 'Dry, bright sunshine, calm ocean',
      northEast: 'Drying out, pleasant coastal breeze',
      highlands: 'Clear blue skies, peak hiking conditions',
      recommendation: 'Exceptional month across the entire island, peak leopard tracking.',
    },
    Mar: {
      southWest: 'Warm, calm seas, blue whale migrations',
      northEast: 'Dry and sunny',
      highlands: 'Warm afternoons, beautiful tea plucking',
      recommendation: 'Superb for combining cultural triangle with southern beaches.',
    },
    Apr: {
      southWest: 'Warm tropical sunshine, Sinhala/Tamil New Year festivals',
      northEast: 'Dry, clear skies',
      highlands: 'Nuwara Eliya season in full bloom',
      recommendation: 'Experience vibrant cultural celebrations and blooming tea hills.',
    },
    May: {
      southWest: 'Yala monsoon begins in the southwest',
      northEast: 'Brilliant sunshine, calm turquoise bays',
      highlands: 'Occasional mountain showers',
      recommendation: 'Head to the East Coast: Trincomalee, Passikudah, and Arugam Bay.',
    },
    Jun: {
      southWest: 'Monsoon showers in Galle/Colombo',
      northEast: 'Peak dry season, warm calm ocean',
      highlands: 'Misty atmospheric afternoons',
      recommendation: 'World-class surf season in Arugam Bay and whale watching in Trincomalee.',
    },
    Jul: {
      southWest: 'Intermittent light rain, lush greenery',
      northEast: 'Sunny, dry, ideal diving and snorkeling',
      highlands: 'Cool and comfortable',
      recommendation: 'Minneriya Elephant Gathering begins. East coast is at its zenith.',
    },
    Aug: {
      southWest: 'Pleasant mid-year lull with sunny spells',
      northEast: 'Dry and warm',
      highlands: 'Kandy Esala Perahera festival spectacle',
      recommendation: 'Witness the sacred Kandy Perahera and massive elephant gatherings.',
    },
    Sep: {
      southWest: 'Pleasant transition, fewer tourists',
      northEast: 'Still dry and warm',
      highlands: 'Quiet trails, lush cloud forests',
      recommendation: 'Excellent shoulder month with peaceful sanctuaries and great wildlife.',
    },
    Oct: {
      southWest: 'Inter-monsoon showers, dramatic afternoon skies',
      northEast: 'Occasional showers',
      highlands: 'Emerald green tea terraces',
      recommendation: 'Lush photography season with unhurried boutique stays.',
    },
    Nov: {
      southWest: 'Seas calming along Galle and Weligama',
      northEast: 'Maha monsoon rains',
      highlands: 'Crisp mountain air returns',
      recommendation: 'The start of the golden southern beach season and surf schools.',
    },
    Dec: {
      southWest: 'Brilliant blue skies, festive coastal energy',
      northEast: 'Occasional rain clearing',
      highlands: 'Cool nights and warm days',
      recommendation: 'Peak holiday season for southern villas, Adams Peak pilgrimage opens.',
    },
  };

  const currentMonthData = monthsData[selectedMonth] || monthsData['Jan'];

  return (
    <div className="w-full pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#123d32] text-white pt-28 pb-16 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a4f3ca]/20 text-[#a4f3ca] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a4f3ca]"></span>
            Travel Intelligence & Gazette
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            The Ceylon Travel Guide
          </h1>
          <p className="font-body-lg text-[#deebe5] max-w-2xl leading-relaxed">
            Essential intelligence for discerning voyagers: monsoon cycles, hidden tea viewpoints, culinary etiquette, and curated travel field notes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-12 space-y-16">
        {/* Interactive Monsoon & Season Navigator */}
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-[#c0c8c4]/30 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-1">
                Microclimate Calendar
              </span>
              <h2 className="font-headline-sm text-2xl text-[#00261e] font-semibold">
                When to Visit: Dual Monsoon Decoded
              </h2>
            </div>
            <p className="text-xs text-[#717975] max-w-md">
              Sri Lanka enjoys sunshine year-round because when one coast gets rain, the opposite coast basks in calm blue skies.
            </p>
          </div>

          {/* Month buttons */}
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 mb-6">
            {Object.keys(monthsData).map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedMonth === m
                    ? 'bg-[#123d32] text-white shadow-xs'
                    : 'bg-[#effdf6] text-[#00261e] hover:bg-[#e3f1ea]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          {/* Current Month Intelligence Box */}
          <div className="p-6 bg-[#effdf6] rounded-2xl border border-[#a4f3ca]/40 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-xs font-bold text-[#176b4b] block mb-1">
                South & West Coast (Galle, Mirissa, Colombo)
              </span>
              <p className="text-xs md:text-sm text-[#00261e]">{currentMonthData.southWest}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-[#176b4b] block mb-1">
                East Coast (Trincomalee, Arugam Bay, Passikudah)
              </span>
              <p className="text-xs md:text-sm text-[#00261e]">{currentMonthData.northEast}</p>
            </div>
            <div>
              <span className="text-xs font-bold text-[#176b4b] block mb-1">
                Central Highlands (Ella, Kandy, Nuwara Eliya)
              </span>
              <p className="text-xs md:text-sm text-[#00261e]">{currentMonthData.highlands}</p>
            </div>
          </div>
          <div className="mt-4 text-xs font-medium text-[#123d32] bg-white p-3 rounded-xl border border-[#c0c8c4]/30 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#e68743] text-[18px]">lightbulb</span>
            <span>Curator Recommendation for {selectedMonth}: {currentMonthData.recommendation}</span>
          </div>
        </div>

        {/* Articles Grid */}
        <div>
          <div className="mb-8">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-1">
              Curated Gazette
            </span>
            <h2 className="font-headline-lg text-3xl text-[#00261e] font-semibold">
              In-Depth Editorial Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {JOURNAL_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer border border-[#c0c8c4]/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 font-label-caps text-label-caps text-[#00261e]">
                    {article.category}
                  </span>
                  <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] backdrop-blur-xs">
                    {article.readTime}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-xs text-[#717975] mb-1 block">By {article.author}</span>
                    <h3 className="font-headline-sm text-xl text-[#00261e] mb-3 font-semibold group-hover:text-[#176b4b] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="font-body-md text-xs md:text-sm text-[#414845] leading-relaxed mb-6 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#e3f1ea] flex items-center justify-between text-xs font-bold text-[#176b4b]">
                    <span>Read Full Guide</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Island Etiquette & Quick Tips */}
        <div className="p-8 rounded-3xl bg-[#effdf6] border border-[#a4f3ca]/40">
          <h3 className="font-headline-sm text-xl text-[#00261e] font-semibold mb-6">
            Serendib Etiquette & Practical Wisdom
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm text-[#414845]">
            <div className="p-5 bg-white rounded-2xl shadow-2xs">
              <div className="font-bold text-[#00261e] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#176b4b] text-[18px]">church</span>
                Temple Dress Code
              </div>
              <p className="leading-relaxed">
                Cover shoulders and knees when visiting sacred Buddhist and Hindu shrines. Remove shoes and hats before stepping onto temple grounds. White attire is traditionally revered.
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-2xs">
              <div className="font-bold text-[#00261e] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#176b4b] text-[18px]">currency_exchange</span>
                Currency & Tipping
              </div>
              <p className="leading-relaxed">
                The currency is the Sri Lankan Rupee (LKR). While luxury hotels and restaurants include service, tipping your private chauffeur-guide (approx. $15–$25/day) is customary and warmly received.
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-2xs">
              <div className="font-bold text-[#00261e] mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#176b4b] text-[18px]">local_drink</span>
                Hydration & Thambili
              </div>
              <p className="leading-relaxed">
                Drink bottled or filtered water. For natural electrolyte hydration, enjoy roadside King Coconuts (Thambili)—hacked open fresh before your eyes, offering crisp, sterile sweetness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
