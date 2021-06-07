import React from 'react';

import data from '../../../assets/data/data';

import Header from "../../sharedComponents/header/header";
import TopCategories from "./topCategories";
import AsideFilters from "./asideFilters";
import ProductMiniature from "./productMiniature";

import styled from 'styled-components';


const ScreenProductMiniature = () => {
    return (
        <SPMStyle>
            <Header />
            <TopCategories />
            <div className="mainContent">
                <AsideFilters />
                <div>
                    <div className="miniaturesCardContainer">
                        {data.products.map((product) => (
                            <ProductMiniature key={product._id} product={product} />
                        ))}
                    </div>
                </div>
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
        max-width: 95%;
        margin: 0 auto;
    }

    .aFilters
    {
        flex-basis: 265px;
    }

    .miniaturesCardContainer
    {   
        width: 1530px;
        display: flex;
        flex-wrap: wrap;
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






















// import React from 'react';

// import data from '../../../assets/data/data';

// import Header from "../../sharedComponents/header/header";
// import TopCategories from "./topCategories";
// import AsideFilters from "./asideFilters";
// import Rating from './rating';

// import styled from 'styled-components';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


// const ScreenProductMiniature = () => {
//     return (
//         <SPMStyle>
//             <Header />
//             <TopCategories />
//             <div className="mainContent">
//                 <AsideFilters />
//                 <div>
//                     <div className="miniaturesCardContainer">
//                         {data.products.map((product) => (
//                             <div className="miniatureCard">
//                                 <a href={`/product/${product._id}`}>
//                                     <img
//                                     className="medium"
//                                     src={product.image}
//                                     alt={product.name}
//                                     />
//                                 </a>
//                                 <div className="miniatureCardBody">
//                                     <div>
//                                         <a href={`/product/${product._id}`}>
//                                             <h2>{product.name}</h2>
//                                         </a>
//                                         <FormControlLabel
//                                             control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
//                                         />
//                                     </div>
//                                     <Rating rating={product.rating} numReviews={product.numReviews} / >
//                                     <div className="price">
//                                         ${product.price}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </SPMStyle>
//     );
// };

// export default ScreenProductMiniature;


// const SPMStyle = styled.div`

//     .mainContent
//     {
//         display: flex;
//         justify-content: space-between;
//         max-width: 95%;
//         margin: 0 auto;
//     }

//     .aFilters
//     {
//         flex-basis: 265px;
//     }

//     .miniaturesCardContainer
//     {   
//         width: 1530px;
//         display: flex;
//         flex-wrap: wrap;
//     }

//     /* Main card */
//     .miniatureCard
//     {
//         flex-basis: 290px;
//         margin: 0px 0px 120px 16px;
//     }

//     .miniatureCard img
//     {
//         object-fit: cover;
//         width: 100%;
//         max-width: 290px;
//         height: 100%;
//         max-height: 390px;
//         border: 1px solid #DCE1DD;
//     }

//     /* Description Card */
//     .miniatureCardBody
//     {
//         text-align: left;
//     }

//     .miniatureCardBody > div:first-of-type
//     {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }

//     /* Title */
//     .miniatureCardBody h2
//     {
//         font-size: 1.1rem;
//         font-family: "Segoe UI Emoji";
//         font-weight: normal;
//         margin: 5px 0px 5px;
//     }
    
//     /* Favorite */
//     .miniatureCardBody .MuiFormControlLabel-root
//     {
//         margin: 0px 0px 0px 5px;
//     }

//     /* Price */
//     .miniatureCardBody .price
//     {
//         font-size: 1.3rem;
//         margin: 0.7rem 0px;
//     }
// `;