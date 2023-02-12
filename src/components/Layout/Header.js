import { Fragment } from 'react';
import classes from './Header.module.css';
import indianFood from '../../assests/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Shreya's Kitchen</h1>
            <HeaderCartButton onShowCart={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={indianFood} alt="A table full of delicious food!" />
        </div>
    </Fragment>
};

export default Header;