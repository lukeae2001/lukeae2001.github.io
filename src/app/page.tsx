// src/app/page.tsx
import Link from 'next/link';
import ScrollToSectionButton from '../components/ScrollToSectionButton'; // Ensure this path is correct

export default function HomePage() {
  const myName = "Luke Edwards";
  const descriptionFontSize = "text-md sm:text-lg"; 

  const featureBoxes = [
    {
      title: "Photography",
      description: "Capturing moments.",
      link: "/photography",
      bgColor: "bg-white",
    },
    {
      title: "Code Projects",
      description: "Software development.",
      link: "/projects",
      bgColor: "bg-white",
    },
    {
      title: "Art / Music",
      description: "Additional mediums.",
      link: "/art-music",
      bgColor: "bg-white",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="text-center pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-10 md:pb-16">
        <div> 
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight font-display">
            {myName}
          </h1>
          <p className={`mt-2 ${descriptionFontSize} text-gray-500`}>
            Portfolio Website
          </p>
        </div>
      </div>

      {/* Card Section */}
      <section className="pb-10 sm:pb-12 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="
            flex flex-col items-center gap-6 sm:gap-8 
            md:grid md:grid-cols-3 md:gap-6 lg:gap-8 
          ">
            {featureBoxes.map((box) => (
              <Link
                href={box.link}
                key={box.title}
                className={`
                  block w-full max-w-sm aspect-[16/10] p-5 sm:p-6                          
                  rounded-xl shadow-xl ${box.bgColor || 'bg-white'} text-black 
                  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl
                  border border-gray-300 flex flex-col justify-center items-center 
                  text-center mx-auto             
                `}
              >
                <div> 
                  <h2 className="w-full text-xl sm:text-2xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800"> 
                    {box.title}
                  </h2>
                  <p className={`w-full ${descriptionFontSize} text-gray-600`}>
                    {box.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator Section (and Spacer) */}
      <div className="relative text-center 
                      pt-4 sm:pt-6 md:pt-8              {/* Modest top padding for space above arrow */}
                      pb-20 sm:pb-28 md:pb-36">         {/* Increased bottom padding to push "About Me" down */}
        <ScrollToSectionButton 
          targetId="about-me-section" 
          ariaLabel="Scroll to about me section" 
        />
      </div>

      {/* About Me Section Placeholder */}
      <section id="about-me-section" className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-display text-gray-800">About Me</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto shadow-lg">
              <img 
                src="https://via.placeholder.com/300" // Replace with your actual image path
                alt="A picture of Luke Edwards" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Hello! I'm Luke Edwards, a passionate individual exploring the worlds of photography,
                software development, and various artistic expressions. This website is a canvas
                for my journey and creations.
              </p>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Feel free to explore my projects and get in touch!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}