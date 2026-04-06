// All landing page content centralized for easy editing
// Following FSD Rule 8: marketing feature centralizes strings

export const siteContent = {
  brand: {
    name: "GudyPizza",
    tagline: "Forno a Lenha Artesanal",
    description: "Pizzas artesanais feitas com amor, receitas tradicionais italianas e ingredientes premium.",
  },

  hero: {
    badge: "Forno a Lenha Artesanal",
    title: {
      line1: ["Pizzas", "Artesanais"],
      line2: ["Feitas", "com", "Amor"],
    },
    subtitle: "Receitas tradicionais italianas, massa fermentada por 48 horas e ingredientes premium. Delivery rápido ou retire na loja.",
    cta: {
      primary: "Pedir Delivery →",
      secondary: "Ver Cardápio",
    },
    stats: [
      { value: "+5.000 clientes", label: "felizes" },
      { value: "4.9/5.0", label: "média de avaliações", stars: 5 },
      { value: "30min", label: "tempo de entrega" },
    ],
  },

  menu: {
    title: "Nossas Pizzas Artesanais",
    subtitle: "Cada pizza é uma obra-prima. Massa fermentada por 48 horas, assada em forno a lenha a 450°C.",
    pizzas: [
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
    ],
    features: [
      { icon: "🔥", title: "Forno a Lenha", description: "Temperatura perfeita de 450°C" },
      { icon: "⏰", title: "48h de Fermentação", description: "Massa leve e digestiva" },
      { icon: "🌿", title: "Ingredientes Premium", description: "Direto da Itália" },
    ],
  },

  benefits: {
    title: "Por Que Escolher a GudyPizza?",
    subtitle: "Não é só pizza, é uma experiência gastronômica italiana autêntica",
    items: [
      {
        title: "Receita Autêntica",
        description: "Fórmula tradicional italiana passada por gerações. Massa feita diariamente com fermentação natural de 48 horas.",
      },
      {
        title: "Entrega Expressa",
        description: "Sua pizza quentinha em até 30 minutos ou grátis! Rastreamento em tempo real pelo app.",
      },
      {
        title: "Pizzaiolos Certificados",
        description: "Equipe treinada em Nápoles, Itália. Cada pizza é feita com técnica e paixão.",
      },
      {
        title: "Ingredientes Orgânicos",
        description: "Tomates, manjericão e vegetais de produtores locais. Sem agrotóxicos, 100% natural.",
      },
      {
        title: "Garantia de Qualidade",
        description: "Não gostou? Refazemos grátis ou devolvemos seu dinheiro. Satisfação garantida.",
      },
      {
        title: "Programa de Fidelidade",
        description: "A cada 10 pizzas, ganhe 1 grátis! Acumule pontos e troque por descontos exclusivos.",
      },
    ],
  },

  testimonials: {
    title: "O Que Nossos Clientes Dizem",
    subtitle: "Mais de 5.000 clientes satisfeitos e avaliações 5 estrelas",
    items: [
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
    ],
    stats: [
      { value: "5.000+", label: "Clientes Felizes" },
      { value: "10.000+", label: "Pizzas Entregues" },
      { value: "4.9/5", label: "Avaliação Média" },
      { value: "30min", label: "Tempo Médio" },
    ],
  },

  faq: {
    title: "Perguntas Frequentes",
    subtitle: "Tudo o que você precisa saber sobre a",
    items: [
      {
        question: "Qual é o tempo de entrega?",
        answer: "Nosso tempo médio de entrega é de 30 minutos. Se sua pizza chegar com mais de 45 minutos, é grátis! Você pode acompanhar em tempo real pelo nosso app.",
      },
      {
        question: "Vocês aceitam pedidos personalizados?",
        answer: "Sim! Você pode personalizar sua pizza escolhendo a massa, o molho e até 5 ingredientes adicionais. Temos opções veganas, vegetarianas e sem glúten disponíveis.",
      },
      {
        question: "Como funciona o programa de fidelidade?",
        answer: "A cada compra, você acumula pontos. 10 pizzas = 1 grátis! Além disso, oferecemos descontos exclusivos para clientes fiéis e promoções especiais nas quartas-feiras.",
      },
      {
        question: "As pizzas são realmente feitas em forno a lenha?",
        answer: "Sim! Temos um forno napolitano tradicional que atinge 450°C. A lenha especial proporciona aquele sabor defumado característico e uma crosta perfeita.",
      },
      {
        question: "Posso retirar no local?",
        answer: "Claro! Oferecemos desconto de 15% para retirada no local. Você pode fazer seu pedido online ou pelo telefone e buscar quando estiver pronto (normalmente 15-20 minutos).",
      },
      {
        question: "Vocês entregam na minha região?",
        answer: "Entregamos em toda a cidade e regiões metropolitanas. Digite seu CEP no site ou app para verificar se atendemos sua área. Estamos sempre expandindo!",
      },
      {
        question: "Qual é a política de devolução?",
        answer: "Sua satisfação é nossa prioridade. Se não gostar da pizza por qualquer motivo, refazemos sem custo ou devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
      },
      {
        question: "Quais formas de pagamento vocês aceitam?",
        answer: "Aceitamos cartões de crédito e débito, PIX, dinheiro e vale-refeição. No app, você pode salvar seus cartões para checkout mais rápido.",
      },
      {
        question: "As pizzas vêm bem embaladas?",
        answer: "Sim! Usamos caixas especiais com ventilação que mantêm a pizza quentinha e crocante. Nada de pizza encharcada ou fria!",
      },
      {
        question: "Posso fazer pedidos para eventos?",
        answer: "Perfeitamente! Fazemos catering para eventos, festas e corporativo. Entre em contato com 48h de antecedência e fazemos um orçamento personalizado com descontos especiais.",
      },
    ],
    cta: {
      title: "Não encontrou sua resposta?",
      subtitle: "Nossa equipe está pronta para ajudar! Entre em contato pelo WhatsApp ou telefone.",
      whatsapp: "https://wa.me/5511999999999",
      phone: "+5511999999999",
      phoneDisplay: "(11) 99999-9999",
    },
  },

  finalCta: {
    emoji: "🎉",
    title: ["Está com Fome?", "Peça Agora!"],
    subtitle: "Sua pizza artesanal quentinha em até",
    highlight: "30 minutos",
    freeLabel: "GRÁTIS",
    badges: [
      { text: "✨ Primeira compra: 20% OFF", variant: "secondary" as const },
      { text: "🔥 Frete grátis acima de R$50", variant: "primary" as const },
    ],
    newsletter: {
      label: "Cadastre seu email e ganhe",
      highlight: "cupom de desconto",
      placeholder: "seu@email.com",
      button: "Ganhar Cupom",
    },
    mainCta: "🛵 Fazer Pedido Agora →",
    paymentNote: "💳 Aceitamos PIX, cartões e vale-refeição",
  },

  footer: {
    description: "Pizzas artesanais feitas com amor, receitas tradicionais italianas e ingredientes premium.",
    menu: {
      title: "Menu",
      items: [
        { label: "Cardápio", href: "#cardapio" },
        { label: "Sobre Nós", href: "#sobre" },
        { label: "Avaliações", href: "#avaliacoes" },
        { label: "Blog", href: "#" },
      ],
    },
    contact: {
      title: "Atendimento",
      phone: "(11) 99999-9999",
      email: "contato@gudypizza.com",
      hours: "Seg-Dom: 18h - 23h",
      careers: "Trabalhe Conosco",
    },
    newsletter: {
      title: "Newsletter",
      subtitle: "Receba promoções exclusivas e novidades direto no seu email!",
      placeholder: "Seu email",
    },
    social: [
      { icon: "📷", label: "Instagram", href: "#" },
      { icon: "📘", label: "Facebook", href: "#" },
      { icon: "💬", label: "WhatsApp", href: "#" },
    ],
    legal: {
      copyright: "© 2026 GudyPizza. Todos os direitos reservados.",
      links: [
        { label: "Política de Privacidade", href: "#" },
        { label: "Termos de Uso", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  },

  navigation: {
    items: [
      { label: "Cardápio", sectionId: "cardapio" },
      { label: "Sobre", sectionId: "sobre" },
      { label: "Avaliações", sectionId: "avaliacoes" },
      { label: "FAQ", sectionId: "faq" },
    ],
    cta: "Pedir Agora",
  },
} as const;

export type SiteContent = typeof siteContent;
