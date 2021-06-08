import React from 'react';

import styled from 'styled-components';


const MessageBox = ( { children, variant } ) => {
    return (
        <MessageBoxStyle className={`alert alert-${variant || 'info'}`}>
            { children }
        </MessageBoxStyle>
    )
}

export default MessageBox;


const MessageBoxStyle = styled.div`

    .success
    {
        color: white;
        background-color: #02691C;
    }

    .error
    {
        color: white;
        background-color: #690505;
    }

    /* .alert
    {
        color: white;
        background-color: #0F0569;
    } */
    
    .alert-info
    {
        color: white;
        background-color: #0F0569;
    }
    
    .alert-danger
    {
        color: white;
        background-color: #690505;
    }

`;
