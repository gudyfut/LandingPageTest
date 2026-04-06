import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente há 2 anos",
      avatar: "👩",
      rating: 5,
      text: "A melhor pizza da região! A massa é incrivelmente leve e saborosa. Desde que descobri a GudyPizza, não peço em outro lugar.",
    },
    {
      name: "João Santos",
      role: "Cliente VIP",
      avatar: "👨",
      rating: 5,
      text: "Ingredientes de altíssima qualidade e entrega super rápida. A pepperoni é simplesmente viciante! Recomendo de olhos fechados.",
    },
    {
      name: "Ana Costa",
      role: "Família numerosa",
      avatar: "👩‍🦰",
      rating: 5,
      text: "Pedimos toda sexta-feira para a família. As crianças amam! O atendimento é impecável e sempre chegam quentinhas.",
    },
    {
      name: "Carlos Mendes",
      role: "Chef gastronômico",
      avatar: "🧔",
      rating: 5,
      text: "Como profissional da área, reconheço qualidade quando vejo. A GudyPizza faz pizza de verdade, com técnica e amor.",
    },
    {
      name: "Juliana Oliveira",
      role: "Vegetariana feliz",
      avatar: "👱‍♀️",
      rating: 5,
      text: "As opções vegetarianas são maravilhosas! Ingredientes frescos, sabor equilibrado e muita criatividade. Parabéns!",
    },
    {
      name: "Roberto Alves",
      role: "Cliente satisfeito",
      avatar: "👴",
      rating: 5,
      text: "Me lembra as pizzas que comi na Itália. Autêntica, saborosa e feita com carinho. Vale cada centavo!",
    },
  ];

  return (
    <section id="avaliacoes" className="h-screen flex items-center py-12 bg-background scroll-mt-0">
      <div className="container mx-auto px-4 w-full max-h-screen overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Mais de 5.000 clientes satisfeitos e avaliações 5 estrelas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 relative overflow-hidden group"
            >
              {/* Decorative quote mark */}
              <div className="absolute top-4 right-4 text-7xl text-primary/10 group-hover:text-primary/20 transition-colors">
                "
              </div>

              {/* Rating */}
              <div className="flex gap-0 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">
                    ⭐
                  </span>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground/80 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-2xl border-2 border-primary/20">
                  {testimonial.avatar}
                </Avatar>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">5.000+</p>
            <p className="text-sm text-foreground/70">Clientes Felizes</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">10.000+</p>
            <p className="text-sm text-foreground/70">Pizzas Entregues</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-foreground/70">Avaliação Média</p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <p className="text-4xl font-bold text-primary">30min</p>
            <p className="text-sm text-foreground/70">Tempo Médio</p>
          </div>
        </div>
      </div>
    </section>
  );
}
