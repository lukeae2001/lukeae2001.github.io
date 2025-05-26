// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header 
      className="
        bg-white text-gray-800 
        shadow-md 
        border-b border-gray-300
        rounded-bl-xl rounded-br-xl
      "
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          href="/" 
          className="
            text-2xl font-bold text-gray-800 
            transition-colors font-display 
            flex items-center {/* Optional: For precise vertical centering of the text itself if needed */}
          " 
          // REMOVED hover:text-blue-600
        >
          LE
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-500 hover:text-black transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-500 hover:text-black transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-500 hover:text-black transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;