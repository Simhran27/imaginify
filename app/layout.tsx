import type { Metadata } from "next";
import localFont from "next/font/local";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider, SignedOut, SignedIn } from "@clerk/nextjs";

const IBMPlex= IBM_Plex_Sans({
  subsets: ["latin"],
  weight:['400', '500', '600', '700'],
  variable:'--font-ibm-plex'
})

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "IMAGINIFY",
  description: "AI-powered creative image creation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#624cf5'}}}>
      <html lang="en">
        <body
          className={cn("font-IBMPlex antialiased",IBMPlex.variable)}
        >
          <header>
            <SignedOut>
              
            </SignedOut>

            <SignedIn>
              
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
