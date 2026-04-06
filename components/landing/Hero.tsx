"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Smooth interpolation function (lerp)
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Animation loop for smooth video scrubbing
    const animate = () => {
      if (!video.duration) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      // Smoothly interpolate towards target time
      // Lower factor = smoother/slower transition (0.08 gives nice smooth feel)
      currentTimeRef.current = lerp(
        currentTimeRef.current,
        targetTimeRef.current,
        0.08
      );

      // Only update video if there's a meaningful difference
      if (Math.abs(video.currentTime - currentTimeRef.current) > 0.01) {
        video.currentTime = currentTimeRef.current;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const windowHeight = window.innerHeight;

      // Scrollable distance = container height minus one viewport
      const scrollableDistance = container.offsetHeight - windowHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, -containerTop / scrollableDistance)
      );

      if (video.duration) {
        // Set target time - the animation loop will smoothly interpolate to it
        targetTimeRef.current = scrollProgress * video.duration;
      }
    };

    // Initialize video
    video.load();
    video.currentTime = 0;
    currentTimeRef.current = 0;
    targetTimeRef.current = 0;

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        // Fixed height: 1x for the sticky view + 3x for scroll animation
        height: "400vh",
      }}
    >
      {/* Sticky container that pins the hero until we scroll past */}
      <section
        id="hero"
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/animacaoPizza_processed.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <Badge
              variant="secondary"
              className="mb-6 animate-fade-in text-base py-2 px-6 bg-white/20 backdrop-blur-md text-white border-white/30"
              style={{ animationDelay: "0ms" }}
            >
              Forno a Lenha Artesanal
            </Badge>

            {/* Title with staggered animation */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span
                className="inline-block animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                Pizzas
              </span>{" "}
              <span
                className="inline-block animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                Artesanais
              </span>
              <br />
              <span
                className="inline-block animate-fade-in"
                style={{ animationDelay: "300ms" }}
              >
                Feitas
              </span>{" "}
              <span
                className="inline-block animate-fade-in"
                style={{ animationDelay: "350ms" }}
              >
                com
              </span>{" "}
              <span
                className="inline-block animate-fade-in text-primary"
                style={{ animationDelay: "400ms" }}
              >
                Amor
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed drop-shadow-lg"
              style={{ animationDelay: "500ms" }}
            >
              Receitas tradicionais italianas, massa fermentada por 48 horas e
              ingredientes premium. Delivery rápido ou retire na loja.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
              style={{ animationDelay: "600ms" }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-12 py-8 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 flex items-center justify-center leading-none"
              >
                Pedir Delivery →
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('cardapio')}
                className="border-2 border-white bg-white/90 text-foreground hover:bg-white/70 text-xl font-semibold px-12 py-8 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center leading-none"
              >
                Ver Cardápio
              </Button>
            </div>

            {/* Social Proof */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in"
              style={{ animationDelay: "700ms" }}
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[10rem] gap-1">
                <p className="font-bold text-lg text-white drop-shadow-lg leading-none">
                  +5.000 clientes
                </p>
                <p className="text-sm text-white/80 drop-shadow leading-none">felizes</p>
              </div>

              <div className="h-12 w-px bg-white/30 hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[10rem] gap-1">
                <div className="flex items-center gap-0 text-2xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 drop-shadow-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="font-bold text-lg text-white drop-shadow-lg leading-none">
                  4.9/5.0{" "}
                  <span className="text-sm text-white/80 font-normal">média de avaliações</span>
                </p>
              </div>

              <div className="h-12 w-px bg-white/30 hidden sm:block" />

              <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[10rem] gap-1">
                <p className="font-bold text-3xl text-primary drop-shadow-lg leading-none">
                  30min
                </p>
                <p className="text-sm text-white/80 drop-shadow leading-none">
                  tempo de entrega
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
