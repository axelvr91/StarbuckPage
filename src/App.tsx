/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedDrinks from './components/FeaturedDrinks';
import LoyaltyBanner from './components/LoyaltyBanner';
import SeasonalSpotlight from './components/SeasonalSpotlight';
import AppDownload from './components/AppDownload';
import SustainabilityTile from './components/SustainabilityTile';
import MenuPage from './components/MenuPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu'>('home');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <HeroSection />
            <FeaturedDrinks />
            <LoyaltyBanner />
            <SeasonalSpotlight />
            <AppDownload />
            <SustainabilityTile />
          </>
        ) : (
          <MenuPage />
        )}
      </main>
      <Footer />
    </div>
  );
}
