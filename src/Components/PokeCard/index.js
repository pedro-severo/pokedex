import React, { useContext } from "react";
import { PokeCardContainer, ImgContainer, PokeImg, ButtonsContainer } from "./styles";
import { useRequestData } from "../../hooks/useRequestData";
import PokedexUrlsContext from "../../Contexts/PokedexUrls";
import { useHistory } from "react-router-dom";
import { goToPokeDetailPage } from "../../Router/routeActions";

const PokeCard = ({pokeUrl, pokeName, cardOnHomePage}) => {
    const pokemon = useRequestData(pokeUrl, undefined)
    const pokedexContext = useContext(PokedexUrlsContext)
    const history = useHistory()

    const handleClickAddOrRemovePokemon = () => {
        if (cardOnHomePage) {
            const addedPokemon = {
                name: pokeName,
                url: pokeUrl
            }

            pokedexContext.dispatch({type: "ADD_POKEMON_ON_POKEDEX", addedPokemon})
        } else {
            const pokeName = pokemon.name

            pokedexContext.dispatch({type: "REMOVE_POKEMON_FROM_POKEDEX", pokeName})
        }
    }

    return (
        pokemon ? (
            <PokeCardContainer >
                <ImgContainer>
                    <PokeImg src={pokemon.sprites.front_default} alt="pokemon" />
                </ImgContainer>
                <ButtonsContainer>
                    <button onClick={handleClickAddOrRemovePokemon}>
                        {cardOnHomePage ? "Adicionar a Pokedex" : "Remover da Pokedex"}
                    </button>
                    <button onClick={() => goToPokeDetailPage(history, pokemon.id)}>
                        Ver detalhes
                    </button>
                </ButtonsContainer>
            </PokeCardContainer>
        ) : (
            <div>{pokeName ? (pokeName) : ("Pokemon")}</div>
        )
    )
}

export default PokeCard