import type { GetStaticProps, NextPage } from "next";
import Header from "./components/Header";
import BookDisplayer from "./components/BookDisplayer";
import Cart from "./components/Cart";
import { CartContextProvider } from "../contexts/CartContext";
import { ApiContext, ApiContextProvider } from "../contexts/ApiContext";
import React from "react";

interface Props {
  books: any;
}

const Home: NextPage<Props> = ({ books }) => {
  
  return (
    <ApiContextProvider>
      <CartContextProvider>
        <main>
          <Header />
          <BookDisplayer books={books.data} />
          <Cart />
        </main>
      </CartContextProvider>
    </ApiContextProvider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();

  return {
    props: { books: data },
  };
};

export default Home;
