import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EnglishSemya — Learn English. Join the Family.",
  description: "Personalized online English lessons for children, teenagers, and adults.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
