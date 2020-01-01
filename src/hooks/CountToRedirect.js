import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

export function useCountToRedirect(path) {
  const [ttr, setTtr] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTtr(ttr - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ttr])
  if (ttr === 0) {
    return <Redirect to={path} />;
  }

  return ttr;
}