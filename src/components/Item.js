import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable for whether the item is in the cart
  const [inCart, setInCart] = useState(false);

  // Step 2: Toggle inCart state
  const handleCartToggle = () => {
    setInCart(!inCart);
  };

  // Step 3: Update className based on inCart state
  const liClassName = inCart ? "in-cart" : "";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 4: Add event handler to button and update button text */}
      <button className="add" onClick={handleCartToggle}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

