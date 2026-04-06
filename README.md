<div align="center">

# 🍕 Landing Page - Projeto de Portfólio

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Single Page Application moderna demonstrando arquitetura escalável e técnicas avançadas de front-end**

[Demonstração](#-demonstração-de-habilidades) • [Arquitetura](#-arquitetura) • [Tecnologias](#-stack-tecnológico)

</div>

---

## 📋 Sobre o Projeto

Projeto de portfólio que demonstra **habilidades avançadas em desenvolvimento front-end moderno**, implementando uma landing page completa com recursos interativos, animações sofisticadas e arquitetura escalável.

Este projeto foi desenvolvido para demonstrar proficiência em:

- ⚡ **Framework Moderno**: Next.js 16 com App Router e React Server Components
- 🏗️ **Arquitetura Escalável**: Feature-Sliced Design (FSD) para organização de código
- 🎨 **Design System Profissional**: Tailwind CSS 4 + ShadCN UI com componentes reutilizáveis
- 🎬 **Interatividade Avançada**: Video scrubbing controlado por scroll
- 🤖 **Integração de IA**: Assets gerados com ferramentas de inteligência artificial
- 🚀 **Performance Otimizada**: Core Web Vitals e best practices

---

## 🎯 Demonstração de Habilidades

### 💻 Desenvolvimento Front-end Avançado

#### **1. Video Scrubbing com Scroll**
Implementação customizada de controle de vídeo sincronizado com scroll usando `requestAnimationFrame`:

```typescript
// Técnica avançada: interpolação suave (lerp) para controle de vídeo
const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

const handleScroll = () => {
  const scrollProgress = calculateScrollProgress();
  targetTime.current = scrollProgress * video.duration;
  
  // Smooth animation loop
  currentTime.current = lerp(currentTime.current, targetTime.current, 0.1);
  video.currentTime = currentTime.current;
};
```

**Resultado:** Experiência interativa única onde o vídeo 3D responde ao scroll do usuário de forma suave e responsiva.

#### **2. Sistema de Animações Coordenadas**
Animações em cascata usando staggered delays para criar ritmo visual:

```typescript
// Configuração centralizada de timings
export const staggerDelays = {
  hero: {
    badge: '0.1s',
    title: ['0.2s', '0.3s', '0.4s', '0.5s'],
    subtitle: '0.6s',
    cta: '0.7s',
    stats: '0.8s'
  }
};
```

#### **3. Navegação Suave com Offset Dinâmico**
Scroll customizado com compensação precisa do header fixo:

```typescript
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const headerHeight = 60;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerHeight;
  
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
};
```

### 🏗️ Arquitetura e Clean Code

#### **Feature-Sliced Design (FSD)**
Organização modular e escalável do código:

```
src/
├── features/
│   └── marketing/
│       ├── sections/          # Componentes de UI
│       ├── constants/         # Conteúdo centralizado
│       ├── styles/            # Configurações de estilo
│       └── hooks/             # Custom hooks
├── components/ui/             # Componentes reutilizáveis
└── lib/                       # Utilitários
```

**Benefícios:**
- ✅ Separação clara de responsabilidades
- ✅ Facilita manutenção e escalabilidade
- ✅ Reutilização de código
- ✅ Testes mais simples

#### **Conteúdo Centralizado**
Todo o conteúdo em um único arquivo para fácil gestão:

```typescript
// src/features/marketing/constants/content.ts
export const siteContent = {
  brand: { /* ... */ },
  hero: { /* ... */ },
  menu: { /* ... */ },
  // Facilita internacionalização futura
};
```

### 🤖 Integração de Tecnologias de IA

#### **Assets Gerados por IA**

**Imagens de Produto:**
- Criadas com **ferramentas de IA generativa** (Midjourney/DALL-E)
- Consistência visual perfeita
- Alta qualidade e estilo único
- Formato otimizado para web (PNG com transparência)

**Animação 3D:**
- Vídeo 3D de produto renderizado
- Otimizado para controle por scroll
- Formato MP4 processado para performance web

**Impacto:** Demonstra capacidade de integrar workflows modernos de design com IA no processo de desenvolvimento.

---

## 🛠 Stack Tecnológico

### **Core Technologies**

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Next.js** | 16.2.1 | Framework React com App Router, SSR, e otimizações automáticas |
| **React** | 19.2.4 | Biblioteca UI com hooks modernos e server components |
| **TypeScript** | 5.x | Type safety, autocompletion e melhor DX |
| **Tailwind CSS** | 4.0 | Utility-first CSS com JIT compiler |
| **ShadCN UI** | Latest | Sistema de componentes acessíveis baseado em Radix UI |

### **Bibliotecas e Ferramentas**

- **Radix UI**: Primitivos acessíveis (Accordion, Avatar, etc.)
- **Lucide React**: Ícones SVG otimizados
- **Class Variance Authority**: Gestão type-safe de variantes de componentes
- **Tailwind Merge**: Resolução inteligente de conflitos de classes CSS
- **clsx**: Construção condicional de classNames

### **Developer Experience**

- ✅ **ESLint**: Linting e code quality
- ✅ **TypeScript Strict Mode**: Type safety máximo
- ✅ **Hot Reload**: Desenvolvimento ágil
- ✅ **Auto-formatting**: Código consistente

---

## 🏗 Arquitetura

### **Estrutura do Projeto**

```
📁 src/
├── 📁 app/                           # Next.js App Router
│   ├── layout.tsx                   # Root layout + SEO metadata
│   ├── page.tsx                     # Single page application
│   └── globals.css                  # Design tokens e estilos globais
│
├── 📁 features/                      # Feature-Sliced Design
│   └── 📁 marketing/                 # Feature: Marketing Landing Page
│       ├── 📁 sections/              # UI Components
│       │   ├── Header.tsx           # Navegação sticky + scroll suave
│       │   ├── Hero.tsx             # Video scrubbing + animações
│       │   ├── MenuSection.tsx      # Grid responsivo + hover effects
│       │   ├── Benefits.tsx         # Layout customizado
│       │   ├── Testimonials.tsx     # Social proof + ratings
│       │   ├── FAQ.tsx              # Accordion component
│       │   ├── FinalCTA.tsx         # Call-to-action + form
│       │   └── Footer.tsx           # Footer multi-coluna
│       │
│       ├── 📁 constants/
│       │   └── content.ts           # Conteúdo centralizado
│       │
│       ├── 📁 styles/
│       │   └── animations.ts        # Configurações de animação
│       │
│       └── index.ts                 # Barrel exports
│
├── 📁 components/ui/                 # Design System
│   ├── button.tsx                   # Component + variants
│   ├── card.tsx
│   ├── badge.tsx
│   ├── accordion.tsx                # Radix UI wrapper
│   └── ...                          # Outros componentes ShadCN
│
├── 📁 lib/
│   └── utils.ts                     # Helper functions
│
└── 📁 types/                         # TypeScript definitions
```

### **Padrões Implementados**

#### **1. Composição de Componentes**
```typescript
// Componentes altamente composáveis
<Card className="...">
  <Avatar>...</Avatar>
  <Badge variant="secondary">...</Badge>
</Card>
```

#### **2. Separation of Concerns**
- **UI Components**: Apenas apresentação visual
- **Constants**: Dados e conteúdo
- **Styles**: Configurações de tema e animações
- **Hooks**: Lógica reutilizável

#### **3. Type Safety**
```typescript
// Tipos fortemente tipados
interface MenuPizza {
  name: string;
  image: string;
  description: string;
}
```

---

## 🎨 Design System

### **Design Tokens**

```css
:root {
  /* Cores Primárias */
  --color-terracotta: #d67c3e;    /* Primary brand color */
  --color-olive: #6b8e23;          /* Secondary color */
  
  /* Neutrals */
  --color-cream: #faf7f2;          /* Background */
  --charcoal: #2d2d2d;             /* Text */
  
  /* Semantic Colors */
  --primary: var(--color-terracotta);
  --secondary: var(--color-olive);
}
```

### **Typography Scale**

- **Display Font**: Fraunces (Serif com personalidade)
- **Body Font**: DM Sans (Sans-serif moderna)
- **Scale**: Tipografia responsiva com classes Tailwind

### **Component Variants**

```typescript
// Exemplo: Button variants usando CVA
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { default: "...", outline: "..." },
      size: { sm: "...", lg: "..." }
    }
  }
);
```

---

## ⚡ Performance e Otimizações

### **Core Web Vitals**

✅ **LCP (Largest Contentful Paint)**: < 2.5s
- Next.js Image optimization
- Lazy loading de imagens
- Priority loading para hero

✅ **FID (First Input Delay)**: < 100ms
- Code splitting automático
- Componentes otimizados

✅ **CLS (Cumulative Layout Shift)**: < 0.1
- Dimensões fixas para imagens
- Skeleton states quando necessário

### **Técnicas Implementadas**

```typescript
// 1. Next.js Image com lazy loading
<Image
  src="/pizza.png"
  width={300}
  height={225}
  loading="eager" // ou "lazy" conforme necessidade
  alt="..."
/>

// 2. Video otimizado
<video preload="auto" muted playsInline>
  <source src="/video_processed.mp4" type="video/mp4" />
</video>

// 3. CSS-in-JS otimizado com Tailwind JIT
className="hover:scale-110 transition-transform duration-300"
```

### **Lighthouse Score Target**

- ⚡ Performance: 90+
- ♿ Accessibility: 100
- 🎯 Best Practices: 100
- 🔍 SEO: 90+

---

## 🎯 Recursos Implementados

### **Interatividade**

- ✅ Scroll suave entre seções com offset compensado
- ✅ Video scrubbing controlado por scroll
- ✅ Hover effects e micro-interações
- ✅ Animações em cascata (staggered)
- ✅ Accordion para FAQ
- ✅ Sticky header com backdrop blur

### **Responsividade**

- ✅ Mobile-first design
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Grid system responsivo
- ✅ Typography scale adaptativo
- ✅ Touch-friendly interactions

### **Acessibilidade**

- ✅ Semantic HTML5
- ✅ ARIA labels onde necessário
- ✅ Navegação por teclado
- ✅ Contraste de cores (WCAG AA)
- ✅ Focus states visíveis
- ✅ Reduced motion support

---

## 📦 Instalação e Uso

### **Requisitos**

- Node.js 20.x ou superior
- npm ou yarn

### **Setup**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/landing-page-portfolio.git

# Entre no diretório
cd landing-page-portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### **Scripts**

```bash
npm run dev       # Desenvolvimento (hot reload)
npm run build     # Build de produção
npm run start     # Servidor de produção
npm run lint      # Executar linter
```

---

## 🔑 Principais Aprendizados

Este projeto demonstra:

1. **Arquitetura Moderna**: Feature-Sliced Design para aplicações escaláveis
2. **React Avançado**: Hooks customizados, refs, efeitos complexos
3. **Performance**: Otimizações de rendering e Core Web Vitals
4. **TypeScript**: Type safety em toda a aplicação
5. **Design Systems**: Componentes reutilizáveis e consistentes
6. **Animações Web**: requestAnimationFrame e técnicas avançadas
7. **Acessibilidade**: WCAG compliance e melhores práticas
8. **Workflow com IA**: Integração de assets gerados por ferramentas de IA

---

## 🚀 Melhorias Futuras

- [ ] Internacionalização (i18n)
- [ ] Testes unitários (Jest + React Testing Library)
- [ ] Testes E2E (Playwright)
- [ ] Analytics integration
- [ ] A/B testing setup
- [ ] CMS integration
- [ ] Progressive Web App (PWA)
- [ ] Storybook para documentação de componentes

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela!**

</div>

