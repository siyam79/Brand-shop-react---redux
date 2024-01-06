import { ADD_TO_CART, DECREASE_QUANTITY, INCREASE_QUANRIRY, REMOVE_FROM_CART } from "./actionTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}


export const increaseQuantity = (productId) => {
    return {
        type: INCREASE_QUANRIRY,
        payload: productId
    }
}

export const deacreaseQuantity = (productId) => {
    return {
        type: DECREASE_QUANTITY,
        payload: productId
    }
}

