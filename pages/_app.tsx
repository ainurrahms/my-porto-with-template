import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../public/data.json";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "object") {
    AOS.init();
  }

  return (
    <>
      <NextSeo
        title={data.name}
        titleTemplate={data.name}
        defaultTitle={data.name}
        description={data.about}
        canonical=""
        openGraph={{
          url: "",
          title: data.name,
          description: data.about,
          images: [
            {
              url: "",
              width: 800,
              height: 420,
              alt: data.name,
            },
          ],
          profile: {
            firstName: "",
            gender: "",
            lastName: "",
            username: "",
          },
        }}
        twitter={{
          handle: "",
          site: "",
          cardType: "",
        }}
      />
      <Head>
        <link rel="alternate" type="application/rss+xml" title="RSS" href="" />
        <meta property="og:image" content="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
