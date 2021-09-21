import React from 'react';
import './App.css';
import img from './Mypic.jpg';

const About_me = () => {
    return (
        <>
            <div className="det mt-3 mx-5 text-center">
                <h3><b>About Me</b></h3>
            </div>

            <div class="row justify-content-evenly pb-5 det about-pic">
                <div class="col-lg-3 text-center mt-5">
                    <h1><b>Abhilash Majumdar</b></h1>
                    <h5>I am a fresher. I am doing my Post Graduation in
                        Master of Computer Applications. I am a honest,
                        enthusiastic, selfmotivated and hard-working
                        boy with positive attitude and Quick Learner
                        with passion for executing challenging.</h5>
                </div>

                <div class="col-lg-3 text-center mt-5">
                    <img src={img} alt="Mypic Image" className="mypic-des"/>
                </div>

                <div class="col-lg-6 text-center mt-5 pt-4 abo-det">
                    <div className="about-details">
                        <h5>
                            <i class="bi bi-envelope-fill"></i>
                            <a href="https://mail.google.com/mail/u/0/#inbox" className="gap-elements">abhilashmajumdar306@gmail.com</a>
                        </h5>
                    </div>
                    <div className="about-details">
                        <h5>
                            <i class="bi bi-phone-fill"></i>
                            <span className="gap-elements">7872909202</span>
                        </h5>
                    </div>
                    <div className="about-details">
                        <h5>
                            <i class="fas fa-map-marker-alt"></i>
                            <span className="gap-elements">Mankar Road Sitala Tala,near SBI, PO+VILL - Mankar, Dist - Purba Bardhaman, Pin -713144, Mankar, India</span>
                        </h5>
                    </div>
                    <div className="about-details">
                        <h5>
                            <i class="fas fa-sitemap"></i>
                            <a href="https://www.hackerrank.com/abhilashmajumda1?hr_r=1" className="gap-elements">www.hackerrank.com/abhilashmajumda1</a>
                        </h5>
                    </div>
                    <div className="about-details">
                        <h5>
                            <i class="fab fa-linkedin"></i>
                            <a href="https://www.hackerrank.com/abhilashmajumda1?hr_r=1" className="gap-elements">linkedin.com/in/abhilash-majumdarb20b0112a</a>
                        </h5>
                    </div>
                    <div className="about-details">
                        <h5>
                            <i class="fab fa-github-square"></i>
                            <a href="https://github.com/AbhilashMajumdar/" className="gap-elements">github.com/AbhilashMajumdar</a>
                        </h5>
                    </div>
                    <div className="about-details">
                        <h5>
                            <i class="fab fa-facebook-square"></i>
                            <a href="https://www.facebook.com/abhilash.majumdar.1/" className="gap-elements">www.facebook.com/abhilash.majumdar.1</a>
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About_me
