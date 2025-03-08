import { motion } from 'framer-motion';
import { GraduationCap, Code2,Briefcase } from 'lucide-react';

export default function Resume() {
  const education = [
    {
      school: 'Uki Technology School',
      period: 'Fall - November 2024',
      description: 'Full-stack Web Development 6-month program',
      type: 'Online Course & Uki Academic Course'
    },
    {
      school: 'Jaffna Hindu College',
      period: '2014 - 2022',
      description: 'Advanced Level - Combined Mathematics',
      subjects: 'Physics, Combined Mathematics, Chemistry'
    }
  ];

  const skills = {
    technical: [
      'JavaScript',
      'Python',
      'Bootstrap',
      'Backend Development',
      'API Integration',
      'Cloud Computing',
      'Canva designing'
    ],
    interpersonal: [
      'Teamwork',
      'Public speaking',
      'Leadership',
      'Communication'
    ]
  };

  const workExperience = [
    {
      company: 'ADADA Digital',
      position: 'Software Engineer',
      period: 'January 2025 - Present', // Updated date format
      description: 'Developing high-performance software solutions, collaborating with cross-functional teams, and utilizing modern development technologies to build scalable applications.'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1A1A1A] pt-24 pb-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h1 className="mb-6 text-4xl font-bold">Resume</h1>
          <div className="h-1 w-12 bg-yellow-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-6 w-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="rounded-2xl bg-[#2A2A2A] p-6">
                <h3 className="mb-2 text-xl font-semibold">{edu.school}</h3>
                <p className="mb-2 text-sm text-gray-400">{edu.period}</p>
                <p className="text-gray-300">{edu.description}</p>
                {edu.subjects && (
                  <p className="mt-2 text-sm text-gray-400">Subjects: {edu.subjects}</p>
                )}
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Code2 className="h-6 w-6 text-yellow-400" />
              <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            <div className="rounded-2xl bg-[#2A2A2A] p-6">
              <h3 className="mb-4 text-xl font-semibold">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#333333] px-4 py-1 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-[#2A2A2A] p-6">
              <h3 className="mb-4 text-xl font-semibold">Interpersonal Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.interpersonal.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#333333] px-4 py-1 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mt-12">
          <div className="flex items-center space-x-3">
            <Briefcase className="h-6 w-6 text-yellow-400" />
            <h2 className="text-2xl font-semibold">Work Experience</h2>
          </div>
          {workExperience.map((job, index) => (
            <div key={index} className="rounded-2xl bg-[#2A2A2A] p-6 mt-6">
              <h3 className="mb-2 text-xl font-semibold">{job.company}</h3>
              <p className="mb-2 text-sm text-gray-400">{job.period}</p>
              <p className="text-gray-300">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
