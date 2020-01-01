import React from "react";
import { MainSection } from "../commonStyle";
import { BagList } from "./BagList";
import { ItemAdder } from "./ItemAdder";
import { Button } from "../commonStyle";
import { useItemsService } from "../../services/items";
import {useOrderssService} from "../../services/orders";


export function Bag() {
  const { total, items, deleteAllItems } = useItemsService();
  const {addOrder} = useOrderssService();
  return (
    <MainSection heading="Bag">
      <ItemAdder />
      <BagList />
      {items.length === 0 ? (
        <h3>Your Bag Is Empty :(</h3>
      ) : (
        <div>
          <h3>{`Total: ${total} $`} </h3>
          <Button onClick={() => {
            addOrder(new Date(),total);
            deleteAllItems()}}>Order</Button>
        </div>
      )}
    </MainSection>
  );
}
