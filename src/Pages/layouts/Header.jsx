import React from 'react'

import { Link } from 'react-router-dom';

function Header() {

    const bgimage = require('../../images/banner/banner-1.jpg');

    return (
        <div>
            {/* header */}
            <header className="fixed-top header">
                {/* top header */}
                <div className="top-header py-2 bg-white">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-4 text-center text-lg-left">
                                <a className="text-color mr-3" href="tel:+443003030266"><strong>CALL</strong> +44 300 303 0266</a>
                                <ul className="list-inline d-inline">
                                    <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="https://facebook.com/themefisher/"><i className="ti ti-facebook" /></a></li>
                                    <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="https://twitter.com/themefisher"><i className="ti ti-twitter-alt" /></a></li>
                                    <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="https://github.com/themefisher"><i className="ti ti-github" /></a></li>
                                    <li className="list-inline-item mx-0"><a className="d-inline-block p-2 text-color" href="https://instagram.com/themefisher/"><i className="ti ti-instagram" /></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-8 text-center text-lg-right">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="notice.html">notice</a></li>
                                    <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="research.html">research</a></li>
                                    <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="scholarship.html">SCHOLARSHIP</a></li>
                                    <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#loginModal" data-toggle="modal" data-target="#loginModal">login</a></li>
                                    <li className="list-inline-item"><a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" href="#signupModal" data-toggle="modal" data-target="#signupModal">register</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* navbar */}
                <div className="navigation w-100">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark p-0">
                            <Link className='navbar-brand' to='/'><img src={require('../../images/logo.png')} alt="logo" /></Link>
                            {/* <a className="navbar-brand" href="index.html"></a> */}
                            <button className="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navigation">
                                <ul className="navbar-nav ml-auto text-center">
                                    <li className="nav-item active">
                                        {/* <a className="nav-link" href="index.html">Home</a> */}
                                        <Link className='nav-link' to='/'>Home</Link>
                                    </li>
                                    <li className="nav-item @@about">
                                        {/* <a className="nav-link" href="about.html">About</a> */}
                                        <Link className='nav-link' to='/about'>About</Link>
                                    </li>
                                    <li className="nav-item @@courses">
                                        {/* <a className="nav-link" href="courses.html">COURSES</a> */}
                                        <Link className='nav-link' to='/courses'>Courses</Link>
                                    </li>
                                    <li className="nav-item @@events">
                                        <a className="nav-link" href="events.html">EVENTS</a>
                                    </li>
                                    <li className="nav-item @@blog">
                                        <a className="nav-link" href="blog.html">BLOG</a>
                                    </li>
                                    <li className="nav-item dropdown view">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="teacher.html">Teacher</a></li>
                                            <li><a className="dropdown-item" href="teacher-single.html">Teacher Single</a></li>
                                            <li><a className="dropdown-item" href="notice.html">Notice</a></li>
                                            <li><a className="dropdown-item" href="notice-single.html">Notice Details</a></li>
                                            <li><a className="dropdown-item" href="research.html">Research</a></li>
                                            <li><a className="dropdown-item" href="scholarship.html">Scholarship</a></li>
                                            <li><a className="dropdown-item" href="course-single.html">Course Details</a></li>
                                            <li><a className="dropdown-item" href="event-single.html">Event Details</a></li>
                                            <li><a className="dropdown-item" href="blog-single.html">Blog Details</a></li>
                                            <li className="dropdown-item dropdown dropleft">
                                                <a className="dropdown-toggle" href="#" id="navbarDropdownSubmenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Sub Menu
                                                </a>
                                                <ul className="dropdown-menu dropdown-submenu" aria-labelledby="navbarDropdownSubmenu">
                                                    <li><a className="dropdown-item" href="#!">Sub Menu 01</a></li>
                                                    <li><a className="dropdown-item" href="#!">Sub Menu 02</a></li>
                                                    <li><a className="dropdown-item" href="#!">Sub Menu 03</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item @@contact">
                                        <a className="nav-link" href="contact.html">CONTACT</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* /header */}

        </div>

    )
}

export default Header
