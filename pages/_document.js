import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="PauTD2R5Nx08EXP-UuVDWL1jvgydl5YX9rXtrUjl8-o"
          />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BVTNMV8SBP"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-BVTNMV8SBP');
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
