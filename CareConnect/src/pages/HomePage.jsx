import React from 'react'
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className="container">
            <h2 className = "title">Welcome _user name_!</h2>
            <div className = "ofthedays">
                <div>Memory of the day:</div>
                <div style={{marginBottom:"20px", textAlign:"center"}}>"Today I played bingo at the mall with my granddaughter" - 9/4/2023</div>
            </div>
            <div className = "ofthedays">
                <div>Activity of the day:</div>
                <button
                    style={{ backgroundColor: "darkblue", color: "white", marginTop: "10px", marginBottom: "20px" }}
                    onClick={() => handleClick("/sudoku")}
                >
                    Play sudoku
                </button>
            </div>
            <div>__caregiver__ would love to talk!</div>
            <button
                style={{ backgroundColor: "darkblue", color: "white", marginTop: "10px", marginBottom: "10px" }}
                onClick={() => handleClick("/CaregiverPage")}
            >
                Message __caregiver__
            </button>
        </div>
    );
}