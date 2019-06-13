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
      __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('static/service-worker.js') }) }`
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="/static/styles.css" type="text/css" rel="stylesheet" />
          <link rel="manifest" href="/static/manifest.json" />
          <script type="module" dangerouslySetInnerHTML={MyDocument.generateServiceScript()}>
          </script>
        </Head>
        <body className="layout-web listing lang-en app-sg env-prod  is-new-brand not-authenticated scroll-past-header">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
