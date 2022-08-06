import React from "react";
import { Reducer } from "./react";

interface State {
  id: number;
  name: string;
  count: number;
}

enum DoAction {
  Add = "ADD",
  Remove = "REMOVE",
}

interface Action {
  type: DoAction;
  payload: any;
}

const initialState: State[] = [];

const addItemToCart = (payload: State, state: State[]) => {
  const newState = [...state];
  const itemIndex = newState.findIndex((i) => i.id === payload.id);

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

const reducer: Reducer<State[], Action> = (state = [], action) => {
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

const Teste = () => {
  const list = [
    {
      id: 1,
      name: "Arroz",
    },
    {
      id: 2,
      name: "Macarrão",
    },
    {
      id: 3,
      name: "Feijão",
    },
    {
      id: 4,
      name: "Biscoitos",
    },
    {
      id: 5,
      name: "Leite",
    },
  ];
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const total = state.reduce((accumulator: any, value: any) => {
    return accumulator + value.count;
  }, 0);

  console.log(total);
  return (
   
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul style={{ listStyle: "none" }}>
        {list.map((i) => (
          <li style={styles.lista} key={i.id}>
            {i.name}

            <button
              onClick={() =>
                dispatch({
                  type: DoAction.Add,
                  payload: { id: i.id, name: i.name, count: 1 },
                })
              }
            >
              Adicionar
            </button>
          </li>
        ))}
      </ul>
      <div
        style={{
          alignItems: "center",
          borderWidth: 1,
          borderStyle: "solid",
          display: "flex",
          flexDirection: "column",
          borderRadius: 4,
          width: 250,
          minHeight: 100,
        }}
      >
        <h3>Resultados</h3>
        <ul>
          {state &&
            state.map((i: State) => (
              <li style={styles.lista} key={i.id}>
                {i.name} {i.count}
                <button
                  onClick={() =>
                    dispatch({
                      type: DoAction.Remove,
                      payload: i.id,
                    })
                  }
                >
                  Remover Item
                </button>
              </li>
            ))}
        </ul>
        <strong> Total:{total} </strong>
      </div>
    </div>
  );
};

const styles = {
  lista: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: 200,
    margin: "10px",
  },
};

export default Teste;

/* type State = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

const initialState: State[] = [];

enum ActionKind {
  Add = "ADD",
  Remove = "REMOVE",
}

type Action = {
  type: ActionKind;
  payload: any;
};

const addAction: Action = {
  type: ActionKind.Add,
  payload: 0,
};

const removeAction: Action = {
  type: ActionKind.Remove,
  payload: 0,
};

const reducer: Reducer<State[], Action> = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.Add:
      const itemIndex = state.findIndex((item) => item.id === payload.id);
      //const itemExists = state.
      if (itemIndex < 0) {
        return [
          ...state,
          {
            id: payload.id,
            title: payload.title,
            price: payload.price,
            quantity: 1,
          },

        ];
      } else {
        return [
          ...state,
          state[itemIndex].quantity = 0,
          state.filter((i)=> i.id === payload.id ? (i.quantity = payload.quantity): i.quantity)
        ]
      }
      
        else {
        state[itemIndex].quantity++;
        return [...state];
        console.log(state[itemIndex].quantity)
      } 
      
    default:
      return state;
  }
};

interface Props {
  books: any;
  pageProp: any
}

const Teste: React.FC<Props> = ({ books }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <div>
        { books.data.map((item: State) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: 500,
              margin: 10,
              height: "2em",
            }}
            key={item.id}
          >
            <h4>{item.title}</h4>
            <span>{item.price}</span>
            <button
              onClick={() =>
                dispatch({
                  type: ActionKind.Add,
                  payload: {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    quantity: 1,
                  },
                })
              }
            >
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
        <div>
          <h2>Carrinho</h2>
          {state.map((item: State) => (
            <div key={item.id}>
              <span>{item.title}</span>
              <span> {item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();
  
  return {
    props: { books: data },
  };
};

export default Teste;
 */
