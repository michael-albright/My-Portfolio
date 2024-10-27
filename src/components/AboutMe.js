import React from 'react';

function AboutMe() {
        return (
            <div class="mx-2">
                <h1 className="about-title d-flex justify-content-center mb-2" id="about-me">About Me</h1>
                <h4 className="about-title-2 d-flex justify-content-center mt-3 mb-3">
                A Journey to Programming
                </h4>
                <p className="about-content m-0">
                    Problem solving, artistry, and a devotion to perfection has lead me to 
                    a career in Web Development. My training, first at 
                    Tech Talent South,  and now with GenSpark, has given me the necessary talent to 
                    excel in a Java back-end or full-stack development position. With 
                    experience gained from many years in the hospitality industry, I bring a great 
                    attitude and positivity
                    to all aspects of my life. I pride myself on my abilities to bring people together
                    by loosening up the insecurities of those around me and forming a 
                    teamwork mentality among all walks of life.
                </p>   
                <br/>
                <p className="about-contact-video mx-2">
                    If you are nterested in a little face-time check out my intro-video via YouTube. 
                </p>  
                <div className="container d-flex justify-content-center">
                    <a href="https://www.youtube.com/watch?v=Q_chwRCWajM">
                        <img className="youtube-logo" 
                            src="./images/youtube-logo.png" 
                            alt="YouTube Logo"></img>
                    </a>
                </div>
            </div>

        );
    }

export default AboutMe;