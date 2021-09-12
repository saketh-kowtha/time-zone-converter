import { Section, Loader, TimeZoneInputContainer } from '../components'
import { constructUrl } from '../utils'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function TimeZoneConverter({ ts, fromTz, toTz }) {
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

    if (!selectedTimezone.from || !selectedTimezone.to || !time) return <Loader />

    return (
        <Section>
            {sections.map((sectionProps) => (
                <TimeZoneInputContainer key={sectionProps.selectedTz} {...sectionProps} />
            ))}
        </Section>
    )
}
