import React from 'react';
import './App.css';

const Projects = () => {
    return (
        <>
            <div className="det mt-3 mx-5 text-center">
                <h3><b>Projects</b></h3>
            </div>
            <div className="det pro-des">
                <div className="project1 mt-3 mx-5">
                    <h4><b>Project Name :- </b>Registration and Login Form using PHP and MySQL (07/2021 - 07/2021)</h4>
                    <h6><b>Description : </b>Frontend using HTML, CSS, Java Script Backend using PHP & MySQL
                        Framework Used Bootstrap 5.0 In this form, user must be sign up
                        first before logged in. After his id is created then he can logged in
                        and go to the welcome page , he can log out also when he needs.
                        Without log in anyone can't go to the welcome page.</h6>
                    <h6><b>Github Link :- </b><a href="https://github.com/AbhilashMajumdar/Registration-and-Login-Form-using-PHP-and-MySQL" target="_blank">Registration and Login Form using PHP and MySQL</a></h6>
                </div>
                <hr />

                <div className="project2 mx-5">
                    <h4><b>Project Name :- </b> CRUD Using PHP and MySQL (07/2021 - 07/2021)</h4>
                    <h6><b>Description : </b>Frontend using HTML, CSS, JAVASCRIPT. Backend using PHP and
                        MySQL. CREATION :- Here user can insert notes and description
                        about the notes in the database. READ :- User can see the notes
                        existed into database UPDATION :- User can update notes and
                        description when he wants to update anything. DELETION :- User can
                        delete the notes from the database.</h6>
                    <h6><b>Github Link :- </b><a href="https://github.com/AbhilashMajumdar/CRUD-Using-PHP-and-MySQL" target="_blank">CRUD Using PHP and MySQL</a></h6>
                </div>
                <hr />

                <div className="project3 mx-5">
                    <h4><b>Project Name :- </b>Weather App (07/2021 - 07/2021)</h4>
                    <h6><b>Description : </b>A Java Script Weather App, here we can find weather in any location, based on API.</h6>
                    <h6><b>Github Link :- </b><a href="https://github.com/AbhilashMajumdar/Weather-App" target="_blank">Weather App</a></h6>
                </div>
                <hr />

                <div className="project4 mx-5">
                    <h4><b>Project Name :- </b>Calculator App (07/2021 - 07/2021)</h4>
                    <h6><b>Description : </b>A Java Script Calculator App, here we can perform addition,
                        subtraction, multiplication, division etc.</h6>
                    <h6><b>Github Link :- </b><a href="https://github.com/AbhilashMajumdar/Calculator" target="_blank">Calculator App</a></h6>
                </div>

            </div>
        </>
    )
}

export default Projects
