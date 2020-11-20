import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { HeaderContainer, LeftHeaderButton, RightHeaderButton } from "./styles";


const Header = ({leftButtonFunction, title, rightButtonFunction}) => {
    const history = useHistory()
    
    const leftButtonTitle = () => {
        switch(title) {
            case "Lista de pokemons":
                return "Ir para Pokedex"
            case "Pokedex": 
                return "Voltar para lista de pokemons"
            default: 
                return "Voltar"
        }
    }

    return (
        <HeaderContainer>
            <LeftHeaderButton onClick={() => leftButtonFunction(history)} >
                {leftButtonTitle()}
            </LeftHeaderButton>
            <h1>{title}</h1>
            {rightButtonFunction && <RightHeaderButton onClick={() => rightButtonFunction(history)} >
                Ir para pokedex
            </RightHeaderButton>}
        </HeaderContainer>
    )
}

export default Header