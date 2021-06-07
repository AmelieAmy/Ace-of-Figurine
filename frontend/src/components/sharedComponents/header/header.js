import React from 'react';

import styled from 'styled-components';
import HeaderDesktop from "./headerDesktop";
import HeaderMobile from "./headerMobile";


const Header = () => {

    return (
        
        <Headers>
            <HeaderMobile />
            <HeaderDesktop />
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