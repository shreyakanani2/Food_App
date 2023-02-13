import { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const exisitingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (exisitingCartItem) {
            const updatedItem = {
                ...exisitingCartItem,
                amount: exisitingCartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }


        return { items: updatedItems, totalAmount: updatedAmount }
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const exisitingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - exisitingCartItem.price;
        let updatedItems;
        if (exisitingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...exisitingCartItem, amount: exisitingCartItem.amount - 1 };
            updatedItems = [state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    return defaultCartAction;
};

const defaultCartAction = {
    items: [],
    totalAmount: 0
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartAction)

    const addItemCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeItemCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;

