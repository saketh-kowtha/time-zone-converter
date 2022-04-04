import 'antd/dist/antd.css'
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles'
import 'react-clock/dist/Clock.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark')
            import("antd/dist/antd.dark.css")
    }, []);

    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
