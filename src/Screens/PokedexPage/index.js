import React, { useContext } from "react"
import PokedexUrlsContext from "../../Contexts/PokedexUrls"
import PokeList from "../../Components/PokeList"

const PokedexPage = () => {
    const store = useContext(PokedexUrlsContext)

    return (
        <div>
            <PokeList list={store.pokedexPokemons} cardOnHomePage={false} />
        </div>
    )
}


export default PokedexPage