// Centralized animation configurations
// Following FSD Rule 8: marketing feature centralizes animation variants

export const timing = {
  fast: "150ms",
  medium: "300ms",
  slow: "500ms",
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const staggerDelays = {
  hero: {
    badge: "0ms",
    title: ["100ms", "200ms", "300ms", "350ms", "400ms"],
    subtitle: "500ms",
    cta: "600ms",
    stats: "700ms",
  },
  fadeIn: {
    short: 100,
    medium: 200,
    long: 300,
  },
} as const;

export const videoScrubbing = {
  lerpFactor: 0.08,
  minDifference: 0.01,
} as const;

export const hoverEffects = {
  scale: "hover:scale-105",
  scaleUp: "hover:scale-110",
  lift: "hover:-translate-y-1",
  glow: "hover:shadow-xl",
} as const;
