import React from 'react';

import styles from './Pizzas.module.scss';
import Pizza from "../Pizza/Pizza";

const Pizzas = ({ headline, pizzas }) => (
  <div className={styles.pizzasWrapper}>
    <h2>{headline}</h2>
     <div className={styles.pizzas}>
         {pizzas.length && pizzas.map((pizza) => {
             return <Pizza {...pizza} />
         })}
     </div>
  </div>
);

export default Pizzas;
