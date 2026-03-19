import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="bg-brand-dark text-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-black text-brand-gold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-white/60 mb-8">
            Sorry, the page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/" className="btn-gold">
            BACK TO HOME
          </Link>
        </div>
      </section>
    </main>
  );
}
