import React from 'react'
import Header from './layouts/Header'

function Courses() {

    const pagebgimage = require('../images/backgrounds/page-title.jpg');

    return (
        <div>
            {/* page title */}
            <section className="page-title-section overlay" data-background="images/backgrounds/page-title.jpg"  style={{ backgroundImage: `url(${pagebgimage})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <ul className="list-inline custom-breadcrumb mb-2">
                                <li className="list-inline-item"><a className="h2 text-primary font-secondary" href="index.html">Home</a></li>
                                <li className="list-inline-item text-white h3 font-secondary nasted">Our Courses</li>
                            </ul>
                            <p className="text-lighten mb-0">Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* /page title */}
            {/* courses */}
            <section className="section">
                <div className="container">
                    {/* course list */}
                    <div className="row justify-content-center">
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-1.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Photography</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-2.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Programming</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-3.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Lifestyle Archives</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-4.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Complete Freelancing</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-5.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Branding Design</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-6.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Art Design</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /course list */}
                    {/* course list */}
                    <div className="row justify-content-center">
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-1.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Photography</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-2.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Programming</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-3.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Lifestyle Archives</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-4.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Complete Freelancing</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-5.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Branding Design</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                        {/* course item */}
                        <div className="col-lg-4 col-sm-6 mb-5">
                            <div className="card p-0 border-primary rounded-0 hover-shadow">
                                <img className="card-img-top rounded-0" src={require('../images/courses/course-6.jpg')} alt="course thumb" />
                                <div className="card-body">
                                    <ul className="list-inline mb-2">
                                        <li className="list-inline-item"><i className="ti ti-calendar mr-1 text-color" />02-14-2018</li>
                                        <li className="list-inline-item"><a className="text-color" href="course-single.html">Humanities</a></li>
                                    </ul>
                                    <a href="course-single.html">
                                        <h4 className="card-title">Art Design</h4>
                                    </a>
                                    <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna.</p>
                                    <a href="course-single.html" className="btn btn-primary btn-sm">Apply now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /course list */}
                </div>
            </section>
            {/* /courses */}
        </div>
    )
}

export default Courses
