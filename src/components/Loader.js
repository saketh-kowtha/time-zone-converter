import { Space, Spin } from 'antd'
import styled from 'styled-components'

export default function Loader() {
    return (
        <LoaderContainer>
            <Space size="large">
                <Spin size="large" />
            </Space>
        </LoaderContainer>
    )
}

const LoaderContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
`
