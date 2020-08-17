import React from "react";
import useLightMode from "../hooks/useLightMode";

const LightToggle = () => {
    const [lightMode, setLightMode] = useLightMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setLightMode(!lightMode);
    };
    
    return (
        <div className="toggler">
            <h2>Let there be light...</h2>
            <div className="light-mode__toggle">
                <button
                    onClick={toggleMode} 
                    className={lightMode ? "toggle toggled" : "toggle"}   
                >
                </button>
            </div>
        </div>
    );
};

export default LightToggle;