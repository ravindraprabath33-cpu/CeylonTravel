import React, { useState } from 'react';
import { DESTINATIONS } from '../data/travelData';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestId?: string;
  onShowToast: (msg: string) => void;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({
  isOpen,
  onClose,
  preselectedDestId,
  onShowToast,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(() =>
    preselectedDestId ? [preselectedDestId] : ['ella', 'sigiriya', 'galle']
  );
  const [travelerStyle, setTravelerStyle] = useState('couples');
  const [travelersCount, setTravelersCount] = useState(2);
  const [season, setSeason] = useState('dec-apr');
  const [durationDays, setDurationDays] = useState(10);
  const [accommodationTier, setAccommodationTier] = useState<'boutique' | 'luxury' | 'ultra'>('luxury');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'wildlife',
    'tea',
    'culture',
  ]);

  // Contact Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync preselected
  React.useEffect(() => {
    if (preselectedDestId && !selectedDestinations.includes(preselectedDestId)) {
      setSelectedDestinations((prev) => [...prev, preselectedDestId]);
    }
  }, [preselectedDestId]);

  const toggleDestination = (id: string) => {
    if (selectedDestinations.includes(id)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== id));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, id]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  // Estimate calculation
  const baseRatePerDay =
    accommodationTier === 'boutique' ? 140 : accommodationTier === 'luxury' ? 220 : 340;
  const estimatedCostPerPerson = Math.round(
    durationDays * baseRatePerDay + selectedDestinations.length * 35
  );
  const estimatedTotal = estimatedCostPerPerson * travelersCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      onShowToast('Please provide your name and email address.');
      return;
    }
    setIsSubmitted(true);
    onShowToast(`Bespoke trip request received for ${name}! Our island concierge will reply within 4 hours.`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00261e]/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#c0c8c4]/30 my-8">
        {/* Modal Header */}
        <div className="bg-[#123d32] text-white p-6 md:p-8 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e68743]/20 text-[#ffdbc7] text-xs font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e68743]"></span>
              Private Bespoke Itinerary Architect
            </div>
            <h3 className="font-headline-md text-2xl md:text-3xl text-white">
              Craft Your Sri Lanka Journey
            </h3>
            <p className="text-xs md:text-sm text-[#7da899] mt-1">
              Curated by native destination specialists according to your pace and passions.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between border-b border-[#e3f1ea] px-6 md:px-8 py-3 bg-[#effdf6]/60 text-xs">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setStep(1)}
              className={`flex items-center gap-1.5 font-semibold cursor-pointer ${
                step === 1 ? 'text-[#176b4b]' : 'text-[#717975]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                  step === 1 ? 'bg-[#176b4b] text-white' : 'bg-[#e3f1ea] text-[#717975]'
                }`}
              >
                1
              </span>
              Route & Sanctuaries
            </button>
            <span className="text-[#c0c8c4]">›</span>
            <button
              onClick={() => setStep(2)}
              className={`flex items-center gap-1.5 font-semibold cursor-pointer ${
                step === 2 ? 'text-[#176b4b]' : 'text-[#717975]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                  step === 2 ? 'bg-[#176b4b] text-white' : 'bg-[#e3f1ea] text-[#717975]'
                }`}
              >
                2
              </span>
              Pace & Tier
            </button>
            <span className="text-[#c0c8c4]">›</span>
            <button
              onClick={() => setStep(3)}
              className={`flex items-center gap-1.5 font-semibold cursor-pointer ${
                step === 3 ? 'text-[#176b4b]' : 'text-[#717975]'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] ${
                  step === 3 ? 'bg-[#176b4b] text-white' : 'bg-[#e3f1ea] text-[#717975]'
                }`}
              >
                3
              </span>
              Concierge Inquiry
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[#00261e] font-semibold">
            <span className="text-[11px] text-[#717975]">Estimated from:</span>
            <span className="text-sm font-bold text-[#e68743]">${estimatedCostPerPerson}</span>
            <span className="text-[10px] text-[#717975]">/ person</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 max-h-[65vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#a1f0c7] text-[#176b4b] mx-auto flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">check</span>
              </div>
              <h4 className="font-headline-md text-2xl text-[#00261e]">
                Your Journey Request is in Motion
              </h4>
              <p className="text-sm text-[#414845] max-w-md mx-auto leading-relaxed">
                Ayubowan, {name}. Our senior destination architect Dinesh is reviewing your {durationDays}-day tailored route covering {selectedDestinations.length} destinations. A complete bespoke proposal with verified boutique availability will reach {email} shortly.
              </p>
              <div className="p-4 bg-[#e9f7f0] rounded-2xl max-w-sm mx-auto text-left text-xs text-[#00261e] space-y-1">
                <div className="font-bold">Summary of Request:</div>
                <div>· Duration: {durationDays} Days / {durationDays - 1} Nights</div>
                <div>· Travelers: {travelersCount} Guests ({travelerStyle})</div>
                <div>· Destinations: {selectedDestinations.join(', ')}</div>
                <div>· Indicative Budget: ~${estimatedTotal.toLocaleString()} total</div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-full bg-[#123d32] text-white font-label-lg"
                >
                  Return to Island Overview
                </button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-headline-sm text-lg text-[#00261e] mb-1">
                      1. Select the Destinations You Wish to Experience
                    </h4>
                    <p className="text-xs text-[#414845]">
                      Click to add or remove places. We arrange seamless private chauffeur transfers between all chosen points.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {DESTINATIONS.map((d) => {
                      const isSelected = selectedDestinations.includes(d.id);
                      return (
                        <div
                          key={d.id}
                          onClick={() => toggleDestination(d.id)}
                          className={`relative rounded-2xl overflow-hidden cursor-pointer border-2 transition-all p-2 flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#176b4b] bg-[#e9f7f0]'
                              : 'border-[#e3f1ea] hover:border-[#a4f3ca] bg-white'
                          }`}
                        >
                          <div className="relative h-20 rounded-xl overflow-hidden mb-2">
                            <img
                              src={d.image}
                              alt={d.name}
                              className="w-full h-full object-cover"
                            />
                            {isSelected && (
                              <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-[#176b4b] text-white flex items-center justify-center text-[10px]">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-headline-sm text-sm font-bold text-[#00261e]">
                              {d.name}
                            </div>
                            <div className="text-[10px] text-[#717975]">{d.regionLabel}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-[#e3f1ea]">
                    <h4 className="font-headline-sm text-base text-[#00261e] mb-2">
                      Key Passions & Experiences
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'wildlife', label: 'Big Cat & Elephant Safaris' },
                        { id: 'tea', label: 'Highland Tea & Colonial Estates' },
                        { id: 'culture', label: 'Sacred Temples & Ancient Rocks' },
                        { id: 'surf', label: 'Surfing & Indian Ocean Waters' },
                        { id: 'wellness', label: 'Ayurveda & Mountain Yoga' },
                        { id: 'food', label: 'Cooking Masterclasses & Spices' },
                        { id: 'trekking', label: 'Pekoe Trail & Peak Hikes' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => toggleInterest(item.id)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-colors ${
                            selectedInterests.includes(item.id)
                              ? 'bg-[#00261e] text-white'
                              : 'bg-[#e9f7f0] text-[#176b4b] hover:bg-[#d8e6df]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setStep(2)}
                      className="px-8 py-3 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg transition-colors cursor-pointer"
                    >
                      Next: Style & Accommodation ›
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  {/* Duration Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-headline-sm text-base text-[#00261e]">
                        Trip Duration: {durationDays} Days / {durationDays - 1} Nights
                      </h4>
                      <span className="text-xs font-bold text-[#176b4b]">
                        Recommended: 7–14 Days
                      </span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={21}
                      value={durationDays}
                      onChange={(e) => setDurationDays(Number(e.target.value))}
                      className="w-full accent-[#176b4b] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#717975] mt-1">
                      <span>4 Days (Short Escape)</span>
                      <span>10 Days (Curated Classic)</span>
                      <span>21 Days (Grand Odyssey)</span>
                    </div>
                  </div>

                  {/* Travelers & Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-2">
                        Traveler Dynamics
                      </label>
                      <select
                        value={travelerStyle}
                        onChange={(e) => setTravelerStyle(e.target.value)}
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-sm text-[#00261e] bg-white outline-none focus:border-[#176b4b]"
                      >
                        <option value="couples">Couples & Honeymoon (Intimate, romantic)</option>
                        <option value="family">Family with Children (Curated, unhurried)</option>
                        <option value="solo">Solo Voyager (Mindful, exploratory)</option>
                        <option value="friends">Private Friends Group (4–8 guests)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-2">
                        Number of Guests
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setTravelersCount(Math.max(1, travelersCount - 1))}
                          className="w-11 h-11 rounded-xl border border-[#c0c8c4] flex items-center justify-center text-lg font-bold hover:bg-[#e9f7f0]"
                        >
                          -
                        </button>
                        <span className="text-base font-bold text-[#00261e] w-12 text-center">
                          {travelersCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => setTravelersCount(Math.min(12, travelersCount + 1))}
                          className="w-11 h-11 rounded-xl border border-[#c0c8c4] flex items-center justify-center text-lg font-bold hover:bg-[#e9f7f0]"
                        >
                          +
                        </button>
                        <span className="text-xs text-[#717975]">guests traveling</span>
                      </div>
                    </div>
                  </div>

                  {/* Accommodation Tier */}
                  <div>
                    <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-3">
                      Accommodation Style
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        {
                          id: 'boutique',
                          title: 'Heritage & Boutique',
                          desc: 'Charming colonial manors, eco-lodges & tea planter bungalows.',
                          est: '$140/night/person',
                        },
                        {
                          id: 'luxury',
                          title: '5-Star Luxury & Resorts',
                          desc: 'Water Garden Sigiriya, 98 Acres Ella, Chena Huts Yala.',
                          est: '$220/night/person',
                        },
                        {
                          id: 'ultra',
                          title: 'Bespoke Ultra-Luxe Villas',
                          desc: 'Amangalla, Ceylon Tea Trails, Wild Coast Tented Lodge.',
                          est: '$340/night/person',
                        },
                      ].map((tier) => (
                        <div
                          key={tier.id}
                          onClick={() => setAccommodationTier(tier.id as any)}
                          className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                            accommodationTier === tier.id
                              ? 'border-[#176b4b] bg-[#e9f7f0]'
                              : 'border-[#e3f1ea] bg-white hover:border-[#a4f3ca]'
                          }`}
                        >
                          <div className="font-bold text-sm text-[#00261e] mb-1">{tier.title}</div>
                          <div className="text-xs text-[#414845] leading-relaxed mb-2">
                            {tier.desc}
                          </div>
                          <div className="text-[11px] text-[#176b4b] font-semibold">{tier.est}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Season */}
                  <div>
                    <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-2">
                      Anticipated Travel Season
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      {[
                        { id: 'dec-apr', label: 'Dec – Apr (South & West Coast Peak)' },
                        { id: 'may-sep', label: 'May – Sep (Cultural & East Coast Peak)' },
                        { id: 'oct-nov', label: 'Oct – Nov (Lush Island Shoulder)' },
                        { id: 'undecided', label: 'Flexible / Seeking Advice' },
                      ].map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSeason(s.id)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            season === s.id
                              ? 'border-[#176b4b] bg-[#176b4b] text-white font-bold'
                              : 'border-[#c0c8c4] bg-white text-[#414845]'
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-[#e3f1ea]">
                    <button
                      onClick={() => setStep(1)}
                      className="text-xs text-[#717975] hover:text-[#00261e] font-semibold"
                    >
                      ‹ Back to Destinations
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-8 py-3 rounded-full bg-[#e68743] hover:bg-[#d57734] text-white font-label-lg transition-colors cursor-pointer"
                    >
                      Next: Request Proposal ›
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Summary Bar */}
                  <div className="p-4 bg-[#effdf6] rounded-2xl border border-[#a4f3ca] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-[#176b4b] font-bold">Trip Architecture:</div>
                      <div className="text-sm font-bold text-[#00261e]">
                        {durationDays} Days · {travelersCount} Guests · {selectedDestinations.length} Key Stops
                      </div>
                      <div className="text-xs text-[#717975]">
                        Stops: {selectedDestinations.join(' → ')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#717975]">Estimated Range:</div>
                      <div className="text-xl font-bold text-[#e68743]">
                        ${estimatedCostPerPerson} - ${estimatedCostPerPerson + 250}
                        <span className="text-xs text-[#414845] font-normal"> / person</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-sm text-[#00261e] outline-none focus:border-[#176b4b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="eleanor@example.com"
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-sm text-[#00261e] outline-none focus:border-[#176b4b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-1">
                        WhatsApp / Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+44 7911 123456"
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-sm text-[#00261e] outline-none focus:border-[#176b4b]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-1">
                        Specific Dates or Month
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Nov 12 - Nov 22, 2026"
                        className="w-full p-3 rounded-xl border border-[#c0c8c4] text-sm text-[#00261e] outline-none focus:border-[#176b4b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#00261e] uppercase tracking-wider mb-1">
                      Special Desires & Nuances
                    </label>
                    <textarea
                      rows={3}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Tell us about specific wishes: private anniversary dinner on Galle ramparts, vegan dietary preferences, high-elevation trekking, or quiet beachfront villas..."
                      className="w-full p-3 rounded-xl border border-[#c0c8c4] text-sm text-[#00261e] outline-none focus:border-[#176b4b]"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-[#e3f1ea]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs text-[#717975] hover:text-[#00261e] font-semibold"
                    >
                      ‹ Back to Style & Tier
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full bg-[#123d32] hover:bg-[#176b4b] text-white font-label-lg shadow-lg shadow-[#123d32]/25 transition-all cursor-pointer"
                    >
                      Send Bespoke Itinerary Request
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
