import React from "react";
import styled from "styled-components";
import { BagItem } from "./BagItem";
import { useItemsService } from "../../services/items";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;


export function BagList() {
  const { items } = useItemsService();
  return (
    <Ul>
      {items.map((item, index) => (
        <BagItem key={item.id} item={item} />
      ))}
    </Ul>
  );
}
