import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);
    const price = `£${props.price.toFixed(2)}`

    const addItemHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    };

    return <li className={classes.meal}>
        <div><h3>{props.name}</h3>
            <div className={props.description}>{props.description}</div>
            <div className={props.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddCartItem={addItemHandler} />
        </div>
    </li>
};

export default MealItem;