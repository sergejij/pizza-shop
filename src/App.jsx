import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import AppContext from './context';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import api from './api';
import {
  addPizzas,
  addPizzaToCart,
  removeCartPizzas,
  reducePizza,
} from './redux/actions/pizzas';

import './App.scss';

function App({
  pizzas, addPizzas, addPizzaToCart, removeCartPizzas, reducePizza,
}) {
  const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Рыбные', 'Острые', 'Комбинированные'];
  const sortNames = ['популярности', 'по цене', 'по алфавиту'];

  React.useEffect(() => {
    axios.get(api.pizzas)
      .then(({ data }) => addPizzas(data))
      .catch(() => alert('Произошла ошибка при запросе данных ;('));
  }, []);

  const addToCart = async (pizza) => {
    try {
      await axios.put(`${api.pizzas}${pizza.id}`, pizza);
      await addPizzaToCart(pizza);
    } catch {
      alert('Произошла ошибка при добавлении пиццы в корзину ;(');
    }
  };

  const removeCart = async (ids) => {
    try {
      ids.forEach((id) => {
        axios.patch(`${api.pizzas}${id}`, { countInCart: 0 });
      });
      await removeCartPizzas(ids);
    } catch {
      alert('Произошла ошибка при очищении пиццы корзины ;(');
    }
  };

  const reducePizzaCount = async (id, newCount) => {
    try {
      await axios.patch(`${api.pizzas}${id}`, { countInCart: newCount });
      await reducePizza(id, newCount);
    } catch {
      alert('Произошла ошибка удалении пиццы из корзины ;(');
    }
  };

  return (
    <AppContext.Provider value={{
      pizzas,
      categoryNames,
      sortNames,
      addToCart,
      removeCart,
      reducePizzaCount,
    }}
    >
      <div className="App">
        <div className="content">
          <Header
            isShowButton
            cartSum={pizzas.reduce((acc, pizza) => acc + pizza.price * pizza.countInCart, 0)}
            cartCount={pizzas.reduce((acc, pizza) => acc + pizza.countInCart, 0)}
          />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

const mapStateToProps = ({ pizzas }) => ({ pizzas: pizzas.items });

const mapDispatchToState = (dispatch) => ({
  addPizzas: (pizzas) => dispatch(addPizzas(pizzas)),
  addPizzaToCart: (pizza) => dispatch(addPizzaToCart(pizza)),
  removeCartPizzas: (ids) => dispatch(removeCartPizzas(ids)),
  reducePizza: (id, newCount) => dispatch(reducePizza(id, newCount)),
});

export default connect(mapStateToProps, mapDispatchToState)(App);
