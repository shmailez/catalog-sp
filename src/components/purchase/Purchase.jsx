import axios from 'axios';
import classes from './Purchase.module.scss'
import { useState } from 'react';

const Purchase = (props) => {

    const increaseQuantity = props.increaseQuantity
    const decreaseQuantity = props.decreaseQuantity

    console.log(increaseQuantity, decreaseQuantity)

    const [basket, setBasket] = useState([]);

    const formatNumber = (number) => {
        const numberString = number.toString();
        const parts = [];
        
        for (let i = numberString.length - 1; i >= 0; i -= 3) {
          const part = numberString.slice(Math.max(i - 2, 0), i + 1);
          parts.unshift(part);
        }
        
        return parts.join(' ');
      };

      console.log('ID', props)

    //   const increaseQuantity = async (id) => {
    //     console.log('ID???', id)
    //     try {
    //       const response = await axios.put(`http://localhost:3000/basket/${id}`);
    //       const updatedBasket = basket.map(item => {
    //         console.log('w', basket)
    //         if (item.id === id) {
    //           return {
    //             ...item,
    //             quantity: response.data.quantity
    //           };
    //         }
    //         return item;
    //       });
    //       console.log('updatedBasket', updatedBasket)
    //       setBasket(updatedBasket);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
    
    //   const decreaseQuantity = async (id) => {
    //     try {
    //       const response = await axios.put(`http://localhost:3000/basket/${id}`, {props});
    //       const updatedBasket = basket.map(item => {
    //         if (item.id === id) {
    //           return {
    //             ...item,
    //             quantity: response.data.quantity
    //           };
    //         }
    //         return item;
    //       });
    //       setBasket(updatedBasket);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };


    return(
        <div className={classes.container}>
            <div className={classes.cardImage}>
                <img className={classes.image} src={props.image} alt="" />
            </div>
            <div className={classes.cardInfo}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <span>{formatNumber(props.price)} руб.</span>
            </div>
            <button onClick={() => increaseQuantity(props.id)}>+</button>
            {props.quantity}
          <button onClick={() => decreaseQuantity(props.id)}>-</button>
        </div>
    )
}

export default Purchase