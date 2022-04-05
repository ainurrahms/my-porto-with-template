import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/dist/pages/_document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS"
            href="l"
          />
          <meta
            name="keywords"
            content=""
          />
          <link rel="manifest" href="" />
          <link rel="apple-touch-icon" href=""></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
