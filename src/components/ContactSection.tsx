
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />, 
      url: "https://www.linkedin.com/in/swati-rawat-161b09322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "bg-[#0077B5]"
    },
    { 
      name: "Instagram", 
      icon: <Instagram className="w-5 h-5" />, 
      url: "https://www.instagram.com/swati_rwt22?igsh=MWV3eTczNGt1aGJ2NA==",
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
    },
    { 
      name: "Email", 
      icon: <Mail className="w-5 h-5" />, 
      url: "mailto:rawatswati2218@gmail.com",
      color: "bg-[#EA4335]"
    },
    { 
      name: "Phone", 
      icon: <Phone className="w-5 h-5" />, 
      url: "tel:+919999622839",
      color: "bg-[#25D366]"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-warm-peach to-warm-coral mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about my work? I'd love to hear from you. 
            Fill out the form below or reach out through my social channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="contact-input min-h-[160px]"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-warm-peach to-warm-coral hover:from-warm-coral hover:to-warm-peach text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            
            <div className="mb-8">
              <p className="text-gray-600 mb-2">
                I'm currently available for freelance work and full-time opportunities.
                If you're looking for a designer who can create beautiful, functional interfaces,
                let's connect!
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-warm-peach/20 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-warm-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:rawatswati2218@gmail.com" className="text-gray-800 hover:text-warm-coral transition-colors">
                      rawatswati2218@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-warm-peach/20 flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-warm-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+919999622839" className="text-gray-800 hover:text-warm-coral transition-colors">
                      +91 9999 622 839
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-4 text-gray-800">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center shadow-md hover-scale"
                    aria-label={social.name}
                    style={{ background: social.color.startsWith('bg-[') ? social.color.slice(4, -1) : undefined }}
                    // For gradient backgrounds, we need to handle it differently
                    {...(social.color.startsWith('bg-gradient') ? {} : { className: `w-12 h-12 rounded-full text-white flex items-center justify-center shadow-md hover-scale ${social.color}` })}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
