
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const PortfolioSection: React.FC = () => {
  // Helper function to get a color based on project title
  const getProjectColor = (title: string): string => {
    switch (title) {
      case "E-Commerce Website":
        return "bg-gradient-to-br from-[#FDE1D3] to-[#FDE1D3]/70";
      case "Food Delivery Website":
        return "bg-gradient-to-br from-[#FFDEE2] to-[#FFDEE2]/70";
      case "Mobile App Interface":
        return "bg-gradient-to-br from-[#F1F0FB] to-[#F1F0FB]/70";
      case "Animation Website":
        return "bg-gradient-to-br from-[#E6F7FF] to-[#E6F7FF]/70";
      default:
        return "bg-gradient-to-br from-gray-100 to-gray-200";
    }
  };

  const projects: Project[] = [
    {
      title: "E-Commerce Website",
      description: "Modern and clean online store interface for fashion or retail with intuitive navigation and engaging product displays.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?fit=crop&w=600&h=400",
      link: "https://www.figma.com/proto/vRvteLmf4z0ZPqqodbUXEh/figma-designs?page-id=473%3A2&node-id=475-2&viewport=692%2C114%2C0.07&t=S8JXQi3VGrDKtyhW-1&scaling=min-zoom&content-scaling=",
      tags: ["UI Design", "E-commerce", "Web"]
    },
    {
      title: "Food Delivery Website",
      description: "UI for a seamless food delivery experience with a focus on UX flow, making ordering food online efficient and enjoyable.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?fit=crop&w=600&h=400",
      link: "https://www.figma.com/proto/vRvteLmf4z0ZPqqodbUXEh/figma-designs?page-id=631%3A116&node-id=631-117&viewport=329%2C25%2C0.12&t=2AzJhzj2A8ZdSeql-1&scaling=scale-down&content-scaling=",
      tags: ["UX Design", "Food", "Web"]
    },
    {
      title: "Mobile App Interface",
      description: "Design for a lifestyle app with intuitive navigation and vibrant visuals that enhance the user experience on mobile devices.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=600&h=400",
      link: "https://www.figma.com/proto/vRvteLmf4z0ZPqqodbUXEh/figma-designs?page-id=477%3A6&node-id=558-339&viewport=251%2C162%2C0.28&t=VBq0xHwNqOBagNsY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=558%3A339",
      tags: ["UI/UX", "Mobile", "App"]
    },
    {
      title: "Animation Website",
      description: "Interactive site showcasing animations with fluid transitions, demonstrating advanced animation principles in web design.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?fit=crop&w=600&h=400",
      link: "https://www.figma.com/proto/vRvteLmf4z0ZPqqodbUXEh/figma-designs?page-id=588%3A374&node-id=613-113&viewport=868%2C512%2C0.21&t=7yh3VJfDttyEnQ2W-1&scaling=contain&content-scaling=",
      tags: ["Animation", "Interactive", "Web"]
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-warm-peach to-warm-coral mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore my recent design projects showcasing my skills in UI/UX design, 
            interactive prototypes, and visual storytelling.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="project-card bg-white shadow-md group animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`relative overflow-hidden aspect-video ${getProjectColor(project.title)}`}>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-5 w-full">
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="text-xs font-medium text-white bg-warm-coral/70 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ExternalLink className="text-white w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
