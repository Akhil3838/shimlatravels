import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
    <>
    <Header/>
<div className='p-4'>
        <section className="about-section pt-120  pb-120 overflow-hidden">
        <div className="shapes">
            <div className="shape-1">
                <img src="assets/img/shapes/about-shape-1.png" alt="shape" />
            </div>
            <div className="shape-2">
                <img src="assets/img/shapes/about-shape-2.png" alt="shape" />
            </div>
        </div>
        <div className="container about-container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-img-wrap">
                        <div className="about-img-1">
                            <img src="assets/img/images/about-img-1.png" alt="about" />
                        </div>
                        <div className="about-img-2">
                            <img src="assets/img/images/about-img-2.png" alt="about" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-content fade-wrapper">
                        <div className="section-heading mb-30">
                            <h4 className="sub-heading" data-text-animation="fade-in" data-duration="1.5">About Us</h4>
                            <h2 className="section-title" data-text-animation="fade-in-right" data-split="char" data-duration="0.6" data-stagger="0.03">
                                We are Professional Planners For your
                            </h2>
                        </div>
                        <div className="about-desc fade-top">
                            <p>
                                We are passionate about making travel seamless enjoyable for explorers like you. From breathtaking destinations to curated experiences, we bring the <br /> world closer to you.
                            </p>
                            <h4 className="about-text">
                                Speak to our Destination Experts at Direct Call <a href="tel:+1546378654">+1 546 378 654</a>
                            </h4>
                        </div>
                        <ul className="about-list fade-top">
                            <li><i className="fa-sharp fa-solid fa-circle-check"></i>All placges and activiates are carefully picked by us.</li>
                            <li><i className="fa-sharp fa-solid fa-circle-check"></i>98% Course Completitation Rates</li>
                            <li><i className="fa-sharp fa-solid fa-circle-check"></i>We are an award winning agency</li>
                            <li><i className="fa-sharp fa-solid fa-circle-check"></i>Trusted by more than 80,000 customers</li>
                        </ul>
                        <div className="about-btn fade-top">
                            <a className="ts-primary-btn" href="about.html">
                                Read More<i className="fa-regular fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</div><Footer/>
    </>
  )
}

export default About