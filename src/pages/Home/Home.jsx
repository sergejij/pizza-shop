import React from 'react';

import Tabs from '../../components/Tabs/Tabs';
import SortBlock from '../../components/SortBlock/SortBlock';
import Pizzas from '../../components/Pizzas/Pizzas';

import styles from './Home.module.scss';
import Pizza1 from '../../assets/img/pizzas/1.jpg';
import Pizza2 from '../../assets/img/pizzas/2.jpg';
import Pizza3 from '../../assets/img/pizzas/3.jpg';
import Pizza4 from '../../assets/img/pizzas/4.jpg';

const pizzas = [
    {
        photo: Pizza1,
        headline: 'Чизбургер-пицца',
        price: 395,
        countCart: 2,
    },
    {
        photo: Pizza2,
        headline: 'Сырная',
        price: 450,
        countCart: 2,
    },
    {
        photo: Pizza3,
        headline: 'Креветки по-азиатски',
        price: 290,
        countCart: 2,
    },
    {
        photo: Pizza4,
        headline: 'Сырный цыпленок',
        price: 385,
        countCart: 2,
    },
    {
        photo: Pizza1,
        headline: 'Чизбургер-пицца',
        price: 395,
        countCart: 2,
    },
    {
        photo: Pizza2,
        headline: 'Сырная',
        price: 450,
        countCart: 2,
    },
    {
        photo: Pizza3,
        headline: 'Креветки по-азиатски',
        price: 290,
        countCart: 2,
    },
    {
        photo: Pizza4,
        headline: 'Сырный цыпленок',
        price: 385,
        countCart: 2,
    },
];

const Home = () => (
  <main className={styles.home}>
    <div className={styles.tabLine}>
      <Tabs />
      <SortBlock />
    </div>
    <Pizzas pizzas={pizzas} headline="Все пиццы" />
  </main>
);

export default Home;
