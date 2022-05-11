import React from 'react'
import styled from 'styled-components'

export default function CardContainer(props) {

    const Container = styled.div`
        padding: 0 80px;
        margin: 24px 64px;
    `


    return (
        <Container className='card'>
            {props.children}
        </Container>
    )
}
