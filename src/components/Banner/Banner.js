import React from 'react';
import bannerThumbnail from '../../images/hero-thumbnail.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div id="banner-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="banner-text">
                                <h1 className="banner-title">
                                    live your <br />
                                    <span className="text-color">
                                    adventure
                                    </span>
                                </h1>
                                <p className="subtitle">
                                    Don't wait untill tomorrow, discover your <br />
                                    adventure now and feel the sensation <br /> of closeness to nature around you
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="banner-thumbnail">
                                <img src={bannerThumbnail} alt="Banner Thumbnail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;