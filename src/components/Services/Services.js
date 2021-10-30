import React, { useEffect, useState } from 'react';
import './Services.css';

//
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Service from '../Service/Service';

const Services = () => {

    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://intense-earth-41554.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setData(data));
    },[])

    // change arrow
    function NextNavButton(props) {
        const {onClick} = props;
        return (
            <button className="slick-arrow res-slick-next"
            onClick={onClick}><i className="fas fa-chevron-right"></i></button>
        );
    }
    function PrevNavButton(props) {
        const {onClick} = props;
        return (
            <button className="slick-arrow res-slick-prev"
            onClick={onClick}><i className="fas fa-chevron-left"></i></button>
        );
    }
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextNavButton/>,
        prevArrow: <PrevNavButton/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }
        ],
        arrows: true
    };


    return (
        <div className="service-packages">
            <div className="container">
                <div className="service-section-header">
                    <h2 className="section-title">
                        find <span className="text-color">popular</span>
                        <br />
                        Destinations
                    </h2>
                </div>
                <Slider {...settings}>
                    {
                        data.map(service=><Service key={service._id} service={service}></Service>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Services;