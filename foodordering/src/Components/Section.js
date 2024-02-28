import { useState } from "react";
import { Products } from "./Products";
import "./Section.css";

export let cartArray;

function Section({ addToCart }) {
  const [products, setProducts] = useState(Products);

  const deleteProduct = (id) => {
    const filtertedProducts = products.filter((product) => product.id !== id);
    setProducts(filtertedProducts);
  };

  return (
    <>
      {/* <foodItems/> */}
      <div className="body-section">
        <div className="introduction-section"></div>

        <div
          className=" menu-container container-fluid bg-secondary"
          id="menu-list"
        >
          <div className="food-items-section row d-flex flex-row justify-content-center my-4">
            <h2 className="text-center my-4 text-light">Menu Items</h2>

            {products.map((product) => {
              return (
                <div
                  className="eachItem col-lg-2 my-2 d-flex flex-column bg-light mx-4"
                  key={product.id}
                >
                  <img className="h-50 p-1" src={product.img} alt="" />
                  <span className="Genre">
                    <b>{product.genre}</b>
                  </span>
                  <span className="title mt-2">
                    <p>{product.title}</p>
                  </span>
                  <span className="price">
                    <p>${product.price}</p>
                  </span>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="btn btn-warning my-2"
                  >
                    Add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
