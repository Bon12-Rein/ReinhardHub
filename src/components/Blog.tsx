import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
}

const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Leveraging AI for Business Growth in 2024",
      excerpt: "Discover how small businesses and startups can harness AI to automate operations and drive growth.",
      author: "Team Telispac",
      date: "Mar 15, 2024",
      category: "Technology",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Building Your Personal Brand as a Student",
      excerpt: "Essential strategies for students to establish a strong online presence and stand out to employers.",
      author: "Team Telispac",
      date: "Mar 12, 2024",
      category: "Branding",
      image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Digital Marketing Trends for Startups",
      excerpt: "The latest digital marketing strategies that are helping startups reach their target audience effectively.",
      author: "Team Telispac",
      date: "Mar 10, 2024",
      category: "Marketing",
      image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Latest Insights</h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-black mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-black mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;