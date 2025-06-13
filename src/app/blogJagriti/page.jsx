import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Mukteshwar() {
  return (
    <>
      <Header/>
      <div className="mukteshwar-blog">

        {/* Hero Section */}
        <header className="mukteshwar-hero">
          <h1>🌄 The Trip That Changed Everything – From Strangers to Stories</h1>
          <p className="mukteshwar-subtitle">By someone who just booked the damn ticket.</p>
        </header>

        {/* Introduction */}
        <section className="mukteshwar-intro">
          <div className="mukteshwar-container">
            <p className="mukteshwar-lead">
              You know how sometimes life (and your friends’ calendars) just doesn’t align? That was me. Everyone was either busy adulting or in a completely different time zone of life. So one night, half out of frustration and half out of hope, I booked a trip to <strong>Mcleodganj–Triund</strong>. Solo. Or, as the cool kids now call it—a solo trip.
            </p>
            <p>
              I stepped onto the traveller van with a mix of anxiety and anticipation. There were couples, squads, solo travelers… and then there was me. Nervous, silent. That was until our driver played <strong>Gulabi Sharara</strong> and I, quite unexpectedly, found my first vibe-match of the trip. With the driver. Yup. No shame. Just vibes.
            </p>
            <p>
              Soon, I noticed our trip captain – full of energy, humor, and good company (his own friends came along too). The group was warm and slowly, the silence between strangers began to melt into laughter over songs and random chatter.
            </p>
            <p>
              When we reached <strong>Mcleodganj</strong>, it felt like walking into a living postcard — bustling local markets, prayer flags in the wind, and the calming rhythm of the monasteries. We wandered together, from shop to shrine to café. One place served the fluffiest carrot cake, but honestly, the real sweetness was in the smile of the guy at the counter — softer than the sponge and warmer than the sunset light streaming in.
            </p>
            <div className="mukteshwar-image-container">
              <img src="assets/img/images/jag1.jpg" alt="Local market in Mcleodganj" />
              {/* <p className="mukteshwar-image-caption">[IMAGE 1]</p> */}
            </div>
          </div>
        </section>

        {/* Day 1 Section */}
        <section className="mukteshwar-day mukteshwar-day1">
          <div className="mukteshwar-container">
            <h2>Day 1: Triund Trek</h2>
            <p>
              A 9 km hike to <strong>9350 ft</strong>. We passed rivers, pine-lined paths, sharp turns, and steeper climbs. After about 2 hours, we reached a midway peak where the wind whispered promises of a freezing night. Another two hours brought us to our campsite, but <strong>Triund</strong> itself was still an hour away. Half the group dropped anchor there. A few of us — stubborn and hopeful — kept going.
            </p>
            <blockquote className="mukteshwar-quote">
              “Maybe you don’t need to touch Triund peak… sometimes the spot you're standing on is already beautiful enough.”
            </blockquote>
            <p>
              It hit. And we stayed. Clicked pictures by a temple, befriended a mountain dog, and watched the sun begin its descent. On our way back, the dog walked alongside us like a silent protector. But I had a sudden problem—my sunglasses made me feel cool earlier, but now, without my normal specs, I could barely see. Enter: a girl from our group. She held my hand the entire way down. That moment? It cracked open something in me.
            </p>
            <blockquote className="mukteshwar-quote">
              “You can trust people. Some of them. Enough to hold your hand in the dark.”
            </blockquote>
            <div className="mukteshwar-image-container">
              <img src="assets/img/images/jag3.JPG" alt="Triund Trek" />
              {/* <p className="mukteshwar-image-caption">[IMAGE 2]</p> */}
            </div>
            <p>
              We reached the campsite as the sky turned deep blue and stars blinked awake. With 50+ tents and over 100 souls gathered, the wind sliced through every layer I wore (yes, I became the walking laundry of 5 jackets). I’ve been to 13,000 ft before, but this night at Triund? <strong>Coldest of my life</strong>.
            </p>
            <p>
              Then came the bonfire — one big flame, many frozen faces, and 30 minutes of shared warmth and unspoken joy. After that, it was into our tents, cocooned in socks, sleeping bags, and hope for warmth.
            </p>
          </div>
        </section>

        {/* Day 2 Section */}
        <section className="mukteshwar-day mukteshwar-day2">
          <div className="mukteshwar-container">
            <h2>Day 2: Tea Gardens & Realizations</h2>
            <p>
              The next morning brought tea, chatter, and a breathtaking descent that took only 2 hours. We ended the journey exploring Himalayan tea gardens and the underrated beauty of the <strong>Mcleodganj stadium</strong>. Between temple bells and chai, dogs and strangers-now-friends…
            </p>
            <p>
              I realized this wasn’t just a trip. It was a <strong>reset</strong>. A <strong>reminder</strong>. A really <strong>good decision</strong>.
            </p>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mukteshwar-conclusion">
          <div className="mukteshwar-container">
            <h2>✨ Final Thoughts</h2>
            <p>
              This wasn’t just about mountains or carrot cakes. It was about human connection, the kind that happens when you least expect it. It’s about holding hands in the dark — metaphorically and literally.
            </p>
            <p>
              I came back with stories, smiles, and the warm truth that strangers can turn into something more — sometimes even into friends.
            </p>
            <p className="mukteshwar-signature">— Jagriti</p>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Mukteshwar;
