import React from 'react';

import AppContext from '../../context';
import Pizza from '../Pizza/Pizza';

import styles from './Pizzas.module.scss';

const Pizzas = ({ headline }) => {
  const { pizzas } = React.useContext(AppContext);

  return (
    <div className={styles.pizzasWrapper}>
      <h2>{headline}</h2>
      <div className={styles.pizzas}>
        {pizzas.length && pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Pizzas;
