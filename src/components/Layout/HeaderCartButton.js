import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const { items } = cartContext;

    const numberOfItem = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

    const buttonClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        };
    }, [items])

    return <button className={buttonClasses} onClick={props.onShowCart}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItem}</span>
    </button>
};

export default HeaderCartButton;