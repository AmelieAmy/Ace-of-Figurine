import React from 'react';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarIcon from '@material-ui/icons/Star';


const Rating = ( { rating, numReviews } ) => {

    return (
        <div className="rating">
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
            <span>({numReviews})</span>
        </div>
    )
}

export default Rating;
