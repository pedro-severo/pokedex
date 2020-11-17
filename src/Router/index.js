import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddedPokemonsPage from "../Components/AddedPokemonsPage"
import PokeDetailPage from "../Components/PokeDetailPage"
import PokeListPage from "../Components/PokeListPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PokeListPage />
                </Route>
                <Route exact path="/poke-detail/:id">
                    <PokeDetailPage />
                </Route>
                <Route exact path="/added-pokemons">
                    <AddedPokemonsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router