import React, { useState } from 'react';

import styled from 'styled-components';


const CartScreen = ( { product }, props ) => {

    const [qty, setQty] = useState(1)
    // const productId = props.match.params.id;

    return (
        <CartScreenSStyle>
            <div>
                <p>ceci est le Panier</p>
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
            </div>
        </CartScreenSStyle>
    )
}

export default CartScreen;


const CartScreenSStyle = styled.div`

`;
