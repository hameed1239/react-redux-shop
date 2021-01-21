import { createStore } from 'redux';
import rootReducer from './reducers';
import { idbPromise } from "./helpers"

let preloadedState = {
  cart: getCart
}
async function getCart() {
  const persistedState = await idbPromise("cart", "get")
  return persistedState
}
const store = createStore(rootReducer);

export default store