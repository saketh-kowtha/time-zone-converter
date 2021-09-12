import { TIME_ZONE_CODES } from '../constants'
import { APIUsageButton, Container, Heading, ShareButton } from '../components'
import TimeZoneConverter from '../modules/TimeZoneConverter'

export default function Home(props) {
    return (
        <>
            <Container>
                <Heading level={1}>Convert time zone</Heading>
                <TimeZoneConverter {...props} />
                <ShareButton />
            </Container>
            <APIUsageButton />
        </>
    )
}

Home.getInitialProps = ({ query }) => {
    const { ts, from, to } = query
    return {
        ts: (ts ? new Date(Number(ts)) : new Date()).getTime(),
        fromTz: from || Intl.DateTimeFormat().resolvedOptions().timeZone,
        toTz: to || TIME_ZONE_CODES[TIME_ZONE_CODES.length - 1],
    }
}
