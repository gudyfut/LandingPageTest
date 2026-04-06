import { Separator } from "@/src/components/ui/separator";
import { siteContent } from "../constants/content";

export function Footer() {
  const { footer, brand } = siteContent;

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
            <p className="text-foreground/70 mb-4">{footer.description}</p>
            <div className="flex gap-4">
              {footer.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {footer.menu.title}
            </h3>
            <ul className="space-y-3">
              {footer.menu.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {footer.contact.title}
            </h3>
            <ul className="space-y-3 text-foreground/70">
              <li>📞 {footer.contact.phone}</li>
              <li>📧 {footer.contact.email}</li>
              <li>🕐 {footer.contact.hours}</li>
              <li>
                <a href="#" className="text-primary hover:underline">
                  {footer.contact.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              {footer.newsletter.title}
            </h3>
            <p className="text-foreground/70 mb-4 text-sm">{footer.newsletter.subtitle}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>{footer.legal.copyright}</p>
          <div className="flex gap-6">
            {footer.legal.links.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
