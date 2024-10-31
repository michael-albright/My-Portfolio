import React from 'react';

function AboutMe() {
        return (
            <div class="mx-2">
                <h1 className="about-title d-flex justify-content-center mb-2" id="about-me">About Me</h1>
                <h4 className="about-title-2 d-flex justify-content-center mt-3 mb-3">
                A Journey to Programming
                </h4>
                <p className="about-content first-para m-0">
                Problem solving, artistry, and a devotion to perfection led me to a career in
                Software Engineering -- but after almost 4 years in the industry -- its the challenges, 
                continuous learning, creativity, and collaboration that I appreciate the most.  
                In that time, I have quickly grown to be a well rounded Full-Stack developer 
                ready to contribute at any stage of the SDLC. I am hard-working and truly dedicated
                to giving 100% to all that I do. 
                </p>
                <p className="about-content mt-4">
                As an accomplished Software Engineer with strong knowledge of AWS cloud infrastructure, 
                microservices, and end-to-end development, I bring a unique blend of skills in system 
                architecture, deployment automation, and application resiliency. Starting as a Java Web 
                API Developer and advancing through 3 years of hands-on, practical experience, I’ve cultivated a 
                deep understanding of the full software lifecycle and a rich AWS toolkit. Currently, I manage, 
                troubleshoot, and innovate on 2 highly dynamic ECS-based REST services with modular designs, 
                serving live production workloads via an Angular UI on S3 and supported by RDS Postgres, Oracle, 
                and DynamoDB configurations.
                </p>
                <p className="about-content mt-4">
                I collaborated heavily on transforming a monolithic legacy service into agile, 
                microservices, including a batch-processing system orchestrated with 
                an event-driven architecture utilizing EventBridge, StepFunctions, and Lambdas 
                and a completetly Configuration-Driven REST Service built on DynamoDb 
                for accessing secure data in Oracle RDS based on user's roles and input.
                Leveraging my AWS Certified Developer Associate credential, I’ve implemented 
                sophisticated health checks, data transformation routines, and parameterized 
                configurations throughout our services. I’m also well versed in Docker, Jenkins, 
                Nexus, and the automation of complex deployment workflows, managing everything 
                from database scripts to CI/CD pipeline integrations. My work ensures seamless, 
                secure deployments across Parameter Store, Secrets Manager, Route53, and CloudWatch 
                and a commitment to stability, innovation, and cloud-native efficiency.
                </p>
                <p className="about-content mt-4">
                While my technical skills are current, polished, and growing daily I lean on my 
                personality traits to be the best employee and colleague I can be. With the 
                experience gained from many years in the hospitality industry, I bring a great
                attitude and positivity to all aspects of my life. I pride myself on my abilities to 
                bring people together by loosening up the insecurities of those around me and forming 
                a teamwork mentality among all walks of life.
                </p> 
                <p className="about-content mt-4">
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