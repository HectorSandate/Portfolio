import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experiencia Laboral</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            <div className="relative pl-20 pb-12">
              <div className="absolute left-5 top-2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-900"></div>

              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Briefcase size={20} />
                    <h3 className="text-xl font-bold">Desarrollador Web</h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar size={16} />
                    <span>Enero - Agosto 2024 (8 meses)</span>
                  </div>
                </div>

                <p className="text-lg text-white font-semibold mb-4">SITS (Sindicato de la Industria del Transporte y sus Servicios)</p>

                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Desarrollé una aplicación web para la gestión de comunicación sindical, reduciendo los tiempos de respuesta en un <span className="text-cyan-400 font-semibold">40%</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Implementé una arquitectura de microservicios con Node.js y Express, optimizando el rendimiento y la escalabilidad del sistema</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Diseñé una interfaz responsiva con React-Vite, mejorando la experiencia del usuario y aumentando la retención en un <span className="text-cyan-400 font-semibold">30%</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Desplegué la aplicación en AWS, utilizando S3 Buckets y Lambda, lo que redujo costos en un <span className="text-cyan-400 font-semibold">50%</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Automatización y mejora de procesos, logrando una reducción del tiempo de captura de clientes y servicios en un <span className="text-cyan-400 font-semibold">50%</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>Lideré un equipo de 3 desarrolladores, aplicando metodologías Scrum y Agile para optimizar la entrega de proyectos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <video
              className="w-full max-w-3xl mx-auto rounded-lg shadow-2xl border border-slate-700"
              controls
              poster="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
              >
              <source src="https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <p className="text-slate-400 text-sm mt-4">Desarrollador trabajando en soluciones innovadoras</p>
          </div>
        </div>
      </div>
    </section>
  );
}
