import React, { useContext } from "react";
import { PokeCardContainer, ImgContainer, PokeImg } from "./styles";
import { useRequestData } from "../../hooks/useRequestData";
import AddedPokemonsUrlsContext from "../../Contexts/AddedPokemonsUrls";
import { useHistory } from "react-router-dom";

const PokeCard = ({pokeUrl, pokeName, cardOnPokeListPage}) => {
    const pokemon = useRequestData(pokeUrl, undefined)
    const addedPokemonsContext = useContext(AddedPokemonsUrlsContext)
    const history = useHistory()

    const handleClickCard = () => {
        if (cardOnPokeListPage) {
            addedPokemonsContext.dispatch({type: "ADD_POKEMON_ON_POKEDEX", pokeUrl})
        } else {
            history.push(`/poke-detail/${pokemon.id}`)
        }
    }

    return (
        pokemon ? (
            <PokeCardContainer onClick={handleClickCard}>
                <ImgContainer>
                    <PokeImg src={pokemon.sprites.front_default} alt="pokemon" />
                </ImgContainer>
                <div>
                    <p>ID: {pokemon.id}</p>
                    {pokemon.types.map(type => {
                        return <span key={type.type.name} >{type.type.name} </span>
                    })}
                    <p>{pokeName}</p>
                </div>
            </PokeCardContainer>
        ) : (
            <div>{pokeName ? (pokeName) : ("Pokemon")}</div>
        )
    )
}

export default PokeCard