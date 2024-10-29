import React from 'react';
import Typed from 'typed.js';

export class TypeEffect extends React.Component {

  componentDidMount() {
    // For testing purposes
    const shortStack = ["Java", "SpringBoot"];
  
    const techStack = [" Java", "SpringBoot", "PostgreSQL", "JavaScript", "Bootstrap", "Angular", 
      "TypeScript", "HTML/CSS", "Maven", "Gradle", "Hibernate", "JPA", "React", "Oracle",
      "Jenkins", "Docker", "UCD", "Nexus", "Nginx", "Git", 
      "Agile", "JIRA", "Terraform", "Dynatrace", "Postman", 
      "Selenium", "SauceLabs", "JMeter", "TestNG", "JUnit", "Swagger", "SonarQube", "ECS", "ECR", 
      "RDS", "S3", "Dynamo", "Lambda", "CFT", "Route53", "SNS", "SSM", "SQS", 
      "EventBridge", "TLS/SSL", "OWASP", "OAuth2", "JWT", "WebSockets", 
      "SOAP", "Microservices", "OOP", "ORM" ];

    const stringStart = "I work with";
    const lastString = "I am a Software Engineer.";

    const shuffledTechStack = techStack.map(value => ({ 
        value, sort: Math.random() 
      })).sort((a, b) => a.sort - b.sort)
      .map(({ value }) => `${stringStart} ${value}.`);

      // Push lastString to the end of the array without additional formatting
      shuffledTechStack.push(lastString);

    this.typed = new Typed(".auto-input", {
      strings: shuffledTechStack,
      typeSpeed: 100,
      backSpeed: 75,
      smartBackspace: true,
      loop: false
    });
    
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div class="type-effect-container">
        <div className="auto-text-body mt-4 mx-1 d-flex justify-content-center">
          <span className="auto-header auto-input"></span>
        </div>
          <p className="header-text part-1 m-2">
            Building robust web applications from <br /> <span className="header-text part-2">
            initiation to depolyment.</span>
          </p>
      </div>
    );
  }
}

