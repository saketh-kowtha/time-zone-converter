import 'antd/dist/antd.css'
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles'
import 'react-clock/dist/Clock.css';
import styled from 'styled-components'
import { Button } from 'antd';
import { useRouter } from 'next/router';
import { APIUsageButton } from '../components';

function MyApp({ Component, pageProps }) {

    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark')
            import("antd/dist/antd.dark.css")
    }, []);

    return (
        <>
            <APIUsageButton />
            <GlobalStyles />
            <Component {...pageProps} />
            <Footer>
                <Button type='link' onClick={() => router.push('/live-clock')}>Live clock</Button>
                <Button type='link' onClick={() => router.push('/')}>Time-zone converter</Button>
                {/* <Button type='link' onClick={() => router.push('/')}>Time-zone converter</Button> world clock */}
            </Footer>
        </>
    )
}

const Footer = styled.footer`
width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 32px;
    text-align: center;
`


export default MyApp
