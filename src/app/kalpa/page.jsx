import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SanglaKalpaChitkulTour() {
  return (
    <>
      <Header/>
      <section className="tour-details pt-120 pb-120">
        <div className="container tour-details-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-wrap destination-details-content">
                <div className="destination-details-img-wrap mb-30">
                  <div id="kinnaurCarousel" className="carousel slide" data-bs-ride="carousel" style={{width:'100%'}}>
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#kinnaurCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#kinnaurCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#kinnaurCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/images/kalpa1.jpg" className="d-block w-100" alt="Chitkul Village" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/kalpa2.jpg" className="d-block w-100" alt="Kalpa View" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/kalpa3.jpg" className="d-block w-100" alt="Sangla Valley" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#kinnaurCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#kinnaurCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                
                <div className="blog-details-content">
                  <h2 className="details-title mb-20">Sangla – Kalpa – Chitkul Tour Package</h2>
                  <p className="mb-30">
                    Discover the untouched beauty of Kinnaur with this immersive 4-day journey through Sangla Valley, the last village of Chitkul, and the breathtaking views of Kalpa. Experience Himalayan culture, apple orchards, and stunning mountain vistas on this scenic road trip.
                  </p>

                  <div className="destination-details-box">
                    <h4 className="box-title">Package Highlights:</h4>
                    <div className="box-list-wrap">
                      <ul className="box-list">
                        <li><i className="fa-regular fa-map"></i><span className="child-1">Duration:</span> <span>4 Days / 3 Nights</span></li>
                        <li><i className="fa-regular fa-route"></i><span className="child-1">Trip Type:</span> <span>Scenic Road Trip</span></li>
                        <li><i className="fa-regular fa-users"></i><span className="child-1">Group Size:</span> <span>10-25 people</span></li>
                      </ul>
                      <ul className="box-list">
                        <li><i className="fa-regular fa-calendar"></i><span className="child-1">Best Season:</span> <span>Mar-Jun & Sep-Nov</span></li>
                        <li><i className="fa-solid fa-sack-dollar"></i><span className="child-1">Starting From:</span> <span>₹9,999/person</span></li>
                        <li><i className="fa-regular fa-mountain"></i><span className="child-1">Altitude:</span> <span>Up to 11,000 ft</span></li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="itinerary-title mt-40 mb-20">Detailed Itinerary</h3>

                  <div className="itinerary-day">
                    <h4>Night 0: Departure from Delhi to Shimla</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-clock"></i> 8:00 PM: Reporting at boarding point, Delhi</li>
                      <li><i className="fa-regular fa-bus"></i> 8:30 PM: Departure in AC Tempo Traveller/Volvo</li>
                      <li>Overnight journey to Shimla (approx. 8-10 hours)</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 1: Shimla – Narkanda – Sangla Valley</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sun"></i> Early arrival in Shimla, freshen up & breakfast</li>
                      <li><i className="fa-regular fa-car"></i> Scenic drive via Kufri, Theog, and Rampur</li>
                      <li><i className="fa-regular fa-mountain"></i> Midway stop at Narkanda (optional Hatu Peak view)</li>
                      <li><i className="fa-regular fa-tree"></i> Continue to Sangla Valley - apple orchards and rivers</li>
                      <li><i className="fa-regular fa-hotel"></i> Check-in at homestay/hotel in Sangla</li>
                      <li><i className="fa-regular fa-water"></i> Evening walk by Baspa River and village stroll</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 2: Sangla – Chitkul – Kalpa</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-utensils"></i> Breakfast at hotel</li>
                      <li><i className="fa-regular fa-car"></i> Drive to Chitkul - last inhabited village near Tibet border</li>
                      <li><i className="fa-regular fa-home"></i> Explore wooden homes and local culture</li>
                      <li><i className="fa-regular fa-car"></i> Proceed to Kalpa with Kinnaur Kailash views</li>
                      <li><i className="fa-regular fa-hotel"></i> Check-in at Kalpa hotel</li>
                      <li><i className="fa-regular fa-binoculars"></i> Visit Suicide Point and Kalpa village walk</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 3: Kalpa – Narkanda</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sun"></i> Morning visit to Roghi village or Narayan-Nagini temple</li>
                      <li><i className="fa-regular fa-car"></i> Drive back to Narkanda (~7 hours)</li>
                      <li><i className="fa-regular fa-hotel"></i> Check-in at hotel/guesthouse</li>
                      <li><i className="fa-regular fa-campfire"></i> Evening bonfire (weather permitting)</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 4: Narkanda – Shimla – Delhi</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-utensils"></i> Breakfast at hotel</li>
                      <li><i className="fa-regular fa-car"></i> Drive to Shimla (~2.5 hours)</li>
                      <li><i className="fa-regular fa-bag-shopping"></i> Free time for Mall Road visit</li>
                      <li><i className="fa-regular fa-bus"></i> Evening departure to Delhi</li>
                    </ul>
                  </div>

                  <div className="inclusions-exclusions mt-50">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="inclusions-box">
                          <h4><i className="fa-regular fa-circle-check"></i> Inclusions</h4>
                          <ul>
                            <li>Delhi to Delhi AC transport</li>
                            <li>3 nights hotel/homestay stay</li>
                            <li>3 Breakfasts + 3 Dinners</li>
                            <li>Experienced group leader</li>
                            <li>Sightseeing as per itinerary</li>
                            <li>Bonfire (where permitted)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="exclusions-box">
                          <h4><i className="fa-regular fa-circle-xmark"></i> Exclusions</h4>
                          <ul>
                            <li>Lunches on all days</li>
                            <li>Personal expenses</li>
                            <li>Adventure activities</li>
                            <li>Camera fees/temple donations</li>
                            <li>Anything not mentioned</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="requirements-box mt-40">
                    <h4><i className="fa-regular fa-clipboard-list"></i> Essential Requirements</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <ul>
                          <li><strong>ID Proof:</strong> Aadhaar/Passport/Driving License</li>
                          <li><strong>Health:</strong> Fit for high-altitude travel</li>
                          <li><strong>Payment:</strong> 50% advance required</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li><strong>Clothing:</strong> Warm layers for cold nights</li>
                          <li><strong>Behavior:</strong> Alcohol/drugs prohibited</li>
                          <li><strong>Group:</strong> Minimum 10 participants</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <div className="pricing-box mt-40">
                    <h4><i className="fa-regular fa-tag"></i> Pricing</h4>
                    <table className="pricing-table">
                      <thead>
                        <tr>
                          <th>Group Size</th>
                          <th>Price Per Person</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10-15 participants</td>
                          <td>₹10,999</td>
                        </tr>
                        <tr>
                          <td>16-25 participants</td>
                          <td>₹9,999</td>
                        </tr>
                        <tr>
                          <td>Private Group (Custom)</td>
                          <td>On Request</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="note">*Prices inclusive of all taxes</p>
                  </div> */}

                  <div className="cta-box text-center mt-50">
                    <button className="btn btn-primary btn-lg">Book Now</button>
                    <p className="mt-20">Have questions? <a href="#contact">Contact our travel specialists</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="tour-sidebar">
                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Quick Facts</h3>
                  <ul className="quick-facts">
                    <li>
                      <i className="fa-regular fa-clock"></i>
                      <div>
                        <h5>Duration</h5>
                        <p>4 Days / 3 Nights</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-map-location-dot"></i>
                      <div>
                        <h5>Location</h5>
                        <p>Kinnaur, Himachal Pradesh</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-gauge-high"></i>
                      <div>
                        <h5>Trip Type</h5>
                        <p>Scenic Road Trip</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-calendar-days"></i>
                      <div>
                        <h5>Best Season</h5>
                        <p>Mar-Jun & Sep-Nov</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Packing List</h3>
                  <ul className="packing-list">
                    <li><i className="fa-regular fa-check"></i> Warm layered clothing</li>
                    <li><i className="fa-regular fa-check"></i> Comfortable trekking shoes</li>
                    <li><i className="fa-regular fa-check"></i> Sunglasses & sunscreen</li>
                    <li><i className="fa-regular fa-check"></i> Water bottle (1L+)</li>
                    <li><i className="fa-regular fa-check"></i> Personal toiletries</li>
                    <li><i className="fa-regular fa-check"></i> Power bank & camera</li>
                    <li><i className="fa-regular fa-check"></i> Daypack (20-30L)</li>
                    <li><i className="fa-regular fa-check"></i> ID cards (original + copy)</li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Why Choose This Trip?</h3>
                  <div className="why-choose">
                    <div className="reason">
                      <i className="fa-regular fa-village"></i>
                      <h5>Cultural Immersion</h5>
                      <p>Authentic Kinnauri village experiences</p>
                    </div>
                    <div className="reason">
                      <i className="fa-regular fa-mountain-sun"></i>
                      <h5>Stunning Views</h5>
                      <p>Kinnaur Kailash and Himalayan ranges</p>
                    </div>
                    <div className="reason">
                      <i className="fa-regular fa-road"></i>
                      <h5>Scenic Drives</h5>
                      <p>Beautiful valley and river routes</p>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Important Notes</h3>
                  <ul className="important-notes">
                    <li><i className="fa-regular fa-circle-exclamation"></i> No refunds for no-shows</li>
                    <li><i className="fa-regular fa-circle-exclamation"></i> Itinerary may change due to weather</li>
                    <li><i className="fa-regular fa-circle-exclamation"></i> Full payment before trip starts</li>
                    <li><i className="fa-regular fa-circle-exclamation"></i> Alcohol strictly prohibited</li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Have Questions?</h3>
                  <div className="contact-widget">
                    <p>Our Kinnaur experts are here to help:</p>
                    <ul className="contact-info">
                      <li><i className="fa-regular fa-phone"></i> +91 98765 43210</li>
                      <li><i className="fa-regular fa-envelope"></i> kinnaur@yourcompany.com</li>
                    </ul>
                    <button className="btn btn-outline-primary btn-block">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </> 
  );
}

export default SanglaKalpaChitkulTour;