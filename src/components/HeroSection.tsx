/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/starbucks-hero/1920/1080?blur=2" 
          alt="Starbucks Atmosphere" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            New Seasonal Favorites
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Sip into <br/>
            <span className="text-primary">Spring Warmth</span>
          </h1>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Discover the perfect blend of creamy textures and vibrant flavors. Our new Lavender Oatmilk Latte is here to brighten your day.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-button font-bold text-lg transition-all shadow-xl hover:shadow-primary/40 active:scale-95">
              Order Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-4 rounded-button font-bold text-lg transition-all active:scale-95">
              Join Rewards
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
