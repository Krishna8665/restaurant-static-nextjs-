// app/menu/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Menu - Pandeli Restaurant & Bar | Sarangkot, Pokhara',
  description: 'Explore our menu featuring authentic Nepali, Indian, Continental & Asian dishes with fresh ingredients and Himalayan-inspired flavors.',
  keywords: 'Pandeli menu, Nepali food Sarangkot, Pokhara restaurant menu, dal bhat, momo, continental dishes',
};

export default function MenuPage() {
  // Sample menu data – replace with your real items/prices
  const menuCategories = [
    {
      title: 'Starters / Appetizers',
      items: [
        { name: 'Chicken Momo (8 pcs)', desc: 'Steamed or fried dumplings with spicy chutney', price: 'Rs. 450' },
        { name: 'Veg Momo (8 pcs)', desc: 'Vegetable-filled steamed momos', price: 'Rs. 380' },
        { name: 'Aloo Chop', desc: 'Spicy potato patties with chutney', price: 'Rs. 250' },
        { name: 'Chatpate', desc: 'Tangy puffed rice street snack', price: 'Rs. 200' },
      ],
    },
    {
      title: 'Main Course – Nepali / Thakali Sets',
      items: [
        { name: 'Dal Bhat Tarkari (Veg)', desc: 'Traditional rice, lentil soup, veggies, pickle & salad', price: 'Rs. 550' },
        { name: 'Chicken Dal Bhat', desc: 'With chicken curry side', price: 'Rs. 750' },
        { name: 'Fish Curry Set', desc: 'Fresh Pokhara trout or machha curry with rice', price: 'Rs. 850' },
        { name: 'Dhido Set', desc: 'Buckwheat/millet porridge with veg curry & gundruk', price: 'Rs. 600' },
      ],
    },
    {
      title: 'Continental & International',
      items: [
        { name: 'Chicken Chow Mein', desc: 'Stir-fried noodles with veggies & chicken', price: 'Rs. 650' },
        { name: 'Pasta Alfredo', desc: 'Creamy pasta with mushrooms & herbs', price: 'Rs. 700' },
        { name: 'Grilled Trout', desc: 'Fresh lake fish with lemon butter sauce', price: 'Rs. 950' },
        { name: 'Vegetable Fried Rice', desc: 'Nepali-style with seasonal veggies', price: 'Rs. 450' },
      ],
    },
    {
      title: 'Drinks & Desserts',
      items: [
        { name: 'Fresh Lime Soda', desc: 'Refreshing mint & lime', price: 'Rs. 180' },
        { name: 'Masala Tea / Coffee', desc: 'Traditional spiced Nepali chai', price: 'Rs. 150' },
        { name: 'Gulab Jamun (2 pcs)', desc: 'Sweet milk dumplings in syrup', price: 'Rs. 250' },
        { name: 'Local Cocktails', desc: 'Ask for our signature mountain views specials', price: 'Rs. 400–600' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-16">
      <div className="container mx-auto px-5 sm:px-8 max-w-6xl">
        <h1 className="font-serif text-5xl sm:text-6xl text-center text-[#3E2723] mb-6 tracking-wide">
          Our Menu
        </h1>
        <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
          Authentic Nepali flavors, fresh Himalayan ingredients, and international favorites – all served with stunning Sarangkot views.
        </p>

        {menuCategories.map((category, idx) => (
          <section key={idx} className="mb-20">
            <h2 className="font-serif text-4xl text-[#3E2723] mb-10 border-b-2 border-[#D4AF37] pb-4 inline-block">
              {category.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-medium text-[#3E2723]">{item.name}</h3>
                    <span className="text-[#C1440E] font-bold text-lg whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Prices are subject to change. Ask our staff for daily specials, vegetarian/vegan options, or allergies.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#C1440E] text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-[#a3390c] transition"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </div>
  );
}