import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function GiriGangaKuppadTrek() {
  return (
    <>
      <Header/>
      <section className="tour-details pt-120 pb-120">
        <div className="container tour-details-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-wrap destination-details-content">
                <div className="destination-details-img-wrap mb-30">
                  <div id="giriGangaCarousel" className="carousel slide" data-bs-ride="carousel" style={{width:'100%'}}>
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#giriGangaCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#giriGangaCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#giriGangaCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/images/kuppar1.jpg" className="d-block w-100" alt="Giri Ganga Temple" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/kuppar2.jpg" className="d-block w-100" alt="Kuppad Meadows" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/kuppar3.jpg" className="d-block w-100" alt="Pabbar Valley View" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#giriGangaCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#giriGangaCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                
                <div className="blog-details-content">
                  <h2 className="details-title mb-20">Giri Ganga - Kuppad Trek Package</h2>
                  <p className="mb-30">
                    Experience an offbeat Himalayan adventure with our carefully curated 3-day package combining the sacred Giri Ganga temple visit with the breathtaking Kuppad meadows trek. This itinerary blends nature, spirituality, and adventure for an unforgettable mountain escape.
                  </p>

                  <div className="destination-details-box">
                    <h4 className="box-title">Package Highlights:</h4>
                    <div className="box-list-wrap">
                      <ul className="box-list">
                        <li><i className="fa-regular fa-map"></i><span className="child-1">Duration:</span> <span>3 Days / 4 Nights</span></li>
                        <li><i className="fa-regular fa-route"></i><span className="child-1">Activity Level:</span> <span>Easy to Moderate</span></li>
                        <li><i className="fa-regular fa-users"></i><span className="child-1">Group Size:</span> <span>8-25 people</span></li>
                      </ul>
                      <ul className="box-list">
                        <li><i className="fa-regular fa-calendar"></i><span className="child-1">Best Season:</span> <span>April-November</span></li>
                        <li><i className="fa-solid fa-sack-dollar"></i><span className="child-1">Starting From:</span> <span>₹7,999/person</span></li>
                        <li><i className="fa-regular fa-mountain"></i><span className="child-1">Altitude:</span> <span>Up to 10,000 ft</span></li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="itinerary-title mt-40 mb-20">Detailed Itinerary</h3>

                  <div className="itinerary-day">
                    <h4>Night 0: Departure from Delhi</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-clock"></i> 9:00 PM: Reporting at boarding point, Delhi</li>
                      <li><i className="fa-regular fa-bus"></i> 9:30 PM: Departure in AC Tempo Traveller/Volvo</li>
                      <li>Overnight journey to Shimla (approx. 8-10 hours)</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 1: Shimla – Kharapathar – Giri Ganga</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sun"></i> 8:00 AM: Arrival in Shimla, freshen up & breakfast</li>
                      <li><i className="fa-regular fa-car"></i> Scenic 4-hour drive to Kharapathar (~85 km)</li>
                      <li><i className="fa-regular fa-utensils"></i> Lunch at Kharapathar</li>
                      <li><i className="fa-regular fa-temple"></i> Visit sacred Giri Ganga temple</li>
                      <li><i className="fa-regular fa-campfire"></i> Evening bonfire & stargazing</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 2: Giri Ganga – Kuppad – Kharapathar</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sunrise"></i> 6:00 AM: Wake up with herbal tea</li>
                      <li><i className="fa-regular fa-person-hiking"></i> Trek to Kuppad Top (8 km round trip)</li>
                      <li><i className="fa-regular fa-binoculars"></i> 360° Himalayan views at summit</li>
                      <li><i className="fa-regular fa-utensils"></i> Lunch at Giri Ganga</li>
                      <li><i className="fa-regular fa-car"></i> Return to Kharapathar by evening</li>
                      <li><i className="fa-regular fa-users"></i> Cultural interaction with locals</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 3: Kharapathar – Deori Ghat – Shimla – Delhi</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sun"></i> 6:30 AM: Early breakfast</li>
                      <li><i className="fa-regular fa-tree"></i> Optional forest walk at Deori Ghat</li>
                      <li><i className="fa-regular fa-car"></i> Drive back to Shimla (~3.5 hours)</li>
                      <li><i className="fa-regular fa-bag-shopping"></i> Shopping time at Mall Road</li>
                      <li><i className="fa-regular fa-bus"></i> Evening departure to Delhi (~7 PM)</li>
                    </ul>
                  </div>

                  <div className="inclusions-exclusions mt-50">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="inclusions-box">
                          <h4><i className="fa-regular fa-circle-check"></i> Inclusions</h4>
                          <ul>
                            <li>Delhi-Shimla-Delhi AC transport</li>
                            <li>1 night homestay + 1 night hotel stay</li>
                            <li>All meals from Day 1 lunch to Day 3 breakfast</li>
                            <li>Trek leader & local guides</li>
                            <li>Forest permits & entry fees</li>
                            <li>Camping equipment (tents, sleeping bags)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="exclusions-box">
                          <h4><i className="fa-regular fa-circle-xmark"></i> Exclusions</h4>
                          <ul>
                            <li>Personal porterage</li>
                            <li>Travel insurance</li>
                            <li>Personal snacks & beverages</li>
                            <li>Medical tests/health certificates</li>
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
                          <li><strong>Age:</strong> 15-60 years</li>
                          <li><strong>Fitness:</strong> Able to walk 5-6 km</li>
                          <li><strong>Documents:</strong> Govt. ID required</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li><strong>Health:</strong> No serious medical conditions</li>
                          <li><strong>Group:</strong> Minimum 8 participants</li>
                          <li><strong>Behavior:</strong> Alcohol/drugs prohibited</li>
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
                          <td>8-12 participants</td>
                          <td>₹8,499</td>
                        </tr>
                        <tr>
                          <td>13-25 participants</td>
                          <td>₹7,999</td>
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
                        <p>3 Days / 4 Nights</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-map-location-dot"></i>
                      <div>
                        <h5>Location</h5>
                        <p>Shimla District, Himachal Pradesh</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-gauge-high"></i>
                      <div>
                        <h5>Difficulty</h5>
                        <p>Easy to Moderate</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-calendar-days"></i>
                      <div>
                        <h5>Best Season</h5>
                        <p>April to November</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Packing List</h3>
                  <ul className="packing-list">
                    <li><i className="fa-regular fa-check"></i> Trekking shoes with grip</li>
                    <li><i className="fa-regular fa-check"></i> Warm layers (fleece + jacket)</li>
                    <li><i className="fa-regular fa-check"></i> Raincoat/Poncho</li>
                    <li><i className="fa-regular fa-check"></i> UV sunglasses & sunscreen</li>
                    <li><i className="fa-regular fa-check"></i> Headlamp with batteries</li>
                    <li><i className="fa-regular fa-check"></i> Reusable water bottle</li>
                    <li><i className="fa-regular fa-check"></i> Personal medications</li>
                    <li><i className="fa-regular fa-check"></i> Small backpack (25-30L)</li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Why Choose This Trip?</h3>
                  <div className="why-choose">
                    <div className="reason">
                      <i className="fa-regular fa-map-marked-alt"></i>
                      <h5>Offbeat Location</h5>
                      <p>Experience untouched Himalayan meadows away from crowds</p>
                    </div>
                    <div className="reason">
                      <i className="fa-regular fa-temple"></i>
                      <h5>Spiritual Experience</h5>
                      <p>Visit the sacred Giri Ganga temple with holy springs</p>
                    </div>
                    <div className="reason">
                      <i className="fa-regular fa-users"></i>
                      <h5>Cultural Interaction</h5>
                      <p>Authentic experiences with local mountain communities</p>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Optional Add-ons</h3>
                  <ul className="addons-list">
                    <li><i className="fa-regular fa-camera"></i> GoPro/Drone footage (+₹1,500)</li>
                    <li><i className="fa-regular fa-hood-cloak"></i> Personalized trek hoodie (+₹899)</li>
                    <li><i className="fa-regular fa-tent"></i> Private tent upgrade (+₹1,200)</li>
                    <li><i className="fa-regular fa-hotel"></i> Extra Shimla stay (+₹1,999/night)</li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Have Questions?</h3>
                  <div className="contact-widget">
                    <p>Our trek specialists are here to help:</p>
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

export default GiriGangaKuppadTrek;