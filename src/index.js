import React from "react";
import ReactDOM from "react-dom";
import TodoStore from "./TodoStore";
import TodoList from "./TodoList";
import MyButton from "./MyButton";

import { Provider } from "mobx-react";

const app = document.getElementById("root");

// optional

ReactDOM.render(
  <Provider store={TodoStore}>
    <MyButton />,<TodoList />
  </Provider>,
  app
);
