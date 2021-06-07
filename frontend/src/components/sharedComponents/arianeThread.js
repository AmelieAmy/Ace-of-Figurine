import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const ArianeThread = () => {

    return (
        <Breadcrumbs aria-label="breadcrumb" className="ariane">
            <Link color="inherit" href="/" onClick={handleClick}>
                Material-UI
            </Link>
            <Link color="inherit" href="/" onClick={handleClick}>
                Core
            </Link>
            <Typography color="textPrimary">Current</Typography>
        </Breadcrumbs>
    );
}

export default ArianeThread;