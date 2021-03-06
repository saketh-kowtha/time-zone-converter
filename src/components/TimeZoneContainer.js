import styled from 'styled-components'
import { DatePicker, Select } from 'antd'
import { useState, useEffect } from 'react'
import moment from 'moment-timezone'
import { TIME_ZONE_CODES } from '../constants'
import { replaceUnderScroreWithSpace } from '../utils'

const TimeZoneContainer = ({
    selectedTz,
    selectedTime,
    onDateChange,
    section,
    onTimeZoneChange,
}) => {
    const [time, setTime] = useState(null)
    const hadnleTimeZoneChange = (tz) => {
        onTimeZoneChange(tz, section)
        const ts = getTimeStrampFromDate(time.toDate())
        setTime(tsToTime(ts, tz))
    }

    const validate = (date) => {
        setTime(date)
        onDateChange(date.utc().toDate())
    }

    useEffect(() => {
        setTime(tsToTime(selectedTime, selectedTz))
    }, [selectedTime, selectedTz])

    return (
        <TimeZoneSection>
            <DatePickerStyled
                showTime
                size={'large'}
                use12Hours={true}
                format="MMM Do YYYY, ddd, h:mm A"
                value={time}
                onChange={validate}
            />
            <SelectStyled
                size={'large'}
                showSearch
                value={selectedTz}
                onChange={hadnleTimeZoneChange}
            >
                {TIME_ZONE_CODES.map((tz) => (
                    <Select.Option key={tz} value={tz}>
                        {replaceUnderScroreWithSpace(tz)}
                    </Select.Option>
                ))}
            </SelectStyled>
        </TimeZoneSection>
    )
}

export default TimeZoneContainer

const TimeZoneSection = styled.div`
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

const DatePickerStyled = styled(DatePicker)`
    width: 300px;
    margin-bottom: 20px;
`

const SelectStyled = styled(Select)`
    width: 300px;
`

const getTimeStrampFromDate = (date) => date.getTime()

const tsToTime = (ts, timeZone) => moment(ts).tz(timeZone)
