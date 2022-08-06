import React from "react";
import { ApiContext } from "../../../contexts/ApiContext";
import { CartContext } from "../../../contexts/CartContext";
import { DoAction, State } from "../../../contexts/reducer";
import {
  BookAutor,
  BookCover,
  BookPrice,
  BookTitle,
  BuyButton,
  Container,
  Item,
} from "./styles";

interface Props {
  books: Array<object>;
}

const BookDisplayer: React.FC<Props> = (props) => {
  const books = props.books;
  const context = React.useContext(ApiContext);
  const search = context.search;
  const reducer = React.useContext(CartContext);
  const dispatch = reducer?.dispatch;
  const state = reducer?.state;

  const handleAddBookToCart = (payload: State) => {
    dispatch!({
      type: DoAction.Add,
      payload: payload,
    });
    reducer?.setShowCart(true);
  };

  const filteredBooks =
    search!.length > 0
      ? books.filter((book: any) =>
          book.title.toLowerCase().includes(search?.toLowerCase())
        )
      : [];

  return (
    <Container>
      {search!.length > 0
        ? filteredBooks.map((i: any) => (
            <Item key={i.id}>
              <BookCover
                src={i.coverImageUri}
                layout="intrinsic"
                width={"180px"}
                height={"250px"}
                alt=""
              />
              <BookTitle>{i.title}</BookTitle>
              <BookAutor>{i.autor}</BookAutor>
              <BookPrice> R$ {i.price}</BookPrice>
              <BuyButton>Comprar</BuyButton>
            </Item>
          ))
        : books.map((i: any) => (
            <Item key={i.id}>
              <BookCover
                src={i.coverImageUri}
                layout="intrinsic"
                width={"180px"}
                height={"250px"}
                alt=""
              />
              <BookTitle>{i.title}</BookTitle>
              <BookAutor>{i.autor}</BookAutor>
              <BookPrice> R$ {i.price}</BookPrice>
              <BuyButton
                onClick={() =>
                  handleAddBookToCart({
                    id: i.id,
                    title: i.title,
                    imageUri: i.coverImageUri,
                    price: i.price,
                    count: 1,
                  })
                }
              >
                Comprar
              </BuyButton>
            </Item>

          
          ))}
    </Container>
  );
};

export default BookDisplayer;
