import React from 'react';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';

import styled from 'styled-components';


const Rating = ( { rating } ) => {

    return (
        <RatingStyle className="rating">
            <span>
                { rating >= 1
                    ? <StarIcon />
                    : rating >= 0.5
                    ? <StarHalfIcon />
                    : <StarBorderIcon />
                }
            </span>
            <span>
                { rating >= 2
                    ? <StarIcon />
                    : rating >= 1.5
                    ? <StarHalfIcon />
                    : <StarBorderIcon />
                }
            </span>
            <span>
                { rating >= 3
                    ? <StarIcon />
                    : rating >= 2.5
                    ? <StarHalfIcon />
                    : <StarBorderIcon />
                }
            </span>
            <span>
                { rating >= 4
                    ? <StarIcon />
                    : rating >= 4.5
                    ? <StarHalfIcon />
                    : <StarBorderIcon />
                }
            </span>
            <span>
                { rating >= 5
                    ? <StarIcon />
                    : rating >= 4.5
                    ? <StarHalfIcon />
                    : <StarBorderIcon />
                }
            </span>
        </RatingStyle>
    )
}

export default Rating;


const RatingStyle = styled.div`

    display: flex;
    align-items: center;

    span svg
    {
        display: flex;
        align-items: center;
    }

    span svg
    {
        fill: #FFA726;
    }
      
`;