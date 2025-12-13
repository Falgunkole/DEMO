import { useState } from 'react';

const galleryItems = [
  {
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    title: 'CCTV Installation',
    category: 'Security'
  },
  {
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    title: 'Solar Panel Setup',
    category: 'Solar Energy'
  },
  {
    image: 'https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg',
    title: 'Smart Home System',
    category: 'Automation'
  },
  {
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
    title: 'Security Camera',
    category: 'Security'
  },
  {
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    title: 'Solar Installation',
    category: 'Solar Energy'
  },
  {
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
    title: 'Project Installation',
    category: 'Installation'
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our completed projects and installations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-blue-300 mb-1">{item.category}</p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full">
              <img
                src={galleryItems[selectedImage].image}
                alt={galleryItems[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
