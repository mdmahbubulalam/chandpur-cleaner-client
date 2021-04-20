import React from 'react';
import './HeaderMain.css';
import carouselCleaning1 from '../../../images/carousel-cleaning-1.jpg';
import carouselCleaning2 from '../../../images/carousel-cleaning-2.jpg';
import carouselCleaning3 from '../../../images/carousel-cleaning-3.jpg';
import carouselCleaning4 from '../../../images/carousel-cleaning-4.jpg';


const HeaderMain = () => {
    return (
        <main>
            <div id="carouselExampleIndicators" class="carousel slide bg-dark rounded" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row d-flex align-items-center p-5">
                            <div class="col-md-5 mb-3">
                                <h5 class="text-title">Fast and efficient</h5>
                                <h1 class="text-white">The superior choice for commercial cleaning</h1>
                                <a role="button" class="btn btn-warning" href="#service">Read More</a>
                            </div>
                            <div class="col-md-7">
                                <img src={carouselCleaning1} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row d-flex align-items-center p-5">
                            <div class="col-md-7 mb-3">
                                <img src={carouselCleaning2} class="d-block w-100" alt="..." />
                            </div>
                            <div class="col-md-5">
                                <h5 class="text-title">Fast and efficient</h5>
                                <h1 class="text-white">Quality service for quality homes</h1>
                                <a role="button" class="btn btn-warning" href="#service">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row d-flex align-items-center p-5">
                            <div class="col-md-5 mb-3">
                                <h5 class="text-title">Fast and efficient</h5>
                                <h1 class="text-white">The superior choice for commercial cleaning</h1>
                                <a role="button" class="btn btn-warning" href="#service">Read More</a>
                            </div>
                            <div class="col-md-7">
                                <img src={carouselCleaning3} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row d-flex align-items-center p-5">
                            <div class="col-md-7 mb-3">
                                <img src={carouselCleaning4} class="d-block w-100" alt="..." />
                            </div>
                            <div class="col-md-5">
                                <h5 class="text-title">Fast and efficient</h5>
                                <h1 class="text-white">The superior choice for commercial cleaning</h1>
                                <a role="button" class="btn btn-warning" href="#service">Read More</a>  
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>

            </div>
        </main>
    );
};

export default HeaderMain;