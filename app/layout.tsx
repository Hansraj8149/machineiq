import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/components/ModalProvider";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MachineIQ",
  description: "An AI platform for everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>
        <ModalProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
