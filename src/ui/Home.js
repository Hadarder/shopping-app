import React from "react";
import styled from 'styled-components';
import { MainSection } from "./commonStyle";
import cart from "../cart.png"

const Cart = styled.img`
    height: 300px;
    width: 400px;
`;
export function Home() {
    return (
      <MainSection heading="Home Page">
        <blockquote>Welcome!</blockquote>
        <Cart src={cart} alt="cart"/>
      </MainSection>
    );
  }