import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
            </Switch>
        </BrowserRouter>
    )
}

export default Router