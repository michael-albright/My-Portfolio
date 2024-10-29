import React from 'react';

function ContactMeForm() {
    return (
        <div className="container-fluid">
            <div className="message-form">
                <h6 className="mb-2 mt-5 pt-2 contact-header">
                    Message Me
                </h6>
                <form id="contact-form"
                    action="https://formspree.io/f/xbjwabon"
                    method="POST">
                    <div className="mb-2">
                        <input type="text" name="name" className="form-control contact-input"
                            id="floatingInput" placeholder="Your Name" required>
                        </input>
                    </div>
                    <div className="mb-2">
                        <input type="email" name="email" className="form-control contact-input"
                            id="floatingInput" placeholder="Your@email.com" aria-describedby="emailHelp"
                            required></input>
                    </div>
                    <div className="mb-2">
                        <textarea type="message" name="message"
                            className="form-control contact-input"
                            rows="2"
                            placeholder="Message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-warning btn-sm contact-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactMeForm;
