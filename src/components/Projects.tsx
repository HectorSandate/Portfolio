import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Aplicación Web para SITS',
      description: 'Sistema completo de gestión de comunicación sindical con arquitectura de microservicios. Mejora del 40% en eficiencia de comunicación y reducción del 50% en costos operativos.',
      image: 'https://res.cloudinary.com/drfhnbhyo/image/upload/v1762823302/sits_euusqm.png',
      tech: ['React', 'Node.js', 'AWS', 'MongoDB'],
      link: 'https://sits-front.onrender.com/',
      results: ['Reducción de tiempos de respuesta: 40%', 'Reducción de costos: 50%', 'Aumento de retención: 30%']
    },
    {
      title: 'TapDrink - Gestión de Bar',
      description: 'Aplicación móvil y web para optimizar la preparación de bebidas en bares. Interfaz intuitiva con sincronización en tiempo real.',
      image: 'https://res.cloudinary.com/drfhnbhyo/image/upload/v1762823435/tap_htc6sb.png',
      tech: ['Flutter', 'Dart', 'Firebase'],
      link: 'https://tapdrinkfront.onrender.com/',
      results: ['Reducción de tiempo de preparación: 50%', 'Interfaz multiplataforma', 'Sincronización en tiempo real']
    },
    {
      title: 'API RESTful para Reservas',
      description: 'API segura con autenticación JWT y despliegue serverless en AWS Lambda. Diseñada para alta escalabilidad y rendimiento.',
      image: 'https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Node.js', 'Express', 'AWS Lambda', 'JWT'],
      link: 'https://seguridadinformacion.onrender.com/',
      results: ['Arquitectura serverless', 'Autenticación segura JWT', 'Alta escalabilidad']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.results.map((result, resultIdx) => (
                    <div key={resultIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span className="text-slate-400 text-sm">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-all hover:scale-105 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Ver Proyecto</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
