import React, { useReducer } from 'react';
import styled from "styled-components"
import PokedexUrlsContext from './Contexts/PokedexUrls';
import Router from './Router';
import { initialState, reducer } from './Store';

export const MainStyled = styled.div`
  margin:0;
  padding:0;
`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainStyled>
      <PokedexUrlsContext.Provider
        value={{pokedexPokemons: state.pokedexPokemons, dispatch: dispatch}}
      >
        <Router />
      </PokedexUrlsContext.Provider>
    </MainStyled>
  );
}

export default App;
