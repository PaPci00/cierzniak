import React from "react";
import "./Splash.css";
import zdjencie from "../assets/tlo.webp";

const Splash = () => {
    return (
        <div
            className="bg"
            style={{
                backgroundImage: `url(${zdjencie})`,
            }}
        >
            <div className="napisy">
                <div className="napis2">Twoja wypożyczalnia aut</div>
                <div className="napis">SZYBKIEFURY.PL</div>
            </div>
        </div>
    );
};

export default Splash;
