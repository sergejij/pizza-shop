import React from 'react';
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/cart" exact component={Cart} />
          <Route path="/" exact component={Home} />
        </div>
      </div>
  );
}

export default App;
