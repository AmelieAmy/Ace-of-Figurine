import React from 'react';

import styled from 'styled-components';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';


const Slideshow = ( { product } ) => {

    const slideshowMiniatures =
        product.images.map((item, index) => (
            item.src
        ))
    const mini = 
        { 
            backgroundImage: 'url(' + slideshowMiniatures + ')' 
        }

    const min01 = { backgroundImage: 'url(' + slideshowMiniatures[0] + ')' };
    const min02 = { backgroundImage: 'url(' + slideshowMiniatures[1] + ')' };
    const min03 = { backgroundImage: 'url(' + slideshowMiniatures[2] + ')' };
    const min04 = { backgroundImage: 'url(' + slideshowMiniatures[3] + ')' };
    const min05 = { backgroundImage: 'url(' + slideshowMiniatures[4] + ')' };
    const min06 = { backgroundImage: 'url(' + slideshowMiniatures[5] + ')' };

    console.log(min01)

    const zoomOutProperties = {
        // indicators: false,
        scale: 0.4,
        indicators: i => (<div style={mini} className="indicator">{i}</div>)
        // indicators: i => (product.images.map((item) => ( <img src={item.src} alt={slideshowMiniatures} />)))
        // indicators: product.images.map(item => <img key={item.id} src={item.src} alt={item.alt} />)
    }

    return (
        
        <SlideshowStyle>
            <div>
                <Zoom {...zoomOutProperties}>
                    { product.images.map((img) => (
                        <div key={img.id} className="imgContainer">
                            <img  src={img.src} alt={img.alt} />
                        </div>
                    ))}
                </Zoom>
            </div>
        </SlideshowStyle>
    )
}

export default Slideshow;


const SlideshowStyle = styled.div`

    width: 600px;

    .imgContainer
    {
        width: 95%;
        height: 95%;         
        object-fit: cover;
    }

    .imgContainer img
    {
        width: 100%;
        height: 100%;         
        object-fit: cover;
    }

    .indicator {
        cursor: pointer;
        padding: 10px;
        text-align: center;
        border: 1px #666 solid
    }

    .indicator.active {
        color: #fff;
        background: #666;
    }
`;