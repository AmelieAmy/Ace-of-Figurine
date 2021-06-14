import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from "../../sharedComponents/header/header";
import PPictureSet from "./productDetailsPictureSet";
import PDetailsDescription from "./productDetailsDescription";
import LoadingBox from "../../sharedComponents/loadingBox";
import MessageBox from "../../sharedComponents/messageBox";
import { detailsProduct } from '../../../reduxFiles/actions/productActions';

import styled from 'styled-components';


const ProductDetailsScreen = ( props) => {

    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const  { loading, product, error } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <PDSStyle>
            <Header />
            <div className="container">
                { loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <Link className="backward" to="/">&lt; Retour aux recherches</Link>
                        <div className="productDetail">
                            <PPictureSet product={product} />
                            <PDetailsDescription product={product} />
                        </div>
                    </>
                )}
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
