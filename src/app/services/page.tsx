import Link from 'next/link';
import { services, PHONE, PHONE_HREF } from '@/lib/data';
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
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4">
            OUR SERVICES
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            From local moves to full estate cleanouts, 954 Hauling offers a
            complete range of hauling and moving services across South Florida.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-brand-gold/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-bold text-brand-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {service.short}
                </p>
                <span className="inline-block mt-3 text-sm font-semibold text-brand-gold group-hover:text-brand-orange transition-colors">
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-gold py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            READY TO GET STARTED?
          </h2>
          <p className="text-brand-dark/70 mb-8 text-lg">
            Call now for a free, no-obligation quote on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white font-bold uppercase tracking-wider rounded-lg hover:bg-brand-dark/90 transition-colors"
            >
              CALL {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark font-bold uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
            >
              REQUEST A QUOTE ONLINE
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
