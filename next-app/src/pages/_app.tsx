import type { AppProps } from "next/app";
import { Inter, Didact_Gothic } from "next/font/google";
import { Layout } from "components/Layout/Layout";

import "styles/globals.css";

const mainFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
});

const titleFont = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-didact-gothic",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout mainFont={mainFont.variable} titleFont={titleFont.variable}>
      <Component {...pageProps} />
    </Layout>
  );
}
