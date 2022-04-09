import React from 'react';
import './App.css';
import { TypeEffect } from './components/TypeEffect';
import ImageOfMe from './components/ImageOfMe';
import Navbar from './components/Navbar';
import ContactMeForm from './components/ContactMeForm';
import ContactInfo from './components/ContactInfo';
import PortfolioHeader from './components/PortfolioHeader';
import AboutMe from './components/AboutMe';
import FootNote from './components/FootNote';
import ProjectCard from './components/ProjectCard';
import ProjectCardData from './components/ProjectCardData';

function App() {
  const projectCard = ProjectCardData.map((project) => {
    return(
      <ProjectCard 
        key={project.id} 
        imgUrl={project.imgUrl} 
        card_title={project.card_title} 
        card_text={project.card_text} 
        youtube_link={project.youtube_link} 
        github_link={project.github_link} />
    )
  });

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="container-fluid pb-5 d-flex justify-content-center" id="intro-content">
        <div className="row">
          <div className="col-sm-4">
            <ImageOfMe />
          </div>
          <div className="col-sm-8">
            <TypeEffect />
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 pb-5" id="about-section">
        <AboutMe />
      </div>
      <div>
        <PortfolioHeader />
      </div>
      <div className="container">
        <div className="card-columns">
          {projectCard}
        </div>
      </div>
      <div className="contact-form-gap mb-5 pb-5">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <ContactMeForm />
            </div>
            <div className="col-md-6">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <FootNote />
      </footer>
    </div>
    
  );
}

export default App;
