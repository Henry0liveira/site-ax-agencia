import React, { useState, useEffect } from 'react';

/**
 * App Component - AX Agência
 * Este componente centraliza toda a lógica e estilização (Tailwind + Custom CSS)
 * em um único arquivo para evitar erros de dependência de arquivos externos.
 */
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lógica para detectar scroll e mudar o header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 antialiased bg-[#f4f6f8] scroll-smooth min-h-screen">
      {/* Estilos Globais e Específicos injetados diretamente */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@300;400;600;700&display=swap');
        
        .font-display { font-family: 'Oswald', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        
        .bg-watermark {
            background-color: #f4f6f8;
            background-image: url("data:image/svg+xml,%3Csvg width='250' height='250' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50%25' y='50%25' font-size='80' fill='%23cbd5e1' font-family='Oswald, sans-serif' font-weight='bold' text-anchor='middle' alignment-baseline='middle' opacity='0.15' transform='rotate(-25 125 125)'%3EAX%3C/text%3E%3C/svg%3E");
            background-repeat: repeat;
        }

        .transition-soft {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Classes utilitárias de cores personalizadas */
        .text-ax-dark { color: #011c38; }
        .bg-ax-dark { background-color: #011c38; }
        .border-ax-dark { border-color: #011c38; }
        
        .text-ax-mid { color: #5c8eb3; }
        .bg-ax-mid { background-color: #5c8eb3; }
        .border-ax-mid { border-color: #5c8eb3; }
        
        .text-ax-light { color: #00b4d8; }
        .bg-ax-light { background-color: #00b4d8; }
        
        .bg-ax-bg { background-color: #f4f6f8; }
      `}</style>

      {/* Navegação (Header) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-0 border-gray-100' : 'bg-transparent py-2 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <svg className="h-10 w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="gradTop" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00b4d8" />
                    <stop offset="100%" stopColor="#0077b6" />
                  </linearGradient>
                  <linearGradient id="gradBase" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#011c38" />
                    <stop offset="100%" stopColor="#023e8a" />
                  </linearGradient>
                </defs>
                <path d="M50 15 L20 70 C20 70, 30 85, 50 75 C70 65, 80 70, 80 70 L50 15 Z" fill="url(#gradTop)" />
                <path d="M15 75 C30 65, 70 85, 85 75 C85 75, 75 90, 50 90 C25 90, 15 75, 15 75 Z" fill="url(#gradBase)" />
              </svg>
              <span className={`ml-2 font-display font-bold text-2xl tracking-wide uppercase ${isScrolled ? 'text-ax-dark' : 'text-ax-dark'}`}>AX Agência</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              <a href="#inicio" className="text-gray-600 hover:text-ax-light font-semibold transition-soft uppercase text-[11px] tracking-widest">Início</a>
              <a href="#sobre" className="text-gray-600 hover:text-ax-light font-semibold transition-soft uppercase text-[11px] tracking-widest">Quem Somos</a>
              <a href="#portfolio" className="text-gray-600 hover:text-ax-light font-semibold transition-soft uppercase text-[11px] tracking-widest">Portfólio</a>
              <a href="#depoimentos" className="text-gray-600 hover:text-ax-light font-semibold transition-soft uppercase text-[11px] tracking-widest">Depoimentos</a>
              <a href="#contato" className="bg-ax-dark hover:bg-ax-light text-white px-6 py-2.5 rounded-full font-bold transition-soft shadow-lg hover:shadow-[0_0_15px_rgba(0,180,216,0.5)] uppercase text-[11px] tracking-widest">Contato</a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMobileMenu} className="text-ax-dark focus:outline-none">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-6 space-y-4 shadow-xl absolute w-full animate-in slide-in-from-top duration-300">
            <a href="#inicio" onClick={closeMobileMenu} className="block text-sm font-bold text-gray-700 hover:text-ax-light uppercase tracking-widest">Início</a>
            <a href="#sobre" onClick={closeMobileMenu} className="block text-sm font-bold text-gray-700 hover:text-ax-light uppercase tracking-widest">Quem Somos</a>
            <a href="#portfolio" onClick={closeMobileMenu} className="block text-sm font-bold text-gray-700 hover:text-ax-light uppercase tracking-widest">Portfólio</a>
            <a href="#depoimentos" onClick={closeMobileMenu} className="block text-sm font-bold text-gray-700 hover:text-ax-light uppercase tracking-widest">Depoimentos</a>
            <a href="#contato" onClick={closeMobileMenu} className="block text-sm font-bold text-ax-light uppercase tracking-widest">Contato</a>
          </div>
        )}
      </nav>

      {/* 1. HOMEPAGE (Página Inicial) */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-watermark pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="relative">
            <span className="inline-block px-4 py-1.5 bg-[rgba(0,180,216,0.1)] text-ax-light rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-6">Marketing de Performance</span>

            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[9rem] text-ax-dark tracking-tighter uppercase mb-6 leading-none">
              <span className="text-ax-light">AX</span> AGÊNCIA
            </h1>

            <div className="mt-8 mb-12 max-w-3xl mx-auto">
              <p className="font-display text-2xl md:text-4xl text-ax-dark font-bold uppercase leading-tight italic">
                Cuide do seu negócio,<br />
                <span className="text-ax-light not-italic">deixa que do digital a gente cuida pra você.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
              <a href="#sobre" className="bg-ax-dark hover:bg-ax-light text-white font-bold py-5 px-12 rounded-full text-lg transition-soft shadow-xl transform hover:-translate-y-1 uppercase tracking-widest">
                Conheça a AX
              </a>
              <a href="#contato" className="bg-white/60 backdrop-blur-sm border-2 border-ax-mid/30 text-ax-dark hover:border-ax-mid font-bold py-5 px-12 rounded-full text-lg transition-soft uppercase tracking-widest">
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOBRE / QUEM SOMOS */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-ax-light font-bold tracking-[0.4em] uppercase text-xs mb-3">Quem Somos</h2>
              <h3 className="font-display text-4xl md:text-5xl text-ax-dark font-bold uppercase tracking-tight mb-6">A sua parceira de <span className="text-ax-mid">Crescimento</span></h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A <strong className="text-ax-dark">AX Agência</strong> nasceu com um propósito claro: acabar com o amadorismo no digital. Nós entendemos que curtidas não pagam contas. O que importa para o seu negócio é caixa, escala e um posicionamento de marca que te diferencie da concorrência.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Unimos design de ponta com engenharia de tráfego pago para construir ecossistemas de vendas. Não somos apenas uma agência, somos uma extensão do seu time comercial.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-ax-light rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Equipe AX Agência" className="rounded-3xl relative z-10 shadow-2xl object-cover h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-display text-3xl text-ax-dark font-bold uppercase tracking-tight">Nossos Pilares</h3>
            <div className="w-16 h-1.5 bg-ax-light mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f4f6f8]/50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-soft border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 bg-ax-dark rounded-xl flex items-center justify-center mb-6 text-ax-light">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <h4 className="text-xl font-display font-bold text-ax-dark mb-3 uppercase">Tráfego & Performance</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Campanhas no Google e Meta Ads focadas estritamente no seu ROI e custo por aquisição.</p>
            </div>
            <div className="bg-[#f4f6f8]/50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-soft border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 bg-ax-dark rounded-xl flex items-center justify-center mb-6 text-ax-light">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
              </div>
              <h4 className="text-xl font-display font-bold text-ax-dark mb-3 uppercase">Identidade de Marca</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Designs modernos e impactantes que transmitem autoridade e confiança ao seu público.</p>
            </div>
            <div className="bg-[#f4f6f8]/50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-soft border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 bg-ax-dark rounded-xl flex items-center justify-center mb-6 text-ax-light">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-xl font-display font-bold text-ax-dark mb-3 uppercase">Landing Pages</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Desenvolvimento de páginas de alta velocidade focadas unicamente em converter visitantes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFÓLIO */}
      <section id="portfolio" className="py-24 bg-ax-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-ax-light font-bold tracking-[0.4em] uppercase text-xs mb-3">Nosso Trabalho</h2>
              <h3 className="font-display text-4xl md:text-5xl text-white font-bold uppercase tracking-tight">Portfólio <span className="text-ax-mid italic">AX</span></h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative aspect-square overflow-hidden rounded-3xl bg-gray-900 shadow-xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Projeto Performance" className="object-cover w-full h-full opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-ax-light text-ax-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Tráfego Pago</span>
                <h4 className="text-white font-display text-2xl uppercase tracking-tighter">E-commerce XYZ</h4>
                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">+150% em vendas no trimestre.</p>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-3xl bg-gray-900 shadow-xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" alt="Projeto Design" className="object-cover w-full h-full opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-ax-light text-ax-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Branding</span>
                <h4 className="text-white font-display text-2xl uppercase tracking-tighter">Clínica Vitta</h4>
                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Reposicionamento de marca premium.</p>
              </div>
            </div>
            <div className="group relative aspect-square overflow-hidden rounded-3xl bg-gray-900 shadow-xl cursor-pointer">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Projeto Web" className="object-cover w-full h-full opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-ax-light text-ax-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Web Design</span>
                <h4 className="text-white font-display text-2xl uppercase tracking-tighter">App Nexus</h4>
                <p className="text-gray-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">Landing page com 12% de conversão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 bg-[#eef2f6] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-ax-light font-bold tracking-[0.4em] uppercase text-xs mb-3">Prova Social</h2>
            <h3 className="font-display text-4xl md:text-5xl text-ax-dark font-bold uppercase tracking-tight">O que dizem os <span className="text-ax-mid">Clientes</span></h3>
            <div className="w-16 h-1.5 bg-ax-light mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-6 right-8 text-ax-light/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <div className="flex items-center gap-1 mb-4 text-ax-light">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative z-10">"A AX mudou completamente a forma como nossa marca se posiciona na internet. O site novo ficou incrível e as campanhas de tráfego dobraram nossos contatos em 2 meses."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-ax-dark text-sm">Carlos Mendes</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">CEO, TechStore</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-6 right-8 text-ax-light/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <div className="flex items-center gap-1 mb-4 text-ax-light">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative z-10">"Profissionalismo absurdo. Eles não entregam só cliques, entregam estratégia. A landing page que fizeram converte 3x mais que a nossa antiga."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-ax-dark text-sm">Mariana Costa</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Diretora, Vitta Saúde</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="absolute top-6 right-8 text-ax-light/20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <div className="flex items-center gap-1 mb-4 text-ax-light">
                 {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 relative z-10">"Trabalhar com a AX é ter a tranquilidade de que o digital do nosso negócio está nas melhores mãos. Design impecável e atendimento ágil."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="font-bold text-ax-dark text-sm">Roberto Alves</h5>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Sócio, Studio Alpha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTATO / BRIEFING */}
      <section id="contato" className="py-24 bg-ax-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="bg-ax-dark p-12 lg:p-16 lg:w-2/5 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-5xl lg:text-6xl font-bold uppercase mb-6 leading-[0.95] tracking-tighter">VAMOS <span className="text-ax-light italic">ESCALAR</span> SEU RESULTADO?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Não somos apenas uma agência, somos o braço direito do seu comercial. Responda ao briefing e descubra como a <strong>AX Agência</strong> vai impulsionar seu negócio.</p>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ax-light">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-ax-mid font-bold">E-mail</p>
                    <p className="text-lg font-bold">contato@axagencia.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-ax-light">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-ax-mid font-bold">WhatsApp</p>
                    <p className="text-lg font-bold">+55 (11) 99999-9999</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-16 lg:w-3/5">
              <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block tracking-[0.2em] ml-1">Nome Completo</label>
                    <input type="text" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-ax-light focus:bg-white focus:outline-none transition-soft shadow-sm" placeholder="Ex: João Silva" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block tracking-[0.2em] ml-1">Sua Empresa</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-ax-light focus:bg-white focus:outline-none transition-soft shadow-sm" placeholder="Nome do Negócio" />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block tracking-[0.2em] ml-1">Serviço de Interesse</label>
                  <select required defaultValue="" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-ax-light focus:bg-white focus:outline-none transition-soft shadow-sm text-gray-500 appearance-none cursor-pointer">
                    <option value="" disabled>O que você busca hoje?</option>
                    <option value="vendas">Aumento de Vendas (Tráfego Pago)</option>
                    <option value="id-visual">Nova Identidade Visual AX</option>
                    <option value="landing-page">Landing Page de Performance</option>
                    <option value="gestao">Gestão Completa de Marketing</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="text-[10px] uppercase font-bold text-gray-400 mb-2 block tracking-[0.2em] ml-1">Detalhes do Projeto</label>
                  <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:ring-2 focus:ring-ax-light focus:bg-white focus:outline-none transition-soft resize-none shadow-sm" placeholder="Conte pra gente o seu maior desafio atual..."></textarea>
                </div>

                <button type="submit" className="w-full bg-ax-dark hover:bg-ax-light text-white font-bold py-5 px-10 rounded-2xl text-lg transition-soft shadow-xl uppercase tracking-[0.3em] group flex items-center justify-center gap-4 mt-4">
                  Enviar para AX
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ax-dark py-16 text-center relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center opacity-40">
              <svg className="h-8 w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 L20 70 C20 70, 30 85, 50 75 C70 65, 80 70, 80 70 L50 15 Z" fill="#5c8eb3" />
                <path d="M15 75 C30 65, 70 85, 85 75 C85 75, 75 90, 50 90 C25 90, 15 75, 15 75 Z" fill="#ffffff" />
              </svg>
              <span className="ml-3 font-display font-bold text-2xl text-white tracking-widest uppercase">AX Agência</span>
            </div>

            <div className="w-24 h-px bg-white/10"></div>

            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <a href="#inicio" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-soft">Início</a>
              <a href="#sobre" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-soft">Sobre</a>
              <a href="#portfolio" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-soft">Portfólio</a>
              <a href="#depoimentos" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-soft">Depoimentos</a>
              <a href="#contato" className="text-gray-500 hover:text-white text-xs uppercase tracking-widest transition-soft">Contato</a>
            </nav>

            <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em] mt-4">© 2026 AX Agência • Performance & Estratégia Digital</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;