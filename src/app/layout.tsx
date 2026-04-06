import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GudyPizza - Pizzas Artesanais em Forno a Lenha | Delivery Rápido",
  description: "Pizzas artesanais com receitas tradicionais italianas, massa fermentada 48h e ingredientes premium. Forno a lenha 450°C. Delivery em 30min ou é grátis!",
  keywords: [
    "pizza artesanal",
    "forno a lenha",
    "pizza delivery",
    "pizza italiana",
    "massa fermentada",
    "GudyPizza",
    "pizzaria",
    "pizza gourmet",
    "delivery rápido",
    "pizza autêntica",
  ],
  authors: [{ name: "GudyPizza" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "GudyPizza - Pizzas Artesanais Irresistíveis",
    description: "Receitas italianas autênticas, massa fermentada 48h, forno a lenha 450°C. Sua pizza quentinha em 30min!",
    type: "website",
    locale: "pt_BR",
    siteName: "GudyPizza",
  },
  twitter: {
    card: "summary_large_image",
    title: "GudyPizza - Pizzas Artesanais",
    description: "Pizza artesanal de verdade. Forno a lenha, ingredientes premium, delivery 30min.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
