import React from "react"
import PokeCard from "../PokeCard"
import styled from "styled-components"

export const PokeListContainer = styled.main `
    width: 100vw;
    height: 92vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const PokeList = ({list, cardOnHomePage}) => {

    return (
        <PokeListContainer>
            {list.map(pokemon => {
                return <PokeCard
                    key={pokemon.name}
                    pokeUrl={pokemon.url}
                    pokeName={pokemon.name}
                    cardOnHomePage={cardOnHomePage}
                />
            })}
        </PokeListContainer>
    )
}

export default PokeList