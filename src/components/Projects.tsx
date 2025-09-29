import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      year: '2024',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      year: '2024',
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['Vue.js', 'Express.js', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      year: '2023',
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive charts, and personalized weather alerts.',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS Modules'],
      image: 'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      year: '2023',
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media managers with data visualization and automated reporting features.',
      technologies: ['Next.js', 'TypeScript', 'D3.js', 'Prisma', 'Supabase'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      demoUrl: '#',
      githubUrl: '#',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-px top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-200 via-teal-300 to-blue-200 hidden lg:block"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A timeline of projects that showcase my growth and expertise in web development
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              delay={index * 100}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Timeline Marker */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-blue-600">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm font-medium">{project.year}</span>
                    </div>
                    {project.featured && (
                      <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                      >
                        <Tag size={12} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center transform hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 flex items-center transform hover:scale-105"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;