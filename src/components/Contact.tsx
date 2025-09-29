import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'd love to hear about your project
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <AnimatedSection animation="slide-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-blue-200 leading-relaxed mb-8">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'm always open to discussing new opportunities and creative ideas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-800 p-3 rounded-full mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:alex@example.com" className="text-blue-200 hover:text-white transition-colors">
                      alex@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-teal-800 p-3 rounded-full mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-blue-200 hover:text-white transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-800 p-3 rounded-full mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slide-right">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/60 text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/60 text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-white/60 text-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-colors duration-200 flex items-center justify-center transform hover:scale-105"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle size={64} className="mx-auto text-green-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-blue-200">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;