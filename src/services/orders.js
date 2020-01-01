import React, { createContext, useContext, useState } from "react";

const OrdersContext = createContext();

export function useOrderssService() {
  return useContext(OrdersContext);
}

let _id = 0;
const getId = () => _id++;

const createOrder = (date, price) => ({
  date,
  price,
  id: getId()
});

export function OrdersService({ children }) {
  const [orders, setOrders] = useState([]);

  const addOrder = (date, price) => {
    const newOrder = createOrder(formatDate(date), price);
    setOrders([...orders, newOrder]);
  };

  const formatDate  = date => {
    return date.toString().split(" ").slice(0,5).join(" ");
  }

  const ctx = {
    orders,
    addOrder
  };

  return (
    <OrdersContext.Provider value={ctx}>{children}</OrdersContext.Provider>
  );
}
