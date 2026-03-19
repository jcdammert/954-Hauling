import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { services, PHONE, PHONE_HREF } from '@/lib/data';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} - South Florida`,
    description: `${service.description.slice(0, 155)}...`,
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== params.slug);

  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-gold">Services</span>
            </div>
            <div className="text-5xl mb-6">{service.icon}</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              {service.title.toUpperCase()}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              {service.short}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-brand-gray text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <h2 className="text-2xl font-black text-brand-dark mb-4">
                  Why Choose 954 Hauling for {service.title}?
                </h2>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">✓</span>
                    <span className="text-brand-gray">Fully licensed and insured for your protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">✓</span>
                    <span className="text-brand-gray">Experienced, professional crew members</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">✓</span>
                    <span className="text-brand-gray">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">✓</span>
                    <span className="text-brand-gray">Same-day service available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">✓</span>
                    <span className="text-brand-gray">Serving Broward, Miami-Dade, and Palm Beach counties</span>
                  </li>
                </ul>

                <h2 className="text-2xl font-black text-brand-dark mb-4">
                  Service Area
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  We provide {service.title.toLowerCase()} throughout South
                  Florida, including Weston, Fort Lauderdale, Miami, Boca Raton,
                  Pembroke Pines, Coral Springs, Plantation, Davie, Hollywood,
                  and all surrounding areas in Broward, Miami-Dade, and Palm
                  Beach counties.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-brand-dark rounded-lg p-8 text-white mb-8 sticky top-28">
                <h3 className="font-bold text-lg mb-3">
                  Get a Free {service.title} Quote
                </h3>
                <p className="text-white/50 text-sm mb-6">
                  Call now for fast, friendly service.
                </p>
                <a
                  href={PHONE_HREF}
                  className="btn-gold w-full text-center mb-3"
                >
                  CALL {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="btn-outline w-full text-center !border-white/20"
                >
                  REQUEST QUOTE ONLINE
                </Link>
              </div>

              {/* Other services */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider mb-4">
                  Other Services
                </h4>
                <ul className="space-y-2">
                  {otherServices.slice(0, 8).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm text-brand-gray hover:text-brand-orange transition-colors flex items-center gap-2"
                      >
                        <span>{s.icon}</span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-4">
            NEED {service.title.toUpperCase()}?
          </h2>
          <p className="text-brand-dark/70 mb-6">
            Get your free quote today. Fast, reliable service across South Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center font-bold tracking-wider text-sm uppercase px-8 py-4 rounded-sm bg-brand-dark text-white"
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
