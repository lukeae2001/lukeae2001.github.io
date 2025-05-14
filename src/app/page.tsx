// src/app/page.tsx
// No need to import Header or Footer here anymore

export default function Home() {
  return (
    // The flex-grow, container, etc. for main content area are now in layout.tsx
    // This <section> or <div> is what gets injected as {children} in layout.tsx
    <section className="flex flex-col items-center justify-center text-center py-10"> {/* Added py-10 for vertical padding */}
      <h1 className="text-5xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Discover my work in tech, art, and photography.
      </p>
      {/* You can add links to your sections here, or a grid of featured items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition-all">
          <h2 className="text-2xl font-semibold mb-2">Code Projects</h2>
          <p className="text-gray-400">Innovative solutions and creative coding.</p>
          {/* Add a Link component here later */}
        </div>
        <div className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition-all">
          <h2 className="text-2xl font-semibold mb-2">Photography</h2>
          <p className="text-gray-400">Moments captured through my lens.</p>
        </div>
        <div className="border border-gray-700 p-6 rounded-lg hover:border-blue-500 transition-all">
          <h2 className="text-2xl font-semibold mb-2">Art & Music</h2>
          <p className="text-gray-400">Exploring creativity in various forms.</p>
        </div>
      </div>
    </section>
  );
}