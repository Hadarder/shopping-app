import styled, { css } from "styled-components";
import React from "react";

export const common = css`
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
`;

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:  ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  font-family: Optima, sans-serif;
`;

export const Main = styled.main`
  padding: 20px;
  margin-bottom: 58px;

  section * {
    margin-right: 5px;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 3px;
  background-color: #ffffff;
  color: black;
  cursor: pointer;

  :active {
    cursor: grab;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export function MainSection({ children, heading }) {
  return (
    <Main>
      <h2>{heading}</h2>
      {children}
    </Main>
  );
}
