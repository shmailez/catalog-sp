import Order from "../../components/order/Order"
import Purchase from "../purchase/Purchase"
import classes from './BasketPlase.module.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import PurchaseGpt from "../purchase/purchasegpt";

const BasketPlase = () => {

    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/basket');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
 

  const makeEmptyCart = () => {
    fetch('http://localhost:3000/basket', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([]),
    })
      .then(response => {
        if (response.ok) {
          console.log('Empty cart created successfully');
          // Дополнительные действия при успешном создании пустой корзины
        } else {
          console.log('Failed to create empty cart');
          // Дополнительные действия при ошибке создания пустой корзины
        }
      })
      .catch(error => {
        console.log('An error occurred:', error);
        // Дополнительные действия при ошибке запроса
      });
    }

    const increaseQuantity = async (id) => {
      try {
        const response = await axios.put(`http://localhost:3000/basket/${id}`);
        const updatedBasket = basket.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: response.data.quantity
            };
          }
          return item;
        });
        setBasket(updatedBasket);
      } catch (error) {
        console.error(error);
      }
    };
  
    const decreaseQuantity = async (id) => {
      try {
        const response = await axios.put(`http://localhost:3000/basket/${id}`, {});
        const updatedBasket = basket.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: response.data.quantity
            };
          }
          return item;
        });
        setBasket(updatedBasket);
      } catch (error) {
        console.error(error);
      }
    };








const total = products
        .map(x => (x.price))
        .reduce((a, b) => {
            return a + b;
        }, 0);

    return(
        <>
            <div className={classes.basketPlace}>
              <div className={classes.purchaseSide}>
              <div className={classes.purchaseTitle}>
                  <span>Товар</span>
                  <span>К-во</span>
              </div>

                {
                  products.map(x => (<Purchase 
                      key={x.id}
                      id={x.id}
                      title={x.title}
                      price={x.price}
                      description={x.description}
                      image={x.image}
                      quantity={x.quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                    />))
                }

{/* {
                  products.map(x => (<PurchaseGpt
                      key={x.id}
                      id={x.id}
                      title={x.title}
                      price={x.price}
                      description={x.description}
                      image={x.image}
                      quantity={x.quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                    />))
                } */}


{/* <p>Количество: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>Увеличить количество</button>
          <button onClick={() => decreaseQuantity(item.id)}>Уменьшить количество</button> */}
        



                <button  className={classes.catalogLink}><Link to="/">Продолжить покупки</Link></button>
                <Link className={classes.catalogLink} to="/">Продолжить покупки</Link>
                <button  className={classes.emptyBasket}  onClick={makeEmptyCart}> DELETE </button>
              </div>
              <div  className={classes.orderSide}>
                <Order total={total}/>
              </div>  
            </div>
        </>
    )
}

export default BasketPlase