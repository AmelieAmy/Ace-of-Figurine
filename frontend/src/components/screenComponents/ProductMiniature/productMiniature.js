import React from 'react';

import Rating from '../../sharedComponents/rating';

import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const ProductMiniature = ( { product } ) => {
    
    return (
        <PMStyle className="miniatureCard">
            <a href={`/product/${product._id}`}>
                <img
                    src={product.miniature}
                    alt={product.name}
                />
            </a>
            <div className="miniatureCardBody">
                <div>
                    <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                    />
                </div>
                <div>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                    ({ product.numReviews })
                </div>
                <div className="price">
                    {product.price} €
                </div>
            </div>
        </PMStyle>
    )
}

export default ProductMiniature;


const PMStyle = styled.div`

    /* Description Card */
    .miniatureCardBody
    {
        text-align: left;
    }

    .miniatureCardBody > div:first-of-type
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Title */
    .miniatureCardBody h2
    {
        font-size: 1.1rem;
        font-family: "Segoe UI Emoji";
        font-weight: normal;
        margin: 5px 0px 5px;
    }

    /* Favorite */
    .miniatureCardBody .MuiFormControlLabel-root
    {
        margin: 0px 0px 0px 5px;
    }

    .miniatureCardBody .MuiFormControlLabel-root span svg
    {
        fill: #9E2133;
    }

    /* Rating */
    .miniatureCardBody > div:nth-of-type(2)
    {
        display: flex;
        align-items: center;
    }

    /* Price */
    .miniatureCardBody .price
    {
        font-size: 1.3rem;
        margin: 0.7rem 0px;
    }
`;