import React from "react";
import { useOrderssService } from "../../services/orders";
import {OrderItem} from "./OrderItem";

export function OrdersList() {
  const { orders } = useOrderssService();
  return (
    <ul>
      {orders.map((order) => (
        <OrderItem key={order.id} order={order} />
      ))}
    </ul>
  );
}
