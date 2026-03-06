/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function LoyaltyBanner() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-primary-dark to-primary rounded-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Stars */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="200" height="200" viewBox="0 0 100 100" className="fill-white">
              <path d="M50 0L61.8 36.2L100 36.2L69.1 58.8L80.9 95L50 72.4L19.1 95L30.9 58.8L0 36.2L38.2 36.2L50 0Z" />
            </svg>
          </div>

          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-primary-dark">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Join Starbucks® Rewards
              </h2>
              <p className="text-white/80 font-medium">
                Earn stars toward free drinks and food. <span className="text-accent">35M+ members</span> already enjoying perks.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto z-10">
            <button className="bg-white text-primary-dark hover:bg-surface px-8 py-3 rounded-button font-bold transition-all whitespace-nowrap">
              Join for Free
            </button>
            <button className="bg-transparent text-white border border-white/30 hover:bg-white/10 px-8 py-3 rounded-button font-bold transition-all whitespace-nowrap">
              Sign In
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
