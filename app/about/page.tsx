import { Navigation } from "@/components/Navigation";
import { Globe, Database, Smartphone, Code2, GraduationCap } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: <Globe className="text-green-500" size={40} />, color: "text-green-500" },
  { name: "Backend Development", icon: <Database className="text-green-500" size={40} />, color: "text-green-500" },
  { name: "Mobile Development", icon: <Smartphone className="text-green-500" size={40} />, color: "text-green-500" },
  { name: "Blockchain", icon: <Code2 className="text-green-500" size={40} />, color: "text-green-500" },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Solidity", "Web3.js", "Tailwind CSS",
  "Python", "Django", "Flutter", "Firebase", "Docker"
];

const education = [
  {
    degree: "Bachelor of Engineering, Computer Science",
    institution: "RGPV",
    year: "2023-2027",
    description: "Pursuing engineering degree with focus on computer science fundamentals."
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Agrasen DAV Public School, Bharechnagar",
    year: "2020-2022",
    description: "Science stream with emphasis on mathematics and physics."
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "DAV Public School, Gidi - A",
    year: "2020",
    description: "Completed secondary education with strong foundation in sciences."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              About <span className="text-green-500">Me</span>
            </h1>
            <div className="w-20 h-1 bg-green-500 mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Bio Section */}
          <div className="mb-20 animate-fade-in-up stagger-1">
            <div className="glass rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-green-500">Who I Am</h2>
              <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                I'm a passionate Full Stack Developer with a strong focus on building scalable web applications 
                and exploring blockchain technology. With expertise in both frontend and backend development, 
                I create seamless digital experiences that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My journey in tech started with a curiosity about how things work on the web. Today, I specialize 
                in modern frameworks like React and Next.js, and I'm constantly learning new technologies to stay 
                ahead in this ever-evolving field. I believe in writing clean, maintainable code and creating 
                applications that users love.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-20 animate-fade-in-up stagger-2">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              My <span className="text-green-500">Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="glass rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-green-600 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`${skill.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-20 animate-fade-in-up stagger-3">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Technologies <span className="text-green-500">I Use</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 glass rounded-full hover:bg-gray-800 hover:border-green-600 hover:shadow-lg transition-all duration-300 text-sm font-medium text-gray-300 hover:text-white hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="animate-fade-in-up stagger-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3">
              <GraduationCap className="text-green-500" size={40} />
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-green-600 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <span className="px-4 py-1 bg-green-600 text-white rounded-full text-sm font-medium">{edu.year}</span>
                  </div>
                  <p className="text-white font-semibold mb-2 text-lg">{edu.institution}</p>
                  <p className="text-gray-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}