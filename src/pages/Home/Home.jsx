import {Categories, SortPopup, PizzaBlock} from "../../components";
import React from "react";
import store from "../../redux/store";

const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]}
                />
                <SortPopup items={[
                    { name: 'популярности', type: 'popular'},
                    { name: 'цене', type: 'price'},
                    { name: 'алфавиту', type: 'alphabet'},
                ]} />
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