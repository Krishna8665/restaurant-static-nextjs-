export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Pandeli Restaurant & Bar</h3>
            <p className="mt-2 text-sm">Sarangkot, Pokhara, Nepal</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-2 text-sm">+977 984-1234567</p>
            <p className="text-sm">info@pandelirestaurant.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Open Hours</h3>
            <p className="mt-2 text-sm">Daily: 10:00 AM – 10:00 PM</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Pandeli Restaurant & Bar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}