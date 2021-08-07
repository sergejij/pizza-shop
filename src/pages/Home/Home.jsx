import React from 'react';

import Categories from '../../components/Categories/Categories';
import SortBlock from '../../components/SortBlock/SortBlock';
import Pizzas from '../../components/Pizzas/Pizzas';

import styles from './Home.module.scss';

const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Рыбные', 'Острые', 'Комбинированные'];

const Home = ({ pizzas, addToCart }) => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSorting, setActiveSorting] = React.useState(0);

  return (
    <main className={styles.home}>
      <div className={styles.tabLine}>
        <Categories
          categoryNames={categoryNames}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <SortBlock activeSorting={activeSorting} setActiveSorting={setActiveSorting} />
      </div>
      <Pizzas
        categoryNames={categoryNames}
        pizzas={pizzas}
        activeSorting={activeSorting}
        activeCategory={activeCategory}
        addToCart={addToCart}
      />
    </main>
  );
};

export default Home;
