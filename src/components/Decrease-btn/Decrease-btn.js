import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./Decrease-btn.module.css";

const DecreaseButton = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    if (cart > 0) {
      setCart(cart - 1);
    }
  };

  return (
    <button type="button" className="btn btn-warning" onClick={handleClick}>
      Retirer l'article
    </button>
  );
};

export default DecreaseButton;
