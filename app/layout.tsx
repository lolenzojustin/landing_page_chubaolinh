import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
