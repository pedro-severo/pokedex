import React, { useReducer } from 'react';
import styled from "styled-components"
import AddedPokemonsUrlsContext from './Contexts/AddedPokemonsUrls';
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
      <AddedPokemonsUrlsContext.Provider
        value={{addedPokemonsUrls: state.addedPokemonsUrls, dispatch: dispatch}}
      >
        <Router />
      </AddedPokemonsUrlsContext.Provider>
    </MainStyled>
  );
}

export default App;
