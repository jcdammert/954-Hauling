import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsPage() {
  return (
    <main>
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-gold">Terms of Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            TERMS OF SERVICE
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none text-brand-gray space-y-6">
            <p>Last updated: January 2026</p>
            <p>
              By using the 954 Hauling website and services, you agree to the
              following terms and conditions.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Services</h2>
            <p>
              954 Hauling provides moving, hauling, junk removal, and related
              services in South Florida. All services are subject to availability
              and scheduling.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Quotes & Pricing</h2>
            <p>
              All quotes provided are estimates based on the information you
              provide. Final pricing may vary based on actual job conditions,
              weight, volume, and distance. We will communicate any changes to
              pricing before proceeding.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Liability</h2>
            <p>
              954 Hauling is fully licensed and insured. We carry comprehensive
              liability insurance to protect our customers. In the event of
              damage, claims must be filed within 48 hours of service completion.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Cancellation</h2>
            <p>
              We require at least 24 hours notice for cancellations.
              Cancellations made with less than 24 hours notice may be subject to
              a cancellation fee.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Contact</h2>
            <p>
              Questions about these terms? Contact us at 954hauling@gmail.com or
              call (954) 666-5517.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
