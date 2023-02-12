import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useRef, useState } from 'react';

const MealItemForm = (props) => {
    const amountRef = useRef();
    const [isFormValid, setIsFormValid] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setIsFormValid(false);
            return;
        }
        props.onAddCartItem(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input label="Amount" ref={amountRef} input={{ id: 'amount_' + props.id, type: 'number', min: 1, max: 5, step: 1, defaultValue: 1 }} />
        <button>+ Add</button>
        {!isFormValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;