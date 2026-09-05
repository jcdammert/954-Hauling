'use client';

import { useState } from 'react';
import Script from 'next/script';
import { Check } from '@/components/Icons';

const TURNSTILE_SITE_KEY = '0x4AAAAAEpgS1RWRgtcbeUo';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const turnstileToken = data.get('cf-turnstile-response') as string;
    const payload = {
      ...Object.fromEntries(data.entries()),
      hear_about: data.getAll('hear_about').join(', '),
      turnstileToken,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Submission failed');

      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us at (954) 666-5517.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = 'w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold/60 transition-all placeholder:text-gray-400';

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="font-semibold text-lg text-green-900 mb-2">
          Quote Request Received!
        </h3>
        <p className="text-green-700 text-sm">
          We&apos;ll get back to you within 24 hours. For immediate assistance,
          call us at (954) 666-5517.
        </p>
      </div>
    );
  }

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" />
    <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm">
      <h2 className="font-semibold text-xl text-brand-dark mb-6">
        Request a Free Quote
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-brand-dark mb-1.5">
              First Name *
            </label>
            <input type="text" id="firstName" name="firstName" required className={inputClasses} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-brand-dark mb-1.5">
              Last Name *
            </label>
            <input type="text" id="lastName" name="lastName" required className={inputClasses} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1.5">
              Phone *
            </label>
            <input type="tel" id="phone" name="phone" required className={inputClasses} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1.5">
              Email
            </label>
            <input type="email" id="email" name="email" className={inputClasses} />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-dark mb-1.5">
            Service Needed *
          </label>
          <select id="service" name="service" required className={inputClasses}>
            <option value="">Select a service...</option>
            <option value="local-moving">Local Residential Moving</option>
            <option value="long-distance">Long-Distance Moving</option>
            <option value="commercial">Commercial & Office Moving</option>
            <option value="junk-removal">Junk Removal</option>
            <option value="demolition">Demolition Services</option>
            <option value="estate-cleanout">Estate Cleanouts</option>
            <option value="appliance-removal">Appliance Removal</option>
            <option value="construction-debris">Construction Debris Removal</option>
            <option value="small-delivery">Small Deliveries</option>
            <option value="packing">Packing Services</option>
            <option value="labor-only">Labor-Only Moving Help</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1.5">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`${inputClasses} resize-none`}
            placeholder="Describe what you need — pickup/delivery address, items, timing, etc."
          />
        </div>

        <div>
          <p className="block text-sm font-medium text-brand-dark mb-3">
            How did you hear about us?
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              'Google',
              'Facebook',
              'Instagram',
              'Word of mouth',
              'Street sign',
              'Nextdoor',
              'Business Card',
              'Other',
            ].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer group px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  name="hear_about"
                  value={option}
                  className="w-4 h-4 rounded border-gray-300 accent-brand-gold cursor-pointer"
                />
                <span className="text-sm text-brand-gray group-hover:text-brand-dark transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <div
          className="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="light"
        />

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'SENDING...' : 'SUBMIT QUOTE REQUEST'}
        </button>
      </form>
    </div>
    </>
  );
}
