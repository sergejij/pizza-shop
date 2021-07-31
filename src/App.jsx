import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import AppContext from './context';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  const [pizzasCart, setPizzasCart] = React.useState([]);
  const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Рыбные', 'Острые', 'Комбинированные'];
  const sortNames = ['популярности', 'по цене', 'по алфавиту'];

  React.useEffect(() => {
    axios.get('http://localhost:3000/pizzas.json')
      .then(({ data }) => {
        setPizzas(data);
        setPizzasCart(data.filter((pizza) => pizza.isInCart));
      })
      .catch(() => alert('Произошла ошибка при запросе данных'));
  }, []);

  return (
    <AppContext.Provider value={{
      pizzas,
      pizzasCart,
      categoryNames,
      sortNames,
    }}
    >
      <div className="App">
        <div className="content">
          <Header isShowButton cartSum={520} cartCount={2} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart pizzas={pizzasCart} />
          </Route>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
