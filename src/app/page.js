import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Link from "next/link";

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
                <div className="hero-content hero-content-3 ms-5">
                    <h4 className="sub-title text-white">                            
                    </h4>
                    <h1 className="title">
                        {/* Explore beauty of <br /> the whole world */}
                        Pause.<br/>
                         Connect.<br/>
                          Discover 
                          </h1>
                    <p className="text-white ms-2">
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
            <Link href={'/birbilling'}>

                <div className="destination-item">
                    <div className="overlay"></div>
                      <div className="destination-thumb">
                          <img src="assets/img/images/birbill1.jpg" alt="desti" />
                      </div>
                    <div className="destination-content">
                        <h3 className="title">
                            Bir billing
                        </h3>
                    </div>
                </div>
                </Link>

            </div>
            <div className="col-lg-12 col-md-12 fade-top">
            <Link href={'/girigangakuppar'}>

                <div className="destination-item">
                    <div className="overlay"></div>
                    <div className="destination-thumb">
                        <img src="assets/img/images/kuppar4.jpg" alt="desti" />
                    </div>
                        <div className="destination-content">
                            <h3 className="title">
                                Giri Ganga-Kuppar
                            </h3>
                        </div>
                </div>
                </Link>

            </div>
            <div className="col-lg-12 col-md-12 fade-top">
              <Link href={'/churdhar'}>
                    <div className="destination-item">
                        <div className="overlay"></div>
                        <div className="destination-thumb">
                            <img src="assets/img/images/churdhar3.jpg" alt="desti" />
                        </div>
                        <div className="destination-content">
                            <h3 className="title">
                                Giri Ganga Churdhar
                            </h3>
                        </div>
                    </div>
              </Link>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <Link href={'/kalpa'}>
                    <div className="destination-item">
                        <div className="overlay"></div>
                        <div className="destination-thumb">
                            <img src="assets/img/images/kalpa1.jpg" alt="desti" />
                        </div>
                        <div className="destination-content">
                            <h3 className="title">
                                Sangla Chitkul Kalpa
                            </h3>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-lg-12 col-md-12 fade-top">
                <Link href={'/yullakanda'}>
                    <div className="destination-item">
                        <div className="overlay"></div>
                        <div className="destination-thumb">
                            <img src="assets/img/images/yullakanda1.jpg" alt="desti" />
                        </div>
                        <div className="destination-content">
                            <h3 className="title">
                                Yulla Kanda
                            </h3>
                        </div>
                    </div>
                </Link>
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
