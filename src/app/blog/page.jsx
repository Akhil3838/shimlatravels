import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Blog() {
  return (
    <>
      <Header/>
      <section className="blog-section pt-120 pb-120 fade-wrapper bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="blog-article">
                {/* Hero Header */}
                <header className="blog-header text-center mb-5">
                  <span className="badge bg-primary mb-3" data-text-animation="fade-in" data-duration="1.5">Travel Diaries</span>
                  <h1 className="display-4 fw-bold mb-4" data-text-animation="fade-in-right" data-split="char" data-duration="0.6" data-stagger="0.03">
                    Chopta-Tungnath: A Birthday Tale of Mountains & Magic
                  </h1>
                  <div className="meta d-flex justify-content-center align-items-center gap-4">
                    <span className="text-muted"><i className="fas fa-calendar-alt me-2"></i>May 24, 2023</span>
                    <span className="text-muted"><i className="fas fa-user me-2"></i>Traveler</span>
                    <span className="text-muted"><i className="fas fa-comments me-2"></i>12 Comments</span>
                  </div>
                </header>
                
                {/* Featured Image */}
                <div className="post-thumb mb-5 position-relative rounded-4 overflow-hidden">
                  <img 
                    src="assets/img/blog12.jpg" 
                    alt="Chopta-Tungnath trek" 
                    className="img-fluid w-100"
                  />
                  <div className="date-badge position-absolute top-0 start-0 bg-primary text-white p-3 text-center">
                    <span className="d-block fs-4 fw-bold">24</span>
                    <span className="d-block text-uppercase">May</span>
                  </div>
                </div>
                
                {/* Blog Content */}
                <div className="blog-content">
                  {/* Lead Paragraph */}
                  <div className="lead-box bg-white p-4 p-lg-5 rounded-4 shadow-sm mb-5">
                    <p className="lead fs-3 fst-italic text-dark">✨ The birthday I'll never forget – where strangers became my people, and mountains sang to my soul.</p>
                  </div>
                  
                  {/* Sections */}
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">🎈</span>
                      <span>The Beginning: A Birthday, A Wish</span>
                    </h2>
                    <p>I turned 24. Post-COVID years left me numb, so I didn't want a club night or cafe gathering. I wanted something different. Something that would feel.</p>
                    <p>So I booked a trip with my friends — a group trek to Chopta-Tungnath. We knew we'd be with strangers... about 14–16 of us. Honestly, I was nervous. What if we didn't vibe? But life turns different when you meet new people.</p>
                  </section>
                  
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">🌌</span>
                      <span>Night 0: The First Glimpse of Magic</span>
                    </h2>
                    <p>We boarded our tempo traveller from Delhi. Songs played softly, people dozed off — typical stuff. But around dawn, everything changed.</p>
                    <p>Through sleepy eyes, we all looked out to see Devprayag, the sacred Sangam where the Alaknanda and Bhagirathi meet to form the Ganga.</p>
                    <p>Right there — we finally looked at each other for real. The journey had begun.</p>
                    <div className="quote-box bg-light p-4 rounded-3 my-4 border-start border-4 border-primary">
                      <p className="mb-0 fst-italic">"Someone became our DJ. Another – assistant DJ. We vibed to every song until '🎵 Gela Gela' came on. Even our driver bhaiya shouted when someone tried to change it — his shoulders grooving with the beat..."</p>
                    </div>
                  </section>
                  
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">🌲</span>
                      <span>Day 1: Deoriatal Trek – Nature's First Hug</span>
                    </h2>
                    <p>After breakfast, we did a short trek to Deoriatal – a stunning lake nestled at ~8000 ft.</p>
                    <p>It's believed that the Devas (gods) bathed here, and the lake reflects Chaukhamba peaks when clear.</p>
                    <p>The 4-5 km trail was forested, with sun rays peeking between pines. On the way, we clicked silly photos – sitting on trees, lying on stones, posing like explorers.</p>
                    <div className="row g-3 my-4">
                      <div className="col-md-6">
                        <img src="assets/img/blog10.jpg" alt="Deoriatal trek" className="img-fluid rounded-3"  style={{height:'500px',width:'100%'}}/>
                      </div>
                      <div className="col-md-6">
                        <img src="assets/img/blog11.jpg" alt="Group photo" className="img-fluid rounded-3"  style={{height:'500px',width:'100%'}} />
                      </div>
                    </div>
                    <p>I remember this group of cousins — full of laughter, sharing snacks. Their energy lit up the whole trip.</p>
                  </section>
                  
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">🔥</span>
                      <span>Bonfire Night</span>
                    </h2>
                    <p>That night, under stars, around a fire, we opened up. Shayari flowed. Laughter echoed. Teasing turned into bonding. It wasn't even my birthday yet, but I already felt gifted.</p>
                  </section>
                  
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">🛕</span>
                      <span>Day 2: The Divine Trek – Tungnath & Chandrashila</span>
                    </h2>
                    <p>Early next day, we geared up for the main trek.</p>
                    <p>Tungnath Temple is the highest Shiva temple in the world, part of the Panch Kedar, built by the Pandavas as a penance for killing their kin in the Mahabharata war.</p>
                    <p>We all were trekking the first time, talking and sometimes just enjoying our own thoughts, that's the thing about treks, you get to get lost in your thoughts or sometimes just thoughtless just looking at the top pushing ourselves to reach there.</p>
                    <p>At 12,000 ft, the aura is ancient, sacred. Though closed due to astrological shifts, we stood before it in reverence.</p>
                    <p>Then came Chandrashila Peak — 13,200 ft. The real challenge.</p>
                    <p>Slippery snow patches, steep ascents, and no signals. But also — peace, adrenaline, laughter, snow, and soul.</p>
                    <div className="quote-box bg-light p-4 rounded-3 my-4 border-start border-4 border-primary">
                      <p className="mb-0 fst-italic">"It started snowing gently as we reached the summit. We screamed: ☁ 'Badal pe paav hai, yeh chhota gaav hai!'"</p>
                    </div>
                    <p>It was breathtaking. It was one of those rare moments you don't just see — you feel it. You feel it in your bones, like And your soul? It steps out for a second, just to take it all in. That's when you know and your heart quietly says, "Yes, you made it."</p>
                  </section>
                  
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">⚠</span>
                      <span>The Descent – A Test of Nerves</span>
                    </h2>
                    <p>Coming down was wild.</p>
                    <p>One patch was iced over and dangerously slippery. Our trek leader showed us a detour — but it included a narrow ledge with a 2-foot wide path and a steep fall on the side (literally Khai)</p>
                    <div className="alert alert-warning my-4">
                      <p className="mb-0 fw-bold">"I looked down once and i never in the life said this but at that time i felt it, 'Gaand fatt gayi!'"</p>
                    </div>
                    <p>I chose to jump. Safely 😄 My legs wobbled, but I made it.</p>
                    <p>Others slid, slipped, helped each other. It was wild, messy, human.</p>
                  </section>
                  
                  <section className="blog-section mb-5">
                    <h2 className="section-title mb-4 d-flex align-items-center">
                      <span className="emoji me-3">🏡</span>
                      <span>The Birthday Night – And The Best One Yet</span>
                    </h2>
                    <p>Back at our cozy mountain cabins, we freshened up. Bonfire lit again.</p>
                    <p>At midnight – 🎂 my birthday. Cake was cut. Non-dancers were pulled into dance.</p>
                    <p>We danced like mad — Haryanvi, Bollywood, Naggin dance — until we dropped.</p>
                    <p>I didn't feel pressure to celebrate. I felt peace. I felt home.</p>
                    <p>With people I met just two days ago. And now, they were my people.</p>
                    <p>We still talk. Still plan trips. Most never happen.</p>
                    <p>But that one? That one was enough for a lifetime.</p>
                    <div className="quote-box bg-light p-4 rounded-3 my-4 border-start border-4 border-primary">
                      <p className="mb-0 fst-italic">"The trip about which i was full of doubts, turned out to be the best one yet, made me fell in love with mountains, the heights and the courage to go out of comfort zone because that's when you live your life."</p>
                    </div>
                  </section>
                  
                  {/* Itinerary */}
                  <div className="itinerary-box mt-5 p-4 p-lg-5 bg-white rounded-4 shadow-sm">
                    <h3 className="mb-4 text-center fw-bold">📍 Creative Itinerary</h3>
                    <div className="timeline">
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">1</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🚍 Delhi</h5>
                          <p className="text-muted mb-0">Starting point of our adventure</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">2</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🕉 Haridwar</h5>
                          <p className="text-muted mb-0">Spiritual town on Ganga banks</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">3</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🧘‍♂ Rishikesh</h5>
                          <p className="text-muted mb-0">Yoga Capital of the World</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">4</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🌊 Devprayag</h5>
                          <p className="text-muted mb-0">Alaknanda + Bhagirathi = Ganga</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">5</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🏔 Chopta</h5>
                          <p className="text-muted mb-0">Mini Switzerland of India</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">6</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🥾 Deoriatal Trek</h5>
                          <p className="text-muted mb-0">Forest trail to sacred lake</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">7</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">🙏 Tungnath Temple</h5>
                          <p className="text-muted mb-0">World's highest Shiva temple at 12,000 ft</p>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-badge bg-primary text-white">8</div>
                        <div className="timeline-content">
                          <h5 className="fw-bold">❄ Chandrashila Peak</h5>
                          <p className="text-muted mb-0">Summit at 13,200 ft with panoramic views</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Conclusion */}
                  <div className="conclusion-box mt-5 p-4 p-lg-5 bg-gradient-primary text-white rounded-4 shadow">
                    <div className="d-flex align-items-start">
                      <span className="emoji me-3 fs-1">💚</span>
                      <div>
                        <h3 className="mb-3">Final Thoughts</h3>
                        <p className="mb-0 lead">If you're ever stuck in life, take a trek. It won't fix everything — but it'll fix your soul a little.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </> 
  )
}

export default Blog