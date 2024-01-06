/* eslint-disable react/prop-types */
// import React from 'react';

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/carts/action";

const ProductItem = ({ product }) => {

    console.log(product);

    const { category, name, image, price, quantity } = product || {}


    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }




    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl">
                <figure className="relative">
                    <img className="h-[300px] w-full" src={image} alt="Shoes" />
                    <div className="badge badge-secondary  absolute top-3 right-3 ">{category} </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="flex justify-center ">
                        <p className="w-full"> Available: {quantity} </p>
                        <p className="text-left"> Price $:{price} </p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleAddToCart} > Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;