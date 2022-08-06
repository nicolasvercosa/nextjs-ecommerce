export async function getBooks() {
  const res = await fetch("http://localhost:3000/api/products");
  const books = await res.json();
  return {
    books,
  };
}
