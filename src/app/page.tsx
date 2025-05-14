export default function Home() {
  return (
    // Main container - Full height, flex column, dark background
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">

      {/* Header Section (Placeholder) */}
      <header className="w-full p-4 border-b border-gray-700">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Luke Edwards</div> {/* Your Name/Logo */}
          <div>
            {/* Navigation Links (will add later) */}
            <span className="mx-2">About</span>
            <span className="mx-2">Projects</span>
            <span className="mx-2">Contact</span>
          </div>
        </nav>
      </header>

      {/* Main Content Area - Takes up remaining space */}
      <main className="flex-grow container mx-auto flex flex-col items-center justify-center p-8 text-center">

        <h1 className="text-5xl font-bold mb-4"> {/* Larger heading, margin bottom */}
          My Awesome Portfolio
        </h1>

        <p className="text-xl text-gray-400 mb-8"> {/* Larger text, lighter color, margin bottom */}
          Showcasing tech, art, and photography.
        </p>

        {/* Placeholder for project grid or other content */}
        <div className="border border-dashed border-gray-600 p-10 rounded">
          <p>Content Area</p>
        </div>

      </main>

      {/* Footer Section */}
      <footer className="w-full p-4 text-center text-sm text-gray-500 border-t border-gray-700">
        <p>© 2025 Luke Edwards</p> {/* Make sure name/year are correct */}
      </footer>

    </div>
  );
}