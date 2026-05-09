import Link from 'next/link';
import { services, PHONE, PHONE_HREF } from '@/lib/data';
import { ServiceIcon, Phone } from '@/components/Icons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - South Florida Hauling & Moving | 954 Hauling',
  description:
    'Full range of hauling, moving, junk removal, demolition, and delivery services across Broward, Miami-Dade, and Palm Beach counties.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-dark text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <p className="section-label">What We Do</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-white/50 text-lg max-w-2xl">
            From local moves to full estate cleanouts, 954 Hauling offers a
            complete range of hauling and moving services across South Florida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card group p-6"
              >
                <div className="icon-box group-hover:bg-brand-gold group-hover:text-brand-dark mb-4">
                  <ServiceIcon slug={service.slug} className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-brand-dark text-[15px] mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-3">
                  {service.short}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-gold group-hover:text-brand-orange transition-colors">
                  Learn More
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="gradient-gold py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-brand-dark/60 mb-8 text-lg">
            Call now for a free, no-obligation quote on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={PHONE_HREF} className="btn-dark">
              <Phone className="w-4 h-4 mr-2" />
              CALL {PHONE}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center font-semibold tracking-wide text-sm uppercase px-7 py-3.5 rounded-xl bg-white text-brand-dark hover:bg-gray-100 transition-all duration-300">
              REQUEST A QUOTE ONLINE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
