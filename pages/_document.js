import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {

   static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  generateServiceScript() {
    return {
      __html: `
      import {Workbox} from 'https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-window.prod.mjs';

      if ('serviceWorker' in navigator) {
        const wb = new Workbox('/static/service-worker.js');

        wb.register();
       }
    `}
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="/static/styles.css" type="text/css" rel="stylesheet" />
          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body className="layout-web listing lang-en app-sg env-prod  is-new-brand not-authenticated scroll-past-header">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
