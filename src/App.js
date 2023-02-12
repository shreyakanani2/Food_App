import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartIsshown, setCartIsshown] = useState(false);

  const hideCartHandler = () => {
    setCartIsshown(false);
  };

  const showCartHandler = () => {
    setCartIsshown(true);
  };

  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
