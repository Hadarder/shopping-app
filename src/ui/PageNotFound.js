import React from "react";
import {useLocation} from "react-router-dom";
import { MainSection } from "./commonStyle";
import {useCountToRedirect} from "../hooks/CountToRedirect";

export function PageNotFound() {
  const location = useLocation();

  const ttr = useCountToRedirect("/");

  return (
    <MainSection heading={`Page ${location.pathname} not found :(`}>
      <h3>Redirecting to home page in {ttr}...</h3>
    </MainSection>
  );
}

