import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'blue',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'teal',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 87 },
        { name: 'GraphQL', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & UX',
      color: 'purple',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Prototyping', level: 82 },
        { name: 'User Research', level: 78 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile & Tools',
      color: 'green',
      skills: [
        { name: 'React Native', level: 82 },
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-100 text-blue-600',
        progress: 'bg-blue-600',
        progressBg: 'bg-blue-100',
      },
      teal: {
        bg: 'bg-teal-50',
        icon: 'bg-teal-100 text-teal-600',
        progress: 'bg-teal-600',
        progressBg: 'bg-teal-100',
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'bg-purple-100 text-purple-600',
        progress: 'bg-purple-600',
        progressBg: 'bg-purple-100',
      },
      green: {
        bg: 'bg-green-50',
        icon: 'bg-green-100 text-green-600',
        progress: 'bg-green-600',
        progressBg: 'bg-green-100',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <AnimatedSection
                key={category.title}
                animation="fade-up"
                delay={index * 200}
              >
                <div className={`${colors.bg} p-6 rounded-2xl h-full`}>
                  <div className="flex items-center mb-6">
                    <div className={`${colors.icon} p-3 rounded-full mr-4`}>
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div className={`${colors.progressBg} rounded-full h-2`}>
                          <div
                            className={`${colors.progress} rounded-full h-2 transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;