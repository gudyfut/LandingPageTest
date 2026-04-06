import { Card } from "@/src/components/ui/card";
import Image from "next/image";
import { siteContent } from "../constants/content";

export function MenuSection() {
  const { menu } = siteContent;

  return (
    <section id="cardapio" className="min-h-screen flex items-center py-8 bg-background">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-2">{menu.title}</h2>
          <p className="text-base text-foreground/70 max-w-2xl mx-auto">{menu.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {menu.pizzas.map((pizza, index) => (
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

        <div className="grid grid-cols-3 gap-4">
          {menu.features.map((feature) => (
            <div key={feature.title} className="text-center p-4 rounded-2xl bg-[#FFFFFF]">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-foreground/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
