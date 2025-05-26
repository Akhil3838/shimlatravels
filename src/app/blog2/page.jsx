import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Mukteshwar() {
  return (
<>
<Header/>
        <div className="travel-blog">
          {/* Hero Section */}
          <header className="hero">
            <h1>The Road Less Travelled: Exploring Kumaon on a Budget</h1>
            <p className="subtitle">A soulful escape into the Himalayan wilderness</p>
          </header>
    
          {/* Introduction */}
          <section className="intro-section">
            <div className="container">
              <p className="lead">
                After my MBA placements wrapped up, I was craving a break — not just a weekend getaway, 
                but a real escape into the mountains. That's when I discovered Uttarakhand's hidden gem.
              </p>
              
              <div className="ranges-comparison">
                <div className="range-card garhwal">
                  <h3>🏞️ Garhwal Ranges</h3>
                  <ul>
                    <li>The more popular of the two</li>
                    <li>Home to Char Dham pilgrimages</li>
                    <li>Well-connected with broader highways</li>
                    <li>Suitable for comfort-seeking travelers</li>
                  </ul>
                </div>
                
                <div className="range-card kumaon">
                  <h3>🌲 Kumaon Ranges</h3>
                  <ul>
                    <li>The less explored and quieter cousin</li>
                    <li>Includes towns like Mukteshwar, Almora</li>
                    <li>Dense forests and narrow roads</li>
                    <li>Ideal for backpackers and solitude seekers</li>
                  </ul>
                </div>
              </div>
              
              <blockquote className="decision-quote">
                "I chose Kumaon — the road less traveled. And it made all the difference."
              </blockquote>
            </div>
          </section>
    
          {/* Day 1 Section */}
          <section className="day-section day-1">
            <div className="container">
              <h2>Day 1: Into the Heart of Kumaon</h2>
              
              <div className="content-grid">
                <div className="text-content">
                  <p>
                    Our adventure started with a train ride to Kathgodam, the entry point to Kumaon. 
                    From there, we rented a scooty — because there's something about two wheels on hilly roads 
                    that brings unmatched freedom.
                  </p>
                  
                  <div className="route-card">
                    <h4>🛤️ The Route</h4>
                    <p>Kathgodam → Bhimtal → Nainital → Mukteshwar (Zostel)</p>
                    <p>Travel time: ~4 hours | Cost: Friendly on the wallet</p>
                    <p className="goal">Goal: Escape the expected</p>
                  </div>
                  
                  <p>
                    We made our first stop at Bhimtal Lake, a peaceful spot that was a welcome break after the train ride. 
                    After soaking in the calm waters and some roadside chai, we headed toward Nainital.
                  </p>
                </div>
                
                <div className="image-placeholder">
                  {/* Replace with actual image component */}
                  <div className="image-frame">
                    <img  src="assets/img/images/blog2-1.jpg"  alt="" />
                  </div>
                </div>
              </div>
              
              <div className="leopard-trail">
                <h4>🌌 The Leopard Trail</h4>
                <p>
                  As dusk approached, we began the journey to Zostel Mukteshwar. That's when the adventure truly began.
                  No streetlights. No humans in sight. Just forests. And murmurs about leopard sightings.
                </p>
                <p>
                  It was pitch dark after 6 in the evening. We were terrified — but equally determined.
                  After a few wrong turns, GPS fails and moments of panic, we finally saw the lights of Zostel Mukteshwar.
                </p>
              </div>
            </div>
          </section>
    
          {/* Day 2 Section */}
          <section className="day-section day-2">
            <div className="container">
              <h2>Day 2: Temple, Talk, and the Energy of the Unknown</h2>
              
              <div className="content-grid reversed">
                <div className="image-placeholder">
                  {/* Replace with actual image component */}
                  <div className="image-frame">
                    <p> <img  src="assets/img/images/blog2-2.jpg"  alt="" /></p>
                  </div>
                </div>
                
                <div className="text-content">
                  <p>
                    The next morning started with a hot breakfast and a chat with Chetan, the property manager. 
                    Being MBAs, we couldn't help but dive into some classic business curiosity about Zostel's operations.
                  </p>
                  
                  <div className="temple-card">
                    <h4>🧭 Kasar Devi Temple</h4>
                    <p>
                      Chetan told us about a mystical site just 1.5 hours away — the Kasar Devi Temple, 
                      perched near Almora. This wasn't just another hilltop temple. It's one of only three 
                      geomagnetic power centers in the world, the others being Machu Picchu and Stonehenge.
                    </p>
                    <p>
                      Spiritual seekers like Swami Vivekananda and Bob Dylan have visited and meditated here.
                      Though neither of us were particularly spiritual, something about this place intrigued us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* Final Thoughts */}
          <section className="conclusion">
            <div className="container">
              <h2>✨ Final Thoughts</h2>
              <p>
                This trip wasn't about ticking places off a list. It was about choosing the quieter route, 
                finding beauty in simplicity and learning that sometimes, the most unexpected paths are the 
                ones that move you the most.
              </p>
              <p>
                From dark forest roads and empty dorms to cosmic temples and scooty rides, Kumaon gave us 
                more than we asked for.
              </p>
              <p className="signature">— Alston</p>
            </div>
          </section>
        </div>
    <Footer/>
</>  );
}

export default Mukteshwar;