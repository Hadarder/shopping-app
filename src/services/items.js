import React, { createContext, useContext, useState } from "react";

const ItemsContext = createContext();

export function useItemsService() {
  return useContext(ItemsContext);
}

let _id = 0;
const getId = () => _id++;
const createItem = (title, price, amount) => ({
  title,
  price,
  amount,
  id: getId()
});

const ITEMS = [
  createItem("Hat", 100, 3),
  createItem("Dress", 200, 1),
  createItem("Boots", 500, 1)
];

export function ItemsService({ children }) {
  const [items, setItems] = useState(ITEMS);
  const [total, setTotal] = useState(1000);

  const deleteItem = itemId => {
    const item = items.find(item => item.id === itemId);
    const itemsAfterChange = items.filter(item => item.id !== itemId);
    setItems(itemsAfterChange);
    setTotal(total - item.price * item.amount);
  };

  const addItem = (title, price, amount) => {
    const newItem = createItem(title, price, amount);
    setItems([...items, newItem]);
    setTotal(total + price * amount);
  };

  const deleteAllItems = () => {
      setTotal(0);
      setItems([]);
  }

  const ctx = {
    items,
    total,
    deleteItem,
    addItem,
    deleteAllItems
  };

  return <ItemsContext.Provider value={ctx}>{children}</ItemsContext.Provider>;
}
