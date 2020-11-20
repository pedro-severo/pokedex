import React, { useContext, useReducer, useState } from "react";
import { BASE_URL } from "../../Constants/axios";
import { useRequestData } from "../../hooks/useRequestData";
import PokeList from "../../Components/PokeList";
import PokedexUrlsContext from "../../Contexts/PokedexUrls";

const HomePage = () => {
    const data = useRequestData(`${BASE_URL}/?offset=0&limit=20`, undefined);
    const store = useContext(PokedexUrlsContext)


    const pokeList = data.results.filter(pokemon => {
        store.pokedexPokemons.map(pokemonFromPokedex => {
            if (pokemonFromPokedex.name === pokemon.name) {
                return false
            }
        })
    })

    console.log(pokeList)

    return (
        <div>
            {pokeList && <PokeList list={pokeList} cardOnHomePage={true} />}
        </div>
    )
}

export default HomePage