import classes from './Card.module.scss'
import bagImage from './../../assets/image/bag.png'
import likeImage from './../../assets/image/like.png'

const Card = (props) => {

const basketUrl = 'http://localhost:3000/basket'

const addToCart = (
  id, 
  title, 
  description, 
  price,
  image,
  quantity
  ) => {
  fetch(basketUrl, {
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
      quantity
    }),
  })
    .then(response => response.json())
    .then(data => {
      // Обработка успешного добавления товара в корзину
      console.log('Товар успешно добавлен в корзину', data);
    })
    .catch(error => {
      // Обработка ошибок
      console.error('Ошибка при добавлении товара в корзину', error);
    });
};

  const handleAddToCart = () => {
    let quantity = 1
    addToCart(
      props.id, 
      props.title, 
      props.description, 
      props.price, 
      props.image,
      quantity
      );
      
  };

  const formatNumber = (number) => {
    const numberString = number.toString();
    const parts = [];
    
    for (let i = numberString.length - 1; i >= 0; i -= 3) {
      const part = numberString.slice(Math.max(i - 2, 0), i + 1);
      parts.unshift(part);
    }
    
    return parts.join(' ');
  };

    return(
        <div className={classes.container}>
            <div className={classes.cardImage}>
                <img className={classes.image} src={props.image} alt="" />
            </div>
            <div className={classes.cardInfo}>
                <h3 className={classes.cardTitle}>{props.title}</h3>
                <p className={classes.cardDescription}>{props.description}</p>
                <span className={classes.cardPrice}>{formatNumber(props.price)} руб.</span>
                
            </div>
            <div className={classes.basketButton} >
            <span  onClick={handleAddToCart}>
              <img src={bagImage} alt="" />
            </span>
            <span >
              <img src={likeImage} alt="" />
            </span>
            </div>
        </div>
    )
}

export default Card