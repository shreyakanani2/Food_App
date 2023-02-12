import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'PavBhaji',
        description: 'Finest veggies and spices',
        price: 7.99,
    },
    {
        id: 'm2',
        name: 'Dhokla',
        description: 'A gujarati specialty!',
        price: 6.5,
    },
    {
        id: 'm3',
        name: 'Gulabjamun',
        description: 'Indian, raw, sweet',
        price: 2.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 9.99,
    },
];

const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;