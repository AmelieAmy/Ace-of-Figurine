import React from 'react';
import styled from 'styled-components';

import Header from "../../sharedComponents/header/header";
import TopCategories from "./topCategories";
import ArticlePreview from "./articlePreviewSection";
import AsideFilters from "./asideFilters";

const Home = () => {
    return (
        <HomeStyle>
            <Header />
            <TopCategories />
            <div className="mainContent">
                <AsideFilters />
                <ArticlePreview />
            </div>
        </HomeStyle>
    );
};

export default Home;


const HomeStyle = styled.div`

    /* margin: 0 auto; */

    .mainContent
    {
        display: flex;
        justify-content: space-between;
        max-width: 95%;
        margin: 0 auto;
    }

    .aFilters
    {
        flex-basis: 265px;
    }

    .aPreview
    {
        flex-basis: 1;
    }

`;