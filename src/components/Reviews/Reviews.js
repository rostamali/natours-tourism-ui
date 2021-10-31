import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import adventureresImg from '../../images/adventurers.png';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {

    // get all the reviews
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://intense-earth-41554.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])

    // change arrow
    function NextNavButton(props) {
        const {onClick} = props;
        return (
            <button className="review-slick-arrow review-slick-next"
            onClick={onClick}><i className="fas fa-chevron-right"></i></button>
        );
    }
    function PrevNavButton(props) {
        const {onClick} = props;
        return (
            <button className="review-slick-arrow review-slick-prev"
            onClick={onClick}><i className="fas fa-chevron-left"></i></button>
        );
    }
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextNavButton/>,
        prevArrow: <PrevNavButton/>,
        arrows: true
    };

    return (
        <div id="reviews-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <h2 className="section-title">
                            what adventurers
                            <br />
                            say <span className="text-color">about us</span>
                        </h2>
                        <p className="subtitle mt-3">
                            See and discover what adventureers tell us about their journey with us, we always listen to whatever experience they have to say.
                        </p>
                        <div className="review-section">
                            <Slider {...settings}>
                                {
                                    reviews.map(review=><Review
                                    key={review._id}
                                    reviews={review}
                                    ></Review>)
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="adventureres-thumbnail text-md-end text-center">
                            <img src={adventureresImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;