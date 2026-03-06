/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Content will be added here in Phase 2 */}
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-dark mb-6">
            It's not just coffee.<br/>It's your morning.
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Experience the warmth and aroma of our masterfully roasted beans, delivered straight to your hands.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-button font-bold text-lg transition-all shadow-xl hover:shadow-primary/20">
            Explore the Menu
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
