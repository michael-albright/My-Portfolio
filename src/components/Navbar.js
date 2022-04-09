import React from 'react';
import LogoIconData from './LogoIconData';
import LogoIcon from './LogoIcon';

function NavBar() {
   const logoIcon = LogoIconData.map((logo) => {
       return(
        <LogoIcon href={logo.href} imgUrl={logo.imgUrl} alt={logo.alt}/>
       )
   });
        return (
            <nav className="navbar navbar-expand- navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand m-0 p-0" href="#home">Michael S Albright {logoIcon}</a>
                    <button class="navbar-toggler p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span id="toggler-icon" class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg d-flex justify-content-flex-end">
                        <a className="nav-link" href="#about-me">About</a>
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                        <a className="nav-link" href="#contact-form">Contact</a>
                    </div>
                </div> 
            </nav>
        );
    }

export default NavBar;