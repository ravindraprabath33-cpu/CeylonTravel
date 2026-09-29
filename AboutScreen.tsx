import React, { useState } from 'react';

interface AboutScreenProps {
  onShowToast: (msg: string) => void;
  onOpenPlanner: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({
  onShowToast,
  onOpenPlanner,
}) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail) {
      onShowToast('Please provide your name and email address.');
      return;
    }
    setIsSent(true);
    onShowToast(`Thank you, ${contactName}. Our concierge desk in Colombo will respond promptly.`);
  };

  return (
    <div className="w-full pb-24">
      {/* Header Banner */}
      <div className="relative bg-[#123d32] text-white pt-28 pb-16 px-5 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#a4f3ca]/20 text-[#a4f3ca] text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a4f3ca]"></span>
            Native Island Heritage Since 2012
          </div>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            About Travel Ceylon
          </h1>
          <p className="font-body-lg text-[#deebe5] max-w-2xl leading-relaxed">
            We are born-and-raised Sri Lankan destination architects, wildlife biologists, and cultural storytellers dedicated to sharing our island with quiet elegance and genuine reverence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-12 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block">
              Our Genesis
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl text-[#00261e] font-semibold">
              Founded on Love for Ceylon's Living Wonders
            </h2>
            <p className="font-body-lg text-[#414845] leading-relaxed">
              Travel Ceylon began over a decade ago when a small collective of senior naturalists, tea planters, and expedition chauffeurs realized that the world deserved more than rushed group bus tours.
            </p>
            <p className="font-body-md text-[#414845] leading-relaxed">
              We wanted to invite guests into the secluded tea bungalows where our grandfathers tended single-origin camellia sinensis; to show them secret leopard watering holes in Yala at dawn; and to share the spiritual warmth of ancient boulder monasteries at twilight.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#e3f1ea]">
              <div>
                <span className="font-display text-3xl font-bold text-[#00261e]">14+</span>
                <span className="text-xs text-[#717975] block mt-1">Years of Bespoke Excellence</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-[#e68743]">100%</span>
                <span className="text-xs text-[#717975] block mt-1">SLTDA Certified & Insured</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-[#176b4b]">420+</span>
                <span className="text-xs text-[#717975] block mt-1">5-Star Verified Guest Reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhuUf7S-mV2uocfJmtIdbpmri_PDzE6WfN9V9uSuuIAhxaEcyXERZRGy9Iy0XnMU9ThyFJSuMiHKLAd6WJO8ufkod8mLujk-rIY_xyueksoEwn62qE-Okb4rNPRZLkXLyh4ED26LWhORR3nut9TdPr_hStkIluHsZCbBe8y_ZVREwivsozqrSP1U3PBp8FscweNwai8Esgo64IW-WndJBUqiUw1fOD6bKrNxENiejag4_r5Yz1OnYCGg"
                alt="Highland Ceylon Tea Estate"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Curators & Naturalists */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block mb-1">
              Field Specialists
            </span>
            <h2 className="font-headline-lg text-3xl text-[#00261e] font-semibold">
              Meet Your Island Hosts & Guides
            </h2>
            <p className="text-sm text-[#414845] mt-2">
              Every Travel Ceylon private chauffeur-guide undergoes strict annual certification in island botany, history, and discreet luxury hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-white border border-[#c0c8c4]/30 shadow-xs flex flex-col items-center text-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCloI45jg1daQ2VGKHA8H9hhQztTT4dGIt-zhxuWMe4yoxkvUk_E7_fFDCSWHE8LNycJvHX5jFGYXhAGD21rMtv3x95uPZU9v4-c-3CpWBxrv36r8vQRU107-COB6Rs6XWMCiGkRLLP3A1XGX6inqxNZdLc-3VVdyCxwtVcdg6gVR8i-trwr34oiSn_ZhnWE_EjBbbEwLDXQOgWWp1fMoYmVBoJhqz8TeEndgcZt5c_EzNrgdjxmsyyCA"
                alt="Dinesh Jayasuriya"
                className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-[#a4f3ca]/40"
              />
              <h3 className="font-headline-sm text-lg font-bold text-[#00261e]">Dinesh Jayasuriya</h3>
              <span className="text-xs text-[#176b4b] font-semibold mb-2">Senior Chauffeur-Guide & Geographer</span>
              <p className="text-xs text-[#414845] leading-relaxed">
                22 years guiding international couples across the cultural triangle. Renowned for knowing secret waterfall viewpoints and local culinary legends.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#c0c8c4]/30 shadow-xs flex flex-col items-center text-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS6UfqPfGAuOJoT_2P9s3vWg754QtOXjAi2Fg9VDBbE7C71BXaSyXCJTYwDMO86RGy3qKZLKjBuPYxmi6qpI8_BWF2mu_HcFpKGiyEsu8DQd3OvlQFv9gC2HnNhJg6l1rhMW9LyydkeyArvKADNgj03Wo6071QRQ8BdK6ZaePvTnj5D9fTyjgHVDmNqJXa6yitawb1yi_VA9jLfPjSI5-C5TYg9AVM9f_Dn_ckAqcNJH3uE8ICJ8strQ"
                alt="Sunil & Anura Weeraratne"
                className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-[#a4f3ca]/40"
              />
              <h3 className="font-headline-sm text-lg font-bold text-[#00261e]">Sunil Weeraratne</h3>
              <span className="text-xs text-[#176b4b] font-semibold mb-2">Master Wildlife Biologist & Safari Lead</span>
              <p className="text-xs text-[#414845] leading-relaxed">
                Former wildlife department researcher with unrivaled ability to track leopards in Yala and identify endemic avian species in Sinharaja.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-[#c0c8c4]/30 shadow-xs flex flex-col items-center text-center">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVwDUnzReEb-qheH-uI1S28A1cXkGEkn1ZifnQRBVmz60kI8F6enGDXh3MUuVvKeSMraDhj8cqtVRIoLe07YtBS3XVZ6ENsg9u2wM23acEamIDPJOo0Ow_lCzwdaeaD653Wtcs2fYniOOhIlZaS7C9NHC3TONTBWs3Zq2pe6YSmVrPDE_V3X50V6fV09D4NmJM25sDiPpwxyYpjyH6jxtlUxND7m6DCVzyXJN6CYw2yjHx0qKYlA4Yg"
                alt="Kavindi Perera"
                className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-[#a4f3ca]/40"
              />
              <h3 className="font-headline-sm text-lg font-bold text-[#00261e]">Kavindi Perera</h3>
              <span className="text-xs text-[#176b4b] font-semibold mb-2">Highland Architect & Tea Sommelier</span>
              <p className="text-xs text-[#414845] leading-relaxed">
                Descended from three generations of Nuwara Eliya tea masters. Specializes in curating private estate bungalows and Pekoe Trail stages.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Pledge */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#123d32] text-white">
          <div className="max-w-3xl">
            <span className="font-label-caps text-label-caps uppercase text-[#a4f3ca] tracking-widest block mb-2">
              Our Conscience
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white font-semibold mb-4">
              The Travel Ceylon Sustainability & Reforestation Pledge
            </h2>
            <p className="font-body-md text-sm md:text-base text-[#deebe5] leading-relaxed mb-6">
              For every traveler who explores Sri Lanka with us, we fund the planting of five native canopy trees in the buffer zone of the UNESCO Sinharaja Rainforest. We operate with strict ethical elephant viewing guidelines, ban single-use plastic bottles across our private vehicles, and ensure 100% fair living wages for our village culinary and tracker partners.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#a4f3ca]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">forest</span>
                12,000+ Native Trees Planted
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">water_drop</span>
                Zero Single-Use Vehicle Plastics
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">pets</span>
                Ethical Wildlife Standards
              </span>
            </div>
          </div>
        </div>

        {/* Contact Concierge Form */}
        <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#c0c8c4]/30 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-label-caps text-label-caps uppercase text-[#176b4b] tracking-wider block">
                Direct Contact
              </span>
              <h2 className="font-headline-sm text-2xl text-[#00261e] font-semibold">
                Speak with Our Colombo Concierge
              </h2>
              <p className="text-xs md:text-sm text-[#414845] leading-relaxed">
                Whether you are starting from scratch or already have flight dates in mind, our private destination architects are ready to guide you.
              </p>
              <div className="space-y-3 pt-4 text-xs text-[#00261e]">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#176b4b] text-[20px]">call</span>
                  <span>+94 11 258 7400 / +94 77 123 4567 (WhatsApp)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#176b4b] text-[20px]">mail</span>
                  <span>concierge@travelceylon.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#176b4b] text-[20px]">location_on</span>
                  <span>42 Alfred House Gardens, Colombo 03, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              {isSent ? (
                <div className="p-6 bg-[#effdf6] rounded-2xl border border-[#a4f3ca] text-center space-y-3">
                  <span className="material-symbols-outlined text-[#176b4b] text-[36px]">
                    mark_email_read
                  </span>
                  <h4 className="font-headline-sm text-lg text-[#00261e] font-bold">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-[#414845]">
                    Ayubowan, {contactName}. A dedicated concierge architect will respond to {contactEmail} within 4 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        placeholder="Marcus Vance"
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-xs outline-none focus:border-[#176b4b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        placeholder="marcus@example.com"
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-xs outline-none focus:border-[#176b4b]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#00261e] mb-1">
                      How may we assist your journey?
                    </label>
                    <textarea
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Share your intended travel window, interests, or questions..."
                      className="w-full p-3 rounded-xl border border-[#c0c8c4] text-xs outline-none focus:border-[#176b4b]"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <button
                      type="button"
                      onClick={onOpenPlanner}
                      className="text-xs text-[#176b4b] font-semibold underline"
                    >
                      Or use the Interactive Route Planner ›
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full bg-[#123d32] hover:bg-[#176b4b] text-white text-xs font-semibold shadow-md transition-colors cursor-pointer"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
