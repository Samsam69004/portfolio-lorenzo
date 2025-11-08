import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorenzo Granjon - Comédien",
  description: "Portfolio de Lorenzo Granjon, comédien professionnel - Théâtre, Cinéma, Audiovisuel",
  keywords: ["Lorenzo Granjon", "comédien", "acteur", "théâtre", "cinéma", "portfolio"],
  authors: [{ name: "Lorenzo Granjon" }],
  openGraph: {
    title: "Lorenzo Granjon - Comédien",
    description: "Portfolio de Lorenzo Granjon, comédien professionnel",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
