import React from 'react';
import './App.css';

const Achievements = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-10 det mt-3 mx-5 text-center">
                        <h3><b>Achievements</b></h3>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-12 my-4 tech-skills tech-des">
                        <div className="skills-ach">
                            <h3 className="mar-gap"><b>Achievement Name :- </b></h3>
                            <h4 className="mar-gap val">5* HackerRank, Problem Solving</h4>
                        </div>

                        <div className="skills-ach">
                            <h3 className="mar-gap"><b>Achievement Name :- </b></h3>
                            <h4 className="mar-gap val">5* HackerRank, CPP</h4>
                        </div>

                        <div className="skills-ach">
                            <h3 className="mar-gap"><b>Achievement Name :- </b></h3>
                            <h4 className="mar-gap val">5* HackerRank, Java</h4>
                        </div>

                        <div className="skills-ach">
                            <h3 className="mar-gap"><b>Achievement Name :- </b></h3>
                            <h4 className="mar-gap val">5* HackerRank, SQL</h4>
                        </div>

                        <div className="skills-ach">
                            <h3 className="mar-gap"><b>Achievement Name :- </b></h3>
                            <h4 className="mar-gap val">4* HackerRank, C Language</h4>
                        </div>

                        <div className="skills-ach">
                            <h3 className="mar-gap"><b>Achievement Link :- </b></h3>
                            <h4 className="mar-gap val"><a href="https://www.hackerrank.com/abhilashmajumda1" target="_blank">HackerRank Dashboard</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Achievements
