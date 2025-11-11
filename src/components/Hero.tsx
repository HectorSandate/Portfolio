import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-cyan-400 text-lg sm:text-xl font-semibold tracking-wide">Hola, soy</h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Héctor José <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Díaz Sandate</span>
              </h1>
              <h3 className="text-2xl sm:text-3xl text-slate-300 font-medium">Desarrollador Full-Stack</h3>
            </div>

            <p className="text-lg text-slate-400 max-w-2xl">
              Desarrollador Full-Stack con experiencia en diseño e implementación de microservicios escalables usando Node.js, React y AWS.
              Enfocado en la optimización del rendimiento, experiencia del usuario y liderazgo de equipos ágiles.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="tel:6182939146" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all hover:scale-105">
                <Phone size={20} />
                <span>6182939146</span>
              </a>
              <a href="mailto:hectorjosediazsandate@gmail.com" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-all hover:scale-105">
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <a href="https://github.com/HectorSandate" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/héctor-josé-díaz-sandate-5a51b5278" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl">
                <img
                  src="https://unirfp.unir.net/wp-content/uploads/sites/23/2023/07/desarrollador.jpg"
                  alt="Desarrollador Full-Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
