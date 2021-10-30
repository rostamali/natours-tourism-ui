import React from 'react';
import ourStoryImg from '../../images/image-1.png';
import './OurStories.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const OurStories = () => {



    return (
        <div id="our-stories-section" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="story-thumbnail">
                            <img src={ourStoryImg} alt="Our story" />
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <h2 className="section-title">
                            our <span className="text-color">stories</span> with
                            <br />
                            adventurers
                        </h2>
                        <p className="subtitle mt-3">
                            We are experienced in bringing adventure to start their journey, all outdoor destination in the world are our specialties

                            <br /><br />

                            So don't hesitate to start your adventure right now, natours has already called you !
                        </p>
                        {/* count down */}
                        <div className="counter-wrapper mt-5">
                            <div className="row">
                                <div className="col-sm-4 col-12">
                                    <div className="countup-item" >
                                        <CountUp 
                                            end={12} 
                                            redraw={true}
                                            start={0}
                                            duration={1.34}
                                            suffix="K+"
                                        >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p className="subtitle">Success Journey</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-12">
                                    <div className="countup-item" >
                                        <CountUp 
                                            end={16} 
                                            redraw={true}
                                            start={0}
                                            duration={1.34}
                                            suffix="+"
                                        >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p className="subtitle">Awards Winning</p>
                                    </div>
                                </div>    
                                <div className="col-sm-4 col-12">
                                    <div className="countup-item" >
                                        <CountUp 
                                            end={20} 
                                            redraw={true}
                                            start={0}
                                            duration={1.34}
                                            suffix="+"
                                        >
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                        <p className="subtitle">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStories;