'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Mark component as hydrated (client only)
    setHydrated(true);
  }, []);

  const isBlog = hydrated && pathname.startsWith('/blog');

  return (
    <>
      <header className="header header-3 sticky-active">
        <div className="primary-header">
          <div className="container header-container">
            <div className="primary-header-inner">
              <div className="header-logo d-lg-block">
                <a href="/">
                  {isBlog ? (
                    <h2 style={{ fontWeight: 'bold', color: '#333' }}>
                      Travel-Circle-Stories
                    </h2>
                  ) : (
                    <img
                      src="/assets/img/images/logo1.png"
                      alt="logo"
                      style={{ width: '100px' }}
                    />
                  )}
                </a>
              </div>

              <div className="header-menu-wrap">
                <div className="mobile-menu-items">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contacts</a></li>
                  </ul>
                </div>
              </div>

              <div className="header-right-wrap">
                <div className="header-right">
                  <div className="header-btn-wrap">
                    <a className="ts-primary-btn header-btn" href="/contact">
                      Contact Us <i className="fa-regular fa-chevron-right"></i>
                    </a>
                  </div>
                  <div className="header-right-item d-lg-none d-md-block">
                    <a href="javascript:void(0)" className="mobile-side-menu-toggle">
                      <i className="fa-sharp fa-solid fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Area */}
      <div id="sidebar-area" className="sidebar-area">
        <button className="sidebar-trigger close">
          <svg
            className="sidebar-close"
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="12.7px"
            viewBox="0 0 16 12.7"
          >
            <g>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.1569 7.5208)"
                width="16"
                height="2"
              ></rect>
              <rect
                x="0"
                y="5.4"
                transform="matrix(0.7071 0.7071 -0.7071 0.7071 6.8431 -3.7929)"
                width="16"
                height="2"
              ></rect>
            </g>
          </svg>
        </button>

        <div className="side-menu-content">
          <div className="side-menu-logo">
            {isBlog ? (
              <h2 style={{ fontWeight: 'bold', color: '#333' }}>
                Travel-Circle-Stories
              </h2>
            ) : (
              <>
                <a className="dark-img" href="/">
                  <img src="/assets/img/images/logo1.png" alt="logo" style={{ width: '100px' }} />
                </a>
                <a className="light-img" href="/">
                  <img src="/assets/img/images/logo1.png" alt="logo" style={{ width: '100px' }} />
                </a>
              </>
            )}
          </div>

          <div className="side-menu-wrap"></div>

          <div className="side-menu-about">
            <div className="side-menu-header"><h3>About Us</h3></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua...
            </p>
            <a className="ts-primary-btn" href="/contact">
              Contact Us
            </a>
          </div>

          <div className="side-menu-contact">
            <div className="side-menu-header"><h3>Contact Us</h3></div>
            <ul className="side-menu-list">
              <li><i className="fas fa-map-marker-alt"></i><p>Valentin, Street Road 24, New York</p></li>
              <li><i className="fas fa-phone"></i><a href="tel:+000123456789">+000 123 (456) 789</a></li>
              <li><i className="fas fa-envelope-open-text"></i><a href="mailto:runokcontact@gmail.com">runokcontact@gmail.com</a></li>
            </ul>
          </div>

          <ul className="side-menu-social">
            <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li className="instagram"><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li className="g-plus"><a href="#"><i className="fab fa-google-plus"></i></a></li>
          </ul>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="mobile-side-menu">
        <div className="side-menu-content">
          <div className="side-menu-head">
            {isBlog ? (
              <h2 style={{ fontWeight: 'bold', color: '#333' }}>
                Travel-Circle-Stories
              </h2>
            ) : (
              <>
                <a href="/">
                  <img src="/assets/img/images/logo1.png" alt="logo" style={{ width: '100px' }} />
                </a>
                <button className="mobile-side-menu-close">
                  <i className="fa-regular fa-xmark"></i>
                </button>
              </>
            )}
          </div>
          <div className="side-menu-wrap"></div>
        </div>
      </div>

      <div className="mobile-side-menu-overlay"></div>
    </>
  );
}

export default Header;
