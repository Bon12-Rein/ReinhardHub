import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including brand identity design, web development, digital marketing, AI & automation solutions, and digital product creation. Our services are tailored to meet the needs of students, startups, and growing businesses."
    },
    {
      question: "How do you price your services?",
      answer: "Our pricing is transparent and project-based, determined by the scope, complexity, and timeline of each project. We offer flexible packages designed to accommodate different budgets while ensuring high-quality deliverables."
    },
    {
      question: "Do you offer services for students?",
      answer: "Yes! We have special packages and discounted rates for students. Our student services include portfolio websites, personal branding, and career development resources."
    },
    {
      question: "What is your project process?",
      answer: "Our process begins with a free consultation to understand your needs, followed by a detailed proposal. Once approved, we move through discovery, design, development, and deployment phases, keeping you involved throughout."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites might take 2-4 weeks, while comprehensive branding and digital transformation projects could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital assets remain updated and perform optimally. This includes regular updates, security monitoring, and technical support."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Find quick answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg transition-all duration-200 ${
                  openIndex === index ? 'bg-white shadow-lg' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                  {openIndex === index ? (
                    <Minus className="text-primary" size={20} />
                  ) : (
                    <Plus className="text-black" size={20} />
                  )}
                </div>
                <div
                  className={`mt-4 text-black transition-all duration-200 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;