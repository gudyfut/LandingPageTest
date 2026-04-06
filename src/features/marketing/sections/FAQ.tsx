import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { siteContent } from "../constants/content";

export function FAQ() {
  const { faq, brand } = siteContent;
  const halfLength = Math.ceil(faq.items.length / 2);

  return (
    <section id="faq" className="min-h-screen flex items-center py-12 bg-gradient-to-br from-background to-[#faf7f2]">
      <div className="container mx-auto px-4 w-full max-h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">{faq.title}</h2>
            <p className="text-lg text-foreground/70">
              {faq.subtitle}{" "}
              <span className="text-foreground font-bold">Gudy</span>
              <span className="text-primary font-bold">Pizza</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.slice(0, halfLength).map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-2xl px-6 hover:border-primary/30 transition-colors bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.slice(halfLength).map((item, index) => (
                <AccordionItem
                  key={index + halfLength}
                  value={`item-${index + halfLength}`}
                  className="border-2 border-border rounded-2xl px-6 hover:border-primary/30 transition-colors bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-primary/5 border-2 border-primary/20">
            <p className="text-xl mb-4">{faq.cta.title}</p>
            <p className="text-foreground/70 mb-6">{faq.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={faq.cta.whatsapp}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-colors"
              >
                💬 WhatsApp
              </a>
              <a
                href={`tel:${faq.cta.phone}`}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 {faq.cta.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
