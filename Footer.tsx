import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (screen: string) => void;
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onShowToast }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onShowToast('Thank you for subscribing to Serendib Travel Inspirations!');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#123d32] text-white pt-16 pb-10 border-t border-[#254e42]/40">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <img
                alt="Travel Ceylon Logo"
                className="h-8 w-auto object-contain brightness-200"
                src="https://lh3.googleusercontent.com/aida/AEtjO1Xl9wDem4WkHvEcvDxSa0Nr1LWtWLEdX28Fcx9hazeOIFlxZzIJqcQDunY0xAxXB31Ytpz8vp1sTXgAUwjYoIP3wh0LGl5oG2IfCg3AIL0PbfdRAyzUUt5okuKBGwAdiYvw7mkPrQSLjQ1eBWyjvMFPfQPwU7LXCvFpjXqms3hGoRbQXunj_rPG0tYCAGY1HYFcN8BE7nsaTHcFvs_dgkx_K1OCmnsDrZd0G5-afJ00VQPY_om2ZJWZfF6P"
              />
              <span className="font-headline-sm text-headline-sm text-white tracking-tight">
                Travel Ceylon
              </span>
            </div>
            <p className="font-body-md text-body-md text-[#7da899] max-w-sm leading-relaxed">
              Crafting bespoke, unforgettable journeys across the enchanted island of Sri Lanka since 2012. Curated with unhurried intimacy and quiet elegance.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a4f3ca]"></span>
              <span className="font-label-md text-label-md text-[#a4f3ca]">
                SLTDA Licensed Destination Architect #TS/1842
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-wider mb-2">
              Explore
            </span>
            <button
              onClick={() => {
                onNavigate('destinations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Destinations
            </button>
            <button
              onClick={() => {
                onNavigate('tours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Tours & Expeditions
            </button>
            <button
              onClick={() => {
                onNavigate('experiences');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Signature Experiences
            </button>
            <button
              onClick={() => {
                onNavigate('travel-guide');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Travel Guide & Journal
            </button>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-wider mb-2">
              Company
            </span>
            <button
              onClick={() => {
                onNavigate('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              About Our Story
            </button>
            <button
              onClick={() => {
                onNavigate('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Our Naturalists & Team
            </button>
            <button
              onClick={() => {
                onNavigate('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Conservation Pledge
            </button>
            <button
              onClick={() => {
                onNavigate('about-us');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left font-body-md text-body-md text-[#7da899] hover:text-white transition-colors duration-150 cursor-pointer"
            >
              Contact Concierge Desk
            </button>
          </div>

          {/* Stay Inspired / Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-wider">
              Stay Inspired
            </span>
            <p className="font-body-sm text-body-sm text-[#7da899]">
              Receive quarterly Ceylon stories, private harvest dates, and limited boutique openings.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#176b4b]/40 rounded-2xl border border-[#a4f3ca]/30 text-[#a4f3ca] text-xs">
                You are subscribed to the Serendib Travel Gazette.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 px-4 rounded-full bg-[#00261e] text-white placeholder:text-[#7da899]/70 border border-[#254e42] outline-none focus:border-[#a4f3ca] text-body-sm font-body-sm"
                  placeholder="Your email address"
                  type="email"
                  required
                />
                <button
                  className="h-11 px-6 rounded-full bg-[#176b4b] hover:bg-[#1d704f] text-white font-label-lg text-label-lg transition-colors duration-200 shrink-0 cursor-pointer"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            )}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-[#7da899]">Follow Ceylon:</span>
              <a
                aria-label="Instagram Visuals"
                className="w-8 h-8 rounded-full bg-[#00261e] flex items-center justify-center text-[#7da899] hover:text-white transition-colors"
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast('Following @travelceylon on Instagram');
                }}
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              </a>
              <a
                aria-label="Official Tourism"
                className="w-8 h-8 rounded-full bg-[#00261e] flex items-center justify-center text-[#7da899] hover:text-white transition-colors"
                href="#heritage"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast('Sri Lanka Tourism Development Authority Certified');
                }}
              >
                <span className="material-symbols-outlined text-[16px]">public</span>
              </a>
              <a
                aria-label="Travel Documentaries"
                className="w-8 h-8 rounded-full bg-[#00261e] flex items-center justify-center text-[#7da899] hover:text-white transition-colors"
                href="#cinema"
                onClick={(e) => {
                  e.preventDefault();
                  onShowToast('Explore Ceylon Cinematic Channel');
                }}
              >
                <span className="material-symbols-outlined text-[16px]">videocam</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#254e42]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7da899]/80">
          <p className="text-center sm:text-left">
            © Travel Ceylon. All rights reserved. Registered with Sri Lanka Tourism Development Authority (SLTDA).
          </p>
          <span className="font-label-caps text-label-caps text-[#a4f3ca] tracking-widest uppercase">
            Ceylon Heritage & Expeditions • Est. 2012
          </span>
        </div>
      </div>
    </footer>
  );
};
