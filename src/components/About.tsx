import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://msmk.university/wp-content/uploads/2023/02/desarrollador-programacion-empleo-ti.jpg"
                alt="Workspace"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy un desarrollador apasionado por la innovación tecnológica y el aprendizaje continuo.
              Con experiencia en el desarrollo de aplicaciones escalables y la implementación de soluciones eficientes,
              me especializo en crear productos que realmente impactan a los usuarios.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Code2 className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Desarrollo Full-Stack</h3>
                  <p className="text-slate-400 text-sm">Experiencia en arquitecturas de microservicios y aplicaciones modernas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Rocket className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Optimización y Rendimiento</h3>
                  <p className="text-slate-400 text-sm">Enfocado en mejorar la experiencia del usuario y reducir costos operativos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Users className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Liderazgo de Equipos</h3>
                  <p className="text-slate-400 text-sm">Experiencia aplicando metodologías ágiles y Scrum</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-white font-semibold mb-3">Educación</h3>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <p className="text-cyan-400 font-medium">Ingeniería en Desarrollo y Gestión de Software</p>
                <p className="text-slate-400 text-sm">Universidad Tecnológica de Durango (En curso)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
