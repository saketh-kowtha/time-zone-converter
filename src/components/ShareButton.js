import styled from 'styled-components'
import { Button } from 'antd'
import { copyUrlAndShowToast } from '../utils'

export default function ShareButton() {
    return (
        <StyledButton onClick={copyUrlAndShowToast} size={'small'} danger type="dashed">
            Share
        </StyledButton>
    )
}

const StyledButton = styled(Button)`
    margin-top: 50px;
`
