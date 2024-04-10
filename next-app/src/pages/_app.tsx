import type { AppProps } from "next/app";
import { Layout } from "components/Layout/Layout";
import { Inter, Didact_Gothic, Jomhuria, KoHo } from "next/font/google";

import "styles/globals.css";

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-inter",
});

const fontDidactGothic = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-didact-gothic",
});

const fontKoho = KoHo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-koHo",
});

const fontJomhuria = Jomhuria({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jomhuria",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      fontInter={fontInter.variable}
      fontDidactGothic={fontDidactGothic.variable}
      fontJomhuria={fontJomhuria.variable}
      fontKoho={fontKoho.variable}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
