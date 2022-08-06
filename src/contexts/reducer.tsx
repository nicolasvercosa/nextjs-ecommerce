import { Reducer } from "./react";

export interface State {
  id: number;
  title: string;
  price: number;
  imageUri: string;
  count: number;
}

export enum DoAction {
  Add = "ADD",
  Remove = "REMOVE",
}

export interface Action {
  type: DoAction;
  payload: any;
}

const addItemToCart = (payload: State, state: State[]) => {
  const newState = [...state];
  const itemIndex = newState.findIndex((i) => i.id === payload.id);
  // console.log(payload)
  if (itemIndex < 0) {
    newState.push(payload);
  } else {
    newState[itemIndex].count++;
  }
  return newState;
};

const removeItemFromCart = (itemId: number, state: State[]) => {
  const newState = [...state];
  const itemIndex = newState.findIndex((i) => i.id === itemId);
  newState[itemIndex].count--;
  if (newState[itemIndex].count < 1) {
    newState.splice(itemIndex, 1);
  }

  return newState;
};

export const reducer: Reducer<State[], Action> = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case DoAction.Add:
      return addItemToCart(payload, state);
    case DoAction.Remove:
      return removeItemFromCart(payload, state);
    default:
      state;
  }
};
