import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants";
import PokeCard from "../PokeCard";
import { useRequestData } from "../../hooks/useRequestData";
import PageSelector from "../PageSelector";


const PokeListPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [url, setUrl] = useState(`${BASE_URL}/?offset=0&limit=12`)
    const pokeList = useRequestData(url, undefined)

    const handleChangePage = (url, pageDirection) => {
        setUrl(url)
        setPageNumber(pageNumber + pageDirection)
    }

    return (
        <div>
            {pokeList && 
                <div>
                    <div>
                        {pokeList.results.map(pokemon => {
                            return <PokeCard 
                                pokeUrl={pokemon.url}
                                pokeName={pokemon.name}
                            />
                        })}
                    </div>
                    <PageSelector 
                        pageNumber={pageNumber}
                        nextUrl={pokeList.next}
                        previousUrl={pokeList.previous}
                        handleChangePage={handleChangePage}
                    />
                </div>
            }
        </div>
    )
}

export default PokeListPage