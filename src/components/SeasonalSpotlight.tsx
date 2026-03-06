/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function SeasonalSpotlight() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-card overflow-hidden aspect-[4/5] sm:aspect-video lg:aspect-square shadow-starbucks"
          >
            <img 
              src="https://picsum.photos/seed/seasonal/1000/1000" 
              alt="Seasonal Drink" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6 bg-alert text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
              <Clock className="w-4 h-4" />
              Limited Time Only
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6 leading-tight">
              The Taste of <br/>
              <span className="text-primary italic">Spring Awakening</span>
            </h2>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              Our master baristas have crafted something truly special. Experience the delicate notes of floral lavender paired with creamy oatmilk and our signature blonde espresso.
            </p>

            <div className="grid grid-cols-4 gap-4 mb-12">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="bg-surface rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-text-secondary mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-button font-bold text-lg shadow-xl transition-all active:scale-95">
              Order Seasonal Drink
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
