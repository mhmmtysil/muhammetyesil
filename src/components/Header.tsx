'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              MY
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Hakkımda
            </Link>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Projeler
            </Link>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Yetenekler
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="#about" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Hakkımda
            </Link>
            <Link href="#projects" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Projeler
            </Link>
            <Link href="#skills" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Yetenekler
            </Link>
            <Link href="#contact" className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              İletişim
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
