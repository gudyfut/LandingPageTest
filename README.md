<div align="center">

# 🍕 GudyPizza - Landing Page Artesanal

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![ShadCN UI](https://img.shields.io/badge/ShadCN-UI-000000?style=for-the-badge)](https://ui.shadcn.com/)

**Landing page profissional e de alta conversão para pizzaria artesanal**

[Demo](#) • [Documentação](#-estrutura-do-projeto) • [Instalação](#-instalação)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características Principais](#-características-principais)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Design System](#-design-system)
- [Recursos Especiais](#-recursos-especiais)
- [Otimizações](#-otimizações)
- [Customização](#-customização)

---

## 🎯 Sobre o Projeto

Landing page moderna e profissional desenvolvida para **GudyPizza**, uma pizzaria artesanal especializada em pizzas de forno a lenha. O projeto combina design excepcional, performance otimizada e estratégias de conversão comprovadas.

### ✨ Destaques

- 🎨 **Design Orgânico**: Estética artesanal que transmite autenticidade e tradição italiana
- 🤖 **Assets Gerados por IA**: Imagens e animações 3D de pizzas criadas com ferramentas de inteligência artificial
- 📹 **Vídeo Interativo**: Animação 3D controlada por scroll na seção hero
- 🎭 **Micro-interações**: Animações suaves e transições que elevam a experiência do usuário
- ⚡ **Performance**: Otimizado para Core Web Vitals e SEO
- 📱 **Responsivo**: Design mobile-first com layout adaptativo

---

## 🚀 Características Principais

### 🎬 Recursos Especiais

#### **Animação 3D com Scroll Scrubbing**
O projeto apresenta uma **animação 3D de pizza gerada por IA** na seção hero que responde ao scroll do usuário. À medida que você rola a página, a pizza gira e se monta dinamicamente, criando uma experiência visual memorável.

```typescript
// Tecnologia: Video scrubbing com requestAnimationFrame
// O vídeo progride suavemente conforme o scroll do usuário
```

#### **Imagens Geradas por IA**
Todas as imagens de pizzas foram criadas utilizando **ferramentas de IA generativa**, garantindo:
- 🎨 Consistência visual perfeita
- 🖼️ Alta qualidade e resolução
- 🍕 Apresentação apetitosa e profissional
- 🎭 Estilo artístico único

### 📊 11 Elementos Essenciais de Conversão

Implementação completa do framework de landing pages de alta conversão:

1. ✅ **Hero Impactante** - Título massivo com animação em cascata
2. ✅ **CTA Estratégico** - Botões de conversão em posições-chave
3. ✅ **Social Proof** - +5.000 clientes, avaliação 4.9/5 estrelas
4. ✅ **Cardápio Visual** - Cards interativos com hover effects
5. ✅ **Benefícios Claros** - 6 diferenciais com layout criativo
6. ✅ **Depoimentos Reais** - Avaliações autênticas de clientes
7. ✅ **FAQ Completo** - 10 perguntas frequentes com accordion
8. ✅ **Urgência** - "30min ou é grátis" para estimular ação
9. ✅ **Incentivos** - 20% OFF na primeira compra
10. ✅ **Captura de Email** - Newsletter com ofertas exclusivas
11. ✅ **Footer Completo** - Informações de contato e links úteis

### 🎨 Experiência do Usuário

- **Navegação Suave**: Scroll animado para seções com compensação precisa do header fixo
- **Feedback Visual**: Hover states, transitions e micro-interações em todos os elementos clicáveis
- **Staggered Animations**: Elementos aparecem em sequência criando ritmo visual
- **Performance Otimizada**: Lazy loading de imagens e código otimizado

---

## 🛠 Tecnologias

### Core Stack

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Next.js** | 16.2.1 | Framework React com App Router e Server Components |
| **React** | 19.2.4 | Biblioteca UI com novos recursos |
| **TypeScript** | 5.x | Type safety e developer experience |
| **Tailwind CSS** | 4.0 | Utility-first styling |
| **ShadCN UI** | 4.1.1 | Componentes acessíveis e customizáveis |

### Bibliotecas Adicionais

- **Radix UI**: Componentes primitivos acessíveis
- **Lucide React**: Ícones modernos e otimizados
- **Class Variance Authority**: Gestão de variantes de componentes
- **Tailwind Merge**: Resolução inteligente de classes CSS

### Ferramentas de IA Utilizadas

- **Geração de Imagens**: Criação de renders 3D de pizzas
- **Animações**: Vídeo 3D interativo na seção hero

---

## 📦 Instalação

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/gudypizza-landing.git

# Entre no diretório
cd gudypizza-landing

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter
```

---

## 🏗 Estrutura do Projeto

Arquitetura baseada em **Feature-Sliced Design (FSD)** para organização escalável:

```
📁 LandingPageTest/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── layout.tsx            # Layout raiz com metadados SEO
│   │   ├── page.tsx              # Página principal
│   │   ├── globals.css           # Estilos globais e variáveis CSS
│   │   └── favicon.ico
│   │
│   ├── 📁 features/               # Features organizadas por domínio
│   │   └── 📁 marketing/          # Feature de marketing
│   │       ├── 📁 sections/       # Seções da landing page
│   │       │   ├── Header.tsx    # Navegação sticky com scroll suave
│   │       │   ├── Hero.tsx      # Hero com vídeo 3D e CTAs
│   │       │   ├── MenuSection.tsx # Cardápio visual interativo
│   │       │   ├── Benefits.tsx  # Benefícios com layout criativo
│   │       │   ├── Testimonials.tsx # Avaliações de clientes
│   │       │   ├── FAQ.tsx       # Perguntas frequentes
│   │       │   ├── FinalCTA.tsx  # CTA final com urgência
│   │       │   └── Footer.tsx    # Rodapé completo
│   │       │
│   │       ├── 📁 constants/      # Conteúdo centralizado
│   │       │   └── content.ts    # Todo o texto da landing page
│   │       │
│   │       ├── 📁 styles/         # Estilos e animações
│   │       │   └── animations.ts # Configurações de animação
│   │       │
│   │       └── index.ts          # Barrel export
│   │
│   ├── 📁 components/             # Componentes reutilizáveis
│   │   └── 📁 ui/                # Componentes ShadCN UI
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── accordion.tsx
│   │       └── ...
│   │
│   ├── 📁 hooks/                  # Custom React hooks
│   ├── 📁 lib/                    # Utilitários
│   └── 📁 types/                  # TypeScript types
│
├── 📁 public/                     # Assets estáticos
│   ├── 📁 videos/                 # Vídeo 3D da pizza
│   ├── 📁 pizzamenu/              # Imagens das pizzas (AI-generated)
│   ├── 📁 sobre/                  # Imagens da seção sobre
│   └── icon.svg
│
├── components.json               # Configuração ShadCN
├── tailwind.config.ts            # Configuração Tailwind
├── tsconfig.json                 # Configuração TypeScript
└── package.json
```

### 🎯 Princípios de Organização

- **Feature-Sliced Design**: Código organizado por domínio de negócio
- **Separação de Responsabilidades**: Lógica, apresentação e dados separados
- **Conteúdo Centralizado**: Todo texto em `constants/content.ts` para fácil edição
- **Componentes Reutilizáveis**: UI components isolados e testáveis

---

## 🎨 Design System

### Paleta de Cores

Cores cuidadosamente selecionadas para transmitir calor, autenticidade e tradição:

```css
/* Cores Primárias */
--color-terracotta: #d67c3e;  /* Remete ao forno a lenha */
--color-olive: #6b8e23;       /* Manjericão fresco */

/* Backgrounds */
--color-cream: #faf7f2;       /* Fundo suave e acolhedor */
--color-wood-dark: #8b6f47;   /* Detalhes de madeira */

/* Textos */
--charcoal: #2d2d2d;          /* Texto principal */
```

### Tipografia

- **Display (Títulos)**: Fraunces - Serif com personalidade e charme artesanal
- **Body (Corpo)**: DM Sans - Sans-serif moderna, legível e profissional

### Componentes

Todos os componentes seguem princípios de **acessibilidade (WCAG AA)** e **design consistente**:

- States visuais claros (hover, active, focus)
- Animações respeitam `prefers-reduced-motion`
- Contraste de cores adequado
- Navegação por teclado

---

## ✨ Recursos Especiais

### 🎬 Video Scrubbing na Hero

A seção hero utiliza uma técnica avançada de **video scrubbing** onde o progresso do vídeo é sincronizado com o scroll:

```typescript
// Implementação simplificada
const handleScroll = () => {
  const scrollProgress = calculateScrollProgress();
  video.currentTime = scrollProgress * video.duration;
};
```

**Benefícios:**
- Experiência interativa única
- Engajamento visual imediato
- Storytelling através do scroll

### 🤖 Assets Gerados por IA

#### Imagens de Pizzas
- **Ferramentas**: Midjourney / DALL-E / Stable Diffusion
- **Estilo**: Realista, apetitoso, alta qualidade
- **Formato**: PNG com fundo transparente
- **Localização**: `/public/pizzamenu/`

#### Animação 3D
- **Vídeo**: Animação de pizza sendo montada
- **Duração**: Otimizada para scroll experience
- **Formato**: MP4 processado para web
- **Localização**: `/public/videos/`

### 🎭 Sistema de Animações

Animações coordenadas usando **staggered delays**:

```typescript
// Cada elemento entra em sequência criando ritmo
staggerDelays = {
  hero: {
    badge: '0.1s',
    title: ['0.2s', '0.3s', '0.4s', '0.5s'],
    subtitle: '0.6s',
    cta: '0.7s'
  }
}
```

---

## ⚡ Otimizações

### Performance

- ✅ **Image Optimization**: Next.js Image com lazy loading
- ✅ **Code Splitting**: Carregamento sob demanda de componentes
- ✅ **CSS Optimization**: Tailwind JIT compiler
- ✅ **Video Optimization**: Vídeo comprimido e otimizado para web

### SEO

- ✅ **Meta Tags**: Open Graph, Twitter Cards
- ✅ **Semantic HTML**: Estrutura semântica correta
- ✅ **Sitemap**: Geração automática
- ✅ **Keywords**: Otimização para "pizza artesanal", "forno a lenha"

### Acessibilidade

- ✅ **ARIA Labels**: Navegação assistiva
- ✅ **Keyboard Navigation**: Navegação completa por teclado
- ✅ **Color Contrast**: WCAG AA compliance
- ✅ **Focus States**: Estados de foco visíveis

---

## 🔧 Customização

### Editar Conteúdo

Todo o conteúdo está centralizado em um único arquivo:

```typescript
// src/features/marketing/constants/content.ts
export const siteContent = {
  brand: {
    name: "GudyPizza",
    tagline: "Forno a Lenha Artesanal"
  },
  hero: {
    title: { /* ... */ },
    subtitle: "..."
  }
  // ... resto do conteúdo
}
```

### Personalizar Cores

```css
/* src/app/globals.css */
:root {
  --color-terracotta: #d67c3e; /* Sua cor primária */
  --color-olive: #6b8e23;      /* Sua cor secundária */
}
```

### Adicionar Seções

1. Crie novo componente em `src/features/marketing/sections/`
2. Adicione ao barrel export em `index.ts`
3. Importe e use em `src/app/page.tsx`

---

## 📄 Licença

Este projeto é privado e desenvolvido exclusivamente para **GudyPizza**.

---

## 👨‍💻 Desenvolvedor

Desenvolvido com 💚 usando as melhores práticas de desenvolvimento web moderno.

**Stack:** Next.js 16 • React 19 • TypeScript 5 • Tailwind CSS 4

---

<div align="center">

### 🍕 **GudyPizza** - Pizzas Artesanais Feitas com Amor

**© 2026 • Todos os direitos reservados**

</div>

