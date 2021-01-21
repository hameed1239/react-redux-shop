import productReducer from "../features/products/productSlice"

const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
}
export default function rootReducer(state = initialState, action) {
    return (productReducer(state, action))
}