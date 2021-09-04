import styled from 'styled-components'
import { useState } from 'react'
import { TIME_ZONE_CODES } from '../constants'
import TimeZoneContainer from '../components/TimeZoneContainer'
import { useRouter } from 'next/router'
import Typography from 'antd/lib/typography'
import GlobalStyles from '../styles/GlobalStyles'
import { Button, message } from 'antd'
import { copyToClipboard } from '../utils'
import moment from 'moment-timezone'
import Head from 'next/head'

message.config({
    duration: 1,
    maxCount: 1,
})

const getInitialProps = (time, fromTz, toTz) => ({
    _time: time ? new Date(Number(time)) : new Date(),
    _fromTz: fromTz || moment.tz.guess(),
    _toTz: toTz || TIME_ZONE_CODES[TIME_ZONE_CODES.length - 1],
})

const successToast = () => {
    copyToClipboard(window.location.href)
    message.success('Link copied to clipboard')
}

function Home({ ts, from, to }) {
    const { push } = useRouter()

    const { _time, _fromTz, _toTz } = getInitialProps(ts, from, to)

    const [time, setTime] = useState(_time)

    const [fromTz, setFromTz] = useState(_fromTz)
    const [toTz, setToTz] = useState(_toTz)

    const onDateChange = (date) => {
        push(
            `?ts=${date.getTime()}&from=${encodeURIComponent(_fromTz)}&to=${encodeURIComponent(
                _toTz
            )}`
        )
        setTime(date)
    }

    const onTimeZoneChange = (tz, side) => {
        if (side === 'from') {
            push(
                `?ts=${ts || time.getTime()}&from=${encodeURIComponent(tz)}&to=${encodeURIComponent(
                    _toTz
                )}`
            )
            setFromTz(tz)
        } else {
            push(
                `?ts=${ts || time.getTime()}&from=${encodeURIComponent(
                    _fromTz
                )}&to=${encodeURIComponent(tz)}`
            )
            setToTz(tz)
        }
    }

    if (!fromTz || !toTz || !time) return 'Loading'
    return (
        <Container>
            <Head>
                <title>Time zone converter</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Convert time from one zone to other zone." />
                <meta name="keywords" content="Timezone, timezone-converter, timezone converter" />
                <meta name="author" content="Saketh" />
                <meta property="og:title" content="Time zone converter" />
                <meta property="og:url" content="https://time-zone-converter.vercel.app/" />
                <meta
                    property="og:description"
                    content="Convert time from one zone to other zone."
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://time-zone-converter.vercel.app/" />
            </Head>
            <GlobalStyles />
            <Heading level={3}>Time Zone Converter</Heading>
            <Section>
                <TimeZoneContainer
                    section="from"
                    selectedTz={fromTz}
                    selectedTime={time}
                    onDateChange={onDateChange}
                    onTimeZoneChange={onTimeZoneChange}
                />

                <TimeZoneContainer
                    section="to"
                    selectedTz={toTz}
                    selectedTime={time}
                    onDateChange={onDateChange}
                    onTimeZoneChange={onTimeZoneChange}
                />
            </Section>
            <ShareButton onClick={successToast} size={'small'} danger type="dashed">
                Share
            </ShareButton>
        </Container>
    )
}

Home.getInitialProps = ({ query }) => query

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Section = styled.section`
    display: flex;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const Heading = styled(Typography.Title)`
    &.ant-typography {
        color: #242424;
        margin-bottom: 20px;
    }
`

const ShareButton = styled(Button)`
    margin-top: 50px;
`

export default Home
