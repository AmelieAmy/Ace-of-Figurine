import React from 'react';

import Header from "../../sharedComponents/header/header";

import styled from 'styled-components';


const CartScreen = ( { product, cart, setCart }, props ) => {

    return (
        <CartScreenSStyle>
            <Header cart={cart} setCart={setCart} />
            <div>
                <h2>Panier</h2>
                {cart !== 0 ? (
                    <div>
                        <h3>Total :total €</h3>
                        <button onClick={() => setCart(0)}>Vider le panier</button>
                    </div>
                ) : (
                    <div>Votre panier est vide</div>
                )}
                {/* <select 
                    value={qty}
                    onChange={(e)=> setQty(e.target.value)}
                >
                    { [...Array(product.countInStock).keys()].map(
                        (x) => (
                            <option key={x + 1} value={x + 1}>
                                { x + 1}
                            </option>
                        )
                    ) }
                </select> */}
                <div>
                    {cart}
                </div>
            </div>
        </CartScreenSStyle>
    )
}

export default CartScreen;


const CartScreenSStyle = styled.div`

`;
