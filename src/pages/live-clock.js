import Clock from 'react-clock';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import clock_dial_audio from '../assets/sounds/clock-dial';
import { Button } from 'antd';
import { SoundOutlined, NotificationOutlined } from '@ant-design/icons'


const LiveClock = () => {

    const getDate = () => {
        const date = new Date()
        date.setSeconds(date.getSeconds() + 1)
        return date
    }

    const [date, setDate] = useState(getDate())

    const audioRef = useRef()

    const speak = text => {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.rate = 0.9;
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }
    useEffect(() => {
        audioRef.current = new Audio(clock_dial_audio)
        audioRef.current.muted = true
        const intervelId = setInterval(() => {
            setDate(getDate())
            if (!audioRef.current.muted) {
                audioRef.current.play()
            }
        }, 1000)
        return () => clearInterval(intervelId)
    }, [])
    return <Container>
        <Clock value={date} size={400} renderNumbers={true} />
        <div style={{ marginTop: '20px' }}>
            <Button icon={<SoundOutlined />} onClick={() => audioRef.current.muted = !audioRef.current.muted}>Mute / Unmute</Button>
            <Button icon={<NotificationOutlined />} onClick={() => speak(new Date().toLocaleString())}>Speak out</Button>
        </div>
    </Container>
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
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

