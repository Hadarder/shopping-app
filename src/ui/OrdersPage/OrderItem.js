import React from "react";
import styled from "styled-components";

const Li = styled.li`
  cursor: context-menu;
`;

export function OrderItem({ order }) {
  const { date, price } = order;
  return <Li>{`${date}     ${price}$`}</Li>;
}
