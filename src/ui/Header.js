import React from "react";
import styled from "styled-components";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { common } from "./commonStyle";
import { useThemeService } from "../services/themes";

const HeaderSection = styled.header`
  ${common}
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
  }
`;

const Image = styled.img`
  height: 50px;
  width: 70px;
`;

const Nav = styled.nav`
  &&& {
    a {
      margin-left: 10px;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  align-items: center;
`;

export function Header({ children }) {
  const { themeName, setTheme, themeNames } = useThemeService();

  return (
    <HeaderSection>
      <Logo>
        <Image src={logo} alt="logo" />
        <h1>{children}</h1>
      </Logo>
      <select value={themeName} onChange={e => setTheme(e.target.value)}>
        {themeNames.map(name => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/bag">Bag</Link>
        <Link to="/orders">My Orders</Link>
      </Nav>
    </HeaderSection>
  );
}
