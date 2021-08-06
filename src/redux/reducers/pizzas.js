import {
  ADD_PIZZAS, ADD_PIZZA_TO_CART, REMOVE_CART, REDUCE_PIZZA_COUNT,
} from '../constants';

const initialState = {
  items: [],
  isLoading: true,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZAS: {
      return {
        ...state,
        items: action.pizzas,
      };
    }
    case ADD_PIZZA_TO_CART: {
      return {
        ...state,
        items: state.items.map((item) => (action.pizza.id === item.id ? action.pizza : item)),
      };
    }
    case REMOVE_CART: {
      return {
        ...state,
        items: state.items.map((pizza) => (action.ids.includes(pizza.id) ? {
          ...pizza,
          countInCart: 0,
        } : pizza)),
      };
    }
    case REDUCE_PIZZA_COUNT: {
      return {
        ...state,
        items: state.items.map((pizza) => (pizza.id === action.id ? {
          ...pizza,
          countInCart: action.newCount,
        } : pizza)),
      };
    }
    default:
      return state;
  }
};

export default pizzas;
