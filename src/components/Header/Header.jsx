import React from 'react';

import styles from './Header.module.scss';
import PizzaLogo from '../../assets/img/pizza-logo.svg';
import CartIcon from '../../assets/img/cart.svg';
import Line from '../../assets/img/line.png';

const Header = ({ isShowButton, cartSum, cartCount }) => (
  <header className={styles.header}>
    <div className={styles.headerLeft}>
      <img width="38px" height="38px" src={PizzaLogo} alt="logo" />
      <div>
        <h1>react pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
    {isShowButton && (
    <button className={`btn ${styles.orangeBtn}`}>
      <span>
        {cartSum}
        {' '}
        ₽
      </span>
      <img src={Line} alt="line" />
      <span>
        <img className={styles.headerCartIcon} src={CartIcon} alt="cart" />
        {' '}
        {cartCount}
      </span>
    </button>
    )}
  </header>
);

export default Header;
