import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

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

function App() {
  const dispatch = useDispatch();
  const { pizzas } = useSelector((state) => ({
    pizzas: state.pizzas.items,
  }));

  React.useEffect(() => {
    axios.get(api.pizzas)
      .then(({ data }) => dispatch(addPizzas(data)))
      .catch(() => alert('Произошла ошибка при запросе данных ;('));
  }, []);

  const addToCart = async (pizza) => {
    try {
      await axios.put(`${api.pizzas}${pizza.id}`, pizza);
      await dispatch(addPizzaToCart(pizza));
    } catch {
      alert('Произошла ошибка при добавлении пиццы в корзину ;(');
    }
  };

  const removeCart = async (ids) => {
    try {
      ids.forEach((id) => {
        axios.patch(`${api.pizzas}${id}`, { countInCart: 0 });
      });
      await dispatch(removeCartPizzas(ids));
    } catch {
      alert('Произошла ошибка при очищении пиццы корзины ;(');
    }
  };

  const reducePizzaCount = async (id, newCount) => {
    try {
      await axios.patch(`${api.pizzas}${id}`, { countInCart: newCount });
      await dispatch(reducePizza(id, newCount));
    } catch {
      alert('Произошла ошибка удалении пиццы из корзины ;(');
    }
  };

  return (
    <AppContext.Provider value={{
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
            <Home pizzas={pizzas} />
          </Route>
          <Route path="/cart">
            <Cart pizzas={pizzas} />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
