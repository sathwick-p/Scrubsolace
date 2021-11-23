import React, { useState } from "react";
import "./Card.css";
import { useStateValue } from "./StateProvider";

function ProductCards({ title, price, id, image }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is the basket", basket);
  const addToBasket = () => {
    // item gets dispatched to the datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };
  return (
    <div className="products">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-price"> ₹{price}</p>
        </div>
        <button className="browse_products" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default ProductCards;
