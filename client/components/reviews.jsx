import React from 'react';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const Reviews = ({ reviews, rating }) => {
  const starDisplay = [];

  for (let i = 1; i <= rating; i += 1) {
    starDisplay.push(i);
  }

  return (
   <div>
      <div className="rating">
        {starDisplay.map(e => <FontAwesomeIcon icon="star" key={e} />)}
        <span className="reviews">
          &nbsp;
          &nbsp;
          {reviews}
        </span>
      </div>
      <div className="line-break" />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.number,
  rating: PropTypes.number,
};

Reviews.defaultProps = {
  reviews: 0,
  rating: 1,
};

export default Reviews;
