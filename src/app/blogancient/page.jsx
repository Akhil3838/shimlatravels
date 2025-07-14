import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Mukteshwar() {
  return (
    <>
      <Header />
      <div className="mukteshwar-blog">

        {/* Hero Section */}
        <header className="mukteshwar-hero">
          <h1>🏞️ Har Ki Dun – Trekking Through Clouds, Valleys & Ancient Trails</h1>
          <p className="mukteshwar-subtitle">March 25</p>
        </header>

        {/* Introduction */}
        <section className="mukteshwar-intro">
          <div className="mukteshwar-container">
            <p className="mukteshwar-lead">
              Some treks are more than just hikes — they leave an imprint on your soul. Har Ki Dun was one such journey. Ancient villages, snow-capped peaks, starlit nights… and that one moment when clouds passed through us — it felt like we were walking inside a dream.
            </p>

            <h2>📅 Day 0 – Leaving Delhi Behind</h2>
            <p>
              We left Delhi late at night, backpacks loaded, hearts full of anticipation. The journey ahead was long, but the idea of being in the mountains again made every mile exciting.
            </p>
          </div>
        </section>

        {/* Day 1 */}
        <section className="mukteshwar-day mukteshwar-day1">
          <div className="mukteshwar-container">
            <h2>🥾 Day 1 – Sankri to Dhatmeer via Gangarh (~10 km)</h2>
            <p>
              By noon, we reached Sankri, a small but scenic village surrounded by tall pine trees. From there, we began our first day’s trek, heading toward Dhatmeer village.
            </p>
            <p>
              We stopped to offer prayers at an ancient temple, tucked inside the village — simple, quiet, and full of character. Along the trail, clouds rolled in low and passed through us — a surreal, goosebump-inducing moment I won’t forget.
            </p>
            <p>
              We reached Gangarh, where we camped next to a flowing river. As night fell, the sky cleared to reveal a stunning blanket of stars — one of the most peaceful nights I’ve had in a long time.
            </p>
            <div className="mukteshwar-image-contain">
              <img src="assets/img/images/hurkidun1.jpg" alt="Sankri to Gangarh" />
              <img src="assets/img/images/hurkidun2.jpg" alt="Riverside camp" />
            </div>
          </div>
        </section>

        {/* Day 2 */}
        <section className="mukteshwar-day mukteshwar-day2">
          <div className="mukteshwar-container">
            <h2>🏞️ Day 2 – Gangarh to Seematra via Kalkatidhar (~7–12 km)</h2>
            <p>
              The trail took us through stretches of forest, past old mud houses, and quiet bends where time seemed to stand still. The air was cool, the path gentle, and midway, we caught our first view of snow peaks in the distance — the mighty Himalayas starting to show themselves.
            </p>
            <p>
              We reached Seematra campsite by late afternoon. That evening, we watched the moon rise slowly from behind the mountains, bathing the valley in silver light. It was quiet, almost cinematic.
            </p>
          </div>
        </section>

        {/* Day 3 */}
        <section className="mukteshwar-day mukteshwar-day2">
          <div className="mukteshwar-container">
            <h2>🌄 Day 3 – Har Ki Dun & Hatta Bugyal (~8 km roundtrip)</h2>
            <p>
              This was the day we had all been waiting for.
            </p>
            <p>
              We started early and made our way into the wide-open Har Ki Dun valley and up to Hatta Bugyal. It was picture-perfect — clear skies, soft green meadows, and snow peaks all around. We sat for a while by the riverbed, took photos, laughed, and simply took it all in.
            </p>
            <p>
              From there, we walked to a Shiv ji temple, offered our prayers, and had lunch with Swargrohini Peak towering above us. The serenity of the valley, the stillness, and the grandeur made it feel like a sacred space.
            </p>
            <p>
              Later, we made our way back to Seematra for the night, tired but glowing with joy.
            </p>
            <div className="mukteshwar-image-contain">
              <img src="assets/img/images/hurkidun3.jpg" alt="Har Ki Dun Valley" />
              <img src="assets/img/images/hurkidun4.jpg" alt="Hatta Bugyal" />
            </div>
          </div>
        </section>

        {/* Day 4 */}
        <section className="mukteshwar-day mukteshwar-day2">
          <div className="mukteshwar-container">
            <h2>🌸 Day 4 – Seematra to Dhatmeer via Osla (~18 km)</h2>
            <p>
              The return trek was long — 18 km in a single day — but filled with beauty at every turn. Valleys full of wildflowers, herds of sheep crossing our path, and quiet moments with fellow trekkers kept the energy up.
            </p>
            <p>
              We passed through the ancient village of Osla, believed to be over 5,000 years old. Though the temple there was closed, the old wooden homes and narrow lanes spoke volumes of history.
            </p>
            <p>
              We finally reached Dhatmeer by evening, feeling amazed that we had covered so much ground.
            </p>
          </div>
        </section>

        {/* Day 5 */}
        <section className="mukteshwar-day mukteshwar-day2">
          <div className="mukteshwar-container">
            <h2>☕ Day 5 – Wrapping Up & Heading Home</h2>
            <p>
              After a slow breakfast the next morning, we trekked back to Sankri and started the long drive back to Delhi. We were sore, sun-kissed, and slightly sad that it was over — but deeply content.
            </p>
          </div>
        </section>

        {/* Summary */}
        <section className="mukteshwar-conclusion">
          <div className="mukteshwar-container">
            <h3>📊 Trek Distance Summary</h3>
            <table className="table table-bordered text-center">
              <thead>
                <tr>
                  <th>🗓️ Day</th>
                  <th>🗺️ Route</th>
                  <th>🚶 Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Day 1</td>
                  <td>Sankri → Dhatmeer → Gangarh</td>
                  <td>~10 km</td>
                </tr>
                <tr>
                  <td>Day 2</td>
                  <td>Gangarh → Kalkatidhar → Seematra</td>
                  <td>~7–12 km</td>
                </tr>
                <tr>
                  <td>Day 3</td>
                  <td>Seematra → Har Ki Dun → Hatta Bugyal → Seematra</td>
                  <td>~8 km</td>
                </tr>
                <tr>
                  <td>Day 4</td>
                  <td>Seematra → Osla → Dhatmeer</td>
                  <td>~18 km</td>
                </tr>
                <tr>
                  <td>Day 5</td>
                  <td>Dhatmeer → Sankri → Delhi</td>
                  <td>–</td>
                </tr>
              </tbody>
            </table>

           <div className="mukteshwar-ranges">
  <div className="mukteshwar-range-card">
    <ul>
      <li className='text-start'>✅ <span className='fw-bolder'>Layer up</span> – mornings and nights can be chilly</li>
      <li className='text-start'>✅ <span className='fw-bolder'>Hydration is key</span> – even on cooler days</li>
      <li className='text-start'>✅ <span className='fw-bolder'>Keep your pace relaxed</span> – soak in the beauty</li>
      <li className='text-start'>✅ <span className='fw-bolder'>Camera or not</span> – pause to just see</li>
      <li className='text-start'>✅ <span className='fw-bolder'>Respect the culture</span> – villages like Osla are living heritage</li>
    </ul>
  </div>
</div>


            <h3>💭 Final Thoughts</h3>
            <p>
              Har Ki Dun felt like a journey back in time — where nature leads and you simply follow. From clouds wrapping around you to stars lighting up the night sky, from whispers of old temples to the joy of walking through blooming meadows — every moment felt real, slow, and meaningful.
            </p>
            <p>
              If you're looking for a trek that’s not just scenic but soulful — this is it.
            </p>
            <p className="mukteshwar-signature text-end">— Iti</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Mukteshwar;
