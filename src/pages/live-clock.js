import Clock from 'react-clock';
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const LiveClock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervelId = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(intervelId)
    }, [])
    return <Container><Clock value={date} size={400} renderNumbers={true} /></Container>
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .react-clock__face{
        background: antiquewhite;
    }
    .react-clock__mark__number{
        color: #000000cc;
    }
    .react-clock__face{
        border: 24px solid cornsilk;
        box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);
    }
    .react-clock__second-hand__body {
        width: 2px !important;
        top: 10% !important;
        bottom: 50% !important;
    }

    .react-clock__minute-hand__body {
        width: 3px !important;
    }

    .react-clock__hour-hand__body {
        width: 5px !important;
    }

`

export default LiveClock

