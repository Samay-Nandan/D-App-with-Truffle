import { configureStore } from "@reduxjs/toolkit";
import { NODE_ENV } from "../constants/environment";
import { Wallet } from "./reducer/wallet";
import { Todo } from "./reducer/todo";

const reducer = {
  Wallet,
  Todo
}

const store = configureStore({
  reducer,
  devTools: NODE_ENV !== 'production'
});

export default store