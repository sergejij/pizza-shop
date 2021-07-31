import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AppContext from './context';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';
import api from './api';

import './App.scss';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [pizzasInCart, setPizzasInCart] = React.useState([]);
  const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Рыбные', 'Острые', 'Комбинированные'];
  const sortNames = ['популярности', 'по цене', 'по алфавиту'];

  React.useEffect(() => {
    axios.get(api.pizzas)
      .then(({ data }) => setPizzas(data))
      .catch(() => alert('Произошла ошибка при запросе данных ;('));
  }, []);

  React.useEffect(() => {
    axios.get(api.pizzasInCart)
      .then(({ data }) => setPizzasInCart(data))
      .catch(() => alert('Произошла ошибка при запросе данных ;('));
  }, []);

  const addToCart = (pizza) => {
    if (pizzasInCart.some((item) => item.id === pizza.id)) {
      axios.patch(`${api.pizzasInCart}${pizza.id}`, { countInCart: pizza.countInCart })
        .then(() => {
          setPizzas((prev) => prev.map((item) => (item.id === pizza.id ? {
            ...pizza,
            countInCart: pizza.countInCart,
          } : item)));
          setPizzasInCart((prev) => prev.map((item) => (pizza.id === item.id ? {
            ...pizza,
            countInCart: pizza.countInCart,
          } : item)));
        })
        .catch(() => alert('Произошла ошибка при добавлении пиццы в корзину ;('));
    } else {
      axios.post(api.pizzasInCart, pizza)
        .then(() => {
          setPizzas((prev) => prev.map((item) => (item.id === pizza.id ? {
            ...pizza,
            countInCart: pizza.countInCart,
          } : item)));
          setPizzasInCart((prev) => [...prev, pizza]);
        })
        .catch(() => alert('Произошла ошибка при добавлении пиццы в корзину ;('));
    }
  };

  return (
    <AppContext.Provider value={{
      pizzas,
      pizzasCart: pizzasInCart,
      categoryNames,
      sortNames,
      addToCart,
    }}
    >
      <div className="App">
        <div className="content">
          <Header isShowButton cartSum={520} cartCount={pizzasInCart.length} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart pizzas={pizzasInCart} />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
