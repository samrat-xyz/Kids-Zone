"use client";
import React from "react";

function Cart({ product }) {
  const isLogin = true;
  const addToCart = () => {
    if (isLogin) alert(product._id);
  };
  return (
    <div>
      <button onClick={addToCart} className="btn btn-primary">
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
