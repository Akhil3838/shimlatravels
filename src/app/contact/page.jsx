import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function contact() {
  return (
    <>
    <Header/>
<div className='pt-5'>
        <section className="contact-section pt-120 pb-120">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-5">
    <div className="contact-box">
        <div className="contact-items">
            <div className="contact-item">
                <div className="icon">
                    <i className="fa-light fa-phone-rotary"></i>
                </div>
                <div className="content">
                    <span>Any Questions? Call us</span>
                    <h4 className="title">
                        <a href="tel:+918882408594">+91 88824 08594</a>
                    </h4>
                </div>
            </div>
            <div className="contact-item">
                <div className="icon">
                    <i className="fa-light fa-envelope-open-text"></i>
                </div>
                <div className="content">
                    <span>Any Questions? Email us</span>
                    <h4 className="title">
                        <a href="mailto:hsstartup14@gmail.com">hsstartup14@gmail.com</a>
                    </h4>
                </div>
            </div>
            <div className="contact-item">
                <div className="icon">
                    <i className="fa-light fa-location-dot"></i>
                </div>
                <div className="content">
                    <span>Gandhi Nagar, Delhi</span>
                    <h4 className="title">Gandhi Nagar, Delhi</h4>
                </div>
            </div>
        </div>
        <div className="contact-info">
            <h4 className="rating-title">Customer Ratings</h4>
            <ul className="rating-list">
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
            </ul>
            <span>By 700+ logistics Customers</span>
        </div>
    </div>
</div>
                <div className="col-lg-7">
                    <div className="contact-form">
                        <div className="section-heading mb-30">
                            <h4 className="sub-heading mb-10" data-text-animation="fade-in" data-duration="1.5">Need Any Help?</h4>
                            <h2 className="section-title" data-text-animation data-split="word" data-duration="1">Get in Touch With Us</h2>
                        </div>
                        <form action="https://theme-canvas-trails.netlify.app/contact.php" method="post" id="ajax_contact" className="form-horizontal">
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <input type="name" id="name" name="name" className="form-control" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <input type="text" id="name-2" name="name-2" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <input type="phone" id="phone" name="phone" className="form-control" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <input type="text" id="email" name="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-item">
                                        <input type="text" id="website" name="website" className="form-control" placeholder="Website" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="form-item-wrap">
                                        <div className="form-item address">
                                            <textarea id="message" name="message" cols="30" rows="5" className="form-control address" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-btn mt-10">
                                <button id="submit" className="ts-primary-btn" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</div><Footer/>
    </>
  )
}

export default contact