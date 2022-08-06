import { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../../data.json";

type Data = {};

export function getProductsByTitle(categoria: string | string[] | undefined) {
  const products = data.filter((product) => product.title === categoria);
  return products;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProductsByTitle(req.query.title);
    res.status(200).json(products);
  }
}
