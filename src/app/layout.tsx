import type { Metadata } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { ModalProvider } from "@/contexts/ContactModalContext";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Alex Blyth | Beyond",
  description:
    "Providing top-quality software development and consultancy services to businesses globally. Specializing in frontend, backend, and mobile development, with a focus on delivering scalable, custom solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} />
        {/* preload landing images */}
        <link
          rel="preload"
          href="/beyond-words-removedbg.webp"
          as="image"
          type="image/webp"
        />
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/inbox.webp" as="image" type="image/webp" />
        <link
          rel="preload"
          href="/beyond-mountains.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <body>
        <div>
          <Toaster toastOptions={{ duration: 10000 }} />
        </div>
        <ModalProvider>
          <Header />
        </ModalProvider>
        <main>{children}</main>
        <Footer />
        {isProduction && <Analytics />}
      </body>
    </html>
  );
}
