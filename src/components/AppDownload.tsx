/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Smartphone, QrCode } from 'lucide-react';

export default function AppDownload() {
  return (
    <section className="py-24 bg-primary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Phone Mockup */}
            <div className="relative w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
              <img 
                src="https://picsum.photos/seed/app-ui/600/1200" 
                alt="App Interface" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
              <div className="absolute bottom-10 left-0 right-0 px-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white shadow-lg">
                  <Smartphone className="w-6 h-6" />
                </div>
                <p className="text-white font-bold">Order in seconds</p>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Order ahead. <br/>
              Earn Stars. <br/>
              <span className="text-accent">Skip the line.</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              The Starbucks app is the easiest way to order your favorites for pickup. Plus, you'll earn 2 Stars for every $1 spent when you pay with a registered Starbucks Card.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
              <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <QrCode className="w-16 h-16 text-primary-dark" />
                <div>
                  <p className="text-primary-dark font-bold text-sm">Scan to download</p>
                  <p className="text-text-secondary text-xs">Available on iOS & Android</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer hover:opacity-80 transition-opacity" />
              </div>
            </div>

            <div className="flex items-center gap-4 text-white/50 text-sm">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-primary-dark" />
                ))}
              </div>
              <p>Joined by 2M+ users this month</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
