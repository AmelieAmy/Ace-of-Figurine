import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from '../../../assets/imgs/logo.png';


const HeaderMobile = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Mobile className="mobile">
            <div className="mobileFirstNav">
                <Link to="/">
                    Ace of&#xA0;<img src={Logo} alt="Logo" />igurine
                </Link>
            </div>
            <div className="mobileLastNav">
                <nav>
                    <Link to="/search">
                        <SearchIcon />
                    </Link>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><PersonIcon /> &#xA0; Mon compte</MenuItem>
                        <MenuItem onClick={handleClose}><FavoriteIcon /> &#xA0; Mes favoris</MenuItem>
                        <MenuItem onClick={handleClose}><ShoppingBasketIcon /> &#xA0; Mon panier</MenuItem>
                    </Menu>
                </nav>                
            </div>
        </Mobile>
    );

};

export default HeaderMobile;


const Mobile = styled.header`

    /* FIRST NAVIGATION STYLE */
    /* general > */
    div.mobileFirstNav
    {
        display: flex;
        justify-content: center;
        background-color: #770011;
        padding: 12px 0px;
    }
    /* < general */

    /* logo */
    div.mobileFirstNav a
    {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
    }


    /* second navigation style */
    /* general > */
    div.mobileLastNav
    {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #9E2133;
    }

    div.mobileLastNav nav
    {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-basis: 80%;
    }
    /* < general */

    div.mobileLastNav a
    {
        line-height: 0;
    }

    div.mobileLastNav a svg
    {
        font-size: 2rem;
    }

    div.mobileLastNav button span svg
    {
        font-size: 2.5rem;
        fill: #FFFFFF;
    }
`;
