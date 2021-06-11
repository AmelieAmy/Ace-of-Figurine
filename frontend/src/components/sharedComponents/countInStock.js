import React from 'react';

import styled from 'styled-components';


const countInStock = ( { product } ) => {
    return (
        <CountInStockStyle>
            { product.countInStock <= 0 ?
                <span className="outOfStock">( Rupture de stock )</span>

                : product.countInStock < 10 ?
                <span className="alertInStock">( - de 10 en stock )</span>

                : <span className="inStock">( Produit en stock )</span>
            }
        </CountInStockStyle>
    )
}

export default countInStock;

const CountInStockStyle = styled.p`

    /* In Stock*/    
    .inStock
    {
        color: #3A7727;
    }

    /* Less than 10*/    
    .alertInStock
    {
        color: #7A2F9C;
    }

    /* Out of Stock*/    
    .outOfStock
    {
        color: #9E2133;
        font-weight: bold;
    }

`;
