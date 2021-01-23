import {Categories, SortPopup, PizzaBlock} from "../../components";
import React from "react";

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
                    'популярности',
                    'цене',
                    'алфавиту',
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    pizzas.map((pizza, index) => <PizzaBlock {...pizza} key={pizza.id} types={undefined} />)
                }
            </div>
        </div>
    );
};

export default Home;