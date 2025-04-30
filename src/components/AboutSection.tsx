
import React from 'react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: "UI Design", level: 90 },
    { name: "UX Research", level: 85 },
    { name: "Wireframing", level: 90 },
    { name: "Prototyping", level: 80 },
    { name: "User Testing", level: 75 }
  ];

  const tools = ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Adobe Illustrator", "Photoshop"];

  return (
    <section id="about" className="section-padding bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-warm-peach to-warm-coral mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Story</h3>
            <p className="text-gray-700 mb-4">
              Hi there! I'm Swati, a passionate UI/UX designer with a keen eye for creating beautiful, functional, and user-centered digital experiences. My journey in design began with a fascination for the intersection of creativity and problem-solving.
            </p>
            <p className="text-gray-700 mb-4">
              I believe that great design goes beyond aesthetics—it's about understanding user needs, creating intuitive interactions, and telling compelling visual stories. My approach combines research, creativity, and strategic thinking to deliver designs that not only look great but also meet business objectives.
            </p>
            <p className="text-gray-700">
              When I'm not designing, you'll find me exploring new design trends, attending workshops, and constantly expanding my skillset to stay at the forefront of this ever-evolving field.
            </p>
          </div>
          
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-5 text-gray-800">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-warm-coral">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-warm-peach to-warm-coral rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tools I Use</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span 
                    key={tool}
                    className="px-3 py-1 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
