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
        border: 10px solid #966f33;
        box-shadow: rgb(0 0 0 / 13%) 0px 4px 8px 0px;
    }
`

export default LiveClock