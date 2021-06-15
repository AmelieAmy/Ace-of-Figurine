import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Badge from '@material-ui/core/Badge';

import Logo from '../../../assets/imgs/logo.png';

const headerDesktop = ( { cart, setCart } ) => {
    return (
        <Desktop className="desktop">
            <div className="desktopFirstNav">
                <nav>
                    <Link to="/search" className="searchIcon">
                        <SearchIcon />
                    </Link>
                    <Link to="/" className="logoTitle">
                        Ace of&#xA0;<img src={Logo} alt="Logo" />igurine
                    </Link>
                    <div className="rightSetOfIcones">
                        <Link to="/profil">
                            <Badge color="secondary" badgeContent={0}>
                                <PersonIcon />
                            </Badge>
                        </Link>
                        <Link to="/favorites">
                            <Badge color="secondary" badgeContent={0}>
                                <FavoriteIcon />
                            </Badge>
                        </Link>
                        <Link to="/cart/:id">
                            <Badge color="secondary" badgeContent={cart}>
                                <ShoppingBasketIcon />
                            </Badge>
                        </Link>
                    </div>
                </nav>
            </div>
            <div className="desktopLastNav">
                <nav>
                    <Link to="/">Pâtes & Argiles</Link>
                    <Link to="/">Outils</Link>
                    <Link to="/">Peintures</Link>
                    <Link to="/">Galerie</Link>
                    <Link to="/">Tutos</Link>
                </nav>
            </div>
        </Desktop>
    );
};

export default headerDesktop;


const Desktop = styled.header`

    /* FIRST NAVIGATION STYLE */
    /* general > */
    div.desktopFirstNav
    {
        display: flex;
        justify-content: center;
        background-color: #770011;
        padding: 12px 0px;
        font-size: 2rem;
    }
    
    div.desktopFirstNav nav
    {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    /* < general */

    div.desktopFirstNav nav a:first-of-type
    {
        flex-basis: 102px;
        text-align: left;
    }

    /* logo */
    .logoTitle
    {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
    }

    /* right set of icones */
    .rightSetOfIcones a:nth-last-of-type(2)
    {
        padding: 0px 15px;
    }

    /* left set of icones */
    .searchIcon
    {
        padding-top: 10px;
    }


    /* second navigation style */
    /* general > */
    div.desktopLastNav
    {
        display: flex;
        justify-content: center;
        background-color: #9E2133;
        padding: 8px 0px;
    }
    /* < general */

    div.desktopLastNav a
    {
        font-variant: small-caps;
        font-family: "Segoe UI Emoji";
        font-size: 1.3rem;
        font-weight: normal;
        padding: 0px 30px;
    }

`;
