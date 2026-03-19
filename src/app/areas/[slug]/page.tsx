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
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-gold">Areas</span>
              <span>/</span>
              <span className="text-white/60">{area.county}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              HAULING & MOVING IN{' '}
              <span className="text-brand-gold">{area.name.toUpperCase()}, FL</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Professional hauling, moving, and junk removal services in{' '}
              {area.name} and throughout {area.county}. Fully licensed & insured.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-brand-dark mb-6">
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

              <h2 className="text-2xl font-black text-brand-dark mb-6">
                Services Available in {area.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-brand-gold/10 transition-colors group"
                  >
                    <span className="text-lg">{s.icon}</span>
                    <span className="text-sm font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">
                      {s.title}
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className="text-2xl font-black text-brand-dark mb-4">
                Why {area.name} Chooses 954 Hauling
              </h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span className="text-brand-gray">Fast response times for {area.name} and surrounding areas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span className="text-brand-gray">Competitive, transparent pricing with free estimates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span className="text-brand-gray">Same-day service available for urgent jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span className="text-brand-gray">5-star rated by {area.name} customers</span>
                </li>
              </ul>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-dark rounded-lg p-8 text-white mb-8 sticky top-28">
                <h3 className="font-bold text-lg mb-3">
                  Get a Free Quote in {area.name}
                </h3>
                <p className="text-white/50 text-sm mb-6">
                  Call now for fast, friendly service.
                </p>
                <a href={PHONE_HREF} className="btn-gold w-full text-center mb-3">
                  CALL {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="btn-outline w-full text-center !border-white/20"
                >
                  REQUEST QUOTE ONLINE
                </Link>
              </div>

              {/* Nearby areas */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-brand-dark text-sm uppercase tracking-wider mb-4">
                  Nearby Areas in {area.county}
                </h4>
                <ul className="space-y-2">
                  {sameCounty.map((a) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gold py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-4">
            READY TO GET STARTED IN {area.name.toUpperCase()}?
          </h2>
          <p className="text-brand-dark/70 mb-6">
            Call now or request your free quote online.
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
