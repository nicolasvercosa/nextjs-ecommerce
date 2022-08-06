import { NextPage } from "next";
import React, { Dispatch, SetStateAction } from "react";
import { Reducer } from "../pages/teste/react";
import { Action, reducer, State } from "./reducer";

interface CartContextInterface {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  state: any;
  dispatch: React.Dispatch<Action>;
  total: number;
}

interface Props {
  children: JSX.Element;
}


export const CartContext = React.createContext<
  CartContextInterface | null
>(null);

const initialState: State[] = [];

export const CartContextProvider: NextPage<Props> = (props) => {
  const [showCart, setShowCart] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const total = state.reduce((accumulator: any, value: any) => {
    return accumulator + value.count;
  }, 0);
 
  return (
    <CartContext.Provider value={{showCart, setShowCart, state, dispatch, total }}>
      {props.children}
    </CartContext.Provider>
  );
};
