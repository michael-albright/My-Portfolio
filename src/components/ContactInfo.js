import React from 'react';

function ContactInfo() {
        return (
            <div className="container-fluid">
                <ul className="contact-list pl-2">
                    <li className="mt-5 d-flex align-content-center">
                        <a href="mailto:msalbrig@gmail.com">
                        <img className="logo-img"
                        src="/images/gmail-logo.png"
                        alt="Google Mail Logo" />
                        </a>
                        <p className="px-3 contact-list-item">Msalbrig@gmail.com</p>
                    </li>
                    <li className="mt-2 d-flex align-content-center">
                        <a href="https://www.linkedin.com/in/michaelsalbright/">
                        <img className="logo-img"
                        src="/images/linkedin-logo.png"
                        alt="LinkedIn Logo" />
                        </a>
                        <p className="px-3 contact-list-item">Contact me on LinkedIn</p>
                    </li>
                    <li className="mt-2 d-flex align-content-center">
                        <a href="https://portfolium.com/MichaelAlbright">
                        <img className="logo-img"
                        src="/images/portfolium-logo.png"
                        alt="Portfolium Logo" />
                        </a>
                        <p className="px-3 contact-list-item">Contact me on Portfolium</p>
                    </li>   
                </ul>
            </div>
        )
    }

export default ContactInfo;
/* GOOGLE PNG CREDITED TO: <a href="https://pixlok.com/images/gmail-logo-png-image-free-download/">House photo created by Search png - www.pixlok.com</a>  */
/* linkedIn img credited to: <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a> */