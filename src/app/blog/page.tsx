import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Tips, guides, and updates from 954 Hauling — South Florida\'s trusted moving, hauling, and junk removal company.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="gradient-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-gold">Blog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Blog
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-brand-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-brand-dark mb-3">
            Coming Soon
          </h2>
          <p className="text-brand-gray text-lg mb-8 max-w-md mx-auto">
            We&apos;re working on helpful guides and tips for moving, hauling,
            and home projects in South Florida. Check back soon!
          </p>
          <Link href="/" className="btn-gold">
            BACK TO HOME
          </Link>
        </div>
      </section>
    </main>
  );
}
