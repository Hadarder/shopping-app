import React from "react";
import styled from 'styled-components';
import {common} from './commonStyle';

const FooterSection = styled.footer`
  ${common}
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export function Fotter() {
  return (
    <FooterSection>
      <small>&copy; Copyright </small>
    </FooterSection>
  );
}
