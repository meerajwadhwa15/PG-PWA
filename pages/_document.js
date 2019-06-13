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

  render() {
    return (
      <html lang="en">
        <Head>
          <link href="http://cdn1.pgimgs.com/1554369362/sf2-search/css/desktop_css.css" type="text/css" rel="stylesheet" ></link>
        </Head>
        <body className="layout-web listing lang-en app-sg env-prod  is-new-brand not-authenticated scroll-past-header">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
