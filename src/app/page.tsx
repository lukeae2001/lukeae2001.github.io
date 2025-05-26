// src/app/page.tsx
import Link from 'next/link';
import ScrollToSectionButton from '../components/ScrollToSectionButton';
import DraggableInteractiveLinkBox from '../components/DraggableInteractiveLinkBox';

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
      title: "Technical Overview",
      description: "Skills, experience, and projects.",
      link: "/technical-overview",
      bgColor: "bg-white",
    },
    {
      title: "Art / Music",
      description: "Additional mediums.",
      link: "/art-music",
      bgColor: "bg-white",
    },
  ];

  const cardBaseClasses = `
    w-full max-w-sm aspect-[16/10] p-5 sm:p-6                          
    rounded-xl shadow-xl text-black 
    border border-black 
    flex flex-col justify-center items-center 
    text-center mx-auto
  `;

  return (
    <>
      {/* Hero Section */}
      <div className="text-center pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-10 md:pb-16">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight font-display">
            {myName}
          </h1>
          <p className={`mt-2 ${descriptionFontSize} text-gray-700`}>
            Portfolio Website
          </p>
        </div>
      </div>

      {/* Card Section */}
      <section className="pb-10 sm:pb-12 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="
            flex flex-col items-center gap-6 sm:gap-8 
            md:grid md:grid-cols-3 md:gap-6 lg:gap-8 
          ">
            {featureBoxes.map((box) => (
              <DraggableInteractiveLinkBox
                key={box.title}
                href={box.link}
                className={`${cardBaseClasses} ${box.bgColor || 'bg-white'}`}
                stretchFactor={0.1}
              >
                <div>
                  <h2 className="w-full text-xl sm:text-2xl md:text-2xl font-semibold mb-1 sm:mb-2 text-black">
                    {box.title}
                  </h2>
                  <p className={`w-full ${descriptionFontSize} text-gray-700`}>
                    {box.description}
                  </p>
                </div>
              </DraggableInteractiveLinkBox>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Down Indicator Section (and Spacer) */}
      <div className="relative text-center 
                      pt-6 sm:pt-8 md:pt-0              
                      pb-20 sm:pb-24 md:pb-2">
        {/* MODIFIED: Added pt-8 for default (mobile) arrow positioning */}
        <div className="absolute inset-x-0 top-0 flex justify-center pt-36 md:pt-16"> 
          <ScrollToSectionButton
            targetId="about-me-section"
            ariaLabel="Scroll to about me section"
          />
        </div>
      </div>

      {/* About Me Section Placeholder */}
      <section
        id="about-me-section"
        className="py-16 sm:py-20 md:py-16 bg-white rounded-xl"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-display text-black">Hello!</h2>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
            <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/profile/Profile-Picture-3.jpg"
                alt="A picture of Luke Edwards"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:max-w-xl lg:max-w-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Luke,
              </p>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                a passionate individual exploring the worlds of photography,
                software development, and various artistic expressions. This website is a canvas
                for my journey and creations.
              </p>
              <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                Feel free to explore my projects and get in touch!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}