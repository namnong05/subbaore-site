
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SUBBAORE.SITE - SMM Panel",
  description: "Hệ thống dịch vụ mạng xã hội tự động",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
