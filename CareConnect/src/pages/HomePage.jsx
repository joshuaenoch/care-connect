import React from 'react'
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path);
    };

    return (
        <div className="home-container">
            <h2 className = "title" style={{margin: "45px 0px 45px 0px"}}>Welcome, <span style={{color: "blue"}}>User!</span></h2>
            <div className = "ofthedays">
                <div className = "oftheday">
                    <div>Memory of the day:</div>
                    <div style={{marginBottom:"50px", textAlign:"center"}}>"Today I played bingo at the mall with my granddaughter" - 9/4/2023</div>
                </div>
                <div className = "oftheday">
                    <div>Activity of the day:</div>
                    <button
                        style={{ backgroundColor: "darkblue", color: "white", marginTop: "10px", marginBottom: "45px" }}
                        onClick={() => handleClick("/sudoku")}
                    >
                        Play sudoku
                    </button>
                </div>
            </div>
            <div class="image-container">
                <img src="../public/images/avatar.png" alt="Avatar" width="150px" height="150px"/>
            </div>
            <div>
                Ben would love to talk!
            </div>
            <button
                style={{ backgroundColor: "darkblue", color: "white", marginTop: "10px", marginBottom: "90px" }}
                onClick={() => handleClick("/CaregiverPage")}
            >
                Message your caregiver
            </button>
        </div>
    );
}
