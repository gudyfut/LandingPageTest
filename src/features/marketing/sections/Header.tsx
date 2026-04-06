"use client";

import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { siteContent } from "../constants/content";

export function Header() {
  const { navigation, brand } = siteContent;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 60; // Compensação para o header fixo
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 animate-fade-in cursor-pointer hover:opacity-80 transition-opacity justify-self-start"
          >
            <Image
              src="/icon.svg"
              alt={`${brand.name} Logo`}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-black tracking-tight">
              <span className="text-foreground">Gudy</span>
              <span className="text-primary">Pizza</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navigation.items.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="justify-self-end">
            <Button
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center leading-none"
            >
              {navigation.cta}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
