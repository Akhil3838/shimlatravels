import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BirBillingAdventure() {
  return (
<>
<Header/>
        <section className="tour-details pt-120 pb-120">
          <div className="container tour-details-container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="blog-details-wrap destination-details-content">
                <div className="destination-details-img-wrap mb-30">
                  <div id="birBillingCarousel" className="carousel slide" data-bs-ride="carousel" style={{width:'100%'}}>
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#birBillingCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#birBillingCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#birBillingCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/images/birbill2.jpg" className="d-block w-100" alt="Paragliding in Bir Billing" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/birbill1.jpg" className="d-block w-100" alt="Camping in Rajgunda" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/birbill3.jpg" className="d-block w-100" alt="Hidden Waterfall" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#birBillingCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#birBillingCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                  
                  <div className="blog-details-content">
                    <h2 className="details-title mb-20">Bir Billing - Rajgunda Adventure Package</h2>
                    <p className="mb-30">
                      Experience the ultimate Himalayan adventure with our carefully curated 3-day package combining paragliding at one of the world's best sites with offbeat camping in the pristine Rajgunda valley. This itinerary blends adrenaline, nature, and local culture for an unforgettable mountain escape.
                    </p>
    
                    <div className="destination-details-box">
                      <h4 className="box-title">Package Highlights:</h4>
                      <div className="box-list-wrap">
                        <ul className="box-list">
                          <li><i className="fa-regular fa-map"></i><span className="child-1">Duration:</span> <span>3 Days / 2 Nights</span></li>
                          <li><i className="fa-regular fa-route"></i><span className="child-1">Activity Level:</span> <span>Moderate</span></li>
                          <li><i className="fa-regular fa-users"></i><span className="child-1">Group Size:</span> <span>12-25 people</span></li>
                        </ul>
                        <ul className="box-list">
                          <li><i className="fa-regular fa-calendar"></i><span className="child-1">Best Season:</span> <span>March-June, Sept-Nov</span></li>
                          <li><i className="fa-solid fa-sack-dollar"></i><span className="child-1">Starting From:</span> <span>₹8,499/person</span></li>
                          <li><i className="fa-regular fa-mountain"></i><span className="child-1">Altitude:</span> <span>1,525m (Bir) - 2,400m (Billing)</span></li>
                        </ul>
                      </div>
                    </div>
    
                    <h3 className="itinerary-title mt-40 mb-20">Detailed Itinerary</h3>
    
                    <div className="itinerary-day">
                      <h4 >Day 0: Departure from Delhi</h4>
                      <ul className="timeline-list p-2">
                        <li><i className="fa-regular fa-clock"></i> 7:30 PM: Reporting at Majnu Ka Tila, Delhi</li>
                        <li><i className="fa-regular fa-bus"></i> 8:00 PM: Departure in AC Tempo Traveller/Volvo</li>
                        <li>Overnight journey to Bir (approx. 12 hours)</li>
                      </ul>
                    </div>
    
                    <div className="itinerary-day">
                      <h4>Day 1: Bir Exploration & Acclimatization</h4>
                      <ul className="timeline-list p-2">
                        <li><i className="fa-regular fa-sun"></i> Morning arrival & check-in at Himalayan homestay</li>
                        <li><i className="fa-regular fa-utensils"></i> Breakfast at local café</li>
                        <li><i className="fa-regular fa-person-hiking"></i> Visit Deer Park Institute & Chokling Monastery</li>
                        <li><i className="fa-regular fa-mug-hot"></i> Café hopping in Bir Tibetan Colony</li>
                        <li><i className="fa-regular fa-campfire"></i> Evening bonfire & group dinner</li>
                      </ul>
                    </div>
    
                    <div className="itinerary-day">
                      <h4>Day 2: Hidden Waterfall & Rajgunda Camping</h4>
                      <ul className="timeline-list p-2">
                        <li><i className="fa-regular fa-sunrise"></i> Early breakfast</li>
                        <li><i className="fa-regular fa-water"></i> 1-hour hike to secret waterfall</li>
                        <li><i className="fa-regular fa-car"></i> Scenic drive to Rajgunda village</li>
                        <li><i className="fa-regular fa-tent"></i> Set up campsite in pine forest</li>
                        <li><i className="fa-regular fa-stars"></i> Stargazing & storytelling around bonfire</li>
                      </ul>
                    </div>
    
                    <div className="itinerary-day">
                      <h4>Day 3: Paragliding & Return</h4>
                      <ul className="timeline-list p-2">
                        <li><i className="fa-regular fa-parachute-box"></i> Morning transfer to Billing take-off point</li>
                        <li><i className="fa-regular fa-wind"></i> 15-25 minute paragliding flight with certified pilot</li>
                        <li><i className="fa-regular fa-bag-shopping"></i> Free time for souvenir shopping</li>
                        <li><i className="fa-regular fa-bus"></i> Evening departure to Delhi</li>
                      </ul>
                    </div>
    
                    <div className="inclusions-exclusions mt-50">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="inclusions-box">
                            <h4><i className="fa-regular fa-circle-check"></i> Inclusions</h4>
                            <ul>
                              <li>Delhi-Bir-Delhi AC transport</li>
                              <li>1 night homestay + 1 night camping</li>
                              <li>2 breakfasts + 2 dinners</li>
                              <li>Certified paragliding experience</li>
                              <li>Local guide for hikes</li>
                              <li>All necessary permits</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="exclusions-box">
                            <h4><i className="fa-regular fa-circle-xmark"></i> Exclusions</h4>
                            <ul>
                              <li>Lunches & personal snacks</li>
                              <li>Travel insurance</li>
                              <li>Camera charges at sites</li>
                              <li>Emergency evacuation costs</li>
                              <li>Anything not mentioned in inclusions</li>
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
                            <li><strong>Age:</strong> 12-60 years for paragliding</li>
                            <li><strong>Weight:</strong> 30-90 kg for flying</li>
                            <li><strong>Fitness:</strong> Moderate activity level</li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li><strong>Documents:</strong> Govt. ID (Aadhar/Passport)</li>
                            <li><strong>Health:</strong> No heart/breathing conditions</li>
                            <li><strong>Weather:</strong> Activities subject to conditions</li>
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
                            <td>12-18 participants</td>
                            <td>₹8,999</td>
                          </tr>
                          <tr>
                            <td>19-25 participants</td>
                            <td>₹8,499</td>
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
                      <p className="mt-20">Have questions? <a href="#contact">Contact our adventure specialists</a></p>
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
                          <p>3 Days / 2 Nights</p>
                        </div>
                      </li>
                      <li>
                        <i className="fa-regular fa-map-location-dot"></i>
                        <div>
                          <h5>Location</h5>
                          <p>Bir Billing, Himachal Pradesh</p>
                        </div>
                      </li>
                      <li>
                        <i className="fa-regular fa-gauge-high"></i>
                        <div>
                          <h5>Difficulty</h5>
                          <p>Moderate</p>
                        </div>
                      </li>
                      <li>
                        <i className="fa-regular fa-calendar-days"></i>
                        <div>
                          <h5>Best Season</h5>
                          <p>Spring & Autumn</p>
                        </div>
                      </li>
                    </ul>
                  </div>
    
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title">Packing List</h3>
                    <ul className="packing-list">
                      <li><i className="fa-regular fa-check"></i> Trekking shoes</li>
                      <li><i className="fa-regular fa-check"></i> Warm layers (nights are cold)</li>
                      <li><i className="fa-regular fa-check"></i> Daypack (20-30L)</li>
                      <li><i className="fa-regular fa-check"></i> Sunglasses & sunscreen</li>
                      <li><i className="fa-regular fa-check"></i> Water bottle & snacks</li>
                      <li><i className="fa-regular fa-check"></i> Personal medications</li>
                      <li><i className="fa-regular fa-check"></i> Camera/GoPro</li>
                      <li><i className="fa-regular fa-check"></i> Power bank</li>
                    </ul>
                  </div>
    
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title">Why Choose This Trip?</h3>
                    <div className="why-choose">
                      <div className="reason">
                        <i className="fa-regular fa-certificate"></i>
                        <h5>Certified Pilots</h5>
                        <p>All paragliding with BHPA/APPI certified professionals</p>
                      </div>
                      <div className="reason">
                        <i className="fa-regular fa-map-marked-alt"></i>
                        <h5>Offbeat Locations</h5>
                        <p>Access to hidden waterfalls and untouched campsites</p>
                      </div>
                      <div className="reason">
                        <i className="fa-regular fa-users"></i>
                        <h5>Small Groups</h5>
                        <p>Personalized attention with limited group sizes</p>
                      </div>
                    </div>
                  </div>
    
                  <div className="sidebar-widget">
                    <h3 className="sidebar-title">Have Questions?</h3>
                    <div className="contact-widget">
                      <p>Our adventure specialists are here to help:</p>
                      <ul className="contact-info">
                      <li><i className="fa-regular fa-phone"></i>(+91) 88824 08594</li>
                      <li><i className="fa-regular fa-envelope"></i> hsstartup14@gmail.com</li>
                      </ul>
                      {/* <button className="btn btn-outline-primary btn-block">Send Message</button> */}
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

export default BirBillingAdventure;