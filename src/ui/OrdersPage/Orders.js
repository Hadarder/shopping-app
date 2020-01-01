import React from "react";
import { MainSection } from "../commonStyle";
import { OrdersList } from "./OrdersList";
import { useOrderssService } from "../../services/orders";
import {NoOrders} from "./NoOrders"

export function Orders() {
  const { orders } = useOrderssService();
  return (
    <MainSection heading="My Orders">
      {orders.length === 0 ? <NoOrders/> : <OrdersList />}
    </MainSection>
  );
}
