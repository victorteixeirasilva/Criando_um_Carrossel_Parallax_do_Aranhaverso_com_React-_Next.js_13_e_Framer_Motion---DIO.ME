import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";

/*import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "Spiderverse",
  description: 
    "Criando um carrossel parallax do Aranhaverso com React, Next.js e Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Image 
            src="./icons/menu.svg" 
            alt="Opções de menu" 
            width={36}
            height={25}
          />
          <Image 
            src="./spider-logo.svg" 
            alt="Spiderman" 
            width={260}
            height={70}
          />
          <Image 
            src="./icons/user.svg" 
            alt="Login" 
            width={36}
            height={36}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
