import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
          <p className="text-slate-400 mt-4">¿Interesado en trabajar juntos? ¡Contáctame!</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Mail className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:hectorjosediazsandate@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors break-all">
                    hectorjosediazsandate@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Teléfono</h3>
                  <a href="tel:6182939146" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    618 293 9146
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <MapPin className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Ubicación</h3>
                  <p className="text-slate-400">Durango, México</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-white font-semibold mb-4">Enlaces Profesionales</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/HectorSandate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-cyan-500/50 transition-all group"
                >
                  <Github className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-slate-400 text-sm">@HectorSandate</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/héctor-josé-díaz-sandate-5a51b5278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-600 hover:border-cyan-500/50 transition-all group"
                >
                  <Linkedin className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-slate-400 text-sm">Héctor José Díaz Sandate</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-lg border border-cyan-500/20">
              <h3 className="text-white font-semibold mb-3">Disponibilidad</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Actualmente disponible para proyectos freelance y oportunidades de colaboración.
                ¡No dudes en contactarme para discutir tu próximo proyecto!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Héctor José Díaz Sandate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}
