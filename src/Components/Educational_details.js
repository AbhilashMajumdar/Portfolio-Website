import React from 'react';
import './App.css';

const Educational_details = () => {
    return (
        <>
            {/* <div className="det mt-3 mx-5 text-center">
                <h3><b>Educational Details</b></h3>
            </div>
            <div className="mx-4 det">
                <div className="pg mt-2">
                    <div className="pg-details">
                        <h4><b>Post Graduation :-</b></h4>
                        <h6> <b>Course : </b> Master of Computer Applications</h6>
                        <h6><b>Institute Name :</b> Jadavpur University</h6>
                        <h6><b>Year of Passing :</b> 2022</h6>
                    </div>
                    
                    <div className="pg-table text-center">
                        <h4><b>Post Graduation Marks :-</b></h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">1st SEM</th>
                                    <th scope="col">2nd SEM</th>
                                    <th scope="col">3rd SEM</th>
                                    <th scope="col">4th SEM</th>
                                    <th scope="col">5th SEM</th>
                                    <th scope="col">6th SEM</th>
                                    <th scope="col">CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>7.76</td>
                                    <td>8.7</td>
                                    <td>9.18</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>8.55/10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />

                <div className="ug">
                    <div className="ug-details">
                    <h4><b>Under Graduation :-</b></h4>
                        <h6><b>Course :</b> Computer Science Honours</h6>
                        <h6><b>Institute Name :</b> Mankar College</h6>
                        <h6><b>Year of Passing :</b> 2019</h6>
                    </div>
                    
                    <div className="ug-table text-center">
                        <h4><b>Under Graduation Marks :-</b></h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">1st SEM</th>
                                    <th scope="col">2nd SEM</th>
                                    <th scope="col">3rd SEM</th>
                                    <th scope="col">4th SEM</th>
                                    <th scope="col">5th SEM</th>
                                    <th scope="col">6th SEM</th>
                                    <th scope="col">CGPA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9.0</td>
                                    <td>8.7</td>
                                    <td>8.33</td>
                                    <td>8.54</td>
                                    <td>9.5</td>
                                    <td>9.75</td>
                                    <td>9.08/10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />

                <div className="hs">
                    <div className="hs-table">
                        <h4><b>Secondary and Higher Secondary :-</b></h4>
                        <table class="table table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col" rowspan="2">Examination</th>
                                    <th scope="col" rowspan="2">Institution/Board</th>
                                    <th scope="col" rowspan="2">Year Of passing</th>
                                    <th scope="col" colspan="3">Marks</th>
                                </tr>
                                <tr>
                                    <th>Obtained</th>
                                    <th>Out of Total</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12<sup>th</sup>std</td>
                                    <td>Mankar High School (WBCHSE)</td>
                                    <td>2016</td>
                                    <td>410</td>
                                    <td>500</td>
                                    <td>82</td>
                                </tr>
                                <tr>
                                    <td>10<sup>th</sup>std</td>
                                    <td>Mankar High School (WBBSE)</td>
                                    <td>2014</td>
                                    <td>599</td>
                                    <td>700</td>
                                    <td>85.57</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    */}

                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-10 det mt-3 mx-5 text-center">
                            <h3><b>Educational Details</b></h3>
                        </div>
                    </div>

                    <div className="row det justify-content-center">
                        <div className="col-md-4 col-12 mt-3">
                            <div className="pg mt-2">
                                <div className="pg-details">
                                    <h4><b>Post Graduation :-</b></h4>
                                    <h6> <b>Course : </b> Master of Computer Applications</h6>
                                    <h6><b>Institute Name :</b> Jadavpur University</h6>
                                    <h6><b>Year of Passing :</b> 2022</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-12 mt-3">
                            <div className="pg-table text-center">
                                <h4><b>Post Graduation Marks :- (CGPA :- 8.55)</b></h4>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">1st SEM</th>
                                            <th scope="col">2nd SEM</th>
                                            <th scope="col">3rd SEM</th>
                                            <th scope="col">4th SEM</th>
                                            <th scope="col">5th SEM</th>
                                            <th scope="col">6th SEM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>7.76</td>
                                            <td>8.7</td>
                                            <td>9.18</td>
                                            <td>-</td>
                                            <td>-</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />

                        <div className="col-md-4 col-12 mt-2">
                            <div className="ug">
                                <div className="ug-details">
                                    <h4><b>Under Graduation :-</b></h4>
                                    <h6><b>Course :</b> Computer Science Honours</h6>
                                    <h6><b>Institute Name :</b> Mankar College</h6>
                                    <h6><b>Year of Passing :</b> 2019</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-12 mt-2">
                            <div className="ug-table text-center">
                                <h4><b>Under Graduation Marks :- (CGPA :- 9.08)</b></h4>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">1st SEM</th>
                                            <th scope="col">2nd SEM</th>
                                            <th scope="col">3rd SEM</th>
                                            <th scope="col">4th SEM</th>
                                            <th scope="col">5th SEM</th>
                                            <th scope="col">6th SEM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>9.0</td>
                                            <td>8.7</td>
                                            <td>8.33</td>
                                            <td>8.54</td>
                                            <td>9.5</td>
                                            <td>9.75</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <hr />

                        {/* <div className="col-xl-12 col-12">
                            <div className="hs-table">
                                <h4><b>Secondary and Higher Secondary :-</b></h4>
                                <table class="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th scope="col" rowspan="2">Examination</th>
                                            <th scope="col" rowspan="2">Institution/Board</th>
                                            <th scope="col" rowspan="2">Year Of passing</th>
                                            <th scope="col" colspan="3">Marks</th>
                                        </tr>
                                        <tr>
                                            <th>Obtained</th>
                                            <th>Out of Total</th>
                                            <th>Percentage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12<sup>th</sup>std</td>
                                            <td>Mankar High School (WBCHSE)</td>
                                            <td>2016</td>
                                            <td>410</td>
                                            <td>500</td>
                                            <td>82</td>
                                        </tr>
                                        <tr>
                                            <td>10<sup>th</sup>std</td>
                                            <td>Mankar High School (WBBSE)</td>
                                            <td>2014</td>
                                            <td>599</td>
                                            <td>700</td>
                                            <td>85.57</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> */}

                        <div className="col-md-12 mt-3">
                            <h4><b>Secondary and Higher Secondary :-</b></h4>
                        </div>

                        <div className="row justify-content-evenly">
                            <div className="col-md-6 col-12">
                                <table class="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">Examination</th>
                                                <th scope="col">Institution</th>
                                                <th scope="col">Year of Passing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12<sup>th</sup>std</td>
                                                <td>Mankar High School (WBCHSE)</td>
                                                <td>2016</td>
                                            </tr>
                                            <tr>
                                                <td>10<sup>th</sup>std</td>
                                                <td>Mankar High School (WBBSE)</td>
                                                <td>2014</td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>

                            <div className="col-md-6 col-12">
                                <table class="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col" colspan="3">Marks</th>
                                            </tr>
                                            <tr>
                                                <th>Obtained</th>
                                                <th>Out of Total</th>
                                                <th>Percentage</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>410</td>
                                                <td>500</td>
                                                <td>82</td>
                                            </tr>
                                            <tr>
                                                <td>599</td>
                                                <td>700</td>
                                                <td>85.57</td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Educational_details
