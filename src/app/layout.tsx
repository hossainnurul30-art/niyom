import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "নিয়ম — AI-চালিত স্টাডি রুটিন প্ল্যাটফর্ম",
  description: "বাংলাদেশের SSC 2028 পরীক্ষার্থীদের জন্য AI-চালিত স্মার্ট রুটিন, ব্যক্তিগত শিক্ষক এবং প্রোডাক্টিভিটি টুলস",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/icons/icon-192.png" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060f3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className="dark h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
