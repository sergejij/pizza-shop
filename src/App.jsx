import React from 'react';
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import axios from "axios";
import {setPizzas } from "./redux/actions/pizzas";
import { useDispatch  } from 'react-redux';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas')
            .then(({ data }) => {
                dispatch(setPizzas(data));
            });
    }, []);

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
