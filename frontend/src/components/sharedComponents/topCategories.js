import React from 'react';

import styled from 'styled-components';

const topCategories = () => {
    return (
        <TopCategories>
            <div>
                <h1>Pâtes & Argiles</h1>
                <p>26 articles</p>
            </div>
            <div className="tags">
                <div>Pop</div>
                <div>Pop</div>
                <div>Pop</div>
                <div>Pop</div>
            </div>
        </TopCategories>
    )
}

export default topCategories;


const TopCategories = styled.div`

    background-color: #FAF3EE;
    margin: 2rem auto;
    max-width: 95%;
    padding: 1rem;

    /* Titre et nombre d'articles */
    div:first-of-type
    {
        display: flex;
        justify-content: center;
        align-items: baseline;
    }

    /* titre */
    h1
    {
        font-variant: small-caps;
        font-family: "Segoe UI Emoji";
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
    }

    /* nb d'article */
    p
    {
        padding-left: 25px;
        font-weight: bold;
        font-family: "Segoe UI Emoji";
        color: #B83100;
    }

    
    /* Ligne de Tags */
    div.tags
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Tags */
    div.tags div
    {
        padding: 5px 10px;
        margin: 0px 10px;
        border-radius: 2px;
        background-color: #E6D1C3;
    }


`;
