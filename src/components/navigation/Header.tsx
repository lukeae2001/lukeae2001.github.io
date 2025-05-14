// src/components/navigation/Header.tsx
import Link from 'next/link'; // Import the Link component

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-gray-700 sticky top-0 bg-gray-900 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-blue-400 transition-colors">
          Luke Edwards {/* Your Name/Logo - links to homepage */}
        </Link>
        <div className="space-x-4"> {/* Use space-x for spacing between links */}
          <Link href="/code-projects" className="hover:text-blue-400 transition-colors">Code Projects</Link>
          <Link href="/photography" className="hover:text-blue-400 transition-colors">Photography</Link>
          <Link href="/art-music" className="hover:text-blue-400 transition-colors">Art & Music</Link>
          <Link href="/cv" className="hover:text-blue-400 transition-colors">CV</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </nav>
    </header>
  );
}