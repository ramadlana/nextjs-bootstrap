// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="/dist/css/tabler.min.css" rel="stylesheet" />
        <link href="/dist/css/tabler-flags.min.css" rel="stylesheet" />
        <link href="/dist/css/tabler-payments.min.css" rel="stylesheet" />
        <link href="/dist/css/tabler-vendors.min.css" rel="stylesheet" />
        <link href="/dist/css/demo.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
