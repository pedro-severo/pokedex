import React from "react" 
import { BASE_URL } from "../../Constants/axios"
import { useParams } from "react-router-dom"
import { useRequestData } from "../../hooks/useRequestData"
import { TypeAndMovesContainer, PokeInfosContainer, ImgWrapper, ImagesContainer, StatsContainer, TitleContainer, TypesContainer, MovesContainer } from "./styles"

const PokeDetailPage = () => {
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/${params.pokeName}`, {})

    return (
        <div>
            {data.sprites && 
                <PokeInfosContainer>
                    <ImagesContainer>
                        <ImgWrapper src={data.sprites.front_default} /> 
                        <ImgWrapper src={data.sprites.back_default} />
                    </ImagesContainer>
                    <StatsContainer>
                        <TitleContainer>Poderes</TitleContainer>
                        {data.stats.map(stat => {
                            return <p><strong>{stat.stat.name}: </strong>{stat.base_stat}</p>
                        })}
                    </StatsContainer>
                    <TypeAndMovesContainer>
                        <TypesContainer>
                            {data.types.map(type => {
                                return <p>{type.type.name}</p>
                            })}
                        </TypesContainer>
                        <MovesContainer>
                            <TitleContainer>Principais ataques</TitleContainer>
                            {data.moves.map((move, index) => {
                                return index < 5 && <p>{move.move.name}</p>
                            })}
                        </MovesContainer>
                    </TypeAndMovesContainer>
                </PokeInfosContainer>
            }
        </div>
    )
}

export default PokeDetailPage