import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Card } from "@/src/components/ui/card";
import { siteContent } from "../constants/content";

export function FinalCTA() {
  const { finalCta } = siteContent;

  return (
    <section id="contato" className="min-h-screen flex items-center py-8 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/80">
      <div className="container mx-auto px-4 relative z-10">
        <Card className="max-w-3xl mx-auto p-8 md:p-10 text-center bg-background/95 backdrop-blur-sm border-4 border-primary/20 shadow-2xl">
          <div className="text-4xl mb-4">{finalCta.emoji}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {finalCta.title[0]}
            <br />
            {finalCta.title[1]}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
            {finalCta.subtitle}{" "}
            <span className="font-bold text-primary">{finalCta.highlight}</span> ou é{" "}
            <span className="font-bold text-secondary">{finalCta.freeLabel}</span>!
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {finalCta.badges.map((badge) => (
              <div
                key={badge.text}
                className={`px-4 py-2 rounded-full font-bold text-sm border-2 ${
                  badge.variant === "secondary"
                    ? "bg-secondary/20 border-secondary text-secondary"
                    : "bg-primary/20 border-primary text-primary"
                }`}
              >
                {badge.text}
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto mb-6">
            <p className="text-sm text-foreground/70 mb-3">
              {finalCta.newsletter.label}{" "}
              <span className="font-bold text-primary">{finalCta.newsletter.highlight}</span>
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={finalCta.newsletter.placeholder}
                className="flex-1 h-12 px-5 text-base rounded-full border-2 focus:border-primary"
              />
              <Button
                size="lg"
                className="h-12 px-6 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-lg flex items-center justify-center leading-none"
              >
                {finalCta.newsletter.button}
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl font-bold px-12 py-8 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 mb-4 flex items-center justify-center leading-none"
          >
            {finalCta.mainCta}
          </Button>

          <p className="text-sm text-foreground/60">{finalCta.paymentNote}</p>
        </Card>
      </div>
    </section>
  );
}
