import React, { useState } from "react";


const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(item)}>Remove Item</button>
          </li>
        ))}
      </ul>
     <button onClick={() => addItem("Apple")}>Add Apple</button>
      <button onClick={() => addItem("Orange")}>Add Orange</button>
      <button  onClick={() => addItem("Banana")}>Add Banana</button>
    
    </div>
  );
};

export default ShoppingCart;