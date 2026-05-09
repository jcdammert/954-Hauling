import type { Metadata } from 'next';
import { PHONE, PHONE_HREF, EMAIL } from '@/lib/data';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Quote',
  description:
    'Contact 954 Hauling for a free moving, hauling, or junk removal quote in South Florida. Call (954) 666-5517 or fill out our online form.',
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get Your <span className="text-brand-gold">Free Quote</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Fill out the form below or give us a call. We respond to all
            inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="gradient-dark rounded-2xl p-8 text-white">
                <h2 className="font-semibold text-lg mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="icon-box-gold flex-shrink-0 w-10 h-10 rounded-xl">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="text-brand-gold font-semibold text-lg hover:text-brand-gold/80 transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="icon-box-gold flex-shrink-0 w-10 h-10 rounded-xl">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="icon-box-gold flex-shrink-0 w-10 h-10 rounded-xl">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">
                        Service Area
                      </p>
                      <p className="text-white/60 text-sm">
                        Broward County, Miami-Dade County, Palm Beach County
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="icon-box-gold flex-shrink-0 w-10 h-10 rounded-xl">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-medium uppercase tracking-wider mb-1">
                        Hours
                      </p>
                      <p className="text-white/60 text-sm">
                        Monday - Saturday: 7:00 AM - 7:00 PM
                      </p>
                      <p className="text-white/60 text-sm">
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                    <span className="text-white/50 text-sm">
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
