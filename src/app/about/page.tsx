// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About - Pandeli Restaurant & Bar | Sarangkot, Pokhara",
  description:
    "Discover our story – a cozy hilltop destination in Sarangkot offering authentic flavors, refreshing drinks, and breathtaking Himalayan views with warm hospitality.",
  keywords:
    "Pandeli about, Sarangkot restaurant story, Pokhara hilltop dining, Nepali hospitality",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: `url('/images/about-hero.jpg')`, // Add your hilltop terrace sunset image here
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight drop-shadow-2xl">
            Our Story
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#D4AF37] font-light tracking-wide">
            Discover the Heart of Pandeli
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F4E8D8]">
        <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-[#8B4513] uppercase mb-6 font-medium">
              OUR STORY
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2C2C2C] mb-10 sm:mb-14 leading-tight">
              A Cozy Destination
              <br />
              in the Hills
            </h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
              <div className="space-y-6">
                <p>
                  <strong className="text-[#3E2723]">
                    Nestled in the scenic hills of Sarangkot
                  </strong>
                  , Pandeli Restaurant and Bar offers more than just a meal—it's
                  an experience. Our journey began with a simple vision: to
                  create a warm, welcoming space where locals and travelers
                  alike could enjoy delicious food, refreshing drinks, and
                  breathtaking views.
                </p>
                <p>
                  From our carefully crafted menu featuring both local and
                  international flavors to our cozy ambiance that invites you to
                  relax and unwind, every detail at Pandeli is designed with you
                  in mind.
                </p>
                <p>
                  Whether you're here for a hearty breakfast before a trek, a
                  leisurely lunch with friends, or an evening drink as the sun
                  sets over the mountains, we're here to make your visit
                  memorable.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Our commitment to{" "}
                  <strong className="text-[#3E2723]">
                    local hospitality and quality
                  </strong>{" "}
                  shines through in everything we do. We source fresh
                  ingredients from nearby farms, support local producers, and
                  take pride in serving dishes that celebrate the rich culinary
                  heritage of Nepal while embracing global influences.
                </p>
                <p>
                  The peaceful atmosphere, combined with our friendly staff and
                  stunning location, makes Pandeli the perfect escape from the
                  hustle and bustle. It's a place where conversations flow as
                  freely as the drinks, and every guest becomes part of our
                  extended family.
                </p>
                <p>
                  Come visit us at Pandeli—where great food meets stunning
                  views, and every moment is worth savoring.
                </p>
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="mt-16 lg:mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🍲",
                title: "Authentic Flavors",
                desc: "A diverse menu celebrating local and international cuisine",
              },
              {
                icon: "🍹",
                title: "Refreshing Drinks",
                desc: "Carefully curated selection of beverages and cocktails",
              },
              {
                icon: "🏞️",
                title: "Scenic Location",
                desc: "Breathtaking hilltop views of Sarangkot and beyond",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2C3E2E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl sm:text-3xl">{card.icon}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#2C2C2C] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              "/images/about-interior.jpg", // cozy interior
              "/images/about-kitchen.jpg", // food prep / chef
              "/images/about-terrace.jpg", // outdoor terrace with view
              // Add more images to public/images/ as needed
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative h-80 sm:h-96 lg:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden group shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Pandeli ${["interior", "kitchen", "outdoor terrace"][idx]}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#2C3E2E] text-center">
        <div className="container mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Ready to Experience Pandeli?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Visit us today and discover why we're Sarangkot's favorite dining
            destination
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="/menu"
              className="bg-[#C1440E] text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-[#A03A0C] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Our Menu
            </a>
            <a
              href="https://wa.me/9779841234567"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-10 sm:px-14 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-medium hover:bg-white hover:text-[#2C3E2E] hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
