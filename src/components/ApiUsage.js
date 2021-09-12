import { Button } from 'antd'
import { useRouter } from 'next/router'
import styled from 'styled-components'

export default function APIUsageButton() {
    const { push: routerPush } = useRouter()

    const navigateToApiDocs = () => routerPush('https://github.com/saketh-kowtha/time-zone-converter#api-usage')

    const navigateToGithub = () => routerPush('https://github.com/saketh-kowtha/time-zone-converter')

    return (
        <ButtonContainer>
            <Button onClick={navigateToApiDocs} type="ghost">
                Api Docs
            </Button>
            <Button onClick={navigateToGithub} type="link" danger>
                Github
            </Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`
