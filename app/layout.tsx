import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next S3 Upload App",
  description: "S3 + RDS Demo",
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