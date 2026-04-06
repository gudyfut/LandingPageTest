import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function FinalCTA() {
  return (
    <section id="contato" className="h-screen flex items-center py-8 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80 scroll-mt-0">
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-3xl mx-auto p-8 md:p-10 text-center bg-background/95 backdrop-blur-sm border-4 border-primary/20 shadow-2xl">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Está com Fome?
            <br />
            Peça Agora!
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
            Sua pizza artesanal quentinha em até <span className="font-bold text-primary">30 minutos</span> ou é <span className="font-bold text-secondary">GRÁTIS</span>!
          </p>

          {/* Urgency badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="px-4 py-2 rounded-full bg-secondary/20 border-2 border-secondary text-secondary font-bold text-sm">
              ✨ Primeira compra: 20% OFF
            </div>
            <div className="px-4 py-2 rounded-full bg-primary/20 border-2 border-primary text-primary font-bold text-sm">
              🔥 Frete grátis acima de R$50
            </div>
          </div>

          {/* Newsletter signup */}
          <div className="max-w-md mx-auto mb-6">
            <p className="text-sm text-foreground/70 mb-3">
              Cadastre seu email e ganhe <span className="font-bold text-primary">cupom de desconto</span>
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 h-12 px-5 text-base rounded-full border-2 focus:border-primary"
              />
              <Button
                size="lg"
                className="h-12 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-lg flex items-center justify-center leading-none"
              >
                Ganhar Cupom
              </Button>
            </div>
          </div>

          {/* Main CTA */}
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-12 py-8 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 mb-4 flex items-center justify-center leading-none"
          >
            🛵 Fazer Pedido Agora →
          </Button>

          <p className="text-sm text-foreground/60">
            💳 Aceitamos PIX, cartões e vale-refeição
          </p>
        </Card>
      </div>
    </section>
  );
}
