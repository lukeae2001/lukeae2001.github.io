// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  const myName = "Luke Edwards";

  const featureBoxes = [
    {
      title: "Photography",
      description: "Capturing moments and perspectives.",
      link: "/photography",
      bgColor: "bg-white",
    },
    {
      title: "Code Projects",
      description: "Exploring software development and creation.",
      link: "/projects",
      bgColor: "bg-white",
    },
    {
      title: "Art / Music",
      description: "Creative expressions through various mediums.",
      link: "/art-music",
      bgColor: "bg-white",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="text-center pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-10 md:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight">
          {myName}
        </h1>
        <p className="mt-2 text-md sm:text-lg text-gray-500">
          Portfolio Website
        </p>
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
                  block                               
                  w-full                           
                  max-w-sm                            
                  aspect-[16/10]                      
                  p-5 sm:p-6                          
                  rounded-xl shadow-xl  
                  ${box.bgColor} text-black 
                  transition-all duration-300 ease-in-out 
                  transform hover:scale-105 hover:shadow-2xl
                  border border-gray-300
                  flex flex-col justify-center items-center 
                  text-center         
                  mx-auto             
                `}
              >
                <div> 
                  {/* THIS IS THE ONLY LINE CHANGED FOR FONT SIZE */}
                  <h2 className="w-full text-xl sm:text-2xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800"> {/* Target size: e.g., text-2xl on md */}
                    {box.title}
                  </h2>
                  <p className="w-full text-xs sm:text-sm text-gray-600">
                    {box.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}