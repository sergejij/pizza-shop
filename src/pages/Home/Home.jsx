import {Categories, SortPopup, PizzaBlock} from "../../components";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from '../../redux/actions/filters';

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
];
const sortItems = [
    { name: 'популярности', type: 'popular'},
    { name: 'цене', type: 'price'},
    { name: 'алфавиту', type: 'alphabet'},
];

const Home = () => {
    const pizzas = useSelector(({ pizzas }) => pizzas.items);
    const dispatch = useDispatch();

    const selectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={selectCategory}
                    items={categoryNames}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas &&
                    pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.id} types={undefined} />)
                }
            </div>
        </div>
    );
};

export default Home;