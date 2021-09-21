import React from 'react';
import './App.css';

const Technical_skills = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-10 det mt-3 mx-5 text-center">
                        <h3><b>Technical Skills</b></h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 my-4 tech-skills tech-des">
                        <div className="skills align-items-center">
                            <h3 className="mar-gap"><b>Programming Languages :- </b></h3>
                            <h4 className="mar-gap val">C, C++, Java, Python</h4>
                        </div>

                        <div className="skills">
                            <h3 className="mar-gap"><b>Domain Knowledge :- </b></h3>
                            <h4 className="mar-gap val">Data Structure, Algorithm</h4>
                        </div>

                        <div className="skills">
                            <h3 className="mar-gap"><b>Skills :- </b></h3>
                            <h4 className="mar-gap val">Html, Css, Java Script, Php, React JS</h4>
                        </div>

                        <div className="skills">
                            <h3 className="mar-gap"><b>Database Management System :- </b></h3>
                            <h4 className="mar-gap val">MySql</h4>
                        </div>

                        <div className="skills">
                            <h3 className="mar-gap"><b>Operating Systems :- </b></h3>
                            <h4 className="mar-gap val">Windows, Linux</h4>
                        </div>

                        <div className="skills">
                            <h3 className="mar-gap"><b>Computer Proficiency :- </b></h3>
                            <h4 className="mar-gap val">Basic knowledge of MS-Office</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technical_skills
