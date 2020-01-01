import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import App from "./ui/App";
import { ItemsService } from "./services/items";
import { OrdersService } from "./services/orders";
import { ThemeService } from "./services/themes";

ReactDOM.render(
  <Router>
    <ThemeService>
      <OrdersService>
        <ItemsService>
          <App />
        </ItemsService>
      </OrdersService>
    </ThemeService>
  </Router>,
  document.getElementById("root")
);
