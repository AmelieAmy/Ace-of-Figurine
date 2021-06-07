import React from 'react';
import { Link } from 'react-router-dom';

import data from '../../../assets/data/data';

import Header from "../../sharedComponents/header/header";
import PictureSet from "./ProductDetailsPictureSet";
import Body from "./ProductDetailsBody";

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
                <Link className="backward" href="/">&lt; Retour aux recherches</Link>
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
        margin: 20px 0px;
    }

    .PDpictureSet
    {
        flex-basis: 45%;
    }
    
`;
