import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300 w-full mb-4">
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer"
        onClick={onClick}
      >
        {/* Teks pada dropdown menjadi semibold dan lebih lebar */}
        <h2 className="text-lg font-semibold text-gray-900 w-full">{question}</h2>
        <i
          className={`fas fa-chevron-${isOpen ? "up" : "down"} text-gray-600`}
        ></i>
      </div>
      {isOpen && (
        <div className="px-6 py-6 border-t text-gray-700 text-base leading-relaxed h-[300px] overflow-y-auto">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
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
    <div className="bg-gray-100 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header FAQ */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800">
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
  );
};

export default FAQ;
