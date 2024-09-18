
import { Carousel } from 'flowbite-react';
import React from 'react';

//   Images of old Extra curricular page
// const images = [
//     { heading: 'Syllabus', img: require('./GalleryImages/DocScanner 21-Jun-2024 5-43 pm.pdf.png') },
//     { heading: 'Outdoor Sports', img: require('./GalleryImages/SyllabusOutdoor.jpg') },
//     { heading: 'Indor Sports', img: require('./GalleryImages/SyllabusIndoor.jpg') },
// ];

const Syllabus = () => {
    return (
        <> 
        <Carousel
    
        loop
        autoplay
        className="rounded-xl mt-2 mx-2 mr-2 h-[50vh] mb-2 lg:max-w-7xl md:h-[80vh] "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          
          
        )}
        
      >
        <img
          src={require('./Health Care/Suvarna_Prashan_1.jpeg')}
          alt="image 1"
          className="h-full w-full object-fill"
        />
        <img
          src={require('./Health Care/Suvarna_Prashan_2.jpeg')}
          alt="image 2"
          className="h-full w-full object-fill"
        />
        
        
      </Carousel>
      <div className='mt-4 mb-4 border-solid-black'>
        <b><p className='text-2xl'>"Free Suvarn-Prashan Camp -Every Month on the Auspicious day of Pushya Nakshatra" </p></b><br/>
        <p><b>By " SVATOL AYURVEDA HEALTHCARE AND RESEARCH FOUNDATION " 🌱<br/> IN COLLABORATION WITH " PRABHURAM GURUKUL "📖 and " KILBIL ACTIVE PRE-SCHOOL "📚 at Nashik City.</b></p>
      </div>
    
      {/* old Extra curricular page */}
        {/*<div className="flex flex-col items-center bg-[#EBEEF3]">
            {images.map((image, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl mb-4">{image.heading}</h2> 
                    <img
                        src={image.img}
                        alt={image.heading}
                        className="w-[210mm] h-auto"
                    />
                </div>
            ))}
        </div> */}
        </>
    );
};

export default Syllabus;
