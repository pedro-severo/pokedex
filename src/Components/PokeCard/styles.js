import styled from "styled-components"

export const PokeCardContainer = styled.div`
    height: 50vh;
    width: 24vw;
    display: grid;
    grid-template-rows: 70% 30%;

    :hover {
        background: #f1f1f1;
        cursor: pointer;
    }
`

export const ImgContainer = styled.div`
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const PokeImg = styled.img`
    height: 60%;
`