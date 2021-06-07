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
    justify-content: flex-start;
    align-items: flex-start;

    //Miniatures
    .miniaturesSet
    {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    
    .miniaturesSet div
    {
        width: 80px;
        height: 80px;
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
        width: 500px;
        height: 500px;
        position: absolute;
        z-index: 0;
    }

    .bigsSet > div div img
    {
        width: 100%;
        height: 100%;
        object-fit: cover;
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