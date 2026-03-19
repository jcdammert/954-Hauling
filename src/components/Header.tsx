'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PHONE, PHONE_HREF } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services/junk-removal', label: 'Services' },
  { href: '/areas/weston', label: 'Areas' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-black text-xl md:text-2xl tracking-tight hover:text-brand-gold transition-colors"
          >
            954 HAULING
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="text-white/80 hover:text-brand-gold text-sm font-semibold transition-colors"
            >
              {PHONE}
            </a>
            <Link href="/contact" className="btn-gold !py-3 !px-6 !text-xs">
              GET A FREE QUOTE
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider py-2"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={PHONE_HREF}
                className="block text-brand-gold font-bold text-lg"
              >
                {PHONE}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-gold w-full text-center"
              >
                GET A FREE QUOTE
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
