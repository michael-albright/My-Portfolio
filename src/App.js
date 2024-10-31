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
import CloudDevCard from './components/CloudDevCard';
import CloudDevCardData from './components/CloudDevCardData';
import ProjectCardHeader from './components/ProjectCardHeader';
import JavaSkillHeader from './components/JavaSkillHeader';
import JavaSkillCard from './components/JavaSkillCard';
import JavaSkillCardData from './components/JavaSkillCardData';

function App() {
  const projectCard = ProjectCardData.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        imgUrl={project.imgUrl}
        card_title={project.card_title}
        card_text={project.card_text}
        youtube_link={project.youtube_link}
        github_link={project.github_link} />
    )
  });
  const javaSkillCard = JavaSkillCardData.map((project) => {
    return (
      <JavaSkillCard
        key={project.id}
        imgUrl={project.imgUrl}
        card_title={project.card_title}
        card_text={project.card_text}
        youtube_link={project.youtube_link}
        github_link={project.github_link} />
    )
  });
  const cloudDevCard = CloudDevCardData.map((project) => {
    return (
      <CloudDevCard
        key={project.id}
        imgUrl={project.imgUrl}
        card_title={project.card_title}
        card_text={project.card_text}
        youtube_link={project.youtube_link}
        api_github_link={project.api_github_link}
        ui_github_link={project.ui_github_link} />
    )
  });

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="container-fluid pb-5 mt-3 d-flex justify-content-center" style={{ maxWidth: '90%' }} id="intro-content">
        <div className="row">
          <div className="col-sm-4">
            <ImageOfMe />
          </div>
          <div className="col-sm-8">
            <TypeEffect />
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 pb-5 mt-5" style={{ maxWidth: '80%' }}>
        <AboutMe />
      </div>
      <div>
        <PortfolioHeader />
      </div>
      <div className="container">
        <div className="row align-items-start d-flex justify-content-center">
          {cloudDevCard}
        </div>
      </div>
      <div>
        <ProjectCardHeader />
      </div>
      <div className="container">
        <div className="row align-items-start d-flex justify-content-center">
          {projectCard}
        </div>
      </div>
      <div>
        <JavaSkillHeader />
      </div>
      <div className="container">
        <div className="row align-items-start d-flex justify-content-center">
          {javaSkillCard}
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
