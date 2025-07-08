import React from 'react';

interface Partner {
  name: string;
  logo: string;
  description?: string;
}

const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      name: "TechVision",
      logo: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      description: "Collaborated on AI-driven customer experience solutions"
    },
    {
      name: "Oceanic",
      logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      description: "Developed comprehensive digital transformation strategy"
    },
    {
      name: "GreenPath",
      logo: "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg",
      description: "Implemented sustainable eCommerce solutions"
    }
  ];

  const trustedBy = [
    {
      name: "Innovation Tech",
      logo: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
    },
    {
      name: "Digital Solutions",
      logo: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg"
    },
    {
      name: "Future Systems",
      logo: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
    },
    {
      name: "Tech Innovate",
      logo: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Partners</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Collaborating with industry leaders to deliver exceptional digital solutions.
          </p>
        </div>

        {/* Featured Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-40 mb-6 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{partner.name}</h3>
              {partner.description && (
                <p className="text-black">{partner.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-black mb-12">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustedBy.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="h-20 w-full overflow-hidden rounded-lg">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;