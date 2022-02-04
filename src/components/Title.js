import React from "react";
import Data from "../Data.json";
import "./Template.css";


const Title = () => {
    return (
        <div className="image-title">
            <p className="username">{Data[0].username}</p>
            <p>{Data[0].personalInfo}</p>
        </div>
    );
};

export default Title;