import styled from 'styled-components'
import { DatePicker, Select } from 'antd'
import { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import { TIME_ZONE_CODES } from '../constants'
import { replaceUnderScroreWithSpace } from '../utils'

const getTimeStrampFromDate = (date) => date.getTime()

const tsToTime = (ts, timeZone) => moment(ts).tz(timeZone)

const TimeZoneInputContainer = ({ selectedTz, selectedTime, onDateChange, onTimeZoneChange }) => {
    const [time, setTime] = useState(null)

    const hadnleTimeZoneChange = (tz) => {
        onTimeZoneChange(tz)
        const ts = getTimeStrampFromDate(time.toDate())
        setTime(tsToTime(ts, tz))
    }

    const handleTimeChange = (date) => {
        setTime(date)
        onDateChange(date.utc().toDate())
    }

    useEffect(() => {
        setTime(tsToTime(selectedTime, selectedTz))
    }, [selectedTime, selectedTz])

    const notFoundContent = `Oops!! look like invalid timezone 🤔`
    return (
        <TimezoneInputContainer>
            <StyledDatePicker showTime size={'large'} use12Hours={true} format="MMM Do YYYY, ddd, h:mm A" value={time} onChange={handleTimeChange} />
            <StyledSelect size={'large'} notFoundContent={notFoundContent} showSearch value={selectedTz} onChange={hadnleTimeZoneChange}>
                {TIME_ZONE_CODES.map((tz) => (
                    <Select.Option role="option" key={tz} value={tz}>
                        {replaceUnderScroreWithSpace(tz)}
                    </Select.Option>
                ))}
            </StyledSelect>
        </TimezoneInputContainer>
    )
}

export default TimeZoneInputContainer

const TimezoneInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 50px;
    @media (max-width: 800px) {
        padding-left: 0px;
    }
    :first-child {
        padding-left: 0;
        padding-right: 50px;
        border-right: 1px dashed #d9d9d9;
        @media (max-width: 800px) {
            justify-content: center;
            align-items: center;
            padding-right: 0px;
            border-right: none;
            border-bottom: 1px dashed #d9d9d9;
        }
    }
`

const StyledDatePicker = styled(DatePicker)`
    width: 300px;
    margin-bottom: 20px;
`

const StyledSelect = styled(Select)`
    margin-top: 8px !important;
    width: 300px;
`
