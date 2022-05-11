/*----------------------------------------------------        DESCRIÇÃO        -------------------------------------------------------- */
//          Componente MainTitle, responsável pelo título principal das páginas.
//          Possui o aspecto visual de um texto com 2 linhas em cada lado, todo o conteúdo centralizado e destacado pelo tamanho.
//    
//          Parâmetros de entrada:
//              - title: String. Define o texto que aparecerá no centro do componente.
/*------------------------------------------------------------------------------------------------------------------------------------- */

import React from 'react'
import styled from 'styled-components'

export default function MainTitle({ title }) {

    const TitleContainer = styled.div`
        margin-top: 40px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    `
    const DoubleLine = styled.div`
        margin: 10px 0 20px 0;
        border-style: solid;
        border-width: 2px 0;
        border-color: #D7D7D7;
        min-width: 1px;
        height: 8px;
    `

    const ContainerText = styled.div`
        max-width: 1500px;
    `

    const TitleText = styled.p`
        color: #0357B6;
        font-size: 26px;
        font-weight: 600;
        text-align: center;
        overflow-wrap: break-word;
    `

    return (
        <TitleContainer>
            <DoubleLine />
            <ContainerText>
                <TitleText>{title}</TitleText>
            </ContainerText>
            <DoubleLine />
        </TitleContainer>
    )
}
