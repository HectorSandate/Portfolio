import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">HJ<span className="text-cyan-400">DS</span></span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-slate-300 hover:text-cyan-400 transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition-colors">Sobre Mí</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-cyan-400 transition-colors">Experiencia</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-cyan-400 transition-colors">Habilidades</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-cyan-400 transition-colors">Proyectos</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors">Contacto</button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('hero')} className="text-slate-300 hover:text-cyan-400 transition-colors text-left">Inicio</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-cyan-400 transition-colors text-left">Sobre Mí</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-cyan-400 transition-colors text-left">Experiencia</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-cyan-400 transition-colors text-left">Habilidades</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-cyan-400 transition-colors text-left">Proyectos</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors text-left">Contacto</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
