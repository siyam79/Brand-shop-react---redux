/* eslint-disable no-case-declarations */
import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANRIRY, REMOVE_FROM_CART } from "./actionTypes";
import { initiaslState } from "./initialState";


const findProductInCart = (state, action) => {
    return state.find((p) => p.productId === action.payload.id)
}


const nextId = (state) => {
    return state.reduce((id, state) => Math.max(id, state.id), -1) + 1;
}
console.log(nextId);



const cartReducer = (state = initiaslState, action) => {

    switch (action.type) {
        case ADD_TO_CART:

            const product = findProductInCart(state, action);
            console.log(product);
            if (product) {
                return state.map((p) => {
                    if (p.productId === product.productId) {
                        return {
                            ...p,
                            quantity: p.quantity + 1
                        }
                    } else {
                        return p;
                    }
                })
            } else {
                return [
                    ...state, {
                        id: nextId(state),
                        ...action.payload,
                        price: parseFloat(action.payload.price),
                        quantity: 1
                    }
                ]
            }

        case REMOVE_FROM_CART:
            return state.filter((p) => p.id !== action.payload)
        case INCREASE_QUANRIRY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product
                }
            })


        case DECREASE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product
                }
            })



        default:
            return state
    }
}

export default cartReducer;