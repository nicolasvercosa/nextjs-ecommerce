import Image from "next/image";
import React from "react";
import { CartContext } from "../../../contexts/CartContext";
import { DoAction, State } from "../../../contexts/reducer";
import "./styles";
import {
  Background,
  Container,
  Count,
  CounterButton,
  FlexColumn,
  FlexRow,
  Header,
  Item,
  ItemCounter,
  Price,
  Title,
} from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  const cartOptions = React.useContext(CartContext);
  const state = cartOptions?.state;
  const dispatch = cartOptions?.dispatch;

  const handleAdd = (payload: State) => {
    dispatch!({
      type: DoAction.Add,
      payload: payload,
    });
  };

  const handleRemove = (id: State["id"]) => {
    dispatch!({
      type: DoAction.Remove,
      payload: id,
    });
  };

  return (
    <div>
      {cartOptions?.showCart && (
        <>
          <Background onClick={() => cartOptions?.setShowCart(false)} />
          <Container>
            <Header>Meu carrinho de compras</Header>
            {state &&
              state.map((book: State) => (
                <Item key={book.id}>
                  <Image
                    src={book.imageUri}
                    alt=""
                    width={"100px"}
                    height={"150px"}
                    layout={"intrinsic"}
                  />
                  <FlexColumn>
                    <Title>{book.title}</Title>
                    <FlexColumn>
                      <FlexRow>
                        <Count>Quant.: </Count>
                        <ItemCounter>
                          <CounterButton onClick={() => handleRemove(book.id)}>
                            <RemoveIcon
                              sx={{
                                fontSize: "15px",
                                top: "100px",
                                border: "px solid",
                                margin: "1px 1px",
                              }}
                            />
                          </CounterButton>
                          {book.count}
                          <CounterButton
                            onClick={() =>
                              handleAdd({
                                id: book.id,
                                title: book.title,
                                imageUri: book.imageUri,
                                price: book.price,
                                count: 1,
                              })
                            }
                          >
                            <AddIcon
                              sx={{
                                fontSize: "15px",
                              }}
                            />
                          </CounterButton>
                        </ItemCounter>
                      </FlexRow>
                      <Price>R$ {book.price}</Price>
                    </FlexColumn>
                  </FlexColumn>
                </Item>
              ))}
          </Container>
        </>
      )}
    </div>
  );
}

export default Cart;
