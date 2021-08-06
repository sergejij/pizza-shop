import React from 'react';

import AppContext from '../../context';
import Pizza from '../Pizza/Pizza';

import styles from './Pizzas.module.scss';

const Pizzas = ({
  activeSorting, activeCategory, pizzas, categoryNames,
}) => {
  const { addToCart } = React.useContext(AppContext);

  return (
    <div className={styles.pizzasWrapper}>
      <h2>{categoryNames[activeCategory]}</h2>
      <div className={styles.pizzas}>
        {pizzas.length && pizzas
          .filter((pizza) => (activeCategory === 0 ? true : activeCategory === pizza.category))
          .sort((a, b) => {
            if (activeSorting === 0) {
              return a.rating < b.rating ? 1 : -1;
            } if (activeSorting === 1) {
              return a.price > b.price ? 1 : -1;
            }
            return a.headline > b.headline ? 1 : -1;
          })
          .map((pizza) => <Pizza addToCart={addToCart} key={pizza.id} pizza={pizza} />)}
      </div>
    </div>
  );
};

export default Pizzas;
