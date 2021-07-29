import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header isShowButton cartSum={520} cartCount={2} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </div>
  );
}

export default App;
