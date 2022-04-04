import { GithubFilled } from '@ant-design/icons'
import { Button } from 'antd'
import styled from 'styled-components'

export default function APIUsageButton() {
    return (
        <ButtonContainer>
            {/* <Button target={'_self'} href='https://github.com/saketh-kowtha/time-zone-converter#api-usage' type='link'>
                Api usage
            </Button> */}
            <Button target={'_blank'} href='https://github.com/saketh-kowtha/time-zone-converter' icon={<GithubFilled />} type="text"></Button>
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
`
