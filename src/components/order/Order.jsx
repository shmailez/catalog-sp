import classes from './Order.module.scss'

const Order = (props) => {
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
        <>
            <div className={classes.container}>
                <h3 className={classes.formTitle}>Оформление заказа</h3>
                <form  className={classes.orderForm}>
                    <label>
                        <input type="text" value="Имя Фамилия"  />
                    </label>
                    <label>
                        <input type='phone' value="+7 904 1545"  />
                    </label>
                    <label>
                        <input type="text" value="Адрес доставки"  />
                    </label>
                    {/* <br/> */}
                    <span>Итого: {formatNumber(props.total)} рублей</span>
                    
                    <button className={classes.orderButton} type="submit">Оформить</button>
                    {/* <input className={classes.orderButton} type="submit" value="Оформить" /> */}
                </form>
            </div>
        </>
    )
}

export default Order