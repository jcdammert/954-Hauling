import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { services, PHONE, PHONE_HREF } from '@/lib/data';
import { ServiceIcon, Check, Phone } from '@/components/Icons';

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
      <section className="gradient-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white/60 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-brand-gold">{service.title}</span>
            </div>
            <div className="icon-box-gold w-14 h-14 rounded-2xl mb-6">
              <ServiceIcon slug={service.slug} className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              {service.title}
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              {service.short}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-brand-gray text-lg leading-relaxed mb-10">
                {service.description}
              </p>

              <h2 className="text-2xl font-extrabold text-brand-dark mb-5">
                Why Choose 954 Hauling for {service.title}?
              </h2>
              <div className="space-y-3 mb-10">
                {[
                  'Fully licensed and insured for your protection',
                  'Experienced, professional crew members',
                  'Transparent pricing with no hidden fees',
                  'Same-day service available',
                  'Serving Broward, Miami-Dade, and Palm Beach counties',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-brand-gray text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="gradient-dark rounded-2xl p-7 text-white mb-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-2">
                  Get a Free {service.title} Quote
                </h3>
                <p className="text-white/40 text-sm mb-6">
                  Call now for fast, friendly service.
                </p>
                <a href={PHONE_HREF} className="btn-gold w-full text-center mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  CALL {PHONE}
                </a>
                <Link href="/contact" className="btn-outline w-full text-center">
                  REQUEST QUOTE ONLINE
                </Link>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-brand-dark text-sm mb-4">
                  Other Services
                </h4>
                <ul className="space-y-1">
                  {otherServices.slice(0, 8).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2.5 text-sm text-brand-gray hover:text-brand-dark transition-colors py-1.5 group"
                      >
                        <ServiceIcon slug={s.slug} className="w-3.5 h-3.5 opacity-40 group-hover:opacity-70 transition-opacity" />
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
      <section className="gradient-gold py-14">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">
            Need {service.title}?
          </h2>
          <p className="text-brand-dark/60 mb-6">
            Get your free quote today. Fast, reliable service across South Florida.
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
