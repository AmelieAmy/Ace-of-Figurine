import React from 'react';
import data from '../../assets/data/data';

import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


const ArticlePreview = () => {
    
    // const handleCheckBoxChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    // };

    // const [state, setState] = React.useState({
    //   checkedA: true,
    //   checkedB: true,
    //   checkedF: true,
    //   checkedG: true,
    // });
    
    return (
        <ArticlePreviewStyle className="aPreview">
            <div className="cardContainer">
                {data.products.map((product) => (
                    <div key={product._id} className="card">
                        <a href={`/product/${product._id}`}>
                            <img
                            className="medium"
                            src={product.image}
                            alt={product.name}
                            />
                        </a>
                        <div className="cardBody">
                            <div>
                                <a href={`/product/${product._id}`}>
                                    <h2>{product.name}</h2>
                                </a>
                                <FormControlLabel
                                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                                />
                            </div>
                            <div className="rating">
                                <span>
                                    <StarIcon />
                                </span>
                                <span>
                                    <StarIcon />
                                </span>
                                <span>
                                    <StarIcon />
                                </span>
                                <span>
                                    <StarIcon />
                                </span>
                                <span>
                                    <StarIcon />
                                </span>
                            </div>
                            <div className="price">
                                ${product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ArticlePreviewStyle>
    )
}

export default ArticlePreview;


const ArticlePreviewStyle = styled.div`

    .cardContainer
    {   
        width: 1530px;
        display: flex;
        flex-wrap: wrap;
    }

    /* Main card */
    .card
    {
        flex-basis: 290px;
        margin: 0px 8px 120px;
    }

    .card img
    {
        object-fit: cover;
        width: 100%;
        max-width: 290px;
        height: 100%;
        max-height: 390px;
        border: 1px solid #DCE1DD;
    }

    /* Description Card */
    .cardBody
    {
        text-align: left;
    }

    .cardBody > div:first-of-type
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Title */
    .cardBody h2
    {
        font-size: 1.1rem;
        font-family: "Segoe UI Emoji";
        font-weight: normal;
        margin: 5px 0px 5px;
    }
    
    /* Favorite */
    .cardBody .MuiFormControlLabel-root
    {
        margin: 0px 0px 0px 5px;
    }

    /* Price */
    .cardBody .price
    {
        font-size: 1.3rem;
        margin: 0.7rem 0px;
    }
`;