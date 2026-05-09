'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PHONE, PHONE_HREF, services, browardAreas, miamiAreas, palmBeachAreas } from '@/lib/data';
import { ServiceIcon, Phone, ChevronRight } from '@/components/Icons';

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAreasOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/98 backdrop-blur-lg shadow-lg shadow-black/5'
          : 'bg-brand-dark/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link
            href="/"
            className="text-white font-extrabold text-xl tracking-tight hover:text-brand-gold transition-colors"
          >
            954 HAULING
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-gold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { setServicesOpen(true); setAreasOpen(false); }}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname?.startsWith('/services')
                    ? 'text-brand-gold'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-[520px] bg-brand-dark/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-3 animate-fade-in">
                    <Link
                      href="/services"
                      className="flex items-center justify-between px-4 py-3 mb-1 rounded-xl bg-brand-gold/8 hover:bg-brand-gold/15 transition-colors"
                    >
                      <span className="text-brand-gold text-sm font-semibold">View All Services</span>
                      <ChevronRight className="w-4 h-4 text-brand-gold" />
                    </Link>
                    <div className="grid grid-cols-2 gap-0.5">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <ServiceIcon slug={s.slug} className="w-4 h-4 opacity-60" />
                          <span className="text-sm">{s.title}</span>
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
              <span className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-colors cursor-default">
                Areas
                <svg className={`w-3.5 h-3.5 transition-transform ${areasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {areasOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-[480px] bg-brand-dark/98 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-5 animate-fade-in">
                    <div className="grid grid-cols-3 gap-5">
                      {allAreas.map((group) => (
                        <div key={group.label}>
                          <p className="text-brand-gold/80 text-[10px] font-semibold uppercase tracking-[0.15em] mb-2.5 px-1">{group.label}</p>
                          <div className="space-y-0.5">
                            {group.areas.map((area) => (
                              <Link
                                key={area.slug}
                                href={`/areas/${area.slug}`}
                                className="block px-2 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
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

            <Link
              href="/blog"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/blog'
                  ? 'text-brand-gold'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/contact'
                  ? 'text-brand-gold'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-white/60 hover:text-brand-gold text-sm font-medium transition-colors">
              <Phone className="w-3.5 h-3.5" />
              {PHONE}
            </a>
            <Link href="/contact" className="btn-gold !py-2.5 !px-5 !text-xs">
              FREE QUOTE
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/5 animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="px-5 py-5 space-y-0.5">
            <Link href="/" className="block text-white/80 hover:text-white text-sm font-medium py-3 px-3 rounded-xl hover:bg-white/5 transition-colors">
              Home
            </Link>
            <Link href="/about" className="block text-white/80 hover:text-white text-sm font-medium py-3 px-3 rounded-xl hover:bg-white/5 transition-colors">
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <div className="flex items-center justify-between px-3">
                <Link href="/services" className="text-white/80 hover:text-white text-sm font-medium py-3">
                  Services
                </Link>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Toggle services submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="ml-3 pl-3 border-l border-white/5 space-y-0.5 pb-2 animate-fade-in">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm py-2 px-3 rounded-lg hover:bg-white/5 transition-colors">
                      <ServiceIcon slug={s.slug} className="w-3.5 h-3.5 opacity-50" />
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Areas */}
            <div>
              <div className="flex items-center justify-between px-3">
                <span className="text-white/80 text-sm font-medium py-3">Areas</span>
                <button
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  className="text-white/40 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Toggle areas submenu"
                >
                  <svg className={`w-4 h-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {mobileAreasOpen && (
                <div className="ml-3 pl-3 border-l border-white/5 space-y-4 pb-2 animate-fade-in">
                  {allAreas.map((group) => (
                    <div key={group.label}>
                      <p className="text-brand-gold/60 text-[10px] font-semibold uppercase tracking-[0.15em] mb-1.5 px-3">{group.label}</p>
                      {group.areas.map((area) => (
                        <Link key={area.slug} href={`/areas/${area.slug}`} className="block text-white/50 hover:text-white text-sm py-1.5 px-3 rounded-lg hover:bg-white/5 transition-colors">
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="block text-white/80 hover:text-white text-sm font-medium py-3 px-3 rounded-xl hover:bg-white/5 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="block text-white/80 hover:text-white text-sm font-medium py-3 px-3 rounded-xl hover:bg-white/5 transition-colors">
              Contact
            </Link>

            <div className="pt-4 mt-3 border-t border-white/5 space-y-3 px-1">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-brand-gold font-semibold">
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <Link href="/contact" className="btn-gold w-full text-center">FREE QUOTE</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
