import React from 'react';
import Country from '../Country/Country';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart;
    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + Country.population ;    ;    
    // }
    const totalPopulation = cart.reduce((total,Country) =>total +Country.population,0);
    return (
        <div className='cart'>
            <h4>This is cart: {cart.length}</h4>
            <p>Total population:{totalPopulation}</p>
        </div>
    );
};

export default Cart;