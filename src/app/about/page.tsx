import Link from 'next/link';
import type { Metadata } from 'next';
import { PHONE, PHONE_HREF } from '@/lib/data';
import { ShieldCheck, Star, Clock, CircleDollarSign, Phone } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about 954 Hauling — South Florida\'s locally owned and operated hauling, moving, and junk removal company with 10+ years of experience.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-gold">About</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              About <span className="text-brand-gold">954 Hauling</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed">
              Locally owned, fully licensed & insured, and committed to being
              South Florida&apos;s most reliable hauling and moving company.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">Our Story</h2>
          <p className="text-brand-gray text-lg leading-relaxed mb-6">
            954 Hauling was founded with a simple mission: deliver honest,
            reliable hauling and moving services to the people of South Florida.
            What started as a small operation has grown into one of the most
            trusted names in the tri-county area, serving thousands of
            residential and commercial customers across Broward, Miami-Dade, and
            Palm Beach counties.
          </p>
          <p className="text-brand-gray leading-relaxed mb-12">
            We believe in doing things the right way — showing up on time,
            communicating clearly, pricing fairly, and treating every
            customer&apos;s belongings like our own. That commitment to
            excellence has earned us a 5-star reputation and a growing base of
            loyal customers who trust us with their most important jobs.
          </p>

          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Why Customers Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: ShieldCheck,
                title: 'Licensed & Insured',
                desc: 'Full liability coverage and workers\' compensation for your peace of mind.',
              },
              {
                icon: Star,
                title: '5-Star Service',
                desc: 'Consistently rated 5 stars by customers across South Florida.',
              },
              {
                icon: Clock,
                title: 'Always On Time',
                desc: 'We respect your time. Our crews arrive when promised, every time.',
              },
              {
                icon: CircleDollarSign,
                title: 'Fair & Transparent Pricing',
                desc: 'No hidden fees. Free estimates so you know exactly what to expect.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card p-6"
              >
                <div className="icon-box-gold mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-brand-dark mb-1.5">{item.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Our Service Area
          </h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            We proudly serve all of South Florida&apos;s tri-county area
            including Weston, Fort Lauderdale, Pembroke Pines, Coral Springs,
            Miami, Doral, Boca Raton, West Palm Beach, and dozens of other
            cities across Broward, Miami-Dade, and Palm Beach counties.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-gold py-14">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-brand-dark/60 mb-6">
            Get your free estimate today.
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
