import React from 'react';

function CloudDevCard(props) {
    return (
        <div className="card" style={{ width: '100%', margin: '0 auto', minWidth: '15rem',  maxWidth: '70%' }}>
            <img
                src={props.imgUrl}
                className="mt-2 mx-2"
                alt={props.alt} />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">{props.card_title}</h5>
                <p className="card-text">
                    {props.card_text}
                </p>
                <a href={props.youtube_link}
                    className="card-link">View YouTube Demo</a>
                <a href={props.api_github_link}
                    className="card-link m-0">View API Code</a>
                <a href={props.ui_github_link}
                    className="card-link m-0">View UI Code</a>
            </div>
        </div>
    )
}


export default CloudDevCard;