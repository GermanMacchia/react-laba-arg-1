import React from "react";
import "./Card.css";
const Card = ({ index, src, onClick, loader }) => {
    return (
        <div className="container__image">
            <div
                className="image"
                style={{ backgroundImage: `url(${src})` }}
                onClick={onClick}
            ></div>
            <div className={loader && "overlay loading"}></div>
        </div>
    );
};

export default Card;