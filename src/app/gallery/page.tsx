// app/gallery/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Pandeli Restaurant & Bar | Sarangkot, Pokhara",
  description:
    "Moments at Pandeli – food, drinks, ambience, and breathtaking Himalayan views.",
};

export default function GalleryPage() {
  const images = [
    "/images/food-1.jpg",
    "/images/view-1.jpg",
    "/images/food-2.jpg",
    "/images/interior.jpg",
    "/images/drinks.jpg",
    "/images/sunset.jpg",
    // Add 6–12 real photos in public/images/
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        <h1 className="font-serif text-5xl sm:text-6xl text-center text-[#3E2723] mb-6">
          Moments at Pandeli
        </h1>
        <p className="text-center text-xl text-gray-700 mb-16">
          Capturing the essence of hilltop dining, delicious plates, and
          panoramic Sarangkot sunsets.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative aspect-[4/5] md:aspect-square">
                <Image
                  src={src}
                  alt={`Pandeli moment ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="p-6 text-white text-lg font-medium">
                  {" "}
                  {/* Add caption if you want */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
