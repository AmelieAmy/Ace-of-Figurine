import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import styled from 'styled-components';


const loadingBox = () => {
    return (
        <LoadingBoxStyle>
            <CircularProgress /> loading...
        </LoadingBoxStyle>
    )
}

export default loadingBox

const LoadingBoxStyle = styled.div`

    color: #1D2A70;
    
    div
    {
        width: 20px !important;
        height: 20px !important;
    }
`;
