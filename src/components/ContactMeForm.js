import React from 'react';

function ContactMeForm() {
        return (
            <div className="container-fluid">
                <div className="message-form"> 
                    <form id="contact-form" 
                    action="https://formspree.io/f/xbjwabon"
                    method="POST">
                    <h6 className="mb-2 mt-5 pt-2 contact-header">
                        Message Me
                    </h6>
                        <div className="mb-2">
                            <input type="email" 
                            className="form-control contact-input" 
                            id="floatingInput" 
                            placeholder="Your@email.com" 
                            aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-2">
                            <textarea type="message" 
                            className="form-control contact-input" 
                            rows="2" 
                            placeholder="Message"></textarea>
                        </div>
                            <button type="submit" 
                            className="btn btn-warning btn-sm contact-btn">
                                Send Message
                            </button>
                    </form>
                </div>
            </div>
        );
    }

export default ContactMeForm;
