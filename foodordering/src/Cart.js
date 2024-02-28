import React from "react";
import { Products } from "./Components/Products";

const Cart = () => {
  const [items, setItems] = useState([]); //For Add to Cart//
  function addToCart(product) {
    const newArr = [...items];
    newArr.push(product);
    setItems(newArr);
  }
  return <div></div>;
};

export default Cart;
