import { Button } from 'antd'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export default function APIUsageButton() {
    const { push: routerPush } = useRouter()

    const buttonClickHandler = () => routerPush('https://github.com/saketh-kowtha/time-zone-converter#api-usage')

    return (
        <ButtonContainer>
            <Button onClick={buttonClickHandler} type="ghost">
                Api Docs
            </Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`
