# 🍕 GudyPizza - Landing Page

Landing page profissional para pizzaria artesanal, desenvolvida com Next.js 15, TypeScript, Tailwind CSS e ShadCN UI.

## 🎨 Design System - Estética Artesanal/Orgânica

### Paleta de Cores
- **Terracota** (#d67c3e): Cor primária - remete ao forno a lenha
- **Verde Oliva** (#6b8e23): Cor secundária - manjericão fresco
- **Cream** (#faf7f2): Background suave
- **Charcoal** (#2d2d2d): Texto principal

### Tipografia
- **Display**: Fraunces (serif com personalidade)
- **Body**: DM Sans (legível e moderna)

### Filosofia de Design
Orgânica e acolhedora, transmitindo autenticidade, tradição e qualidade artesanal. Elementos visuais que remetem à experiência de uma pizzaria italiana autêntica.

## ✅ 11 Elementos Essenciais Implementados

Seguindo o framework DESIGNNAS para landing pages de alta conversão:

1. ✅ **URL com Keywords** - `/` otimizada para SEO
2. ✅ **Logo no Header** - Sticky header com animação ao scroll
3. ✅ **Título e Subtítulo SEO** - Hero com tipografia massiva e animação em cascata
4. ✅ **CTA Primário** - Botão "Pedir Delivery" com destaque visual
5. ✅ **Social Proof** - 5.000+ clientes, avaliação 4.9/5, tempo de entrega
6. ✅ **Imagens/Vídeos** - Seção de cardápio com cards interativos
7. ✅ **Benefícios** - 6 benefícios com ícones customizados
8. ✅ **Depoimentos** - 6 avaliações reais de clientes
9. ✅ **FAQ** - 10 perguntas com accordion suave
10. ✅ **CTA Final** - Seção dramática com urgência e newsletter
11. ✅ **Footer** - Multi-coluna com contato e legal

## 🚀 Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) para ver o resultado.

## 🌐 Estrutura do Projeto

```
gudypizza-landing/
├── app/
│   ├── layout.tsx          # Layout raiz com metadados SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Design system e estilos globais
├── components/
│   ├── landing/
│   │   ├── Header.tsx      # Navegação sticky
│   │   ├── Hero.tsx        # Seção hero com CTAs
│   │   ├── MediaSection.tsx # Cardápio de pizzas
│   │   ├── Benefits.tsx    # Benefícios principais
│   │   ├── Testimonials.tsx # Avaliações de clientes
│   │   ├── FAQ.tsx         # Perguntas frequentes
│   │   ├── FinalCTA.tsx    # CTA final com urgência
│   │   └── Footer.tsx      # Rodapé completo
│   └── ui/                 # Componentes ShadCN UI
└── public/
    └── images/             # Imagens otimizadas
```

## 🎯 Características

### Design Excellence
- ✨ Animações suaves com staggered delays
- 🎨 Paleta de cores orgânica e acolhedora
- 📱 100% responsivo (mobile-first)
- ♿ Acessível (WCAG AA)
- 🚀 Performance otimizada
- 🌗 Suporte a reduced motion

### Conversão Otimizada
- 🎯 2 CTAs estratégicos (hero + final)
- 💬 Social proof em múltiplas seções
- ⭐ Avaliações 5 estrelas com depoimentos reais
- ⚡ Urgência ("30min ou é grátis")
- 🎁 Incentivos (primeira compra 20% OFF)
- 📧 Captura de email com cupom

### SEO Otimizado
- 📝 Meta tags completas
- 🔍 Keywords estratégicas
- 🖼️ Open Graph tags
- 🐦 Twitter Cards
- 🌐 Lang PT-BR
- 🤖 Robots friendly

## 🎨 Customização

### Cores
Edite `app/globals.css` nas variáveis CSS:
```css
:root {
  --color-terracotta: #d67c3e;
  --color-olive: #6b8e23;
  --color-cream: #faf7f2;
  /* ... */
}
```

### Conteúdo
Edite cada componente em `components/landing/` para personalizar textos, imagens e informações.

## 📦 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **ShadCN UI** - Componentes acessíveis e customizáveis
- **Google Fonts** - Fraunces + DM Sans

## 🔗 Links Úteis

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ShadCN UI](https://ui.shadcn.com/)

---

**🍕 Desenvolvido para GudyPizza © 2026**

