import type { Metadata } from "next";
// import "@/styles/globals.css"; // Tailwind Global Styles
import "antd/dist/reset.css"; // Ant Design CSS
import { Lato, Montserrat } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Providers from "./providers";
// Import css files
import "./globals.css";

const montserrat = Montserrat({
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
});
const lato = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Furry Cares",
  description: "Pet care tips and inspiring stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.svg" sizes="any" />
      </head>
      <body
        className={`${montserrat.variable} ${lato.variable} font-montserrat`}
      >
        <Providers>
          <AntdRegistry>{children}</AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
