import "styles/globals.css";
import { Layout } from "components/Layout/Layout";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const mainFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout mainFont={mainFont.variable}>
      <Component {...pageProps} />
    </Layout>
  );
}
