import React, { useState } from 'react';

import styled from 'styled-components';


let lastindex = null;

const PictureSet = ( { product } ) => {
    
    const [indexImage, setIndexImage] = useState(0);

    function handleMiniature(e, index) {
        setIndexImage(index);
        console.log("L'image ", index, " a été cliquée");
        console.log("e.target", e.target, "indexImage", indexImage, "index", index);

        if ( lastindex === null ){
            console.log('null')
        }
        else{
            lastindex.style.opacity = 1;
        }
        e.target.style.opacity = 0.5;
        console.log(lastindex);
        lastindex = e.target;
    }

    return (
        <PDPictureSetStyle className="PDpictureSet">
            <div className="miniaturesSet">
                {product.images.map((img, index) => (
                    <div
                        onClick={(e) => handleMiniature(e, index)} 
                        key={img.id}
                        value={index}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                        />
                    </div>
                ))}
            </div>

            <div className="bigsSet">
                <div>
                    <div>
                        <img src={product.images[indexImage].src} alt={product.images[indexImage].alt} />
                    </div>
                </div>
            </div>
        </PDPictureSetStyle>
    )
}

export default PictureSet;


const PDPictureSetStyle = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    //Miniatures
    .miniaturesSet
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    
    .miniaturesSet div
    {
        width: 60px;
        height: 60px;
        border: 1px solid #DCE1DD;
        margin: 0px 10px 10px 0px;
    }

    .miniaturesSet div img
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    //Agrandissements
    .bigsSet > div div
    {
        width: 100%;
        height: 100%;
        max-width: 250px;
        max-height: 250px;
        position: absolute;
        z-index: 0;
        left:0;
        right:0;
        margin-left:auto;
        margin-right:auto;
        border: 1px solid #DCE1DD;
    }

    .bigsSet > div div img
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    @media screen and (min-width:500px)
    {
        .bigsSet > div div
        {
            max-width: 400px;
            max-height: 400px;
        }
    }

    @media screen and (min-width:1100px)
    {
        
        flex-direction: row;
        align-items: flex-start;
        
        .miniaturesSet
        {
            flex-direction: column;
        }
        
        .bigsSet > div div
        {
            max-width: 400px;
            max-height: 400px;
            margin-left: 100px;
        }
    }

    @media screen and (min-width:1500px)
    {
        .bigsSet > div div
        {
            max-width: 500px;
            max-height: 500px;
            margin-left: 110px;
        }
    }
    @media screen and (min-width:1800px)
    {
        .bigsSet > div div
        {
            max-width: 600px;
            max-height: 600px;
            margin-left: 120px;
        }
    }

`;