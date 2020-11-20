export const initialState = {
    pokedexPokemons: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_POKEMON_ON_POKEDEX": 
            const copyOfPokedexPokemons = [...state.pokedexPokemons, action.addedPokemon]
            return {
                ...state,
                pokedexPokemons: copyOfPokedexPokemons
            }

        case "REMOVE_POKEMON_FROM_POKEDEX": 
            const filteredPokedexPokemons = state.pokedexPokemons.filter(pokemon => {
                return pokemon.name !== action.pokeName
            })

            return {
                ...state,
                pokedexPokemons: filteredPokedexPokemons
            }
        default: 
            return state
    }
}