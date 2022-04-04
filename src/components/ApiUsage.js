import { GithubFilled, BulbFilled } from '@ant-design/icons'
import { Button } from 'antd'
import { useRouter } from 'next/dist/client/router'
import styled from 'styled-components'

export default function APIUsageButton() {
    const router = useRouter()
    const toggleTheme = () => {
        const theme = localStorage.getItem('theme')
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
        router.reload() 
    }

    return (
        <ButtonContainer>
            {/* <Button target={'_self'} href='https://github.com/saketh-kowtha/time-zone-converter#api-usage' type='link'>
                Api usage
            </Button> */}
            <Button target={'_blank'} href='https://github.com/saketh-kowtha/time-zone-converter' icon={<GithubFilled />} type="text"></Button>
            <Button icon={<BulbFilled />} type="text" onClick={toggleTheme}></Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`
