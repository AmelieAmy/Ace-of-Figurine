import React from 'react';

import styled from 'styled-components';
import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";


const Header = ( { cart, setCart } ) => {

    return (
        
        <Headers>
            <HeaderMobile cart={cart} setCart={setCart} />
            <HeaderDesktop cart={cart} setCart={setCart} />
        </Headers>
    )
};

export default Header;


const Headers = styled.div`
    .mobile
    {
        display: block;
    }

    .desktop
    {
        display: none;
    }

    @media screen and (min-width:800px)
    {      
        .mobile
        {
            display: none;
        }

        .desktop
        {
            display: block;
        }
    }
`;