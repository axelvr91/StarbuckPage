/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Plus } from 'lucide-react';

const drinks = [
  {
    id: 1,
    name: 'Lavender Oatmilk Latte',
    price: '$5.45',
    calories: '210 Cal',
    image: 'https://picsum.photos/seed/drink1/400/400',
    tag: 'Seasonal'
  },
  {
    id: 2,
    name: 'Iced Brown Sugar Oatmilk',
    price: '$5.95',
    calories: '120 Cal',
    image: 'https://picsum.photos/seed/drink2/400/400',
    tag: 'Fan Favorite'
  },
  {
    id: 3,
    name: 'Dragon Drink Refreshers',
    price: '$4.95',
    calories: '190 Cal',
    image: 'https://picsum.photos/seed/drink3/400/400',
    tag: 'Refreshing'
  },
  {
    id: 4,
    name: 'Caramel Macchiato',
    price: '$5.25',
    calories: '250 Cal',
    image: 'https://picsum.photos/seed/drink4/400/400',
    tag: 'Classic'
  }
];

export default function FeaturedDrinks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-4">
              Featured Favorites
            </h2>
            <p className="text-text-secondary text-lg">
              Handcrafted with love, just the way you like it.
            </p>
          </div>
          <a href="#" className="hidden sm:block text-primary font-bold border-b-2 border-primary pb-1 hover:text-primary-dark hover:border-primary-dark transition-all">
            View Full Menu
          </a>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
          {drinks.map((drink, index) => (
            <motion.div 
              key={drink.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[280px] sm:min-w-[320px] bg-surface rounded-card p-6 snap-start group cursor-pointer hover:shadow-starbucks transition-all"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                <img 
                  src={drink.image} 
                  alt={drink.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {drink.tag}
                </span>
              </div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-text-primary leading-tight group-hover:text-primary transition-colors">
                  {drink.name}
                </h3>
                <span className="font-bold text-primary">{drink.price}</span>
              </div>
              
              <div className="flex items-center gap-2 text-text-secondary text-xs mb-6">
                <span>{drink.calories}</span>
                <span className="w-1 h-1 bg-text-secondary/30 rounded-full" />
                <div className="flex items-center gap-1 text-accent">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="font-bold">4.8</span>
                </div>
              </div>

              <button className="w-full bg-white border border-surface group-hover:bg-primary group-hover:text-white group-hover:border-primary py-3 rounded-button font-bold text-sm flex items-center justify-center gap-2 transition-all">
                <Plus className="w-4 h-4" />
                Add to Order
              </button>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}
