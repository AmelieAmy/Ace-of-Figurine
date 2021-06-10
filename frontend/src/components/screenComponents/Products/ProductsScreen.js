import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from "../../sharedComponents/header/header";
import ArianeThread from "../../sharedComponents/arianeThread";
import TopCategories from "./topCategories";
import AsideFilters from "./asideFilters";
import ProductMiniature from "./productsSection";
import LoadingBox from "../../sharedComponents/loadingBox";
import MessageBox from "../../sharedComponents/messageBox";
import { listProducts } from '../../../reduxFiles/actions/productActions';

import styled from 'styled-components';


const ScreenProductMiniature = () => {

    const dispatch = useDispatch();
    const productList = useSelector( (state) => state.productList );
    const { products, loading, error } = productList;
    
    useEffect(() => {
        dispatch(listProducts());
    }, []);

    return (
        <SPMStyle>
            <Header />
            <div className="container">
                { loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <>
                        <ArianeThread />
                        <TopCategories />
                        <div className="mainContent">
                            <AsideFilters />
                            <div className="miniaturesCardContainer">
                                {products.map((product) => (
                                    <ProductMiniature key={product._id} product={product} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </SPMStyle>
    );
};

export default ScreenProductMiniature;


const SPMStyle = styled.div`

    .mainContent
    {
        display: flex;
        justify-content: space-between;
    }

    .aFilters
    {
        display: none;
    }

    .miniaturesCardContainer
    {   
        flex-basis: 85%;
        /* width: 1530px; */
        display: flex;
        flex-wrap: wrap;
    }

    @media screen and (min-width:800px)
    {
        .aFilters
        {
            display: block;
            flex-basis: 15%;
        }
    }

    /* Main card */
    .miniatureCard
    {
        flex-basis: 290px;
        margin: 0px 0px 120px 16px;
    }

    .miniatureCard img
    {
        object-fit: cover;
        width: 100%;
        max-width: 290px;
        height: 100%;
        max-height: 390px;
        border: 1px solid #DCE1DD;
    }

`;