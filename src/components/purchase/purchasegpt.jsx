import React, { useState } from 'react';
import axios from 'axios';

const PurchaseGpt = (props) => {
  const [basketItems, setBasketItems] = useState([
    
  ]);

  const increaseQuantity = (itemId) => {
    const updatedItems = basketItems.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });

    updateBasketItems(updatedItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedItems = basketItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });

    updateBasketItems(updatedItems);
  };

  const updateBasketItems = async (updatedItems) => {
    try {
      const response = await axios.put('http://localhost:3000/basket', updatedItems);
      setBasketItems(response.data);
    } catch (error) {
      console.error('Ошибка при обновлении корзины', error);
    }
  };

  return (
    <div>
      {basketItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>Цена: {item.price}</p>
          <p>Количество: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default PurchaseGpt;