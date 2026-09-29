import React, { useState } from 'react';
import {
  DESTINATIONS,
  EXPERIENCES,
  TOURS,
  JOURNAL_ARTICLES,
  TESTIMONIALS,
  Destination,
  Experience,
  Tour,
  JournalArticle,
} from '../data/travelData';

interface HomeScreenProps {
  onSelectDestination: (dest: Destination) => void;
  onSelectExperience: (exp: Experience) => void;
  onSelectTour: (tour: Tour) => void;
  onSelectArticle: (article: JournalArticle) => void;
  onOpenPlanner: (destId?: string) => void;
  onDownloadBrochure: (tourTitle: string) => void;
  onNavigate: (screen: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectDestination,
  onSelectExperience,
  onSelectTour,
  onSelectArticle,
  onOpenPlanner,
  onDownloadBrochure,
  onNavigate,
}) => {
  // Planner quick widget state
  const [plannerDest, setPlannerDest] = useState('ella');
  const [plannerSeason, setPlannerSeason] = useState('December – April (South & West Peaks)');
  const [plannerTravelers, setPlannerTravelers] = useState('2 Adults (Couples & Honeymoon)');

  const featuredTour = TOURS.find((t) => t.isFeatured) || TOURS[0];

  const handleQuickPlan = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenPlanner(plannerDest);
  };

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative w-full -mt-20 overflow-hidden">
        {/* Background Image with Scrim */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-EGa1CeG3E8HNV8CHMDAhpKCXBlailqgQMVulsHfpsQgLcSeriYKo9OhfdCTkQnfIMIUef2hkny5vQ0dOntHu77Yc7Z0dyx9ujGPaT0P56vsIDxVQLBVzUJpjCooPM_mQ0QxhBo92yAnNASMELBta8KDMxsIfiq31fYWopB82EV10tIDf6b28zVrByCmQuDGGBdhrXAHMj9oLqFbhqxN31Ev0vc1XEBdUZRIGZduLb9SeUB2zB91y4w')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#00261e]/80 via-[#00261e]/40 to-[#00261e]/95"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#e68743]/20 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-36 md:pt-44 pb-20 md:pb-32 flex flex-col items-start">
          {/* Editorial Curated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#e68743] animate-pulse"></span>
            <span className="font-label-caps text-label-caps text-[#ffdbc7] tracking-widest uppercase">
              Luxury & Bespoke Travel • Sri Lanka
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-[68px] lg:text-[76px] text-white tracking-tight max-w-4xl leading-[1.1] mb-6">
            Discover the <span className="italic font-normal text-[#ffdbc7]">Soul</span> of Sri Lanka
          </h1>

          {/* Supporting Editorial Copy */}
          <p className="font-body-lg text-body-lg text-[#deebe5]/90 max-w-2xl leading-relaxed mb-10">
            Journey beyond the ordinary. Explore ancient kingdoms, misty mountain tea sanctuaries, golden ocean shores, and unforgettable island adventures crafted with quiet elegance.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-16 md:mb-24">
            <button
              onClick={() => {
                onNavigate('tours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-label-lg shadow-xl shadow-[#e68743]/30 transition-all duration-300 cursor-pointer"
            >
              Explore Tours
            </button>
            <button
              onClick={() => onOpenPlanner()}
              className="inline-flex items-center justify-center gap-3 h-13 px-8 rounded-full bg-white/15 backdrop-blur-md hover:bg-white/25 text-white font-label-lg text-label-lg transition-all duration-300 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px] text-[#ffdbc7]">play_circle</span>
              Plan Your Trip
            </button>
          </div>

          {/* Floating Interactive Travel Planner Panel */}
          <div
            className="w-full bg-white/95 backdrop-blur-2xl rounded-3xl p-6 lg:p-8 shadow-2xl text-[#121e1a] border border-[#c0c8c4]/30"
            id="planner"
          >
            <form onSubmit={handleQuickPlan} className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
              {/* Destination Field */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">location_on</span>
                  Where do you want to go?
                </span>
                <div className="relative">
                  <select
                    value={plannerDest}
                    onChange={(e) => setPlannerDest(e.target.value)}
                    className="w-full bg-[#e9f7f0] rounded-xl px-4 py-3.5 font-subhead-lg text-body-md text-[#00261e] font-semibold appearance-none outline-none focus:bg-[#e3f1ea] transition-colors cursor-pointer"
                  >
                    <option value="ella">Ella & Hill Country (Tea Terraces)</option>
                    <option value="sigiriya">Sigiriya & Cultural Triangle (Ancient Sky Palace)</option>
                    <option value="galle">Galle & South Coast (Dutch Fort & Palms)</option>
                    <option value="yala">Yala Safari (Leopard & Wild Elephants)</option>
                    <option value="mirissa">Mirissa (Ocean Whales & Coral Reefs)</option>
                    <option value="nuwara-eliya">Nuwara Eliya (Little England & Horton Plains)</option>
                    <option value="arugam-bay">Arugam Bay (Point Breaks & Surf)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#414845] text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Date Picker / Season Field */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">calendar_today</span>
                  Travel Season • Dates
                </span>
                <div className="relative">
                  <select
                    value={plannerSeason}
                    onChange={(e) => setPlannerSeason(e.target.value)}
                    className="w-full bg-[#e9f7f0] rounded-xl px-4 py-3.5 font-subhead-lg text-body-md text-[#00261e] font-semibold appearance-none outline-none focus:bg-[#e3f1ea] transition-colors cursor-pointer"
                  >
                    <option>December – April (South & West Peaks)</option>
                    <option>May – September (Cultural & East Coast)</option>
                    <option>October – November (Lush Island Shoulder)</option>
                    <option>Flexible / Year-Round Curated</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#414845] text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Travelers Select */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[15px]">group</span>
                  Travelers Style
                </span>
                <div className="relative">
                  <select
                    value={plannerTravelers}
                    onChange={(e) => setPlannerTravelers(e.target.value)}
                    className="w-full bg-[#e9f7f0] rounded-xl px-4 py-3.5 font-subhead-lg text-body-md text-[#00261e] font-semibold appearance-none outline-none focus:bg-[#e3f1ea] transition-colors cursor-pointer"
                  >
                    <option>2 Adults (Couples & Honeymoon)</option>
                    <option>Family with Children (Curated Pace)</option>
                    <option>Solo Voyager (Expedition & Wellness)</option>
                    <option>Private Small Group (4–8 Guests)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#414845] text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Search Action Button */}
              <div className="flex flex-col justify-end lg:pt-5">
                <button
                  type="submit"
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-3 h-[52px] px-8 rounded-full bg-[#00261e] hover:bg-[#176b4b] text-white font-label-lg text-label-lg shadow-lg shadow-[#00261e]/20 transition-all duration-300 group cursor-pointer"
                >
                  <span>Find Your Adventure</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* INTRODUCTION & STATS SECTION */}
      <section className="w-full py-20 bg-[#effdf6]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-widest inline-block mb-3">
              Serendipity Awaits
            </span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-[#00261e] tracking-tight mb-6">
              One Island. Endless Stories.
            </h2>
            <p className="font-body-lg text-body-lg text-[#414845] leading-relaxed">
              Sri Lanka concentrates the wonder of a continent into a single teardrop isle: golden palm-fringed coastlines, leopard-stalked forest reserves, cool misty tea plateaus, and over 2,500 years of living spiritual heritage. Here, every turning road invites unhurried intimacy with wonder.
            </p>
          </div>

          {/* 4-Card Dynamic Collage */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* Collage Card 1 */}
            <div
              onClick={() => onSelectDestination(DESTINATIONS.find((d) => d.id === 'nuwara-eliya') || DESTINATIONS[0])}
              className="group relative rounded-3xl overflow-hidden shadow-sm bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Emerald terraced tea plantations of Nuwara Eliya Sri Lanka"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhuUf7S-mV2uocfJmtIdbpmri_PDzE6WfN9V9uSuuIAhxaEcyXERZRGy9Iy0XnMU9ThyFJSuMiHKLAd6WJO8ufkod8mLujk-rIY_xyueksoEwn62qE-Okb4rNPRZLkXLyh4ED26LWhORR3nut9TdPr_hStkIluHsZCbBe8y_ZVREwivsozqrSP1U3PBp8FscweNwai8Esgo64IW-WndJBUqiUw1fOD6bKrNxENiejag4_r5Yz1OnYCGg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/90 via-[#00261e]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-label-caps text-label-caps text-[#a4f3ca] uppercase tracking-wider block mb-1">
                    Central Highlands
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">Emerald Tea Estates</h3>
                  <p className="font-body-sm text-body-sm text-[#deebe5]/90 mt-1 line-clamp-2">
                    Nuwara Eliya’s rolling mist, heritage bungalows, and private artisan leaf tastings.
                  </p>
                </div>
              </div>
            </div>

            {/* Collage Card 2 */}
            <div
              onClick={() => onSelectDestination(DESTINATIONS.find((d) => d.id === 'kandy') || DESTINATIONS[2])}
              className="group relative rounded-3xl overflow-hidden shadow-sm bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Vibrant Kandy Esala Perahera festival procession in Sri Lanka"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByODgt2NtC8dMklU5JXNyHH62rKAzT58Y8T6X9FZfANfU9SX6Wc55akYNWw9vdEyejB_TZmQMYuoKjWROZ3li5DUD3eRbF-FRUcQs4SJhYYW9ZFBvKJro4m4s3CdPbEIF-fRh2kdfn_KKY9uMnehbXJ41Siz7ro2334_N4lkf_mSiv6_DqiarmCv-0j5yYgDwUqJ8LOzIecSHLfFjEM56ZQnajUHtE5Gsuwzvk9R4cQ5023wS6uZuYjw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/90 via-[#00261e]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-label-caps text-label-caps text-[#a4f3ca] uppercase tracking-wider block mb-1">
                    Living Heritage
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">Kandyan Rituals</h3>
                  <p className="font-body-sm text-body-sm text-[#deebe5]/90 mt-1 line-clamp-2">
                    Echoes of sacred temple drums, Esala Perahera dancers, and ancient rock sanctuaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Collage Card 3 */}
            <div
              onClick={() => onSelectDestination(DESTINATIONS.find((d) => d.id === 'mirissa') || DESTINATIONS[4])}
              className="group relative rounded-3xl overflow-hidden shadow-sm bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Sun-drenched tropical beach in Mirissa and Tangalle Sri Lanka"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrk2eZYptfGp_cmJg9Lzi4OeUaEvFvlDGCVJIn8F0oN6dzS9RTpHB0H_aK14sVFyD0fEWQFjpJoLm0_I3v4qYzGRghBnTCuo0RQHrLYw1pzVCPB6cyrWSCeZUosVyM421o4j8i4fmI5qMsmlpcghhUGqGh5b7VE17wEL3WVt5ulhTKy-kM5NCHnOHCicFncmzyOlYGlyucrpdtSb1aWy-1RpaSJ9y_b5-avmda4VR4EEKC3AfiGEYJqg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/90 via-[#00261e]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-label-caps text-label-caps text-[#a4f3ca] uppercase tracking-wider block mb-1">
                    Southern Coast
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">Palm-Fringed Bays</h3>
                  <p className="font-body-sm text-body-sm text-[#deebe5]/90 mt-1 line-clamp-2">
                    Untamed golden curves of Tangalle, quiet coves, and gentle ocean breezes.
                  </p>
                </div>
              </div>
            </div>

            {/* Collage Card 4 */}
            <div
              onClick={() => onSelectDestination(DESTINATIONS.find((d) => d.id === 'yala') || DESTINATIONS[6])}
              className="group relative rounded-3xl overflow-hidden shadow-sm bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Wild Sri Lankan leopard resting poised on an ancient sun-warmed granite boulder in Yala National Park"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGLzARPxwXCxP3FN26weYzU5ydTEXUV5-KrMxbqpKbdFIOzhZW6Ge-mfiX7jlwCd-nuMOdBd06ZjBheP0ZVyRsTSjuUAVFvHE_J0JEJ1useQhkAuTww9pdmyQ4ZCqMAsTOWph1-AnAMxcLO6SKIA7F66ZWg-8gDprKIfcbZUdgzIqiglzDiwzDp-rPvCBlbRyDqXYINeeMQHSdKWR2MtjGM_xzPEGrLPVaNPcjEMl4WZXjLSLTqAe_Nw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/90 via-[#00261e]/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="font-label-caps text-label-caps text-[#a4f3ca] uppercase tracking-wider block mb-1">
                    Untamed Wild
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold">Wild Yala & Giants</h3>
                  <p className="font-body-sm text-body-sm text-[#deebe5]/90 mt-1 line-clamp-2">
                    World-renowned leopard densities, great elephant gatherings, and pristine wetlands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Island Statistics Bar */}
          <div className="w-full rounded-3xl bg-[#e9f7f0] p-8 lg:p-12 shadow-xs border border-[#c0c8c4]/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#c0c8c4]/30 text-center">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-display text-4xl md:text-5xl text-[#00261e] leading-none mb-2 font-bold">
                  9
                </span>
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-widest">
                  Diverse Provinces
                </span>
                <span className="font-body-sm text-body-sm text-[#414845] mt-1">
                  From dry plains to cloud forest
                </span>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-display text-4xl md:text-5xl text-[#e68743] leading-none mb-2 font-bold">
                  8
                </span>
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-widest">
                  UNESCO World Heritage Sites
                </span>
                <span className="font-body-sm text-body-sm text-[#414845] mt-1">
                  Spanning over 2 millennia
                </span>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-display text-4xl md:text-5xl text-[#00261e] leading-none mb-2 font-bold">
                  26
                </span>
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-widest">
                  National Parks
                </span>
                <span className="font-body-sm text-body-sm text-[#414845] mt-1">
                  Teeming with exotic fauna
                </span>
              </div>
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <span className="font-display text-4xl md:text-5xl text-[#e68743] leading-none mb-2 font-bold">
                  1
                </span>
                <span className="font-label-caps text-label-caps text-[#176b4b] uppercase tracking-widest">
                  Extraordinary Island
                </span>
                <span className="font-body-sm text-body-sm text-[#414845] mt-1">
                  Unmatched hospitality & warmth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS GRID */}
      <section className="w-full py-20 bg-[#e9f7f0]" id="destinations">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-widest inline-block mb-3">
                Places Worth Getting Lost In
              </span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-[#00261e] tracking-tight">
                Curated Island Destinations
              </h2>
              <p className="font-body-md text-body-md text-[#414845] mt-2">
                Handpicked gems across the tear-drop island, each steeped in distinct geography and spirit.
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-[#00261e] hover:text-[#176b4b] transition-colors group cursor-pointer"
            >
              <span>View All Destinations</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                north_east
              </span>
            </button>
          </div>

          {/* 8-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((d) => (
              <div
                key={d.id}
                onClick={() => onSelectDestination(d)}
                className="group relative rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer border border-[#c0c8c4]/20"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={d.name}
                    src={d.image}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs font-label-caps text-label-caps text-[#00261e] uppercase">
                    {d.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-headline-sm text-xl text-[#00261e] mb-2 font-semibold group-hover:text-[#176b4b] transition-colors">
                      {d.name}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#414845] line-clamp-2">
                      {d.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center justify-between border-t border-[#e3f1ea]">
                    <span className="font-label-md text-label-md text-[#176b4b] font-semibold">
                      {d.journeysCount} Journeys
                    </span>
                    <div
                      aria-label={`Explore ${d.name}`}
                      className="w-9 h-9 rounded-full bg-[#e3f1ea] flex items-center justify-center text-[#00261e] group-hover:bg-[#00261e] group-hover:text-white transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCES SECTION */}
      <section className="w-full py-20 bg-[#effdf6]" id="experiences">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="max-w-3xl mb-16">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-widest inline-block mb-3">
              Experience Sri Lanka Differently
            </span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-[#00261e] tracking-tight mb-4">
              Curated Encounters Beyond the Guidebook
            </h2>
            <p className="font-body-lg text-body-lg text-[#414845]">
              Designed for curious souls who appreciate privileged access, authentic connections, and the rare luxury of slow discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onSelectExperience(exp)}
                className="group rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#c0c8c4]/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={exp.title}
                    src={exp.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00261e]/60 via-transparent to-transparent"></div>
                  <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 font-label-caps text-label-caps text-[#00261e]">
                    {exp.categoryLabel}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-headline-sm text-xl text-[#00261e] mb-3 font-semibold group-hover:text-[#176b4b] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-body-md text-body-md text-[#414845] mb-6">
                    {exp.shortDesc}
                  </p>
                  <div className="flex items-center gap-2 text-[#176b4b] font-label-lg text-label-lg group-hover:text-[#00261e] transition-colors">
                    <span>View Experience Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOUR SECTION */}
      <section className="w-full py-20 bg-[#e9f7f0]" id="tours">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="rounded-3xl bg-[#00261e] text-white overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Text & Route Details (7 cols) */}
              <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e68743]/20 text-[#ffdbc7] mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#e68743]"></span>
                    <span className="font-label-caps text-label-caps tracking-widest uppercase">
                      Featured Journey • Highly Curated
                    </span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl lg:text-[46px] leading-[1.15] mb-4">
                    {featuredTour.title}
                  </h2>
                  <p className="font-body-md text-body-md text-[#deebe5]/90 max-w-xl mb-8 leading-relaxed">
                    {featuredTour.overview}
                  </p>

                  {/* Highlight Badges */}
                  <div className="flex flex-wrap gap-2.5 mb-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 font-label-md text-label-md text-white">
                      {featuredTour.duration}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 font-label-md text-label-md text-white">
                      Private Chauffeur-Guide
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 font-label-md text-label-md text-white">
                      Luxury Boutique Stays
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-[#a4f3ca]/20 text-[#a4f3ca] font-label-md text-label-md">
                      From ${featuredTour.pricePerPerson} / person
                    </span>
                  </div>

                  {/* Interactive Route Stepper Preview */}
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xs mb-8 border border-white/10">
                    <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-wider block mb-4">
                      Curated Route Flow
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold">
                      {featuredTour.routeStops.map((stop, i) => (
                        <React.Fragment key={i}>
                          <span
                            className={
                              i === featuredTour.routeStops.length - 1
                                ? 'text-[#ffdbc7]'
                                : 'text-white'
                            }
                          >
                            {stop}
                          </span>
                          {i < featuredTour.routeStops.length - 1 && (
                            <span className="material-symbols-outlined text-[14px] text-[#ffdbc7]">
                              east
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => onSelectTour(featuredTour)}
                    className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-label-lg shadow-lg shadow-[#e68743]/25 transition-all cursor-pointer"
                  >
                    View Journey Details
                  </button>
                  <button
                    onClick={() => onDownloadBrochure(featuredTour.title)}
                    className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-lg text-label-lg transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Download Brochure
                  </button>
                </div>
              </div>

              {/* Feature Image (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Bespoke luxury villa infinity pool in Sri Lanka"
                  src={featuredTour.heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#00261e] via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md text-[#00261e] max-w-xs shadow-lg">
                  <div className="flex items-center gap-1 text-[#e68743] mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-sm text-body-sm font-semibold">
                    “The most effortless and breathtaking holiday we have ever taken.”
                  </p>
                  <span className="font-label-caps text-label-caps text-[#414845] block mt-1">
                    — The Stirling Family, London
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRAVEL CEYLON */}
      <section className="w-full py-20 bg-[#effdf6]" id="about">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-widest inline-block mb-3">
              The Travel Ceylon Distinction
            </span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg text-[#00261e] tracking-tight mb-4">
              Travel Like You Belong Here
            </h2>
            <p className="font-body-lg text-body-lg text-[#414845]">
              We don’t just take you to Sri Lanka. We help you experience it through the people, secret sanctuaries, flavors, and living stories that make our island legendary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col items-start border border-[#c0c8c4]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#e3f1ea] flex items-center justify-center text-[#176b4b] mb-6">
                <span className="material-symbols-outlined text-[28px]">explore</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#00261e] mb-2 font-semibold">
                Native Island Expertise
              </h3>
              <p className="font-body-md text-body-md text-[#414845]">
                Born and raised island guides and destination architects with intimate insider knowledge and ancestral heritage.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col items-start border border-[#c0c8c4]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#e3f1ea] flex items-center justify-center text-[#176b4b] mb-6">
                <span className="material-symbols-outlined text-[28px]">tune</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#00261e] mb-2 font-semibold">
                Tailor-Made Rhythms
              </h3>
              <p className="font-body-md text-body-md text-[#414845]">
                Every itinerary is 100% custom-crafted to your personal pace, culinary desires, and preferred moments of solitude.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col items-start border border-[#c0c8c4]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#e3f1ea] flex items-center justify-center text-[#176b4b] mb-6">
                <span className="material-symbols-outlined text-[28px]">verified</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#00261e] mb-2 font-semibold">
                Handpicked Sanctuaries
              </h3>
              <p className="font-body-md text-body-md text-[#414845]">
                Vetted eco-luxury lodges, secluded colonial bungalows, and boutique estates that honor nature and communities.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-3xl bg-white shadow-xs hover:shadow-md transition-shadow flex flex-col items-start border border-[#c0c8c4]/20">
              <div className="w-14 h-14 rounded-2xl bg-[#e3f1ea] flex items-center justify-center text-[#176b4b] mb-6">
                <span className="material-symbols-outlined text-[28px]">support_agent</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#00261e] mb-2 font-semibold">
                24/7 Dedicated Concierge
              </h3>
              <p className="font-body-md text-body-md text-[#414845]">
                Seamless on-ground logistics with private chauffeurs, ensuring quiet confidence and peace of mind at every turn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVELER STORIES / TESTIMONIALS */}
      <section className="w-full py-20 bg-[#e9f7f0]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-widest inline-block mb-3">
                Stories From the Road
              </span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-[#00261e] tracking-tight">
                Memories Carved in Ceylon
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#e68743]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <span className="font-label-lg text-label-lg font-bold text-[#00261e]">
                4.9 / 5.0 (420+ Verified Guests)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-white shadow-xs flex flex-col justify-between border border-[#c0c8c4]/20"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#e68743] mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-md text-body-md text-[#121e1a] italic leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>
                <div className="pt-6 border-t border-[#e3f1ea] flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    alt={t.author}
                    src={t.avatar}
                  />
                  <div>
                    <span className="font-label-lg text-label-lg font-bold text-[#00261e] block">
                      {t.author}
                    </span>
                    <span className="font-body-sm text-body-sm text-[#414845]">
                      {t.origin} • {t.tourType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL BLOG / TRAVEL JOURNAL */}
      <section className="w-full py-20 bg-[#effdf6]" id="travel-guide">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-widest inline-block mb-3">
                From Our Travel Journal
              </span>
              <h2 className="font-headline-lg text-3xl md:text-headline-lg text-[#00261e] tracking-tight">
                Stories, Seasonal Tips & Insights
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('travel-guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-label-lg text-label-lg text-[#00261e] hover:text-[#176b4b] transition-colors group cursor-pointer"
            >
              <span>Read All Articles</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                north_east
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNAL_ARTICLES.map((art) => (
              <article
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="group rounded-3xl bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer border border-[#c0c8c4]/20"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={art.title}
                    src={art.image}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 font-label-caps text-label-caps text-[#00261e]">
                    {art.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-body-sm text-body-sm text-[#414845] mb-2 block">
                      {art.readTime}
                    </span>
                    <h3 className="font-headline-sm text-lg text-[#00261e] mb-3 leading-snug group-hover:text-[#176b4b] transition-colors font-semibold">
                      {art.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#414845] line-clamp-2">
                      {art.summary}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 flex items-center gap-2 text-[#00261e] font-label-md text-label-md font-semibold border-t border-[#e3f1ea]">
                    <span>Read Guide</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="w-full py-20 bg-[#e9f7f0]">
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Imagery */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZnHj1XHltO7aBksca4k_GUE9sZQffcoojJS-qSLr3nltD07EI1PutiJqZbgP5Lb5B4yiWHHCtDqc9bZdeRoAa_CoadDg4p-8IXE2r9zX9-I_So34HkwqvhfoV4h8uK2yCmtvHkQkA3HH2LUUga-4LXoQJdtVrqdatJXHJjFYShibfqhzQT30tkSf55r_M5UPZHD0Kp2Q72gIzWfSYn8FDAwixGZVv5B3slQt2hqfZEeC78gelCAIFGg')`,
              }}
            >
              <div className="absolute inset-0 bg-[#00261e]/75 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00261e] via-[#00261e]/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-16 lg:p-20 max-w-3xl flex flex-col items-start">
              <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-widest inline-block mb-4">
                Start Your Voyage
              </span>
              <h2 className="font-display text-4xl md:text-[54px] text-white leading-[1.1] mb-6">
                Your Sri Lankan Story Starts Here.
              </h2>
              <p className="font-body-lg text-body-lg text-[#deebe5]/90 max-w-xl leading-relaxed mb-10">
                Tell us what you dream of discovering. Whether a serene ayurvedic sanctuary, high tea in the clouds, or dawn safaris tracking big cats, we will turn it into an unforgettable reality.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenPlanner()}
                  className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-label-lg shadow-xl shadow-[#e68743]/30 transition-all duration-300 cursor-pointer"
                >
                  Plan My Trip
                </button>
                <button
                  onClick={() => {
                    onNavigate('tours');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center h-13 px-8 rounded-full bg-white/15 hover:bg-white/25 text-white font-label-lg text-label-lg transition-all duration-300 cursor-pointer"
                >
                  Explore Tours
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
