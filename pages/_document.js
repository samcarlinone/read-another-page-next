import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry()
    const generateId = createGenerateId()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => (
        <JssProvider registry={registry} generateId={generateId}>
          <App {...props} />
        </JssProvider>
      ),
    })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            name="description" 
            content="The best-of booklist. If you are looking for something to read, this site has it."
          />

          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />

          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Patua+One&family=Raleway:ital,wght@0,400;0,700;1,400&display=swap" as="style" />
          <link href="https://fonts.googleapis.com/css2?family=Patua+One&family=Raleway:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
