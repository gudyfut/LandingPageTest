"use client";

import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2 animate-fade-in cursor-pointer hover:opacity-80 transition-opacity justify-self-start"
          >
            <div className="text-4xl">🍕</div>
            <span className="text-2xl font-black tracking-tight">
              <span className="text-foreground">Gudy</span>
              <span className="text-primary">Pizza</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center justify-center space-x-8">
            <button
              onClick={() => scrollToSection('cardapio')}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          <div className="justify-self-end">
            <Button
              size="lg"
              onClick={() => scrollToSection('contato')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center leading-none"
            >
              Pedir Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
