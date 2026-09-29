import React from 'react';

interface HeaderProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  onOpenSearch: () => void;
  onOpenPlanner: (preselectedDest?: string) => void;
  savedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenSearch,
  onOpenPlanner,
  savedCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'destinations', label: 'Destinations' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'tours', label: 'Tours' },
    { id: 'about-us', label: 'About Us' },
    { id: 'travel-guide', label: 'Travel Guide' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#effdf6]/90 backdrop-blur-xl border-b border-[#c0c8c4]/20 shadow-[0_12px_32px_-8px_rgba(18,61,50,0.06),0_4px_12px_-2px_rgba(18,61,50,0.03)] transition-all duration-300">
      <div className="h-20 w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between gap-5">
        {/* Brand Zone */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group text-left"
          aria-label="Travel Ceylon Home"
        >
          <img
            alt="Travel Ceylon Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Xl9wDem4WkHvEcvDxSa0Nr1LWtWLEdX28Fcx9hazeOIFlxZzIJqcQDunY0xAxXB31Ytpz8vp1sTXgAUwjYoIP3wh0LGl5oG2IfCg3AIL0PbfdRAyzUUt5okuKBGwAdiYvw7mkPrQSLjQ1eBWyjvMFPfQPwU7LXCvFpjXqms3hGoRbQXunj_rPG0tYCAGY1HYFcN8BE7nsaTHcFvs_dgkx_K1OCmnsDrZd0G5-afJ00VQPY_om2ZJWZfF6P"
          />
          <span className="font-headline-sm text-headline-sm text-[#00261e] tracking-tight">
            Travel Ceylon
          </span>
        </button>

        {/* Nav Links Zone (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-label-lg text-label-lg transition-colors duration-200 cursor-pointer relative py-2 ${
                  isActive
                    ? 'text-[#00261e] font-bold'
                    : 'text-[#414845] hover:text-[#00261e]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176b4b] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search destinations, tours and articles"
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#414845] hover:text-[#00261e] hover:bg-[#e3f1ea] transition-all duration-200 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* Plan Your Trip CTA */}
          <button
            onClick={() => onOpenPlanner()}
            className="hidden sm:inline-flex items-center justify-center h-[46px] px-6 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg text-label-lg shadow-[0_8px_20px_rgba(232,137,69,0.35)] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Plan Your Trip
          </button>

          {/* Saved Destinations / Profile Indicator */}
          <button
            onClick={() => onOpenPlanner()}
            aria-label="Saved Itinerary Items"
            className="relative w-9 h-9 rounded-full bg-[#00261e] hover:bg-[#176b4b] flex items-center justify-center transition-colors cursor-pointer text-white"
            title={savedCount > 0 ? `${savedCount} items in trip builder` : 'Trip Planner'}
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              {savedCount > 0 ? 'bookmark_added' : 'person'}
            </span>
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e68743] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#00261e] hover:bg-[#e3f1ea] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#effdf6] border-b border-[#c0c8c4]/30 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-left py-2 font-subhead-lg text-body-md ${
                currentScreen === item.id ? 'text-[#00261e] font-bold' : 'text-[#414845]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-[#c0c8c4]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanner();
              }}
              className="w-full h-12 rounded-full bg-[#e68743] text-white font-label-lg flex items-center justify-center shadow-md"
            >
              Plan Your Trip
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
