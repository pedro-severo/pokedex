import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants";
import PokeCard from "../PokeCard";
import { useRequestData } from "../../hooks/useRequestData";
import PageSelector from "../PageSelector";
import { PokeListContainer } from "./styled";

const PokeListPage = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [url, setUrl] = useState(`${BASE_URL}/?offset=0&limit=3`)
    const pokeList = useRequestData(url, undefined)

    const handleChangePage = (url, pageDirection) => {
        setUrl(url)
        setPageNumber(pageNumber + pageDirection)
    }

    return (
        <div>
            {pokeList && 
                <div>
                    <PokeListContainer>
                        {pokeList.results.map(pokemon => {
                            return <PokeCard 
                                key={pokemon.name}
                                pokeUrl={pokemon.url}
                                pokeName={pokemon.name}
                            />
                        })}
                    </PokeListContainer>
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