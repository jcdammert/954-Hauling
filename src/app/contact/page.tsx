import type { Metadata } from 'next';
import { PHONE, PHONE_HREF, EMAIL } from '@/lib/data';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Quote',
  description:
    'Contact 954 Hauling for a free moving, hauling, or junk removal quote in South Florida. Call (954) 666-5517 or fill out our online form.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
            GET YOUR <span className="text-brand-gold">FREE QUOTE</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Fill out the form below or give us a call. We respond to all
            inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="bg-brand-dark rounded-lg p-8 text-white">
                <h2 className="font-bold text-xl mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="text-brand-gold font-bold text-lg hover:text-brand-gold/80 transition-colors"
                    >
                      {PHONE}
                    </a>
                  </div>

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                      Service Area
                    </p>
                    <p className="text-white/70 text-sm">
                      Broward County, Miami-Dade County, Palm Beach County
                    </p>
                  </div>

                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                      Hours
                    </p>
                    <p className="text-white/70 text-sm">
                      Monday - Saturday: 7:00 AM - 7:00 PM
                    </p>
                    <p className="text-white/70 text-sm">
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-gold text-lg">🛡️</span>
                    <span className="text-white/60 text-sm">
                      Fully Licensed & Insured
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
