import React, { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./Increase-btn.module.css";

const IncreaseButton = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    setCart(cart + 1);
  };

  return (
    <button
      type="button"
      className="btnIncrease btn btn-primary"
      onClick={handleClick}
    >
      Ajouter l'article
    </button>
  );
};

export default IncreaseButton;
