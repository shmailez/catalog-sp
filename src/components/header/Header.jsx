import { Link } from 'react-router-dom'
import classes from './Header.module.scss'

const Header = () => {
    return(
        <>
        <div className={classes.head}>
            <h1 className={classes.headTitle}>Интерьер.</h1>
            <nav>
                <ul className={classes.headNav}>
                    <li>
                    <Link className={classes.headLink} to="/">Каталог</Link>
                    </li>
                    <li>
                    <Link className={classes.headLink} to="/basket">Корзина</Link>
                    </li>
                </ul>
            </nav>
            
            
        </div>
            
        </>
    )
}

export default Header