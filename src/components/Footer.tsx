import Link from 'next/link';
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  services,
  browardAreas,
  miamiAreas,
  palmBeachAreas,
} from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#141413] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div>
            <h3 className="text-white font-black text-2xl tracking-tight mb-4">
              954 HAULING
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              South Florida&apos;s most trusted hauling, moving, and junk removal
              company. Locally owned and operated for over 10 years.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={PHONE_HREF}
                className="block text-brand-gold hover:text-brand-gold/80 font-semibold transition-colors"
              >
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block hover:text-white transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-brand-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas - Broward */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Broward County
            </h4>
            <ul className="space-y-2">
              {browardAreas.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-brand-gold transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas - Miami-Dade & Palm Beach */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Miami-Dade County
            </h4>
            <ul className="space-y-2 mb-6">
              {miamiAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-brand-gold transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Palm Beach County
            </h4>
            <ul className="space-y-2">
              {palmBeachAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-brand-gold transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} 954 Hauling. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
