import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,.2) 2px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          <AnimatedSection animation="fade-up">
            <p className="text-lg sm:text-xl text-blue-200 font-medium mb-4">
              Hello, I'm
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Alex</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                Johnson
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-100 font-light mb-8">
              Full Stack Developer & UI/UX Designer
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={600}>
            <p className="text-lg text-blue-200 leading-relaxed mb-10 max-w-2xl">
              I craft digital experiences that blend beautiful design with powerful functionality. 
              Passionate about creating solutions that make a difference.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={800}>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200 transform hover:scale-105"
              >
                View My Work
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={1000}>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:alex@example.com"
                className="text-blue-200 hover:text-white transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection animation="fade-in" delay={1200}>
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </AnimatedSection>
    </section>
  );
};

export default Hero;