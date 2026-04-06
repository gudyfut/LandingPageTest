import { Card } from "@/src/components/ui/card";
import { Avatar } from "@/src/components/ui/avatar";
import { siteContent } from "../constants/content";

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section id="avaliacoes" className="min-h-screen flex items-center py-12 bg-background">
      <div className="container mx-auto px-4 w-full max-h-screen overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{testimonials.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-7xl text-primary/10 group-hover:text-primary/20 transition-colors">
                "
              </div>

              <div className="flex gap-0 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">⭐</span>
                ))}
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-2xl border-2 border-primary/20">
                  {testimonial.avatar}
                </Avatar>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
          {testimonials.stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              {index > 0 && <div className="h-12 w-px bg-border" />}
              <div className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
