import React from 'react';

import Tabs from '../../components/Tabs/Tabs';
import SortBlock from '../../components/SortBlock/SortBlock';
import Pizzas from '../../components/Pizzas/Pizzas';

import styles from './Home.module.scss';

const Home = () => (
  <main className={styles.home}>
    <div className={styles.tabLine}>
      <Tabs />
      <SortBlock />
    </div>
    <Pizzas headline="Все пиццы" />
  </main>
);

export default Home;
