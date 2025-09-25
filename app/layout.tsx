import type { Metadata } from "next";
import { Katibeh } from "next/font/google";
import "./globals.css";

const katibeh = Katibeh({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "درس‌بار",
  description: "درسبار درس بار darsbar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={katibeh.className}>
        <header className="h-[5dvh] w-screen bg-blue-200 flex justify-between fixed">
          <div>DarkMode</div>
          <div>Logo</div>
        </header>
        <main>{children}</main>
        <footer className="bg-black text-white">
          created by:{" "}
          <a href="https://hosein.dev" target="_blank">
            Hosein.dev
          </a>
        </footer>
      </body>
    </html>
  );
}
