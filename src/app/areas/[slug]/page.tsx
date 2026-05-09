import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  services,
  browardAreas,
  miamiAreas,
  palmBeachAreas,
  PHONE,
  PHONE_HREF,
} from '@/lib/data';
import { ServiceIcon, Check, Phone } from '@/components/Icons';

const allAreas = [
  ...browardAreas.map((a) => ({ ...a, county: 'Broward County' })),
  ...miamiAreas.map((a) => ({ ...a, county: 'Miami-Dade County' })),
  ...palmBeachAreas.map((a) => ({ ...a, county: 'Palm Beach County' })),
];

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const area = allAreas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: `Hauling, Moving & Junk Removal in ${area.name}, FL`,
    description: `954 Hauling provides professional moving, hauling, junk removal, and demolition services in ${area.name}, FL. Fully licensed & insured. Call (954) 666-5517.`,
  };
}

export default function AreaPage({ params }: Props) {
  const area = allAreas.find((a) => a.slug === params.slug);
  if (!area) notFound();

  const sameCounty = allAreas.filter(
    (a) => a.county === area.county && a.slug !== area.slug
  );

  return (
    <main>
      {/* Hero */}
      <section className="gradient-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">{area.county}</span>
              <span>/</span>
              <span className="text-brand-gold">{area.name}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Hauling & Moving in{' '}
              <span className="text-brand-gold">{area.name}, FL</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl">
              Professional hauling, moving, and junk removal services in{' '}
              {area.name} and throughout {area.county}. Fully licensed & insured.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
                Trusted Hauling & Moving Services in {area.name}
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                954 Hauling is {area.name}&apos;s trusted choice for professional
                hauling, moving, and junk removal. Whether you&apos;re relocating
                across town, clearing out an estate, or need construction debris
                removed, our experienced crew delivers reliable, affordable
                service every time.
              </p>
              <p className="text-brand-gray leading-relaxed mb-10">
                As a locally owned and operated company serving {area.county},
                we understand the unique needs of {area.name} residents and
                businesses. We&apos;re fully licensed and insured, and we treat
                every job — big or small — with the same level of
                professionalism and care.
              </p>

              <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
                Services Available in {area.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-brand-gold/8 transition-colors group"
                  >
                    <ServiceIcon slug={s.slug} className="w-4 h-4 text-brand-gray group-hover:text-brand-dark transition-colors" />
                    <span className="text-sm font-medium text-brand-dark">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
                Why {area.name} Chooses 954 Hauling
              </h2>
              <div className="space-y-3 mb-8">
                {[
                  `Fast response times for ${area.name} and surrounding areas`,
                  'Competitive, transparent pricing with free estimates',
                  'Same-day service available for urgent jobs',
                  `5-star rated by ${area.name} customers`,
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-brand-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-gold" />
                    </div>
                    <span className="text-brand-gray text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="gradient-dark rounded-2xl p-7 text-white mb-6">
                <h3 className="font-semibold text-lg mb-2">
                  Get a Free Quote in {area.name}
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
                  Nearby Areas in {area.county}
                </h4>
                <ul className="space-y-1.5">
                  {sameCounty.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/areas/${a.slug}`}
                        className="text-sm text-brand-gray hover:text-brand-dark transition-colors"
                      >
                        {a.name}, FL
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
            Ready to Get Started in {area.name}?
          </h2>
          <p className="text-brand-dark/60 mb-6">
            Call now or request your free quote online.
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
