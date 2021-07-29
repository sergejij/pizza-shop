import React from 'react';
import {Link} from "react-router-dom";

import styles from './Cart.module.scss';
import EmptyCartImg from '../../assets/img/emptyCart.jpg';
import Pizza1 from "../../assets/img/pizzas/1.jpg";
import Pizza2 from "../../assets/img/pizzas/2.jpg";
import Pizza3 from "../../assets/img/pizzas/3.jpg";
import Pizza4 from "../../assets/img/pizzas/4.jpg";

const cartPizzas = [
    {
        photo: Pizza1,
        headline: 'Чизбургер-пицца',
        price: 395,
        countCart: 2,
        isTraditional: false,
        size: 26
    },
    {
        photo: Pizza2,
        headline: 'Сырная',
        price: 450,
        countCart: 2,
        isTraditional: true,
        size: 40
    },
    {
        photo: Pizza3,
        headline: 'Креветки по-азиатски',
        price: 290,
        countCart: 2,
        isTraditional: false,
        size: 30
    },
    {
        photo: Pizza4,
        headline: 'Сырный цыпленок',
        price: 385,
        countCart: 2,
        isTraditional: true,
        size: 40
    },
];

const PizzaRow = ({ photo, headline, price, countCart, isTraditional, size }) => {
    return (
        <div className={styles.pizzaRow}>
            <div className={styles.pizzaDescription}>
                <img width={80} height={80} src={photo} alt=""/>
                <div>
                    <h4>{headline}</h4>
                    <p>{`${isTraditional ? "традиционное тесто" : "тонкое тесто"}, ${size} см.`}</p>
                </div>
            </div>
            <div className={styles.pizzaChoseBlock}>
                <div className={styles.changeCount}>
                    <button className={styles.changeCountBtn}>
                        <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z" fill="#FE5F1E"/>
                        </svg>
                    </button>
                    <span>{countCart}</span>
                    <button className={styles.changeCountBtn}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.84019 4.04001H5.96019V1.16001C5.96019 0.629852 5.53035 0.200012 5.00019 0.200012C4.47003 0.200012 4.04019 0.629852 4.04019 1.16001V4.04001H1.1602C0.630035 4.04001 0.200195 4.46985 0.200195 5.00001C0.200195 5.53017 0.630035 5.96001 1.1602 5.96001H4.04019V8.84001C4.04019 9.37017 4.47003 9.80001 5.00019 9.80001C5.53035 9.80001 5.96019 9.37017 5.96019 8.84001V5.96001H8.84019C9.37035 5.96001 9.80019 5.53017 9.80019 5.00001C9.80019 4.46985 9.37035 4.04001 8.84019 4.04001Z" fill="#EB5A1E"/>
                        </svg>
                    </button>
                </div>
                <span className={styles.price}>{`${price} ₽`}</span>
                <button className={styles.removePizzaBtn}>
                    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545525 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545525 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z" fill="#D0D0D0"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Cart = () => {
    return (
        <div className={styles.cart}>
        {
            cartPizzas.length ? (
                <div className={styles.notEmptyCart}>
                    <div className={styles.row}>
                        <div className={styles.headline}>
                            <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="black" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h2>Корзина</h2>
                        </div>

                        <button className={styles.clearCart}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <p>Очистить корзину</p>
                        </button>
                </div>
                    {
                        cartPizzas.map((pizza) => <PizzaRow {...pizza} />)
                    }
                    <div className={styles.row}>
                        <p>Всего пицц: <span className={styles.allCount}>{cartPizzas.reduce((acc, pizza) => acc + pizza.countCart, 0)} шт.</span></p>
                        <p>Сумма заказа: <span className={styles.allPrice}>
                            {cartPizzas.reduce((acc, pizza) => acc + pizza.price * pizza.countCart, 0)} ₽
                        </span></p>
                    </div>
                    <div className={styles.row}>
                        <button className={`btn ${styles.grayBtn}`}>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Вернуться назад
                        </button>
                        <button className={`btn ${styles.orangeBtn}`}>Оплатить сейчас</button>
                    </div>
                </div>

            ) : (
                <div className={styles.emptyCart}>
                    <h2>Корзина пустая 😕</h2>
                    <p>Вероятней всего, вы не заказывали ещё пиццу. <br/>
                        Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                    <img width={261} height={236} src={EmptyCartImg} alt="Empty cart"/>
                    <Link to='/'><
                        button className={`btn ${styles.blackBtn}`}>Вернуться назад</button>
                    </Link>
                </div>
            )
        }
        </div>
    );
};

export default Cart;
