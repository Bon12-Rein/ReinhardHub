import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechVision CEO",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "BrandWave transformed our company's image completely. Their strategic approach and creative solutions helped us stand out in a crowded market. The results exceeded our expectations."
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Oceanic Founder",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Working with BrandWave was a game-changer for our business. Their team took the time to understand our values and vision, and created a brand identity that perfectly represents who we are."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      company: "GreenPath Marketing Director",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The marketing strategy BrandWave developed for us drove incredible results. Their team's creativity, professionalism, and attention to detail made all the difference in our campaign success."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={prevTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-white/10 p-8 md:p-12">
            <div className="absolute top-6 left-6 text-primary-light opacity-30">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl italic mb-8 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-white/70">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              onClick={nextTestimonial}
              className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-200 ${
                currentTestimonial === index ? 'bg-white scale-125' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;