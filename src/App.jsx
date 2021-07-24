import React from 'react';

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header isShowButton={true} cartSum={520} cartCount={2} />
      <Home />
    </div>
  );
}

export default App;
