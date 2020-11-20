import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "../Components/Header"
import HomePage from "../Screens/HomePage"
import PokeDetailPage from "../Screens/PokeDetailPage"
import PokedexPage from "../Screens/PokedexPage"
import { goBack, goToPokedex, goToHomePage } from "./routeActions"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header 
                        title="Lista de pokemons"
                        leftButtonFunction={goToPokedex}
                    />
                    <HomePage />
                </Route>
                <Route exact path="/poke-detail/:id">
                    <Header 
                        leftButtonFunction={goBack}
                        title=""
                        rightButtonFunction={goToPokedex}
                    />
                    <PokeDetailPage />
                </Route>
                <Route exact path="/pokedex">
                    <Header 
                        leftButtonFunction={goToHomePage}
                        title="Pokedex"
                    />
                    <PokedexPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router