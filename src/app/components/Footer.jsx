import React from 'react';

function Footer() {
  return (
    <>
      <footer className="footer-section overflow-hidden">
      <div>
        <a href="https://wa.me/+918882408594" target="_blank">
            <img className="whatsapp-float" src="https://croniox.com/assets/img/whatsapp.png"/>
       </a>
</div>

        <div className="bg-img" data-background="assets/img/bg-img/footer-bg.png"></div>
        <div className="overlay"></div>
        <div className="container">
          <div className="footer-top row">
            <div className="col-xl-3 col-lg-12"></div>
            <div className="col-xl-9 col-lg-12">
              <div className="footer-subscribe-wrap">
                <h3 className="footer-subscribe-title">Subscribe Our Newsletter</h3>
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
                    <a href="/"><img src="assets/img/images/logo1.png" alt="logo" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footer-col-2">
                <div className="widget-header">
                  <h3 className="widget-title">Quick Links</h3>
                </div>
                <ul className="footer-list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget-3">
                <div className="widget-header">
                  <h3 className="widget-title">Get in Touch</h3>
                </div>
                <div className="address-list">
                  <div className="adress-item">
                    <div className="icon"><i className="fa-regular fa-location-dot"></i></div>
                    <div className="content">
                      <h4 className="title">Address</h4>
                      <span>Gandhi Nagar, Delhi</span>
                    </div>
                  </div>
                  <div className="adress-item">
                    <div className="icon"><i className="fa-regular fa-phone"></i></div>
                    <div className="content">
                      <h4 className="title">Phone</h4>
                      <a href="tel:+918882408594">(+91) 88824 08594</a>
                    </div>
                  </div>
                  <div className="adress-item">
                    <div className="icon"><i className="fa-regular fa-envelope"></i></div>
                    <div className="content">
                      <h4 className="title">Email</h4>
                      <a href="mailto:hsstartup14@gmail.com">hsstartup14@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
  <div className="footer-widget gallary-widget">
    <div className="widget-header">
      <h3 className="widget-title">Packages</h3>
    </div>
    <ul className="footer-list">
      <li>
        <span role="img" aria-label="mountain">🏔️</span> GIRI GANGA – CHURDHAR TREK PACKAGE
      </li>
      <li>
        <span role="img" aria-label="national park">🏞️</span> GIRI GANGA – KUPPAD TREK PACKAGE
      </li>
      <li>
        <span role="img" aria-label="mountain snowy">🗻</span> YULLA KANDA TREK PACKAGE
      </li>
    </ul>
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
                  <li><a href="/contact">Terms of Service</a></li>
                  <li><a href="/contact">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
