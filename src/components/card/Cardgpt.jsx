import React, { useState } from 'react';

const ProductCard = (props) => {
  const [isInCart, setIsInCart] = useState(false);
  console.log('gpt', props)

  const handleAddToCart = () => {
    let thisId = props.id
    // Проверка наличия товара в корзине по productId
    fetch(`http://localhost:3000/basket/${thisId}`)
      .then(response => response.json())
      .then(data => {
        let quantity = 1
        if (data.exists) {
          // Товар уже присутствует в корзине, увеличиваем количество
          updateQuantity(
            quantity += 1
          );
        } else {
          // Товар отсутствует в корзине, добавляем новый товар
          addToCart(props.id, 
                    props.title, 
                    props.description, 
                    props.price, 
                    props.image,
                    quantity
                    );
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  const addToCart = (
    id, 
    title, 
    description, 
    price,
    image,
    quantity
  ) => {
    fetch('http://localhost:3000/basket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        id, 
        title, 
        description, 
        price,
        image,
        quantity}),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsInCart(true);
          console.log('Товар успешно добавлен в корзину', data);
        } else {
          console.log('Ошибка при добавлении товара в корзину', data.error);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  
  const updateQuantity = (props) => {
    let updateId = props.id
    let q = props.quantity
    fetch(`http://localhost:3000/basket/${updateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsInCart(true);
          console.log('Количество товара в корзине успешно увеличено', data);
        } else {
          console.log('Ошибка при увеличении количества товара в корзине', data.error);
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };

  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      {isInCart ? (
        <button disabled>In Cart</button>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
