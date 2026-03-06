/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import FeaturedDrinks from './components/FeaturedDrinks';
import LoyaltyBanner from './components/LoyaltyBanner';
import SeasonalSpotlight from './components/SeasonalSpotlight';
import AppDownload from './components/AppDownload';
import SustainabilityTile from './components/SustainabilityTile';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedDrinks />
        <LoyaltyBanner />
        <SeasonalSpotlight />
        <AppDownload />
        <SustainabilityTile />
      </main>
      <Footer />
    </div>
  );
}
