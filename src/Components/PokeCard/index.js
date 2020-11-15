import React, { useEffect, useState } from "react";
import axios from "axios";
import { PokeCardContainer, ImgContainer, PokeImg } from "./styles";
import { useHistory } from "react-router-dom";
import { goToPokeDetailPage } from "../../Router/routeActions";
import { useRequestData } from "../../hooks/useRequestData";

const PokeCard = ({pokeUrl, pokeName}) => {
    const pokemon = useRequestData(pokeUrl, undefined)

    const history = useHistory()

    const handleClickCard = () => {
        goToPokeDetailPage(history, pokemon.id)
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
            <div>{pokeName}</div>
        )
    )
}

export default PokeCard