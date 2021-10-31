import React from 'react';
import Rating from 'react-rating';
import './Review.css';

const Review = (props) => {
    
    const {reviewText, name, title, rating} = props.reviews;
    

    return (
        <div className="review-list">
            <div className="review-item">
                <p className="review-text">
                    {reviewText} 
                </p>
                <div className="review-rating">
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        initialRating={parseInt(rating)}
                        readonly
                    />
                </div>
                <h5 className="adventurers-name">{name}</h5>
                <h6 className="adventurers-title">{title}</h6>
            </div>
        </div>
    );
};

export default Review;