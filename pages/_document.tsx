import React from 'react';
import { useAmp } from 'next/amp';

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import getConfig from 'next/config';
import DigitalAnalytics, { DigitalAnalyticsAmp } from '@components/digitalAnalytics/DigitalAnalytics';

const { publicRuntimeConfig } = getConfig();
const {
  parsed: { DIGITAL_ANALYTCS_OPTIMIZE, DIGITAL_ANALYTCS_GA, DIGITAL_ANALYTCS_GTM, DIGITAL_ANALYTCS_AMP_GTM },
} = publicRuntimeConfig;

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <DigitalAnalytics
            useAmp={useAmp}
            gaId={DIGITAL_ANALYTCS_GA}
            gtmId={DIGITAL_ANALYTCS_GTM}
            ampGtmId={DIGITAL_ANALYTCS_AMP_GTM}
            optimizeId={DIGITAL_ANALYTCS_OPTIMIZE}
          />
        </Head>
        <body>
          <DigitalAnalyticsAmp useAmp={useAmp} ampGtmId={DIGITAL_ANALYTCS_AMP_GTM} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
