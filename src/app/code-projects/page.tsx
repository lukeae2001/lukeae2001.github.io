// src/app/code-projects/page.tsx
export default function CodeProjectsPage() {
  return (
    <section className="py-10"> {/* Added py-10 for vertical padding */}
      <h1 className="text-4xl font-bold text-center mb-10">My Code Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for project cards */}
        <div className="border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Project Alpha</h2>
          <p className="text-gray-400">Description of project alpha...</p>
        </div>
        <div className="border border-gray-700 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Project Beta</h2>
          <p className="text-gray-400">Description of project beta...</p>
        </div>
        {/* Add more projects */}
      </div>
    </section>
  );
}