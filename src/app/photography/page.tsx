// src/app/photography/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// --- Text styling references ---
// These are good if you want to keep them consistent with other parts of your site
const cardDescriptionFontSize = "text-md sm:text-lg"; 
const cardTitleFontSize = "text-xl sm:text-2xl md:text-2xl"; 
// ---

const photographyProjects = [
  {
    slug: 'terranora-lakes', // Make sure slug and image path match your files
    title: 'Terranora Lakes',
    description: 'Exploring the abandoned Terranora Lakes Country Club.',
    thumbnail: '/images/photography/terranora-lakes.jpg', 
  },
  {
    slug: 'portraits-vol1',
    title: 'Portraits: Volume I',
    description: 'Exploring character and emotion through portraiture.',
    thumbnail: '/images/photography/portraits-vol1-thumb.jpg', 
  },
  {
    slug: 'nature-abstracts',
    title: 'Nature Abstracts',
    description: 'Finding abstract beauty in the natural world.',
    thumbnail: '/images/photography/nature-abstracts-thumb.jpg', 
  },
];

export default function PhotographyPage() {
  return (
    // Root div for the page, remove default py-* if sections handle it
    <div> 
      {/* Page Title Section - Styled like Hero on Homepage */}
      <div className="text-center pt-10 pb-10 sm:pt-12 sm:pb-12 md:pt-10 md:pb-16"> {/* Padding from 1st code block's title section */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight font-display"> {/* Text style from 1st code block's title */}
          Photography Portfolio
        </h1>
      </div>

      {photographyProjects.length > 0 ? (
        // Card Grid Section - Add bottom padding for space above footer
        <section className="pb-10 sm:pb-12 md:pb-12"> {/* Consistent bottom padding */}
          <div className="container mx-auto px-4"> {/* Added container for consistency if needed */}
            <div className="
              grid 
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
              gap-6 sm:gap-8
            ">
              {photographyProjects.map((project, index) => (
                <Link
                  href={`/photography/${project.slug}`}
                  key={project.slug}
                  className="
                    group block   {/* Link is a block to fill grid cell */}
                    bg-white rounded-xl shadow-xl overflow-hidden 
                    border border-gray-300
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    flex flex-col {/* Card stacks image and text vertically */}
                    mx-auto w-full max-w-sm {/* Card centers itself if grid cell is wider, has max width */}
                  "
                >
                  <div className="relative w-full aspect-[16/10]"> {/* Image container */}
                    <Image
                      src={project.thumbnail}
                      alt={`Thumbnail for ${project.title}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index === 0} 
                      placeholder="empty"
                    />
                  </div>

                  {/* Text Content Area */}
                  <div className="p-5 sm:p-6 text-center flex flex-col flex-grow"> {/* flex-grow helps if cards need same height */}
                    <h2 className={`w-full ${cardTitleFontSize} font-semibold mb-1 sm:mb-2 text-gray-800`}>
                      {project.title}
                    </h2>
                    <p className={`w-full ${cardDescriptionFontSize} text-gray-600 line-clamp-3 mt-1`}>
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500">No photography projects yet. Check back soon!</p>
      )}
    </div>
  );
}