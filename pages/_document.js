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

  static generateServiceScript() {
    return {
      __html: ``
    }
  }

    static enablePrompt() {
        return {
            __html: `let deferredPrompt;

                window.addEventListener('beforeinstallprompt', function(event) {
                  event.preventDefault();
                  deferredPrompt = event;
                });
            `
        }
    }

  render() {
    return (
      <html lang="en">
        <Head>
            <meta name="theme-color" content="#E03C31"/>
          <link href="/styles.css" type="text/css" rel="stylesheet" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"></link>
          <script type="module" dangerouslySetInnerHTML={MyDocument.generateServiceScript()}>
          </script>
            <script type="module" dangerouslySetInnerHTML={MyDocument.enablePrompt()}>
            </script>
          <script src="/global.js"></script>
        </Head>
        <body className="layout-web listing lang-en app-sg env-prod  is-new-brand not-authenticated">

          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
