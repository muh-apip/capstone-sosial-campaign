import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-md shadow-md border border-gray-300 w-full mb-2">
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer"
        onClick={onClick}
      >
        <h2 className="text-base font-semibold text-gray-900">{question}</h2>
        <i
          className={`fas fa-chevron-${isOpen ? "up" : "down"} text-gray-600`}
        ></i>
      </div>
      {isOpen && (
        <div className="px-6 py-3 border-t text-gray-700 text-sm leading-relaxed">
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
    <div className="bg-gray-100">
      {/* Kontainer FAQ */}
      <div className="w-full max-w-6xl mx-auto px-4 pt-8">
        {/* Header FAQ */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Pertanyaan yang Sering Diajukan
        </h1>
        {/* Item FAQ */}
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
