import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../../assets/data/data';

import Header from "../../sharedComponents/header/header";
import PictureSet from "./productDetailsPictureSet";
import Body from "./productDetailsDescription";

import styled from 'styled-components';


const ProductDetailsScreen = (props) => {
    
    const product = data.products.find((x) => x._id === props.match.params.id);

    if (!product) {
        return <div> Product Not Found</div>;
    }

    return (
        <PDSStyle>
            <Header />
            <div className="container">
                <Link className="backward" to="/">&lt; Retour aux recherches</Link>
                <div className="productDetail">
                    <PictureSet product={product} />
                    <Body product={product} />
                </div>
            </div>
        </PDSStyle>
    )
}

export default ProductDetailsScreen;



const PDSStyle = styled.div`

    .productDetail
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0px;
    }

    .PDpictureSet
    {
        flex-basis: 100%;
    }

    .body
    {
        flex-basis: 100%;
    }
    
    @media screen and (min-width:1100px)
    {
        .productDetail
        {
            flex-direction: row;
            align-items: flex-start;
        }

        .PDpictureSet
        {
            flex-basis: 45%;
        }

        .body
        {
            flex-basis: 55%;
        }
    }
    
    @media screen and (min-width:1300px)
    {
        .PDpictureSet
        {
            flex-basis: 40%;
        }

        .body
        {
            flex-basis: 60%;
        }
    }
`;
