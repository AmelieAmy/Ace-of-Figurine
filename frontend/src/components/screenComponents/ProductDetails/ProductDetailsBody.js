import React from 'react';

import Rating from '../../sharedComponents/rating';

import styled from 'styled-components';


const PDBody = ( { product } ) => {

    return (
        <PDBodyStyle className="body">
            <div className="bodyHeader">
                <div>
                    <h1>{product.name}</h1>
                    <div>
                        <Rating rating={product.rating} />
                        <p>{ product.numReviews } évaluations</p>
                        <p>Produit en stock</p>
                    </div>
                </div>
                <div>
                    <h2>{product.price} €</h2>
                    <button>Ajouter Au Panier</button>
                </div>
            </div>
            <h3>Livraison</h3>
            <div>
                <div>
                    <p>Livraison Standard: 2.99€ - 4.49€</p>
                    <p>GRATUIT sur les commandes de +39.00€</p>
                    <p>Livraison estimée: 18/06/2021 - 20/06/2021</p>
                </div>
                <hr/>
                <div>
                    <p>Point retrait: 2.49€</p>
                    <p>GRATUIT sur les commandes de +39.00€</p>
                    <p>Livraison estimée: 18/06/2021 - 20/06/2021</p>
                </div>
                <hr/>
                <div>
                    <p>Livraison économique: 1.99€</p>
                    <p>GRATUIT sur les commandes de +39.00€</p>
                    <p>Livraison estimée: 30/06/2021 - 03/07/2021</p>
                </div>
            </div>
            <h3>Description</h3>
            <ul>
                {product.description.map((des) => (
                    <li key={product._id}>
                        {des}
                    </li>
                ))}
            </ul>

        </PDBodyStyle>
    )
}

export default PDBody;


const PDBodyStyle = styled.div`

    background-color: #FAF3EE;
    padding: 20px 30px;

    .bodyHeader
    {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .bodyHeader > div:first-of-type
    {
        flex-basis: 50%;
    }
    
    /* title & rating*/    
    .bodyHeader > div:first-of-type div
    {
        display: flex;
        align-items: center;

    }
    
    /* title */
    h1
    {
        /* font-variant: small-caps; */
        font-family: "Segoe UI Emoji";
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
    }

    /* Price */
    h2
    {
        color: #9E2133;
        margin-bottom: 15px;
    }

    /* Add to cart Button */
    button
    {
        background-color: #770011;
        color: white;
        border: none;
        font-family: "Trebuchet MS bold";
        font-size: 1.5rem;
        padding: 10px 20px;
    }

    /* Price & add to cart*/    
    .bodyHeader > div:last-of-type
    {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    /* Category titles */
    h3
    {
        background-color: #E6D1C3;
        padding: 10px 20px;
    }

`;