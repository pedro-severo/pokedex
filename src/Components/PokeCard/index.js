import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = ({pokeUrl, pokeName}) => {
    const [pokeDetail, setPokeDetail] = useState({})

    useEffect(() => {
        axios.get(pokeUrl).then(response => {
            setPokeDetail(response.data)
        })
    }, [pokeUrl])

    return (
        <div>
            {pokeDetail.id}
        </div>
    )
}

export default PokeCard