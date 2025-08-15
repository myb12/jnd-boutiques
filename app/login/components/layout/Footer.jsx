export default function Footer() {
  return (
    <footer className="bg-rose-50 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <div className="mb-4">
          <a href="#" className="text-gray-600 hover:text-rose-500 mx-2">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-rose-500 mx-2">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-rose-500 mx-2">
            <i className="fa-brands fa-pinterest"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} JND Boutiques. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}