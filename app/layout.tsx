import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "PhotoPhoria",
  description: "AI-powered photo editing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: "#624cf5" },
    }}>
      <html lang="en">
        <body className={cn("font-quicksand antialiased", quicksand.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
