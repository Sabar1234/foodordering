import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import { Products } from "./Components/Products";

import { useEffect, useState } from "react";
// import Count from "./Components/count";
function App() {
  const [mode, setMode] = useState("light");
  const [cartItems, setCartItems] = useState([]); //For Add to Cart//
  let [totalCost, setTotalCost] = useState(0);
  const [item, setItem] = useState([]); //For Search function//
  let shipping_cost = 20;

  // for total cost-------------------------
  useEffect(() => {
    let price = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);

    if (price === 0) {
      shipping_cost = 0;
    } else {
      price += shipping_cost;
    }
    setTotalCost(price);
  }, [cartItems]);

  // For light and Dark mode-------------------------
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  // Add To Cart----------------------
  function addToCart(product) {
    const newArr = [...cartItems];
    newArr.push(product);
    setCartItems(newArr);
  }

  // search function----------------------

  function searchItems(search) {
    const filtertedProducts = Products.filter((item) =>
      item.genre.toLowerCase().includes(search.toLowerCase())
    );
    const newitems = filtertedProducts;

    setItem(newitems);
    // console.log("Item", newitems);
  }

  // for delete items from cart----------------------------
  const deleteProduct = (id) => {
    const filterProducts = cartItems.filter((item) => item.id !== id);
    setCartItems(filterProducts);
    // console.log(filterProducts);
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} searchItems={searchItems}
      ></Navbar>

      <Section addToCart={addToCart} />

      <div className="flex-column flex-row container-fluid">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (  
              <>
                <div className="card" style={{ width: "18rem" }} key={item.id}>
                  <img
                    src={item.img}
                    className="card-img-top h-50x"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.genre}</h5>

                    <span className="title mt-2">
                      <p>{item.title}</p>
                    </span>
                    <span className="price">
                      <p>{item.price}</p>
                    </span>
                    <button
                      className="btn btn-danger "
                      onClick={() => deleteProduct(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <h1>No Product In cart</h1>
        )}
      </div>

      {/* For total cost in cart--------------------------------------- */}
      {cartItems.length > 0 ? (
        <div className="totalCost">
          <h2 className="ms-2"> Total Cost: ${totalCost}</h2>
          <p className="ms-2"> Shipping cost $20 </p>
        </div>
      ) : (
null
)}

      {/* For search items------------------------------------- */}
      {item.length > 0 ? (
        <>
          {item.map((prd) => {
            return (
              <>
                <div
                  className="eachItem col-lg-2 my-2 d-flex flex-column bg-light mx-4"
                  key={prd.id}
                >
                  <img className="h-50 p-1" src={prd.img} alt="" />
                  <span className="Genre">
                    <b>{prd.genre}</b>
                  </span>
                  <span className="title mt-2">
                    <p>{prd.title}</p>
                  </span>
                  <span className="price">
                    <p>{prd.price}</p>
                  </span>
                </div>
              </>
            );
          })}
        </>
      ) : (
        <>
          <h1>Nothing Found</h1>
        </>
      )}
      {/* <div className="searched">{searchItems()}</div> */}
    </>
  );
}

export default App;
