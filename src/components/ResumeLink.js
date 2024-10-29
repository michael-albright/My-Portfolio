import React from 'react';


const ResumeLink = () => (
    <a href={`${process.env.PUBLIC_URL}/documents/resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link">
        View My Resume
    </a>
);

export default ResumeLink;
