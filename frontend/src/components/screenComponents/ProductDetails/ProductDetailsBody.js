import React from 'react';

import Rating from '../../sharedComponents/rating';

import styled from 'styled-components';
import CountInStock from '../../sharedComponents/countInStock';


const PDBody = ( { product } ) => {

    return (
        <PDBodyStyle className="body">
            <div className="bodyHeader">
                <div>
                    <h1>{product.name}</h1>
                    <div>
                        <Rating rating={product.rating} />
                        <p>{ product.numReviews } évaluations</p>
                        <CountInStock product={product} />
                    </div>
                </div>
                <div>
                    <h2>{product.price} €</h2>
                    <button>Ajouter Au Panier</button>
                </div>
            </div>
            <h3>Livraison</h3>
            <div className="bodyLivraison">
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
            <ul className="bodyDescription">
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
    margin-top: 260px;

    .bodyHeader
    {
        display: flex;
        flex-direction: column;
        /* align-items: center;
        justify-content: space-between; */
    }
    
    .bodyHeader > div:first-of-type
    {
        flex-basis: 50%;
    }
    
    /* title & rating*/    
    .bodyHeader > div:first-of-type > div
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    
    /* title */
    h1
    {
        font-family: "Segoe UI Emoji";
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    /* Rating */
    .bodyHeader > div:first-of-type div p:first-of-type
    {
        padding: 0px 10px 0px 5px;
        font-size: 1.1rem;
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
        align-items: flex-start;
    }

    /* Category titles */
    h3
    {
        display: inline-block;
        background-color: #E6D1C3;
        padding: 8px 30px;
        font-weight: normal;
        margin: 40px 0px 20px;
    }

    /* Livraison Section */
    .bodyLivraison
    {
        display: flex;
    }

    /* Separator */
    .bodyLivraison hr
    {
        /* margin-block-start: 0px;
        margin-block-end: 0px; */
        margin: 0px 10px;
        border: 1px solid #9C7F7F;
        border-radius: 5px;
    }

    .bodyLivraison > div p:last-of-type
    {
        margin-top: 15px;
    }

    /* Description Section */
    .bodyDescription li
    {
        margin-bottom: 15px;
    }

    .bodyDescription
    {
        margin: 0px;
        margin-block-start: 0px;
        margin-block-end: 0px;
        padding-inline-start: 20px;
    }

    @media screen and (min-width:500px)
    {
        margin-top: 410px;
    }

    @media screen and (min-width:1100px)
    {
        margin-top: 0px;

        .bodyHeader
        {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
        }

        .bodyHeader > div:last-of-type
        {
            align-items: center;
        }

        .bodyHeader > div:first-of-type
        {
            flex-basis: 65%;
        }

    }

    @media screen and (min-width:1300px)
    {
        /* title & rating*/    
        .bodyHeader > div:first-of-type > div
        {
            flex-direction: row;
            align-items: center;
        }
    }
`;