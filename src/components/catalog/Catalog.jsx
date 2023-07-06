import Card from "../card/Card"
import Cardgpt from "../card/Cardgpt"
import classes from './Catalog.module.scss'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const url = 'http://localhost:3000/items'
  const urlAZ = 'http://localhost:3000/items?_sort=price&_order=desc'
  const urlZA = 'http://localhost:3000/items?_sort=price'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

// console.log('products', products)

// http://localhost:3000/items?_sort=price&_order=desc

// http://localhost:3000/items?_sort=price

    return(
        <>
        <input  type="text" />
          <div className={classes.catalog}>
            
            
             {
              products.map(x => (<Card 
                  key={x.id}
                  id={x.id}
                  title={x.title}
                  price={x.price}
                  description={x.description}
                  image={x.image}
                />))
              }
              {/* {
              products.map(x => (<Cardgpt
                  key={x.id}
                  id={x.id}
                  title={x.title}
                  price={x.price}
                  description={x.description}
                  image={x.image}
                />))
              } */}
            
          </div>
            
        </>
    )
}

export default Catalog