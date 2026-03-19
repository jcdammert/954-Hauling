'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    // TODO: Wire to GHL webhook
    // Example: await fetch('YOUR_GHL_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });

    console.log('Form submission:', payload);

    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-bold text-lg text-green-900 mb-2">
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
    <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
      <h2 className="font-bold text-xl text-brand-dark mb-6">
        Request a Free Quote
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-brand-dark mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-brand-dark mb-1.5"
          >
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors bg-white"
          >
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
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-brand-dark mb-1.5"
          >
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-colors resize-none"
            placeholder="Describe what you need — pickup/delivery address, items, timing, etc."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? 'SENDING...' : 'SUBMIT QUOTE REQUEST'}
        </button>
      </form>
    </div>
  );
}
