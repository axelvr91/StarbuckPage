/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function SustainabilityTile() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-card overflow-hidden shadow-starbucks flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
            <img 
              src="https://picsum.photos/seed/planet/1200/800" 
              alt="Sustainability" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10" />
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-6">
              People. Planet. Coffee.
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We are committed to ethically sourcing 100% of our coffee. From supporting farmers to reducing our environmental footprint, we're working to ensure a sustainable future for coffee and the communities that grow it.
            </p>
            <div>
              <button className="text-primary font-bold flex items-center gap-2 group">
                Learn more about our impact
                <span className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
