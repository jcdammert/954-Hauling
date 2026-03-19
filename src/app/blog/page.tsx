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
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-gold">Blog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              BLOG
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">📝</div>
          <h2 className="text-2xl font-black text-brand-dark mb-4">
            Coming Soon
          </h2>
          <p className="text-brand-gray text-lg mb-8">
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
