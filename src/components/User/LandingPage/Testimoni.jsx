import React from "react";
import SitiNurjanah from "../../../assets/images/photos/SitiNurjanah.png";
import AndiPrasetyo from "../../../assets/images/photos/AndiPrasetyo.png";
import BudiSantoso from "../../../assets/images/photos/BudiSantoso.png";

const Testimoni = () => {
  const testimonials = [
    {
      name: "Siti Nurjanah",
      message:
        "Bergabung dalam program donasi Relawanku membantu saya merasa lebih bermanfaat. Dengan donasi saya, saya merasa saya telah membantu banyak orang yang membutuhkan.",
      image: SitiNurjanah,
    },
    {
      name: "Andi Prasetyo",
      message:
        "Menjadi relawan lingkungan melalui Relawanku memberi saya pengalaman yang sangat berarti. Saya bisa melihat langsung dampak yang saya buat untuk lingkungan sekitar.",
      image: AndiPrasetyo,
    },
    {
      name: "Budi Santoso",
      message:
        "Artikel yang dibagikan oleh Relawanku sangat informatif. Saya merasa lebih tahu tentang isu sosial dan lingkungan serta cara-cara konkret untuk membantu mengatasi masalah tersebut.",
      image: BudiSantoso,
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
          Apa Kata Mereka
        </h2>
        <p className="text-center text-sm sm:text-base font-normal text-gray-600 mb-12">
          Beberapa cerita nyata dari mereka yang telah ambil bagian dalam program kami.
        </p>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-[24px] flex flex-col"
            >
              {/* Gambar dan Nama */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              {/* Garis Pembatas */}
              <hr className="border-gray-300 w-full" />
              {/* Pesan */}
              <p className="text-gray-600 mt-4 text-sm sm:text-base text-justify">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
