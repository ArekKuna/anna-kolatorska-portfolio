import "styles/globals.css";
import { Layout } from "components/Layout/Layout";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const mainFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout mainFont={mainFont.variable}>
      <Component {...pageProps} />
    </Layout>
  );
}
