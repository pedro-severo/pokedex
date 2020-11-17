import React, { useContext } from "react"
import AddedPokemonsUrlsContext from "../../Contexts/AddedPokemonsUrls"
import PokeCard from "../PokeCard"

const AddedPokemonsPage = () => {
    const addedPokemonsContext = useContext(AddedPokemonsUrlsContext)

    return (
        <div>
            {addedPokemonsContext.addedPokemonsUrls.map(url => {
                return <PokeCard 
                    key={url}
                    pokeUrl={url}
                    pokeName={null}
                    cardOnPokeListPage={false}
                />
            })}
        </div>
    )
}


export default AddedPokemonsPage