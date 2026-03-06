/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onNavigate, currentPage }: { onNavigate: (page: 'home' | 'menu') => void, currentPage: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', id: 'menu' as const },
    { name: 'Rewards', id: 'rewards' as const },
    { name: 'Gift Cards', id: 'gift' as const },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left: Logo */}
            <div className="flex items-center gap-8">
              <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white overflow-hidden">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current">
                    <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 92.5C26.6 92.5 7.5 73.4 7.5 50S26.6 7.5 50 7.5 92.5 26.6 92.5 50 73.4 92.5 50 92.5z"/>
                    <path d="M50 15c-19.3 0-35 15.7-35 35s15.7 35 35 35 35-15.7 35-35-15.7-35-35-35zm0 62.5c-15.2 0-27.5-12.3-27.5-27.5S34.8 22.5 50 22.5 77.5 34.8 77.5 50 65.2 77.5 50 77.5z"/>
                  </svg>
                </div>
                <span className="text-primary-dark font-bold text-xl tracking-tight uppercase hidden sm:block">Starbucks</span>
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => link.id === 'menu' && onNavigate('menu')}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                      currentPage === link.id ? 'text-primary' : 'text-text-primary hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Search (Desktop) */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Find your favorite drink..."
                  className="w-full bg-surface border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button className="p-2 text-text-primary hover:bg-surface rounded-full transition-colors hidden sm:flex">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-text-primary hover:bg-surface rounded-full transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">0</span>
              </button>
              <button 
                onClick={() => onNavigate('menu')}
                className="hidden sm:block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-button font-bold text-sm transition-all shadow-md active:scale-95"
              >
                Order Now
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-text-primary hover:bg-surface rounded-full transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-bold text-xl text-primary">Starbucks</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-surface rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => {
                      if (link.id === 'menu') onNavigate('menu');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-bold text-left transition-colors ${
                      currentPage === link.id ? 'text-primary' : 'text-text-primary hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-surface flex flex-col gap-4">
                <button 
                  onClick={() => {
                    onNavigate('menu');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary text-white py-4 rounded-button font-bold text-lg shadow-lg"
                >
                  Order Now
                </button>
                <div className="flex justify-center gap-6 text-text-secondary">
                  <User className="w-6 h-6" />
                  <Search className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
