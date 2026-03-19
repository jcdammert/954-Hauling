import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-gold">Privacy Policy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            PRIVACY POLICY
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none text-brand-gray space-y-6">
            <p>Last updated: January 2026</p>
            <p>
              954 Hauling (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
              and is committed to protecting the personal information you share with us.
              This Privacy Policy explains how we collect, use, and safeguard your
              information when you visit our website or use our services.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Information We Collect</h2>
            <p>
              We may collect personal information you voluntarily provide, including your
              name, phone number, email address, and service address when you request a
              quote or contact us.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">How We Use Your Information</h2>
            <p>
              We use the information we collect to respond to your inquiries, provide
              quotes and services, communicate with you about your project, and improve
              our website and services.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share information with trusted service providers who assist us in
              operating our business, provided they agree to keep your information
              confidential.
            </p>
            <h2 className="text-xl font-bold text-brand-dark">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              954hauling@gmail.com or call (954) 666-5517.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
