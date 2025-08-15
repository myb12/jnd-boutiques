export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold tracking-wider text-rose-500">
          JND Boutiques
        </a>
        <nav>
          {/* You can add more navigation links here */}
          <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-300 mx-2">
            Shop
          </a>
          <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-300 mx-2">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-300 mx-2">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}