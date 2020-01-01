import React from "react";
import { useCountToRedirect } from "../../hooks/CountToRedirect";

export function NoOrders() {
  const ttr = useCountToRedirect("/bag");
  return (
    <React.Fragment>
      <h3>Redirecting to bag page in {ttr}...</h3>{" "}
    </React.Fragment>
  );
}
