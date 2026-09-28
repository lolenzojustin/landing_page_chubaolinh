import type { Metadata } from "next";
import { Be_Vietnam_Pro, Oswald } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

const oswald = Oswald({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Chu Bảo Linh | Thử thách 2 ngày Affiliate tự động",
  description:
    "Thử thách thực hành 2 ngày giúp bạn hiểu mô hình, lắp ghép quy trình và lập kế hoạch phát triển Affiliate rõ ràng.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} ${oswald.variable} antialiased`}>{children}</body>
    </html>
  );
}
