import { Code, Database, Cloud, TestTube } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Lenguajes & Frameworks',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React & Next.js', level: 85 },
        { name: 'Node.js & Express', level: 90 },
        { name: 'Python', level: 75 },
        { name: 'Java & Spring Boot', level: 70 },
        { name: 'Flutter & Dart', level: 80 },
      ]
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'MySQL', level: 75 },
      ]
    },
    {
      icon: Cloud,
      title: 'Infraestructura & DevOps',
      skills: [
        { name: 'AWS (S3, Lambda)', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
      ]
    },
    {
      icon: TestTube,
      title: 'Testing & QA',
      skills: [
        { name: 'Selenium', level: 75 },
        { name: 'Mocha', level: 70 },
        { name: 'Cucumber', level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
