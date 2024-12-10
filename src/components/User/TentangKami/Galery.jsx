import React, { useState, useEffect } from "react";

const AutoPlaySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/img/galery1.jpeg",
    "/img/galery2.jpeg",
    "/img/galery3.jpeg",
    "/img/galery4.jpeg",
    "/img/galery5.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, [slides.length]);

  return (
    <div className="relative w-full min-h-96 overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6">Galeri</h2>
      <p className="text-center text-gray-600 mb-6">
        Berisi dokumentasi kegiatan dan pengalokasian dana donasi yang sudah
        diperoleh
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Slider */}
        <AutoPlaySlider />

        {/* Right Section - Static Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/img/galery2.jpeg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="/img/galery3.jpeg"
            alt="Image 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="/img/galery4.jpeg"
            alt="Image 3"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="/img/galery5.jpeg"
            alt="Image 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
