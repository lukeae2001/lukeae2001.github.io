// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white text-gray-800 shadow-md border-b border-gray-300"> {/* Changed classes */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
          MySite
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors"> {/* Adjusted text color */}
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