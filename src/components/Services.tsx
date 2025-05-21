import React from 'react';
import { Palette, Rocket, Globe, Lightbulb, Bot, Megaphone, BarChart, Layout, Zap } from 'lucide-react';

interface Service {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Branding & Strategy",
      icon: <Palette size={36} />,
      items: [
        "Brand Purpose & Vision Development",
        "Brand Naming & Tagline Creation",
        "Target Audience Research & Persona Building",
        "Competitive Landscape & Market Analysis",
        "Brand Storytelling & Messaging Framework",
        "Unique Value Proposition",
        "Brand Positioning"
      ]
    },
    {
      title: "Marketing Strategy",
      icon: <BarChart size={36} />,
      items: [
        "Organic Social Media Strategy & Growth",
        "Paid Ads Management (Google, Facebook, Instagram, etc.)",
        "Search Engine Optimization (SEO) for better visibility & rankings",
        "Email Marketing Campaigns & List Management",
        "Influencer Marketing Strategy & Campaigns"
      ]
    },
    {
      title: "Web & ECommerce",
      icon: <Layout size={36} />,
      items: [
        "Custom Website Design & Development",
        "Comprehensive Online Presence Strategy",
        "Secure Payment Processing & Integration",
        "Website Analytics Setup & Performance Tracking",
        "Local Business Listings"
      ]
    },
    {
      title: "Creative",
      icon: <Rocket size={36} />,
      items: [
        "Logo & Visual Identity Design",
        "Social Media Graphics Creation",
        "Marketing Materials Design",
        "Content Creation",
        "Video Production & Editing",
        "Photography & Illustration Styles"
      ]
    },
    {
      title: "AI & Automation",
      icon: <Bot size={36} />,
      items: [
        "AI-Powered Content Creation",
        "CRM Setup & Client Relationship Automation",
        "Social Media Scheduling & Auto-Publishing",
        "Email Marketing Automation & Smart Campaigns",
        "Lead Generation Tools & Funnel Automation"
      ]
    },
    {
      title: "Tech & Innovation",
      icon: <Zap size={36} />,
      items: [
        "CRM & Client Management Software Implementation",
        "Project & Task Management Software Setup",
        "Communication & Collaboration Tool Integration",
        "Scheduling & Appointment Booking System Setup",
        "Analytics & Reporting Tool Configuration"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary mr-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;