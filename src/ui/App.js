import React from 'react';
import { Header } from "./Header";
import {Fotter} from './Fotter';
import { MainContainer } from "./commonStyle";
import { MainView } from './MainView';

function App() {
  return (
    <MainContainer>
      <Header>Shopping</Header>
      <MainView/>
      <Fotter/>
    </MainContainer>
  );
}

export default App;
