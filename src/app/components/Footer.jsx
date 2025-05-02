import React from 'react'

function Footer() {
  return (
    <>
<footer className="footer-section overflow-hidden">
    <div className="bg-img" data-background="assets/img/bg-img/footer-bg.png"></div>
    <div className="overlay"></div>
    <div className="container">
        <div className="footer-top row">
            <div className="col-xl-3 col-lg-12"></div>
            <div className="col-xl-9 col-lg-12">
                <div className="footer-subscribe-wrap">
                    <h3 className="footer-subscribe-title">Subscribe Our Newslatter</h3>
                    <form action="#" className="ts-subscribe-form">
                        <input className="form-control" type="email" name="email" placeholder="Email address" />
                        <button className="submit ts-primary-btn">Subscribe Now</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="row footer-wrap">
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                    <div className="widget-header logo-header">
                        <div className="footer-logo">
                            <a href='index.html'><img src="assets/img/logo/logo-3.png" alt="logo" /></a>
                        </div>
                    </div>
                    <p className="mb-20">Indignation and dislike men who to are so beguiled and demor Indignation  and dislike men who to are so </p>
                    <ul className="social-list">
                        <li className="facebook">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                        </li>
                        <li className="pinterest">
                            <a href="#"><i className="fab fa-pinterest"></i></a>
                        </li>
                        <li className="twitter">
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                        <li className="instagram">
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-col-2">
                    <div className="widget-header">
                        <h3 className="widget-title">Quick Links</h3>
                    </div>
                    <ul className="footer-list">
                        <li><a href='about.html'>Home</a></li>
                        <li><a href='about.html'>About Us</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href='destination-details.html'>Tour Guide</a></li>
                        <li><a href='contact.html'>Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget widget-3">
                    <div className="widget-header">
                        <h3 className="widget-title">Get in touch</h3>
                    </div>
                    <div className="address-list">
                        <div className="adress-item">
                            <div className="icon"><i className="fa-regular fa-location-dot"></i></div>
                            <div className="content">
                                <h4 className="title">Address</h4>
                                <span>244, First Floor, 11 St Roots <br />Terrace, Los Angeles</span>
                            </div>
                        </div>
                        <div className="adress-item">
                            <div className="icon"><i className="fa-regular fa-phone"></i></div>
                            <div className="content">
                                <h4 className="title">Phone</h4>
                                <a href="tel:+01124567890">(+01) 123 456 7890</a>
                            </div>
                        </div>
                        <div className="adress-item">
                            <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                            <div className="content">
                                <h4 className="title">Email</h4>
                                <a href="mailto:info@example.com">info@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="footer-widget gallary-widget">
                    {/* <div className="widget-header">
                        <h3 className="widget-title">Recent Projects</h3>
                    </div> */}
                    <div className="footer-gallery-wrap">
                        <div className="gallary-img">
                            <a href="assets/img/images/footer-gallary-1.png" className="img-popup venobox"><img src="assets/img/images/footer-gallary-1.png" alt="img" /></a>
                        </div>
                        <div className="gallary-img">
                            <a href="assets/img/images/footer-gallary-2.png" className="img-popup venobox"><img src="assets/img/images/footer-gallary-2.png" alt="img" /></a>
                        </div>
                        <div className="gallary-img">
                            <a href="assets/img/images/footer-gallary-3.png" className="img-popup venobox"><img src="assets/img/images/footer-gallary-3.png" alt="img" /></a>
                        </div>
                        <div className="gallary-img">
                            <a href="assets/img/images/footer-gallary-4.png" className="img-popup venobox"><img src="assets/img/images/footer-gallary-4.png" alt="img" /></a>
                        </div>
                        <div className="gallary-img">
                            <a href="assets/img/images/footer-gallary-5.png" className="img-popup venobox"><img src="assets/img/images/footer-gallary-5.png" alt="img" /></a>
                        </div>
                        <div className="gallary-img">
                            <a href="assets/img/images/footer-gallary-6.png" className="img-popup venobox"><img src="assets/img/images/footer-gallary-6.png" alt="img" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="copyright-area">
        <div className="container">
            <div className="row copyright-content">
                <div className="col-md-6">
                    <p>© 2024 Trails. All Rights Reserved.</p>
                </div>
                <div className="col-md-6">
                    <ul className="copyright-list">
                        <li><a href='contact.html'>Terms of Service </a></li>
                        <li><a href='contact.html'>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer