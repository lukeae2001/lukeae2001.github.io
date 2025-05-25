// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return ( // Parentheses start on the same line as return
    <header className="bg-white text-gray-800 shadow-md border-b border-gray-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors font-display"
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
  ); // Parentheses and semicolon for the return statement
};

export default Header;
  