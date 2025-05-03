import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function YullaKandaTrek() {
  return (
    <>
      <Header/>
      <section className="tour-details pt-120 pb-120">
        <div className="container tour-details-container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-wrap destination-details-content">
                <div className="destination-details-img-wrap mb-30">
                  <div id="yullaKandaCarousel" className="carousel slide" data-bs-ride="carousel" style={{width:'100%'}}>
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#yullaKandaCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#yullaKandaCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#yullaKandaCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="assets/img/images/yullakanda1.jpg" className="d-block w-100" alt="Yulla Kanda View" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/yullakanda2.jpg" className="d-block w-100" alt="Yulla Kanda Lake" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/img/images/yullakanda3.jpg" className="d-block w-100" alt="Kinnaur Valley" style={{height:'450px', objectFit: 'cover'}}/>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#yullaKandaCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#yullaKandaCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                
                <div className="blog-details-content">
                  <h2 className="details-title mb-20">Yulla Kanda Trek Package</h2>
                  <p className="mb-30">
                    Experience the mystical beauty of Kinnaur with our 4-day Yulla Kanda trek package. This moderate-level Himalayan adventure takes you through dense pine forests, sacred high-altitude lakes, and offers breathtaking views of the Greater Himalayas. The package includes 3 nights of stay plus 2 nights of travel.
                  </p>

                  <div className="destination-details-box">
                    <h4 className="box-title">Package Highlights:</h4>
                    <div className="box-list-wrap">
                      <ul className="box-list">
                        <li><i className="fa-regular fa-map"></i><span className="child-1">Duration:</span> <span>4 Days / 5 Nights <small style={{fontSize:'2px'}}>(3 stay + 2 travel)</small></span></li>
                        <li><i className="fa-regular fa-route"></i><span className="child-1">Activity Level:</span> <span>Moderate</span></li>
                        <li><i className="fa-regular fa-users"></i><span className="child-1">Group Size:</span> <span>6-20 people</span></li>
                      </ul>
                      <ul className="box-list">
                        <li><i className="fa-regular fa-calendar"></i><span className="child-1">Best Season:</span> <span>May-October</span></li>
                        <li><i className="fa-solid fa-sack-dollar"></i><span className="child-1">Starting From:</span> <span>₹9,999/person</span></li>
                        <li><i className="fa-regular fa-mountain"></i><span className="child-1">Altitude:</span> <span>12,000 ft</span></li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="itinerary-title mt-40 mb-20">Detailed Itinerary</h3>

                  <div className="itinerary-day">
                    <h4>Night 0: Departure from Delhi to Shimla</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-clock"></i> 8:30 PM: Reporting at boarding point, Delhi</li>
                      <li><i className="fa-regular fa-bus"></i> 9:00 PM: Departure in AC Tempo Traveller/Volvo</li>
                      <li>Overnight journey to Shimla (approx. 8-10 hours)</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 1: Shimla – Narkanda | Local Acclimatization</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sun"></i> 8:00 AM: Arrival in Shimla, breakfast stop</li>
                      <li><i className="fa-regular fa-car"></i> Scenic 2.5-hour drive to Narkanda (65 km)</li>
                      <li><i className="fa-regular fa-hotel"></i> Check-in at guesthouse/camp stay</li>
                      <li><i className="fa-regular fa-utensils"></i> Lunch at accommodation</li>
                      <li><i className="fa-regular fa-person-hiking"></i> Optional hike to Hatu Peak (3,400m)</li>
                      <li><i className="fa-regular fa-campfire"></i> Evening bonfire & team briefing</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 2: Narkanda – Yulla Khas (via Rampur)</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sunrise"></i> 7:00 AM: Breakfast</li>
                      <li><i className="fa-regular fa-car"></i> 5-hour drive via Rampur through pine forests</li>
                      <li><i className="fa-regular fa-home"></i> Check-in at homestay in Yulla Khas (6,500 ft)</li>
                      <li><i className="fa-regular fa-utensils"></i> Lunch at homestay</li>
                      <li><i className="fa-regular fa-person-walking"></i> Local village walk & waterfall visit</li>
                      <li><i className="fa-regular fa-users"></i> Cultural interaction with locals</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 3: Yulla Khas – Yulla Kanda Trek – Jungle Camp</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sunrise"></i> 5:30 AM: Early breakfast</li>
                      <li><i className="fa-regular fa-person-hiking"></i> Trek to Yulla Kanda (12 km, ~12,000 ft)</li>
                      <li><i className="fa-regular fa-lake"></i> Visit sacred Yulla Kanda Lake</li>
                      <li><i className="fa-regular fa-utensils"></i> Packed lunch at summit</li>
                      <li><i className="fa-regular fa-tent"></i> Evening descent to jungle campsite</li>
                      <li><i className="fa-regular fa-campground"></i> Overnight in dome tents</li>
                    </ul>
                  </div>

                  <div className="itinerary-day">
                    <h4>Day 4: Jungle Camp – Yulla Kanda Sunrise – Return to Shimla – Delhi</h4>
                    <ul className="timeline-list p-2">
                      <li><i className="fa-regular fa-sunrise"></i> Sunrise visit to Yulla Kanda Lake</li>
                      <li><i className="fa-regular fa-person-hiking"></i> Trek down to Yulla Khas (~2 hours)</li>
                      <li><i className="fa-regular fa-car"></i> Drive back to Shimla (6-7 hours)</li>
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
                            <li>1 night guesthouse, 1 night homestay, 1 night camping</li>
                            <li>All meals from Day 1 lunch to Day 4 breakfast</li>
                            <li>Trek leader & local guides</li>
                            <li>Forest permits & entry fees</li>
                            <li>Camping equipment (tents, sleeping bags, mats)</li>
                            <li>First aid kit & oxygen cylinder</li>
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
                          <li><strong>Age:</strong> 16-60 years</li>
                          <li><strong>Fitness:</strong> Capable of trekking 10-12 km/day</li>
                          <li><strong>Documents:</strong> Govt. ID required</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li><strong>Health:</strong> No heart conditions or serious ailments</li>
                          <li><strong>Group:</strong> Minimum 6 participants</li>
                          <li><strong>Behavior:</strong> Alcohol/drugs prohibited</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="pricing-box mt-40">
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
                          <td>6-12 participants</td>
                          <td>₹10,499</td>
                        </tr>
                        <tr>
                          <td>13-20 participants</td>
                          <td>₹9,999</td>
                        </tr>
                        <tr>
                          <td>Private Group (Custom)</td>
                          <td>On Request</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="note">*Prices inclusive of all taxes</p>
                  </div>

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
                        <p>4 Days / 5 Nights (3 stay + 2 travel)</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-map-location-dot"></i>
                      <div>
                        <h5>Location</h5>
                        <p>Kinnaur District, Himachal Pradesh</p>
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
                        <p>May to October</p>
                      </div>
                    </li>
                    <li>
                      <i className="fa-regular fa-mountain"></i>
                      <div>
                        <h5>Max Altitude</h5>
                        <p>12,000 ft</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Packing List</h3>
                  <ul className="packing-list">
                    <li><i className="fa-regular fa-check"></i> Trekking shoes with ankle support</li>
                    <li><i className="fa-regular fa-check"></i> Warm layers (thermals, fleece, down jacket)</li>
                    <li><i className="fa-regular fa-check"></i> Rain jacket/poncho</li>
                    <li><i className="fa-regular fa-check"></i> UV sunglasses & sunscreen (SPF 50+)</li>
                    <li><i className="fa-regular fa-check"></i> Headlamp with extra batteries</li>
                    <li><i className="fa-regular fa-check"></i> Trekking poles (recommended)</li>
                    <li><i className="fa-regular fa-check"></i> Personal medications & first aid</li>
                    <li><i className="fa-regular fa-check"></i> Daypack (25-30L) with rain cover</li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Why Choose This Trip?</h3>
                  <div className="why-choose">
                    <div className="reason">
                      <i className="fa-regular fa-map-marked-alt"></i>
                      <h5>Offbeat Kinnaur Trek</h5>
                      <p>Explore lesser-known trails in the mystical Kinnaur region</p>
                    </div>
                    <div className="reason">
                      <i className="fa-regular fa-lake"></i>
                      <h5>Sacred Himalayan Lake</h5>
                      <p>Visit the spiritually significant Yulla Kanda Lake</p>
                    </div>
                    <div className="reason">
                      <i className="fa-regular fa-people-group"></i>
                      <h5>Cultural Immersion</h5>
                      <p>Authentic homestay experience with Kinnauri people</p>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Optional Add-ons</h3>
                  <ul className="addons-list">
                    <li><i className="fa-regular fa-camera"></i> Professional photography package (+₹2,000)</li>
                    <li><i className="fa-regular fa-porter"></i> Personal porter for backpack (+₹1,500/day)</li>
                    <li><i className="fa-regular fa-tent"></i> Single tent supplement (+₹1,500)</li>
                    <li><i className="fa-regular fa-hotel"></i> Extra Shimla stay (+₹2,499/night)</li>
                  </ul>
                </div>

                <div className="sidebar-widget">
                  <h3 className="sidebar-title">Have Questions?</h3>
                  <div className="contact-widget">
                    <p>Our trek specialists are here to help:</p>
                    <ul className="contact-info">
                      <li><i className="fa-regular fa-phone"></i> +91 98765 43210</li>
                      <li><i className="fa-regular fa-envelope"></i> treks@yourcompany.com</li>
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

export default YullaKandaTrek;