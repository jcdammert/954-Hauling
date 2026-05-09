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
import { ServiceIcon, Shield, Star, Award, MapPin, Check, Quote, Phone, ChevronRight } from '@/components/Icons';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative gradient-dark text-white pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/3 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/60 text-xs font-medium">Serving South Florida Since 2021</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight mb-6">
              South Florida&apos;s Most Trusted{' '}
              <span className="text-brand-gold">Hauling & Moving</span> Company
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Locally owned. Fully licensed & insured. Serving all of Broward,
              Miami-Dade, and Palm Beach counties.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-gold">
                GET YOUR FREE ESTIMATE
              </Link>
              <a href={PHONE_HREF} className="btn-outline">
                <Phone className="w-4 h-4 mr-2" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── TRUST BADGES ───── */}
      <section className="bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, text: 'Fully Licensed & Insured' },
              { icon: Star, text: '5-Star Rated Service' },
              { icon: Award, text: '5+ Years Experience' },
              { icon: MapPin, text: 'Locally Owned & Operated' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80"
              >
                <div className="icon-box-gold flex-shrink-0">
                  <badge.icon className="w-4.5 h-4.5" />
                </div>
                <span className="text-xs font-semibold text-brand-dark leading-tight">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="section-label">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card group block p-5"
              >
                <div className="icon-box group-hover:bg-brand-gold group-hover:text-brand-dark mb-4">
                  <ServiceIcon slug={s.slug} className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-brand-dark text-[15px] mb-1.5 group-hover:text-brand-orange transition-colors">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
              <div key={item.step} className="bg-white rounded-2xl p-7 text-center border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-dark text-brand-gold font-extrabold text-sm mb-5">
                  {item.step}
                </div>
                <h3 className="font-semibold text-[15px] text-brand-dark mb-2.5">
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
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <p className="section-label">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark">
              Areas We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Broward County', areas: browardAreas },
              { label: 'Miami-Dade County', areas: miamiAreas },
              { label: 'Palm Beach County', areas: palmBeachAreas },
            ].map((group) => (
              <div key={group.label} className="bg-gray-50/80 rounded-2xl p-6">
                <h3 className="font-semibold text-brand-dark text-sm mb-4 pb-3 border-b border-gray-200">
                  {group.label}
                </h3>
                <ul className="space-y-1.5">
                  {group.areas.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/areas/${a.slug}`}
                        className="flex items-center gap-2 text-sm text-brand-gray hover:text-brand-dark transition-colors py-0.5 group"
                      >
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-50 group-hover:ml-0 transition-all" />
                        {a.name}, FL
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="gradient-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="card-dark p-7">
                <Quote className="w-8 h-8 text-brand-gold/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/30 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQ key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="gradient-gold py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-brand-dark/60 text-lg mb-8">
            Call us now or request your free quote online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="btn-dark">
              <Phone className="w-4 h-4 mr-2" />
              CALL {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold tracking-wide text-sm uppercase px-7 py-3.5 rounded-xl border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
