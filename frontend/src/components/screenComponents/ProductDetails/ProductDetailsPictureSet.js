import React from 'react';

import styled from 'styled-components';
// import Carousel from 'react-elastic-carousel'

// const pictureSet = ( { product } ) => {

//     return(
//         <PDPictureSetStyle>
//             <Carousel showArrows={false}>
//                 {product.images.map(item => <img key={item.id} src={item.src} alt={item.alt} />)}
//             </Carousel>
//         </PDPictureSetStyle>
//     )
// }

const pictureSet = ( { product } ) => {

    function handleMiniature(e) {
        console.log("L'image n {product._id} a été cliquée");
    }

    return (
        <PDPictureSetStyle className="PDpictureSet">
            <div className="miniaturesSet">
                {product.images.map((img) => (
                    <div key={img.id}>
                        <img
                            onClick={handleMiniature()} 
                            src={img.src}
                            alt={img.alt}
                        />
                    </div>
                ))}
            </div>
            <div className="bigsSet">
                <div>
                    {product.images.map((img) => (
                        <div key={img.id}>
                            <img
                                src={img.src}
                                alt={img.alt}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </PDPictureSetStyle>
    )
}

export default pictureSet;


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


    /* img
    {
        width: 100%;
        //max-width: 300px;
    }

    .rec-carousel-wrapper
    {
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
    }

    .rec-carousel-wrapper img
    {
        border: 1px solid #DCE1DD;
    }

    .rec-pagination
    {
        display: flex;
        flex-direction: column;
    } */
`;