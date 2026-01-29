// components/MomentsGallery.tsx
import Image from 'next/image';

const galleryImages = [
  { src: '/images/food-1.jpg', alt: 'Delicious momo platter' },
  { src: '/images/view-1.jpg', alt: 'Sunset over Fewa Lake from Pandeli' },
  { src: '/images/food-2.jpg', alt: 'Nepali thali' },
  { src: '/images/interior.jpg', alt: 'Cozy restaurant seating' },
  // Add more as you have photos
];

export default function MomentsGallery() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Moments at Pandeli
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}