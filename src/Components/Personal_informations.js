import React from 'react';
import './App.css';
import img from './Signature.jpeg';


const Personal_informations = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-10 det mt-3 mx-5 text-center">
                        <h3><b>Personal Informations</b></h3>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 my-4 det per-des">
                        <div className="perinfo mt-3 mx-5">
                            <h4><b>Father's Name :- </b></h4> 
                            <h5 className="data">Late Dipak Ranjan Majumdar</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Mother's Name :- </b></h4> 
                            <h5 className="data">Jharna Majumdar</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Gender :- </b></h4> 
                            <h5 className="data">Male</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Marital Status :- </b></h4> 
                            <h5 className="data">Single</h5>
                        </div><div className="perinfo mx-5">
                            <h4><b>Nationality :- </b></h4> 
                            <h5 className="data">Indian</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Religion :- </b></h4> 
                            <h5 className="data">Hindu</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Caste :- </b></h4> 
                            <h5 className="data">General</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Languages Known :- </b></h4> 
                            <h5 className="data">English, Bengali, Hindi</h5>
                        </div>
                        <div className="perinfo mx-5">
                            <h4><b>Hobbies :- </b></h4> 
                            <h5 className="data">Watching Cricket, Listening songs, Photography.</h5>
                        </div>

                        <div className="dec-head mt-3 mx-5">
                            <h3><b><u>Declarations :- </u></b></h3>
                        </div>

                        <div className="dec mx-5">
                            <h5>I hereby declare that all the information provided above is true to the best of my knowledge.</h5>
                        </div>

                        <div className="row">
                            <div className="col-md-4 mt-3 mx-5">
                                <h5><b>Place :-</b> Mankar</h5>
                                <h5><b>Date :-</b> 22-09-2021</h5>
                            </div>
                            <div className="col-md-4 mb-3 mt-3 signature-des">
                                <h5 className="sign-des"><b>Signature</b></h5>
                                <img src={img} width="320px" alt="Signature Pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal_informations
