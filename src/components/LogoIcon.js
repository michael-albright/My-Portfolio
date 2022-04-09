import React from 'react';

function LogoIcon(props) {
    return (
        <a href={props.href}>
            <img className="icon-logo mx-2" src={props.imgUrl} alt={props.alt}></img>
        </a>
    )
}

export default LogoIcon;