/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Plus, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const categories = ['All', 'Hot Drinks', 'Cold Drinks', 'Food', 'Merchandise'];

const products = [
  { id: 1, name: 'Lavender Oatmilk Latte', category: 'Hot Drinks', price: '$5.45', calories: '210 Cal', image: 'https://picsum.photos/seed/m1/400/400' },
  { id: 2, name: 'Iced Brown Sugar Oatmilk', category: 'Cold Drinks', price: '$5.95', calories: '120 Cal', image: 'https://picsum.photos/seed/m2/400/400' },
  { id: 3, name: 'Dragon Drink Refreshers', category: 'Cold Drinks', price: '$4.95', calories: '190 Cal', image: 'https://picsum.photos/seed/m3/400/400' },
  { id: 4, name: 'Caramel Macchiato', category: 'Hot Drinks', price: '$5.25', calories: '250 Cal', image: 'https://picsum.photos/seed/m4/400/400' },
  { id: 5, name: 'Bacon & Gruyere Egg Bites', category: 'Food', price: '$4.95', calories: '300 Cal', image: 'https://picsum.photos/seed/m5/400/400' },
  { id: 6, name: 'Impossible Breakfast Sandwich', category: 'Food', price: '$5.75', calories: '430 Cal', image: 'https://picsum.photos/seed/m6/400/400' },
  { id: 7, name: 'Pink Drink', category: 'Cold Drinks', price: '$4.95', calories: '140 Cal', image: 'https://picsum.photos/seed/m7/400/400' },
  { id: 8, name: 'Caffè Americano', category: 'Hot Drinks', price: '$3.45', calories: '15 Cal', image: 'https://picsum.photos/seed/m8/400/400' },
  { id: 9, name: 'Starbucks Reserve Mug', category: 'Merchandise', price: '$19.95', calories: '-', image: 'https://picsum.photos/seed/m9/400/400' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const quizQuestions = [
    { q: "What's your current mood?", options: ["Energetic", "Relaxed", "Adventurous", "Comfortable"] },
    { q: "Milk preference?", options: ["Dairy", "Oat", "Almond", "Coconut"] },
    { q: "Caffeine level?", options: ["High", "Medium", "Low", "None"] }
  ];

  const handleQuizAnswer = async (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setIsLoadingAi(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: `Based on these preferences: Mood: ${newAnswers[0]}, Milk: ${newAnswers[1]}, Caffeine: ${newAnswers[2]}. Recommend ONE specific Starbucks drink. Be brief and warm. Format: Drink Name - Why it fits.`
        });
        setAiRecommendation(response.text || "Lavender Oatmilk Latte - A perfect blend for your mood!");
      } catch (error) {
        console.error("AI Error:", error);
        setAiRecommendation("Caramel Macchiato - A classic favorite that never fails!");
      } finally {
        setIsLoadingAi(false);
      }
    }
  };

  return (
    <div className="pt-24 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-dark">Our Menu</h1>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 md:w-80">
              <input 
                type="text" 
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-none rounded-full py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-primary outline-none"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
            </div>
            <button className="p-3 bg-white rounded-full shadow-sm hover:bg-primary hover:text-white transition-all">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-6 mb-12 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-white text-text-primary hover:bg-primary/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* AI Quiz Trigger */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsQuizOpen(true)}
          className="w-full mb-12 bg-gradient-to-r from-primary-dark to-primary p-6 rounded-card text-white flex items-center justify-between shadow-xl group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary-dark shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Not sure what to order?</h3>
              <p className="text-white/70">Let our AI barista build your perfect drink.</p>
            </div>
          </div>
          <div className="hidden sm:block bg-white/10 px-6 py-2 rounded-full font-bold group-hover:bg-white/20 transition-all">
            Start Quiz
          </div>
        </motion.button>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-card p-6 shadow-sm hover:shadow-starbucks transition-all group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors">{product.name}</h3>
                  <span className="font-bold text-primary">{product.price}</span>
                </div>
                <div className="text-xs text-text-secondary mb-6">{product.calories}</div>
                <div className="flex gap-3">
                  <button className="flex-1 bg-primary text-white py-3 rounded-button font-bold text-sm hover:bg-primary-dark transition-all">
                    Add to Order
                  </button>
                  <button className="px-4 border border-surface rounded-button font-bold text-sm hover:bg-surface transition-all">
                    Customize
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* AI Quiz Modal */}
      <AnimatePresence>
        {isQuizOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuizOpen(false)}
              className="absolute inset-0 bg-primary-dark/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-modal overflow-hidden shadow-2xl"
            >
              <div className="p-8">
                {!aiRecommendation ? (
                  <>
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <Sparkles className="w-5 h-5" />
                        <span>AI Barista</span>
                      </div>
                      <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Step {quizStep + 1} of 3</span>
                    </div>
                    
                    <h2 className="text-3xl font-display font-bold text-primary-dark mb-8">
                      {quizQuestions[quizStep].q}
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                      {quizQuestions[quizStep].options.map(opt => (
                        <button
                          key={opt}
                          onClick={() => handleQuizAnswer(opt)}
                          className="p-4 rounded-2xl border-2 border-surface hover:border-primary hover:bg-primary/5 text-left font-bold transition-all"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    {isLoadingAi ? (
                      <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="font-bold text-primary-dark">Brewing your recommendation...</p>
                      </div>
                    ) : (
                      <>
                        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary-dark mx-auto mb-6 shadow-lg">
                          <Sparkles className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary-dark mb-4">Your Perfect Match</h2>
                        <div className="bg-surface p-6 rounded-2xl mb-8">
                          <p className="text-lg font-display text-primary leading-relaxed italic">
                            "{aiRecommendation}"
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <button className="w-full bg-primary text-white py-4 rounded-button font-bold shadow-lg">
                            Add to Order
                          </button>
                          <button 
                            onClick={() => {
                              setAiRecommendation(null);
                              setQuizStep(0);
                              setQuizAnswers([]);
                              setIsQuizOpen(false);
                            }}
                            className="w-full py-4 font-bold text-text-secondary"
                          >
                            Close
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
