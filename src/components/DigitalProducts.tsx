import React from 'react';
import { Book, Video, Lightbulb, Download } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  category: string;
  comingSoon?: boolean;
}

const DigitalProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Digital Marketing Mastery",
      description: "Complete guide to building and executing successful digital marketing campaigns.",
      price: "$49.99",
      icon: <Book size={32} />,
      category: "Ebook",
      comingSoon: true
    },
    {
      id: 2,
      title: "Startup Brand Building",
      description: "Step-by-step course on creating a memorable brand identity for your startup.",
      price: "$199.99",
      icon: <Video size={32} />,
      category: "Course",
      comingSoon: true
    },
    {
      id: 3,
      title: "AI in Business Masterclass",
      description: "Learn to leverage AI and automation to scale your business operations.",
      price: "$299.99",
      icon: <Lightbulb size={32} />,
      category: "Masterclass",
      comingSoon: true
    },
    {
      id: 4,
      title: "Content Creation Toolkit",
      description: "Premium templates and tools for creating engaging content across platforms.",
      price: "$79.99",
      icon: <Download size={32} />,
      category: "Resources",
      comingSoon: true
    
    }
  ];

  return (
    <section id="digital-products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Digital Products</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Transform your skills with our curated collection of digital resources, courses, and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary">{product.icon}</div>
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-4">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{product.title}</h3>
                <p className="text-black mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  {product.comingSoon ? (
                    <span className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full text-sm">
                      Coming Soon
                    </span>
                  ) : (
                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full transition-all duration-200">
                      Get Access
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalProducts;