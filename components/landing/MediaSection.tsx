import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function MediaSection() {
  const pizzas = [
    {
      name: "Margherita Clássica",
      image: "/pizzamenu/MargheritaPizzaNoBG.png",
      description: "Tomate, mussarela, manjericão fresco",
    },
    {
      name: "Pepperoni Premium",
      image: "/pizzamenu/PepperoniPizzaNoBG.png",
      description: "Pepperoni artesanal, queijo especial",
    },
    {
      name: "Quattro Formaggi",
      image: "/pizzamenu/CheesePizzaNoBG.png",
      description: "4 queijos nobres derretidos",
    },
    {
      name: "Vegetariana Gourmet",
      image: "/pizzamenu/VegetarianPizzaNoBG.png",
      description: "Legumes frescos grelhados",
    },
  ];

  return (
    <section id="cardapio" className="h-screen flex items-center py-8 bg-background scroll-mt-0">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Nossas Pizzas Artesanais
          </h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">
            Cada pizza é uma obra-prima. Massa fermentada por 48 horas, assada
            em forno a lenha a 450°C.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {pizzas.map((pizza, index) => (
            <Card
              key={index}
              className="group overflow-hidden !py-0 !gap-0 !bg-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-2 hover:border-primary/30 cursor-pointer"
            >
              <div className="aspect-[4/3] bg-[#FFFFFF] overflow-hidden flex items-center justify-center">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    width={300}
                    height={225}
                    className="w-[110%] h-[110%] object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                    loading="eager"
                  />
              </div>
              <div className="bg-[#FFFFFF] p-3 text-center">
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {pizza.name}
                </h3>
                <p className="text-foreground/60 text-sm">{pizza.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature showcase */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-2xl bg-[#FFFFFF]">
            <div className="text-4xl mb-2">🔥</div>
            <h3 className="text-lg font-bold mb-1">Forno a Lenha</h3>
            <p className="text-foreground/70 text-sm">
              Temperatura perfeita de 450°C
            </p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-[#FFFFFF]">
            <div className="text-4xl mb-2">⏰</div>
            <h3 className="text-lg font-bold mb-1">48h de Fermentação</h3>
            <p className="text-foreground/70 text-sm">
              Massa leve e digestiva
            </p>
          </div>
          <div className="text-center p-4 rounded-2xl bg-[#FFFFFF]">
            <div className="text-4xl mb-2">🌿</div>
            <h3 className="text-lg font-bold mb-1">Ingredientes Premium</h3>
            <p className="text-foreground/70 text-sm">
              Direto da Itália
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
