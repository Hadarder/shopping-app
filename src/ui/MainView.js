import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { Bag } from "./BagPage/Bag";
import { Orders } from "./OrdersPage/Orders";
import {PageNotFound} from "./PageNotFound";

export function MainView() {
  return (
    <Switch>
      <Route path="/" exact c>
        <Home />
      </Route>
      <Route path="/bag">
        <Bag />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
}
