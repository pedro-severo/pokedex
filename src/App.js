import React from 'react';
import styled from "styled-components"
import Router from './Router';

export const MainStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  margin:0;
  padding:0;
`

function App() {
  return (
    <MainStyled>
      <Router />
    </MainStyled>
  );
}

export default App;
