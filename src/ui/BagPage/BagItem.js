import React from "react";
import styled from "styled-components";
import { useItemsService } from "../../services/items";

const Span = styled.span`
  cursor: context-menu;
  user-select: none;
`;

export function BagItem({ item }) {
  const { deleteItem } = useItemsService();
  const { title, price, amount, id } = item;
  return (
    <li>
      <Span onDoubleClick={() => deleteItem(id)}>
        {`${title} ${price}$ ${amount}`}
      </Span>
    </li>
  );
}
