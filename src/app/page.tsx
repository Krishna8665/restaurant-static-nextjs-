// app/page.tsx
import type { Metadata } from 'next';
import Hero from '../../components/Hero';
import MomentsGallery from '../../components/MomentsGallery';
// We'll add more sections later: e.g. FeaturedMenu, Testimonials, etc.

export const metadata: Metadata = {
  title: 'Home - Pandeli Restaurant & Bar',
  description: 'Enjoy authentic Nepali, Indian & Continental cuisine with breathtaking views of Fewa Lake and Annapurna mountains in Sarangkot, Pokhara.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Quick intro / about teaser */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Welcome to Pandeli Restaurant & Bar
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perched in beautiful Sarangkot, we offer delicious food with panoramic Himalayan and lake views. 
            Perfect spot for families, couples, or groups seeking authentic flavors in a peaceful setting.
          </p>
        </div>
      </section>

      <MomentsGallery />

      {/* CTA section - encourage navigation */}
      <section className="py-20 bg-orange-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Ready to visit us?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="/menu" 
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-700 transition"
            >
              View Full Menu
            </a>
            <a 
              href="/contact" 
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 hover:text-white transition"
            >
              Book a Table / Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}