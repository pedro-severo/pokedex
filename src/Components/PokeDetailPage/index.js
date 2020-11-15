import React, { useEffect } from "react" 
import axios from "axios"
import { BASE_URL } from "../../Constants"
import { useParams } from "react-router-dom"

const PokeDetailPage = () => {
    const params = useParams()

    useEffect(() => {

        axios.get(`${BASE_URL}/${params.id}`).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        }) 
    }, [BASE_URL, params.id])

    return (
        <div>
            Posddsads
        </div>
    )
}

export default PokeDetailPage