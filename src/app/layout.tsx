import type { Metadata } from "next";
// import "@/styles/globals.css"; // Tailwind Global Styles
import "antd/dist/reset.css"; // Ant Design CSS
import "./globals.css";
import { Merriweather, Montserrat } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Providers from "./providers";

const montserrat = Montserrat({
  weight: ["500", "600", "700"],
  variable: "--font-montserrat",
});
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
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
      <body
        className={`${montserrat.variable} ${merriweather.variable} font-montserrat`}
      >
        <Providers>
          <AntdRegistry>
            {/* <StyleProvider> */}
            {children}
            {/* </StyleProvider> */}
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
