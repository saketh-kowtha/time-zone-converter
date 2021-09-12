import { useState } from 'react'
import { TIME_ZONE_CODES } from '../constants'
import { useRouter } from 'next/router'
import { Container, Heading, Section, Loader, ShareButton, TimeZoneInputContainer } from '../components'
import { constructUrl } from '../utils'

export default function Home({ ts, fromTz, toTz }) {
    const { push: routerPush } = useRouter()

    const [time, setTime] = useState(ts)

    const [selectedTimezone, setSelectedTimeZone] = useState({ from: fromTz, to: toTz })

    const setFromTz = (from) => setSelectedTimeZone({ ...selectedTimezone, from })

    const setToTz = (to) => setSelectedTimeZone({ ...selectedTimezone, to })

    const updateUrl = (...args) => {
        const url = constructUrl(...args)
        routerPush(url)
    }

    const onDateChange = (date) => {
        updateUrl(date.getTime(), fromTz, toTz)
        setTime(date)
    }

    const updateTimezone = ({ ts, tz, from, to, callback: updateTz }) => {
        updateUrl(ts, from, to)
        updateTz(tz)
    }

    const onFromTzChange = (tz) => updateTimezone({ ts: ts || time.getTime(), from: tz, to: toTz, callback: setFromTz, tz })

    const onToTzChange = (tz) => updateTimezone({ ts: ts || time.getTime(), from: fromTz, to: tz, callback: setToTz, tz })

    if (!selectedTimezone.from || !selectedTimezone.to || !time) return <Loader />

    const sections = [
        {
            selectedTz: selectedTimezone.from,
            selectedTime: time,
            onDateChange,
            onTimeZoneChange: onFromTzChange,
        },
        {
            selectedTz: selectedTimezone.to,
            selectedTime: time,
            onDateChange,
            onTimeZoneChange: onToTzChange,
        },
    ]

    return (
        <>
            <Container>
                <Heading level={1}>Convert time zone</Heading>
                <Section>
                    {sections.map((sectionProps) => (
                        <TimeZoneInputContainer key={sectionProps.selectedTz} {...sectionProps} />
                    ))}
                </Section>
                <ShareButton />
            </Container>
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
