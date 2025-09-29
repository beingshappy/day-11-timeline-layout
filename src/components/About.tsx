import React from 'react';
import { User, Heart, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate developer with a love for creating meaningful digital experiences
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 5 years of experience in full-stack development, I specialize in 
                creating scalable web applications and intuitive user interfaces. My journey 
                began with a Computer Science degree and has evolved through various challenging 
                projects across different industries.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                I believe in the power of clean code, thoughtful design, and collaborative 
                problem-solving. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or hiking in the mountains.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Lifelong Learner
                </span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <User className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Who I Am</h3>
                </div>
                <p className="text-gray-700">
                  A dedicated developer who thrives on turning complex problems into elegant solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Heart className="text-teal-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">What I Love</h3>
                </div>
                <p className="text-gray-700">
                  Creating impactful digital experiences and mentoring other developers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Target className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">My Goal</h3>
                </div>
                <p className="text-gray-700">
                  Building technology that makes people's lives easier and more enjoyable.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;