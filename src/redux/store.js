
import { configureStore } from "@reduxjs/toolkit";
import { productReducer , colorReducer, materialReducer, fearturReducer} from "./reducers/productReducer";
import { cartReducer} from "./reducers/cartReducer";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        color:colorReducer,
        material:materialReducer,
        feature:fearturReducer

    },
})

export default store;

export const server = "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest"