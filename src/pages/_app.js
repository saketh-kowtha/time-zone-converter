import 'antd/dist/antd.css'
import GlobalStyles from '../styles/GlobalStyles'
import Seo from '../components/Seo'
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Seo />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
