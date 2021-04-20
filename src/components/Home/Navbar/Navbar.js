import React from 'react';
import logo from '../../../logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div class="container">
                <a class="navbar-brand" href="/home">
                    <img src={logo} class="w-75" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold " aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="#service">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="#review">Review</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="#team">Our Team</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link font-weight-bold" aria-current="page" href="/admin">Admin</a>
                        </li>
                    </ul>
                    <a href="/login" class="ml-lg-3 ms-5 mt-lg-0 mt-3 book btn btn-warning btn-style">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;