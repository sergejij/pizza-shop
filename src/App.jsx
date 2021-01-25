import React from 'react';
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import axios from "axios";
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
import { connect } from 'react-redux';

function App({ items, dispatch, setPizzas }) {
    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({ data }) => {
                setPizzas(data.pizzas);
            });
    }, []);

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/cart" exact component={Cart} />
          <Route path="/" exact render={() => <Home pizzas={items} />} />
        </div>
      </div>
    );
}

const mapStateToProps = (state) => { // измененный стейт
    return {
        items: state.pizzas.items,
        filters: state.filters,
    };
}

const mapDispatchToProps = (dispatch) => { // эти функции будут диспатчится
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items)) // в диспатч идёт объект (экшен)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App); // тут же подписка на изменения, ререндер
