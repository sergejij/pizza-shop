import React from 'react';

import Categories from '../../components/Categories/Categories';
import SortBlock from '../../components/SortBlock/SortBlock';
import Pizzas from '../../components/Pizzas/Pizzas';

import styles from './Home.module.scss';

const Home = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [activeSorting, setActiveSorting] = React.useState(0);

  return (
    <main className={styles.home}>
      <div className={styles.tabLine}>
        <Categories setActiveCategory={setActiveCategory} />
        <SortBlock activeSorting={activeSorting} setActiveSorting={setActiveSorting} />
      </div>
      <Pizzas activeSorting={activeSorting} activeCategory={activeCategory} />
    </main>
  );
};

export default Home;
