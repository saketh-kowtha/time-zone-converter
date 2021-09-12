import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Seo } from '../components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet()

        function handleCollectStyles(App) {
            return (props) => {
                return sheet.collectStyles(<App {...props} />)
            }
        }

        const page = renderPage((App) => handleCollectStyles(App))
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    {this.props.styleTags}
                    <Seo />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
