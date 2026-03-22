import Link from 'next/link';
import {
  PHONE,
  PHONE_HREF,
  services,
  browardAreas,
  miamiAreas,
  palmBeachAreas,
  testimonials,
  faqs,
} from '@/lib/data';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative bg-brand-dark text-white pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Subtle grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              SOUTH FLORIDA&apos;S MOST TRUSTED{' '}
              <span className="text-brand-gold">HAULING & MOVING</span> COMPANY
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Locally owned. Fully licensed & insured. Serving all of Broward,
              Miami-Dade, and Palm Beach counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                GET YOUR FREE ESTIMATE
              </Link>
              <a href={PHONE_HREF} className="btn-outline">
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TRUST BADGES ───── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: '🛡️', text: 'Fully Licensed & Insured' },
              { icon: '⭐', text: '5-Star Rated Service' },
              { icon: '🏆', text: '4+ Years Experience' },
              { icon: '📍', text: 'Locally Owned & Operated' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 justify-center text-center md:text-left md:justify-start"
              >
                <span className="text-2xl">{badge.icon}</span>
                <span className="text-sm font-bold text-brand-dark uppercase tracking-wide">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark mb-3">
              OUR SERVICES
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service-card group block bg-gray-50 rounded-lg p-6 border border-gray-100"
              >
                <div className="service-icon w-12 h-12 rounded-lg bg-brand-dark/5 flex items-center justify-center text-xl mb-4 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {s.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="bg-brand-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark mb-3">
              HOW IT WORKS
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Call or Request a Quote',
                desc: 'Reach out by phone or fill out our quote form. We\'ll discuss your project and provide a free estimate.',
              },
              {
                step: '02',
                title: 'We Show Up On Time',
                desc: 'Our professional crew arrives at your door with the right equipment, ready to work on your schedule.',
              },
              {
                step: '03',
                title: 'Job Done Right',
                desc: 'We complete the work efficiently, clean up the site, and leave you completely satisfied.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold text-brand-dark font-black text-lg mb-5">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── AREAS WE SERVE ───── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark mb-3">
              AREAS WE SERVE
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Broward */}
            <div>
              <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-gold">
                Broward County
              </h3>
              <ul className="space-y-2">
                {browardAreas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className="text-sm text-brand-gray hover:text-brand-orange transition-colors"
                    >
                      {a.name}, FL
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Miami-Dade */}
            <div>
              <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-gold">
                Miami-Dade County
              </h3>
              <ul className="space-y-2">
                {miamiAreas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className="text-sm text-brand-gray hover:text-brand-orange transition-colors"
                    >
                      {a.name}, FL
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Palm Beach */}
            <div>
              <h3 className="font-bold text-lg text-brand-dark mb-4 pb-2 border-b-2 border-brand-gold">
                Palm Beach County
              </h3>
              <ul className="space-y-2">
                {palmBeachAreas.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/areas/${a.slug}`}
                      className="text-sm text-brand-gray hover:text-brand-orange transition-colors"
                    >
                      {a.name}, FL
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-3">
              WHAT OUR CUSTOMERS SAY
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-brand-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark mb-3">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="bg-brand-gold py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-brand-dark mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-brand-dark/70 text-lg mb-8">
            Call us now or request your free quote online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center font-bold tracking-wider text-sm uppercase px-8 py-4 rounded-sm bg-brand-dark text-white hover:bg-brand-dark/90 transition-all"
            >
              CALL {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold tracking-wider text-sm uppercase px-8 py-4 rounded-sm border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
