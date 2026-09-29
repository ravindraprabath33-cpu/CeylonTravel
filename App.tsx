import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { DestinationsScreen } from './screens/DestinationsScreen';
import { ExperiencesScreen } from './screens/ExperiencesScreen';
import { ToursScreen } from './screens/ToursScreen';
import { AboutScreen } from './screens/AboutScreen';
import { TravelGuideScreen } from './screens/TravelGuideScreen';
import { SearchModal } from './components/SearchModal';
import { PlanTripModal } from './components/PlanTripModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';
import { TourDetailModal } from './components/TourDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { Toast } from './components/Toast';
import { Destination, Experience, Tour, JournalArticle, DESTINATIONS } from './data/travelData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [planTripOpen, setPlanTripOpen] = useState(false);
  const [planTripPreselectedId, setPlanTripPreselectedId] = useState<string | undefined>();

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const [savedDestinations, setSavedDestinations] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('travel_ceylon_saved_destinations');
      return saved ? JSON.parse(saved) : ['ella', 'sigiriya'];
    } catch {
      return ['ella', 'sigiriya'];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('travel_ceylon_saved_destinations', JSON.stringify(savedDestinations));
    } catch {
      // ignore
    }
  }, [savedDestinations]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 4500);
  };

  const handleNavigate = (screenId: string) => {
    setCurrentScreen(screenId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlanner = (destId?: string) => {
    setPlanTripPreselectedId(destId);
    setPlanTripOpen(true);
  };

  const handleToggleSaveDestination = (destId: string) => {
    const dest = DESTINATIONS.find((d) => d.id === destId);
    const destName = dest ? dest.name : 'Destination';

    if (savedDestinations.includes(destId)) {
      setSavedDestinations(savedDestinations.filter((id) => id !== destId));
      showToast(`Removed ${destName} from your saved places.`);
    } else {
      setSavedDestinations([...savedDestinations, destId]);
      showToast(`Added ${destName} to your journey wishlist!`);
    }
  };

  const handleDownloadBrochure = (tourTitle: string) => {
    showToast(`Downloading complimentary brochure for "${tourTitle}"...`);
    // Create a simulated downloadable itinerary brief
    setTimeout(() => {
      const blob = new Blob(
        [
          `TRAVEL CEYLON - BESPOKE EXPEDITION BRIEF\n\nTitle: ${tourTitle}\nAccredited by: Sri Lanka Tourism Development Authority (SLTDA)\nWebsite: https://travelceylon.com\nConcierge: concierge@travelceylon.com\n\nThank you for downloading our journey brief. Our private chauffeur-guide and naturalist will tailor every single morning, tea tasting, and game drive to your personal wishes.`,
        ],
        { type: 'text/plain;charset=utf-8' }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tourTitle.toLowerCase().replace(/[^a-z0-9]/g, '_')}_brochure.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#effdf6] font-body text-[#121e1a] flex flex-col antialiased selection:bg-[#a4f3ca] selection:text-[#00261e]">
      {/* Global Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenPlanner={handleOpenPlanner}
        savedCount={savedDestinations.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'home' && (
          <HomeScreen
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onSelectTour={(tour) => setSelectedTour(tour)}
            onSelectArticle={(art) => setSelectedArticle(art)}
            onOpenPlanner={handleOpenPlanner}
            onDownloadBrochure={handleDownloadBrochure}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'destinations' && (
          <DestinationsScreen
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onPlanTrip={(destId) => handleOpenPlanner(destId)}
          />
        )}

        {currentScreen === 'experiences' && (
          <ExperiencesScreen
            onSelectExperience={(exp) => setSelectedExperience(exp)}
            onBookExperience={(exp) => handleOpenPlanner()}
          />
        )}

        {currentScreen === 'tours' && (
          <ToursScreen
            onSelectTour={(tour) => setSelectedTour(tour)}
            onBookTour={(tour) => handleOpenPlanner()}
            onDownloadBrochure={handleDownloadBrochure}
          />
        )}

        {currentScreen === 'travel-guide' && (
          <TravelGuideScreen
            onSelectArticle={(art) => setSelectedArticle(art)}
            onPlanTrip={() => handleOpenPlanner()}
          />
        )}

        {currentScreen === 'about-us' && (
          <AboutScreen
            onShowToast={showToast}
            onOpenPlanner={() => handleOpenPlanner()}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} onShowToast={showToast} />

      {/* Global Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectDestination={(dest) => setSelectedDestination(dest)}
        onSelectExperience={(exp) => setSelectedExperience(exp)}
        onSelectTour={(tour) => setSelectedTour(tour)}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      <PlanTripModal
        isOpen={planTripOpen}
        onClose={() => setPlanTripOpen(false)}
        preselectedDestId={planTripPreselectedId}
        onShowToast={showToast}
      />

      <DestinationDetailModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onPlanTrip={(destId) => handleOpenPlanner(destId)}
        isSaved={selectedDestination ? savedDestinations.includes(selectedDestination.id) : false}
        onToggleSave={handleToggleSaveDestination}
      />

      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onBookExperience={() => handleOpenPlanner()}
      />

      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onBookTour={() => handleOpenPlanner()}
        onDownloadBrochure={handleDownloadBrochure}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onPlanTrip={() => handleOpenPlanner()}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
