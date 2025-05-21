import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['all', 'branding', 'web', 'automation', 'marketing'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Student Portfolio Platform",
      category: "web",
      image: "https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Custom portfolio platform helping students showcase their work and skills effectively."
    },
    {
      id: 2,
      title: "Startup Automation Suite",
      category: "automation",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "AI-powered workflow automation system for emerging startups."
    },
    {
      id: 3,
      title: "E-Commerce Growth",
      category: "marketing",
      image: "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Comprehensive digital marketing strategy that increased sales by 200%."
    },
    {
      id: 4,
      title: "Tech Startup Rebrand",
      category: "branding",
      image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete brand transformation for an emerging tech startup."
    },
    {
      id: 5,
      title: "AI Customer Service",
      category: "automation",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Intelligent chatbot system improving customer support efficiency."
    },
    {
      id: 6,
      title: "Educational Platform",
      category: "web",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Interactive learning platform with integrated assessment tools."
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped students, startups, and businesses transform their digital presence.
          </p>
          
          <div className="flex flex-wrap justify-center mt-8 space-x-2 space-y-2">
            <div className="hidden">Spacer</div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-3">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;