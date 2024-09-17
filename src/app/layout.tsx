import type { Metadata } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import ContactModal from "@/components/modals/ContactModal";
import { ModalProvider } from "@/contexts/ModalContext";

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
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description || ""} />
      </Head>
      <body>
        <ModalProvider>
          <Header />
          <main>{children}</main>
          <ContactModal />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
