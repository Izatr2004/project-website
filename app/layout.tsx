import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Becoming Friends with My Camera · CS 180",
  description:
    "A photographic study of perspective, focal length, and the dolly zoom for CS 180 Project 0.",
  openGraph: {
    title: "Becoming Friends with My Camera",
    description: "Three photographic experiments in camera perspective.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
