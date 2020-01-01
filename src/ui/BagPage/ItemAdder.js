import React, { useState } from "react";
import styled from "styled-components";
import {Button} from '../commonStyle';
import { useItemsService } from "../../services/items";
 
const Form = styled.form`
  displey: flex;
`;

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: none;
`;

export function ItemAdder() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const { addItem } = useItemsService();

  const onSubmit = e => {
    e.preventDefault();
    addItem(title, price, amount);
    setTitle("");
    setPrice("");
    setAmount("");
  };

  const isValid = () =>
    title.length === 0 || price.length === 0 || amount.length === 0;

  return (
    <section>
      <Form onSubmit={e => onSubmit(e)}>
        Title:
        <Input
          type="text"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
          required
        />
        Price:
        <Input
          type="number"
          placeholder="Price"
          onChange={e => setPrice(+e.target.value)}
          value={price}
          required
          min="1"
        />
        Amount:
        <Input
          type="number"
          placeholder="Amount"
          onChange={e => setAmount(+e.target.value)}
          value={amount}
          required
          min="1"
        />
        <Button disabled = {isValid()}>Add</Button>
      </Form>
    </section>
  );
}
