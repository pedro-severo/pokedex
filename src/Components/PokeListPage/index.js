import React, { useReducer, useState } from "react";
import { BASE_URL } from "../../Constants";
import PokeCard from "../PokeCard";
import { useRequestData } from "../../hooks/useRequestData";
import PageSelector from "../PageSelector";
import { PokeListContainer } from "./styled";
import { initialState, reducer } from "../../Store";
import { useHistory } from "react-router-dom"

const PokeListPage = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [url, setUrl] = useState(`${BASE_URL}/?offset=0&limit=3`);
    const pokeList = useRequestData(url, undefined);
    const history = useHistory()

    const handleChangePage = (url, pageDirection) => {
        setUrl(url)
        setPageNumber(pageNumber + pageDirection)
    }

    return (
        <div>
            {pokeList && 
                <div>
                    <button onClick={() => history.push("/added-pokemons")} >Ir para pokemons adicionados</button>
                    <PokeListContainer>
                        {pokeList.results.map(pokemon => {
                            return <PokeCard 
                                key={pokemon.name}
                                pokeUrl={pokemon.url}
                                pokeName={pokemon.name}
                                cardOnPokeListPage={true}
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