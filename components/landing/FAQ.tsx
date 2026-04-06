import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Qual é o tempo de entrega?",
      answer:
        "Nosso tempo médio de entrega é de 30 minutos. Se sua pizza chegar com mais de 45 minutos, é grátis! Você pode acompanhar em tempo real pelo nosso app.",
    },
    {
      question: "Vocês aceitam pedidos personalizados?",
      answer:
        "Sim! Você pode personalizar sua pizza escolhendo a massa, o molho e até 5 ingredientes adicionais. Temos opções veganas, vegetarianas e sem glúten disponíveis.",
    },
    {
      question: "Como funciona o programa de fidelidade?",
      answer:
        "A cada compra, você acumula pontos. 10 pizzas = 1 grátis! Além disso, oferecemos descontos exclusivos para clientes fiéis e promoções especiais nas quartas-feiras.",
    },
    {
      question: "As pizzas são realmente feitas em forno a lenha?",
      answer:
        "Sim! Temos um forno napolitano tradicional que atinge 450°C. A lenha especial proporciona aquele sabor defumado característico e uma crosta perfeita.",
    },
    {
      question: "Posso retirar no local?",
      answer:
        "Claro! Oferecemos desconto de 15% para retirada no local. Você pode fazer seu pedido online ou pelo telefone e buscar quando estiver pronto (normalmente 15-20 minutos).",
    },
    {
      question: "Vocês entregam na minha região?",
      answer:
        "Entregamos em toda a cidade e regiões metropolitanas. Digite seu CEP no site ou app para verificar se atendemos sua área. Estamos sempre expandindo!",
    },
    {
      question: "Qual é a política de devolução?",
      answer:
        "Sua satisfação é nossa prioridade. Se não gostar da pizza por qualquer motivo, refazemos sem custo ou devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos cartões de crédito e débito, PIX, dinheiro e vale-refeição. No app, você pode salvar seus cartões para checkout mais rápido.",
    },
    {
      question: "As pizzas vêm bem embaladas?",
      answer:
        "Sim! Usamos caixas especiais com ventilação que mantêm a pizza quentinha e crocante. Nada de pizza encharcada ou fria!",
    },
    {
      question: "Posso fazer pedidos para eventos?",
      answer:
        "Perfeitamente! Fazemos catering para eventos, festas e corporativo. Entre em contato com 48h de antecedência e fazemos um orçamento personalizado com descontos especiais.",
    },
  ];

  return (
    <section id="faq" className="h-screen flex items-center py-12 bg-gradient-to-br from-background to-[#faf7f2] scroll-mt-0">
      <div className="container mx-auto px-4 w-full max-h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-foreground/70">
              Tudo o que você precisa saber sobre a{" "}
              <span className="text-foreground font-bold">Gudy</span>
              <span className="text-primary font-bold">Pizza</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-2 border-border rounded-2xl px-6 hover:border-primary/30 transition-colors bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem
                  key={index + Math.ceil(faqs.length / 2)}
                  value={`item-${index + Math.ceil(faqs.length / 2)}`}
                  className="border-2 border-border rounded-2xl px-6 hover:border-primary/30 transition-colors bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-bold hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-primary/5 border-2 border-primary/20">
            <p className="text-xl mb-4">
              Não encontrou sua resposta?
            </p>
            <p className="text-foreground/70 mb-6">
              Nossa equipe está pronta para ajudar! Entre em contato pelo
              WhatsApp ou telefone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511999999999"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-colors"
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+5511999999999"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
