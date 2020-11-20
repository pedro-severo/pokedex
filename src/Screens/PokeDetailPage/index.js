import React, { useEffect } from "react" 
import axios from "axios"
import { BASE_URL } from "../../Constants/axios"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"

const PokeDetailPage = () => {
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/${params.id}`, {})

    return (
        <div>
            {data.sprites && 
                <div>
                    <img src={data.sprites.front_default} /> 
                    <img src={data.sprites.back_default} />
                    {data.stats.map(stat => {
                        return <p><strong>{stat.stat.name}: </strong>{stat.base_stat}</p>
                    })}
                    <hr />
                    {data.types.map(type => {
                        return <p>{type.type.name}</p>
                    })}
                    <hr />
                    {data.moves.map((move, index) => {
                        return index < 5 && <p>{move.move.name}</p>
                    })}
                </div>
            }
        </div>
    )
}

export default PokeDetailPage