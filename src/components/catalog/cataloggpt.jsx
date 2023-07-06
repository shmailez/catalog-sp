import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/Card";
import classes from "./Catalog.module.scss";

const CatalogGpt = () => {
  const [products, setProducts] = useState([]);
//   const [currentEndpoint, setCurrentEndpoint] = useState("urlZA");
//   const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState('http://localhost:3000/items');

  const url = "http://localhost:3000/items";
  const urlAZ = "http://localhost:3000/items?_sort=price&_order=desc";
  const urlZA = "http://localhost:3000/items?_sort=price";

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

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(currentEndpoint);
//         setProducts(response.data);
//         setIsDataLoaded(true);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (!isDataLoaded) {
//       fetchData();
//     }
//   }, [currentEndpoint, isDataLoaded]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(selectedEndpoint);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedEndpoint]);

//   const handleEndpointChange = (endpoint) => {
//     setCurrentEndpoint(endpoint);
//     setIsDataLoaded(false);
//   };

  const handleSelectEndpointChange = (event) => {
    setSelectedEndpoint(event.target.value);
  };

  return (
    <div className={classes.catalog}>
        
    <select  className={classes.select} value={selectedEndpoint} onChange={handleSelectEndpointChange}>
        {/* <option value="http://localhost:3000/items"></option> */}
        <option value="http://localhost:3000/items?_sort=price&_order=desc">Порядок: сперва дороже</option>
        <option value="http://localhost:3000/items?_sort=price">Порядок: сперва дешевле</option>
      </select>






{/* 
      <button onClick={() => handleEndpointChange(urlAZ)}>
        Сначала дороже
      </button>
      <button onClick={() => handleEndpointChange(urlZA)}>
        Сначала дешевле
      </button> */}

      <div className={classes.catalogGallery}>
        {products.map((x) => (
          <Card
            key={x.id}
            id={x.id}
            title={x.title}
            price={x.price}
            description={x.description}
            image={x.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogGpt;
