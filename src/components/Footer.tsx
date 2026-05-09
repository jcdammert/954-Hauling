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
import { Phone, Mail } from '@/components/Icons';

export default function Footer() {
  return (
    <footer className="bg-[#12161f] text-white/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white font-extrabold text-xl tracking-tight mb-4">
              954 HAULING
            </h3>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              South Florida&apos;s most trusted hauling, moving, and junk removal
              company. Locally owned and operated for over 5 years.
            </p>
            <div className="space-y-2.5">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 text-sm text-brand-gold hover:text-brand-gold/80 font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {PHONE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Broward */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Broward County
            </h4>
            <ul className="space-y-2">
              {browardAreas.slice(0, 10).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Miami-Dade & Palm Beach */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Miami-Dade County
            </h4>
            <ul className="space-y-2 mb-8">
              {miamiAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm mb-4">
              Palm Beach County
            </h4>
            <ul className="space-y-2">
              {palmBeachAreas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} 954 Hauling. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
