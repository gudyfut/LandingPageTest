import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl">🍕</span>
              <span className="text-2xl font-black tracking-tight">
                <span className="text-foreground">Gudy</span>
                <span className="text-primary">Pizza</span>
              </span>
            </div>
            <p className="text-foreground/70 mb-4">
              Pizzas artesanais feitas com amor, receitas tradicionais italianas e ingredientes premium.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Menu rápido */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#cardapio"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Cardápio
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Avaliações
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Atendimento
            </h3>
            <ul className="space-y-3 text-foreground/70">
              <li>📞 (11) 99999-9999</li>
              <li>📧 contato@gudypizza.com</li>
              <li>🕐 Seg-Dom: 18h - 23h</li>
              <li>
                <a
                  href="#"
                  className="text-primary hover:underline"
                >
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Newsletter
            </h3>
            <p className="text-foreground/70 mb-4 text-sm">
              Receba promoções exclusivas e novidades direto no seu email!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>© 2026 GudyPizza. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
