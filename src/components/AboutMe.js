import React from 'react';

function AboutMe() {
        return (
            <div class="mx-2">
                <h1 className="about-title d-flex justify-content-center mb-2" id="about-me">About Me</h1>
                <h4 className="about-title-2 d-flex justify-content-center mt-3 mb-3">
                A Journey to Programming
                </h4>
                <p className="about-content m-0">
                Problem solving, artistry, and a devotion to perfection led me to a career in
                Software Engineering -- but after almost 4 years in the industry -- its the challenges, 
                continuous learning, creativity, and collaboration that I appreciate the most.  
                In that time, I have quickly grown to be a well rounded Full-Stack developer 
                ready to contribute at any stage of the SDLC. I am hard-working and truly dedicated
                to giving 100% to all that I do. 
                </p>
                <p>
                My development skills started in Java Web Development and have branched out into 
                many aspects of software engineering. I am a Certified AWS Associate Developer with 
                2 years of hands-on work experience 
                practical experience in serverless architectures, event-driven ??? 
                I have a solid understanding of CICD development
                in an Agile environment.
                </p>
                <p>
                With experience gained from many years in the hospitality industry, I bring a great
                attitude and positivity to all aspects of my life. I pride myself on my abilities to 
                bring people together by loosening up the insecurities of those around me and forming 
                a teamwork mentality among all walks of life.
                </p> 
                <p>
                I am looking for a position that will challenge my skills. I want to be pushed out of 
                my comfort zone and trusted to work my way out. -- In this ever changing landscape of 
                technologies I am always looking for new, streamlined approaches to common problems and
                eager to unbox, learn, and utilize them. -- I am motivated by personal growth and I want 
                to funnel that motivation into a long-term position on a great team. I will try, fail, 
                learn, and try again until I succeed. 
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