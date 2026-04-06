"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { siteContent } from "../constants/content";
import { videoScrubbing, staggerDelays } from "../styles/animations";

export function Hero() {
  const { hero } = siteContent;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

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

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      if (!video.duration) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      currentTimeRef.current = lerp(
        currentTimeRef.current,
        targetTimeRef.current,
        videoScrubbing.lerpFactor
      );

      if (Math.abs(video.currentTime - currentTimeRef.current) > videoScrubbing.minDifference) {
        video.currentTime = currentTimeRef.current;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const windowHeight = window.innerHeight;
      const scrollableDistance = container.offsetHeight - windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, -containerTop / scrollableDistance));

      if (video.duration) {
        targetTimeRef.current = scrollProgress * video.duration;
      }
    };

    video.load();
    video.currentTime = 0;
    currentTimeRef.current = 0;
    targetTimeRef.current = 0;

    animationFrameRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "400vh" }}>
      <section
        id="hero"
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/animacaoPizza_processed.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-6 animate-fade-in text-base py-2 px-6 bg-white/20 backdrop-blur-md text-white border-white/30"
              style={{ animationDelay: staggerDelays.hero.badge }}
            >
              {hero.badge}
            </Badge>

            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {hero.title.line1.map((word, i) => (
                <span
                  key={`l1-${i}`}
                  className="inline-block animate-fade-in mr-3 md:mr-4 lg:mr-5"
                  style={{ animationDelay: staggerDelays.hero.title[i] }}
                >
                  {word}
                </span>
              ))}
              <br />
              {hero.title.line2.map((word, i) => (
                <span
                  key={`l2-${i}`}
                  className={`inline-block animate-fade-in mr-3 md:mr-4 lg:mr-5 ${word === "Amor" ? "text-primary" : ""}`}
                  style={{ animationDelay: staggerDelays.hero.title[i + 2] }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <p
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in leading-relaxed drop-shadow-lg"
              style={{ animationDelay: staggerDelays.hero.subtitle }}
            >
              {hero.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
              style={{ animationDelay: staggerDelays.hero.cta }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-12 py-8 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 flex items-center justify-center leading-none"
              >
                {hero.cta.primary}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("cardapio")}
                className="border-2 border-white bg-white/90 text-foreground hover:bg-white/70 text-xl font-semibold px-12 py-8 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center justify-center leading-none"
              >
                {hero.cta.secondary}
              </Button>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in"
              style={{ animationDelay: staggerDelays.hero.stats }}
            >
              {hero.stats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-4">
                  {index > 0 && <div className="h-12 w-px bg-white/30 hidden sm:block" />}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-[10rem] gap-1">
                    {"stars" in stat && stat.stars && (
                      <div className="flex items-center gap-0 text-2xl">
                        {[...Array(stat.stars)].map((_, i) => (
                          <span key={i} className="text-yellow-400 drop-shadow-lg">⭐</span>
                        ))}
                      </div>
                    )}
                    <p className={`font-bold ${stat.value === "30min" ? "text-3xl text-primary" : "text-lg text-white"} drop-shadow-lg leading-none`}>
                      {stat.value}{" "}
                      {"stars" in stat && <span className="text-sm text-white/80 font-normal">{stat.label}</span>}
                    </p>
                    {!("stars" in stat) && (
                      <p className="text-sm text-white/80 drop-shadow leading-none">{stat.label}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
