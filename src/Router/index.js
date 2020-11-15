import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PokeListPage from "../Components/PokeListPage"


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <PokeListPage />
                </Route>
                <Route exact path="/poke-detail/:idOrName">
                    Pokedetail
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router