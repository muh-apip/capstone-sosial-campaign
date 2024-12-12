import React, { useState } from "react";
import NavbarHome from "../Layout/NavbarHome";
import FooterHome from "../Layout/FooterHome";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300 w-full mb-4">
      <div
        className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 w-full">
          {question}
        </h2>
        <i
          className={`fas fa-chevron-${isOpen ? "up" : "down"} text-gray-600`}
        ></i>
      </div>
      {isOpen && (
        <div className="px-4 sm:px-6 py-4 border-t text-sm sm:text-base text-gray-700 leading-relaxed max-h-[300px] overflow-y-auto">
          {answer}
        </div>
      )}
    </div>
  );
};

const UserFAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "Siapa yang bisa bergabung sebagai relawan?",
      answer: "Semua orang yang peduli terhadap lingkungan bisa bergabung.",
      isOpen: false,
    },
    {
      question: "Apakah program relawan tersedia di semua wilayah?",
      answer:
        "Ya, kami menyediakan program relawan di berbagai wilayah, tergantung kebutuhan.",
      isOpen: false,
    },
    {
      question: "Apakah ada biaya untuk menjadi relawan?",
      answer:
        "Tidak, menjadi relawan di Relawanku sepenuhnya gratis. Kamu hanya perlu mendaftar dan memilih program yang sesuai.",
      isOpen: false,
    },
    {
      question: "Apa saja metode pembayaran untuk donasi?",
      answer:
        "Donasi dapat dilakukan melalui transfer bank, e-wallet, atau kartu kredit.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full bg-white shadow-md">
        <NavbarHome />
      </div>

      <div className="text-sm text-gray-500 mb-5 mt-5 px-4 sm:px-6">
        Beranda / <span className="text-gray-800 font-semibold">FAQ</span>
      </div>

      {/* Full-Width Image */}
      <div className="w-full">
        <img
          src="/public/img/background/Faq.png" // Replace with your image URL
          alt="FAQ Banner"
          className="w-full h-auto object-cover rounded-b-lg"
        />
      </div>

      {/* FAQ Content */}
      <div className="flex-1 bg-gray-100 py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-3xl lg:max-w-4xl mx-auto relative z-10">
          {/* Header FAQ */}
          <div className="text-center mt-20 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
              Pertanyaan yang Sering Diajukan
            </h1>
          </div>

          {/* Daftar FAQ */}
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={faq.isOpen}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t">
        <FooterHome />
      </div>
    </div>
  );
};

export default UserFAQ;
