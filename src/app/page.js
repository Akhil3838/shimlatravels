import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header/>


{/* hero */}

<section className="hero-sectio hero-3">
    <div className="bg-shape" ></div>
    <div className="container">
        <div className="row hero-wrap-3">
            <div className="col-lg-12">
                <div className="hero-content hero-content-3">
                    <h4 className="sub-title">Get unforgetable pleasure with us</h4>
                    <h1 className="title">
                        Explore beauty of <br /> the whole world
                    </h1>
                    <p>
                        Denouncing pleasure and praising pain was born and will give you complete <br />
                        great explorer of the truth the master-builder.
                    </p>
                    {/* <div className="hero-btn-wrap">
                        <div className="hero-btn">
                            <a className="ts-primary-btn" href="about.html">
                                Read More <i className="fa-regular fa-chevron-right"></i>
                            </a>
                        </div>
                        <div className="hero-rating">
                            <div className="icon">
                                <img src="assets/img/icon/hero-google.png" alt="icon" />
                            </div>
                            <div className="content">
                                <ul className="review-list">
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                </ul>
                                <span>4.9 Rating</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="hero-img-3">
                {/* <img src="assets/img/images/hero-img-2.png" alt="hero" /> */}
            </div>
        </div>
    </div>
</section>

{/* hero end */}


<section className="destination-section pt-5 pb-120">
    <div className="container">
        <div className="section-heading text-center">
            <h4
                className="sub-heading"
                data-text-animation="fade-in"
                data-duration="1.5"
            >
                Popular Destinations
            </h4>
            <h2
                className="section-title"
                data-text-animation="fade-in-right"
                data-split="char"
                data-duration="0.6"
                data-stagger="0.03"
            >
                Explore The World With Us
            </h2>
        </div>
        <div className="row gy-4 fade-wrapper">
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/destination/desti-img-1.png" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Bir billing</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/images/kuppar1.jpg" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Giri Ganga-Kuppar</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/destination/desti-img-3.png" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Giri Ganga Churdhar</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/images/kalpa1.jpg" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Sangla Chitkul Kalpa</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/destination/desti-img-5.png" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Yulla Kanda</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            {/* <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/destination/desti-img-7.png" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Lao Lading Island</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/destination/desti-img-8.png" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Ton Kwen Temple</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/destination/desti-img-9.png" alt="desti" />
                    </div>
                    <div className="destination-content">
                        <h3 className="title">
                            <a href="destination-details.html">Taj Mahal</a>
                        </h3>
                        <span>Krabal, 12 Trips</span>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</section>




    <Footer/>

    </>
  );
}
