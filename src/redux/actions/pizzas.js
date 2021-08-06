import {
  ADD_PIZZAS, ADD_PIZZA_TO_CART, REMOVE_CART, REDUCE_PIZZA_COUNT,
} from '../constants';

export const addPizzas = (pizzas) => ({
  type: ADD_PIZZAS,
  pizzas,
});

export const addPizzaToCart = (pizza) => ({
  type: ADD_PIZZA_TO_CART,
  pizza,
});

export const removeCartPizzas = (ids) => ({
  type: REMOVE_CART,
  ids,
});

export const reducePizza = (id, newCount) => ({
  type: REDUCE_PIZZA_COUNT,
  id,
  newCount,
});
