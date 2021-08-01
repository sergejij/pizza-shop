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
  const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Рыбные', 'Острые', 'Комбинированные'];
  const sortNames = ['популярности', 'по цене', 'по алфавиту'];

  React.useEffect(() => {
    axios.get(api.pizzas)
      .then(({ data }) => setPizzas(data))
      .catch(() => alert('Произошла ошибка при запросе данных ;('));
  }, []);

  const addToCart = (pizza) => {
    axios.put(`${api.pizzas}${pizza.id}`, pizza)
      .then(() => setPizzas((prev) => prev.map((item) => (pizza.id === item.id ? pizza : item))))
      .catch(() => alert('Произошла ошибка при добавлении пиццы в корзину ;('));
  };

  const removeCart = async (ids) => {
    try {
      ids.forEach((id) => {
        axios.patch(`${api.pizzas}${id}`, { countInCart: 0 });
      });
      setPizzas((prev) => prev.map((pizza) => (ids.includes(pizza.id) ? {
        ...pizza,
        countInCart: 0,
      } : pizza)));
    } catch {
      alert('Произошла ошибка при очищении пиццы корзины ;(');
    }
  };

  const reducePizzaCount = async (id, newCount) => {
    try {
      axios.patch(`${api.pizzas}${id}`, { countInCart: newCount });
      setPizzas((prev) => prev.map((pizza) => (pizza.id === id ? {
        ...pizza,
        countInCart: newCount,
      } : pizza)));
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

export default App;
