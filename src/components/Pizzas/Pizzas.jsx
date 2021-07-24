import React from 'react';

import styles from './Pizzas.module.scss';
import Pizza from "../Pizza/Pizza";

const Pizzas = ({ headline }) => (
  <div className={styles.pizzasWrapper}>
    <h2>{headline}</h2>
     <div className={styles.pizzas}>
         <Pizza headline="Чизбургер-пицца" price="395" cartCount="2" />
         <Pizza headline="Чизбургер-пицца" price="395" cartCount="2" />
         <Pizza headline="Чизбургер-пицца" price="395" cartCount="2" />
         <Pizza headline="Чизбургер-пицца" price="395" cartCount="2" />
     </div>
  </div>
);

export default Pizzas;
