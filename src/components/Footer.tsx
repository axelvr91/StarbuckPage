/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: 'About Us',
      links: ['Our Heritage', 'Our Coffee', 'Stories and News', 'Starbucks Archive', 'Investor Relations', 'Customer Service'],
    },
    {
      title: 'Careers',
      links: ['Culture and Values', 'Inclusion, Diversity, and Equity', 'College Achievement Plan', 'Alumni Community', 'U.S. Careers', 'International Careers'],
    },
    {
      title: 'Social Impact',
      links: ['People', 'Planet', 'Environmental and Social Impact Reporting'],
    },
    {
      title: 'For Business Partners',
      links: ['Landlord Support Center', 'Suppliers', 'Corporate Gift Card Sales', 'Office and Foodservice Coffee'],
    },
  ];

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-6">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">CA Supply Chain Act</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
          </div>

          <p className="text-xs text-white/30">
            © 2026 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
