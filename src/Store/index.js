export const initialState = {
    addedPokemonsUrls: []
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_POKEMON_ON_POKEDEX": 
            const newAddedPokemonsUrls = [...state.addedPokemonsUrls, action.pokeUrl]

            return {
                ...state,
                addedPokemonsUrls: newAddedPokemonsUrls
            }
        default: 
            return state
    }
}