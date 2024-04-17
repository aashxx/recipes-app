import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import { Toaster } from "@/components/ui/toaster";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nutriverse - Health Services",
  description: "Nutriverse is an health care startup that provides services like personalized diet plans, food recipes and medical assistance to elderly people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={dm_sans.className}>
        <Toaster />
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
