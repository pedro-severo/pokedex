import React, { useContext, useReducer, useState } from "react";
import { BASE_URL } from "../../Constants/axios";
import { useRequestData } from "../../hooks/useRequestData";
import PokeList from "../../Components/PokeList";
import PokedexUrlsContext from "../../Contexts/PokedexUrls";

const HomePage = () => {
    const data = useRequestData(`${BASE_URL}/?offset=0&limit=20`, undefined);

    return (
        <div>
            {data && <PokeList list={data.results} cardOnHomePage={true} />}
        </div>
    )
}

export default HomePage