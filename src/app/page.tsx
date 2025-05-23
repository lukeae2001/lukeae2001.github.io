// src/app/page.tsx
import Link from 'next/link'; // Import Link for navigation

export default function HomePage() {
  const myName = "Luke Edwards"; // Replace with your actual name

  // Define the content for the boxes
  const featureBoxes = [
    {
      title: "Photography",
      description: "Capturing moments and perspectives.",
      link: "/photography", // Target page for photography
      bgColor: "bg-sky-500", // Tailwind background color
      hoverBgColor: "hover:bg-sky-600",
    },
    {
      title: "Code Projects",
      description: "Exploring software development and creation.",
      link: "/projects", // Target page for projects
      bgColor: "bg-emerald-500",
      hoverBgColor: "hover:bg-emerald-600",
    },
    {
      title: "Art / Music",
      description: "Creative expressions through various mediums.",
      link: "/art-music", // Target page for art/music
      bgColor: "bg-purple-500",
      hoverBgColor: "hover:bg-purple-600",
    },
  ];

  return (
    <> {/* Using a Fragment because we'll have multiple top-level elements */}
      <div className="text-center pt-0 pb-10">
        <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-7xl font-bold text-gray-800 tracking-normal">
          {myName}
        </h1>
        <p className="mt-1 text-xl text-gray-600">
          Portfolio Website
        </p>
      </div>

      {/* Section for the three adjacent boxes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Flex container for the boxes */}
          {/* On small screens (default), stack them. On medium screens (md) and up, display them in a row. */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {featureBoxes.map((box) => (
              // Each box is a flex item. md:w-1/3 makes them take up 1/3 of the width on medium screens and up.
              <Link
                href={box.link}
                key={box.title}
                className={`flex-1 p-8 rounded-lg shadow-lg text-white transition-all duration-300 ease-in-out transform hover:scale-105 ${box.bgColor} ${box.hoverBgColor}`}
              >
                <h2 className="text-3xl font-semibold mb-3">{box.title}</h2>
                <p className="text-gray-100">{box.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}