'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PHONE, PHONE_HREF, services, browardAreas, miamiAreas, palmBeachAreas } from '@/lib/data';

const allAreas = [
  { label: 'Broward County', areas: browardAreas },
  { label: 'Miami-Dade County', areas: miamiAreas },
  { label: 'Palm Beach County', areas: palmBeachAreas },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const pathname = usePathname();

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [pathname]);

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
            <Link href="/" className="text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setServicesOpen(true); setAreasOpen(false); }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="flex items-center gap-1 text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="w-[540px] bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-4">
                    <Link
                      href="/services"
                      className="flex items-center justify-between px-3 py-2.5 mb-2 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 transition-colors"
                    >
                      <span className="text-brand-gold text-sm font-bold uppercase tracking-wider">View All Services</span>
                      <svg className="w-4 h-4 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <span className="text-base">{s.icon}</span>
                          <span className="text-sm font-medium">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setAreasOpen(true); setServicesOpen(false); }}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <span className="flex items-center gap-1 text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors cursor-default">
                Areas
                <svg className={`w-3.5 h-3.5 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                  <div className="w-[520px] bg-brand-dark border border-white/10 rounded-xl shadow-2xl p-5">
                    <div className="grid grid-cols-3 gap-6">
                      {allAreas.map((group) => (
                        <div key={group.label}>
                          <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 px-1">{group.label}</p>
                          <div className="space-y-0.5">
                            {group.areas.map((area) => (
                              <Link
                                key={area.slug}
                                href={`/areas/${area.slug}`}
                                className="block px-2 py-1.5 rounded text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                              >
                                {area.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-white/70 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={PHONE_HREF} className="text-white/80 hover:text-brand-gold text-sm font-semibold transition-colors">
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
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/10 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            <Link href="/" className="block text-white/80 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider py-3">
              Home
            </Link>
            <Link href="/about" className="block text-white/80 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider py-3">
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <div className="flex items-center justify-between">
                <Link href="/services" className="text-white/80 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider py-3">
                  Services
                </Link>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-white/60 hover:text-brand-gold p-2"
                  aria-label="Toggle services submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-4 pb-2 space-y-1 animate-fade-in">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm py-1.5">
                      <span>{s.icon}</span>
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Areas */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm font-semibold uppercase tracking-wider py-3">Areas</span>
                <button
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  className="text-white/60 hover:text-brand-gold p-2"
                  aria-label="Toggle areas submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {mobileAreasOpen && (
                <div className="pl-4 pb-2 space-y-3 animate-fade-in">
                  {allAreas.map((group) => (
                    <div key={group.label}>
                      <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">{group.label}</p>
                      {group.areas.map((area) => (
                        <Link key={area.slug} href={`/areas/${area.slug}`} className="block text-white/60 hover:text-brand-gold text-sm py-1">
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="block text-white/80 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider py-3">
              Blog
            </Link>
            <Link href="/contact" className="block text-white/80 hover:text-brand-gold text-sm font-semibold uppercase tracking-wider py-3">
              Contact
            </Link>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a href={PHONE_HREF} className="block text-brand-gold font-bold text-lg">{PHONE}</a>
              <Link href="/contact" className="btn-gold w-full text-center">GET A FREE QUOTE</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
