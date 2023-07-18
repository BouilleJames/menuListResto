import React from "react";

const Quantity = ({ quantity, setQuantity }) => {
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div>
      <label htmlFor="quantity">Quantité : </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="20"
        value={quantity}
        onChange={handleChange}
      />
    </div>
  );
};

export default Quantity;
