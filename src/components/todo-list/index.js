import React from "react";
import { TodoItem } from "../todo-item/index";

export function TodosList({ items }) {
  return items.map((item) => <TodoItem key={item.id} {...item} />);
}
