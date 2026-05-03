import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import '../styles/index.scss'
import UnitCarousel from '../components/unit'
import AmenityCarousel from '../components/amenity'
import Seo from "../components/seo"

const IndexPage = () => {
  const [navToggle, setNavToggle] = useState(false)
  const [navScroll, setNavScroll] = useState(false)
  const [val, setVal] = useState({ name: '', number: '', email: '' })

  const navStyle = { top: navToggle ? '0' : '-100rem' }
  const navAnim = () => setNavToggle(p => !p)
  const handleChange = field => e => setVal(prev => ({ ...prev, [field]: e.target.value }))

  useEffect(() => {
    const onScroll = () => setNavScroll(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.anim').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Helmet><meta charSet='utf-8' /><title>Sands Residences — SMDC</title></Helmet>
      <Seo title="Sands Residences" author='Brian Rienz Erjas' lang='en' />

      {/* ── Header ─────────────────────────────────────────── */}
      <header id='header' className={navScroll ? 'header_bg' : ''}>
        <StaticImage src="../images/SMDC-Logo.png" width={120} quality={100}
          formats={["AUTO","WEBP","AVIF"]} alt="SMDC Logo" />

        <button onClick={navAnim} className='navToggle' aria-label="Toggle navigation" />

        <nav style={navStyle}>
          <Link to='#banner'     className='text' onClick={navAnim}>Home</Link>
          <Link to='#about'      className='text' onClick={navAnim}>About</Link>
          <Link to='#lifestyle'  className='text' onClick={navAnim}>Lifestyle</Link>
          <Link to='#brochure'   className='text' onClick={navAnim}>Overview</Link>
          <Link to='#details'    className='text' onClick={navAnim}>Details</Link>
          <Link to='#location'   className='text' onClick={navAnim}>Location</Link>
          <Link to='#contact-us' className='text' id='contact' onClick={navAnim}>Contact</Link>
        </nav>

        <Link to='#contact-us' id='contact_us' className='text'>Inquire Now</Link>
      </header>

      {/* ── Banner (hero — style maintained, Sands facade image) ─── */}
      <section id='banner'>
        <div className='banner_title'>
          <span className='eyebrow'>SMDC Sands Residences</span>
          <h1>Sands<br />Residences</h1>
          <span className='title-accent' />
          <p>M.H. Del Pilar St., Malate, Manila</p>
        </div>

        <div className='banner_img'>
          <div className='grad'></div>
          <div></div>
          <div></div>
          <div className='white'></div>
          <div></div>
          <div></div>
          <div className='grad'></div>
          <div></div>
          <div></div>
        </div>

        <div className='scroll-indicator'>
          <span>Scroll</span>
          <div className='scroll-line'></div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────── */}
      <section id='about'>
        <div className='about-inner anim'>

          <div className='about-header'>
            <span className='section-num'>01</span>
            <span className='eyebrow'>About the Project</span>
            <h2>Manila's Most Coveted<br /><em>Waterfront Address</em></h2>
            <p className='about-lead'>
              Sands Residences is a landmark 51-storey residential tower by SM Development Corporation,
              rising at the heart of Malate, Manila — where the city's vibrant energy meets the timeless
              serenity of Manila Bay. Designed for those who refuse to compromise, every detail speaks
              of enduring luxury and metropolitan sophistication.
            </p>
          </div>

          <div className='stats-row'>
            <div className='stat-item'>
              <span className='stat-number'>51</span>
              <span className='stat-label'>Floors</span>
            </div>
            <div className='stat-divider' />
            <div className='stat-item'>
              <span className='stat-number'>7</span>
              <span className='stat-label'>Unit Types</span>
            </div>
            <div className='stat-divider' />
            <div className='stat-item'>
              <span className='stat-number'>16</span>
              <span className='stat-label'>Amenities</span>
            </div>
            <div className='stat-divider' />
            <div className='stat-item'>
              <span className='stat-number'>0<small>m</small></span>
              <span className='stat-label'>From Manila Bay</span>
            </div>
          </div>

          <div className='feature-grid'>
            <div className='feature-item'>
              <div className='feature-icon'>&#9679;</div>
              <h4>Prime Bayside Location</h4>
              <p>Situated steps from Manila Bay, offering breathtaking sunset views and direct access to the city's most iconic waterfront promenade.</p>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'>&#9679;</div>
              <h4>World-Class Amenities</h4>
              <p>From the resort-style lap pool to the Sky Lounge and Celebration Hall, every amenity is crafted to elevate your everyday living experience.</p>
            </div>
            <div className='feature-item'>
              <div className='feature-icon'>&#9679;</div>
              <h4>Master-Planned Community</h4>
              <p>A thoughtfully designed vertical community that integrates residential comfort, lifestyle convenience, and urban connectivity in one iconic address.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Lifestyle ──────────────────────────────────────── */}
      <section id='lifestyle'>
        <div className='lifestyle-inner'>

          <div className='lifestyle-header anim'>
            <span className='section-num'>02</span>
            <span className='eyebrow'>The Sands Lifestyle</span>
            <h2>More Than a Home —<br /><em>A Way of Life</em></h2>
          </div>

          <div className='lifestyle-grid'>
            <div className='lcard anim'>
              <div className='lcard-num'>01</div>
              <h4>Panoramic Bay Views</h4>
              <p>Wake up to Manila Bay's legendary sunsets from floor-to-ceiling windows designed to frame the city's most breathtaking panoramas every single day.</p>
            </div>
            <div className='lcard anim'>
              <div className='lcard-num'>02</div>
              <h4>Resort-Style Living</h4>
              <p>A curated collection of amenities — lap pools, sky lounge, and a state-of-the-art fitness center — that transforms everyday moments into a luxury retreat.</p>
            </div>
            <div className='lcard anim'>
              <div className='lcard-num'>03</div>
              <h4>Urban Connectivity</h4>
              <p>Steps from SM Mall of Manila, major thoroughfares, fine dining, and Malate's vibrant cultural district — everything the city has to offer is your backyard.</p>
            </div>
            <div className='lcard anim'>
              <div className='lcard-num'>04</div>
              <h4>Sound Investment</h4>
              <p>Preselling units in one of Manila's most coveted bay addresses, backed by SMDC's three decades of trusted, award-winning property development excellence.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Brochure ──────────────────────────────────────── */}
      <section id='brochure'>
        <div className='brochure_img'></div>

        <div className='brochure_text anim'>
          <span className='section-num small'>03</span>
          <span className='eyebrow'>Discover Sands</span>
          <h2>— A Bayside Home<br />in the Heart of the City</h2>
          <p>
            Nestled along the celebrated Manila Bay shoreline, Sands Residences redefines what it means
            to live at the center of everything. Enjoy panoramic bay views, world-class dining, cultural
            landmarks, and the Manila sunset — all from the comfort of your own sanctuary.
          </p>
          <p className='brochure-detail'>
            Developed by <strong>SM Development Corporation</strong>, one of the Philippines' most trusted
            and respected property developers with over three decades of excellence.
          </p>
          <a href='https://www.flipsnack.com/SMDCMarketing/sands-residences-brochure/full-view.html'>
            Download Brochure
          </a>
        </div>

        <h1>— PRESELLING —</h1>
      </section>

      {/* ── Details ────────────────────────────────────────── */}
      <section id='details'>

        <div className='section-header-inline'>
          <span className='section-num'>04</span>
          <span className='eyebrow'>Residences &amp; Amenities</span>
        </div>

        <div className='units'>
          <ul className="unit-type">
            <h1>Unit Types</h1>
            <li>Studio</li>
            <li>1-Bedroom Unit</li>
            <li>1-Bedroom Unit with Balcony</li>
            <li>1-Bedroom End Unit</li>
            <li>1-Bedroom End Unit with Balcony</li>
            <li>2-Bedroom Unit</li>
            <li>2-Bedroom End Unit</li>
          </ul>
          <UnitCarousel />
        </div>

        <div className='amenity'>
          <ul className="amenities">
            <h1>Amenities</h1>
            <li>Lap Pool</li>
            <li>Kiddie Pool</li>
            <li>Sunset Lounge</li>
            <li>Fitness Gym</li>
            <li>Grand Lobby</li>
            <li>Sunset Lanai</li>
            <li>Celebration Hall</li>
          </ul>
          <AmenityCarousel />
        </div>

        <div className='price'>
          <h3>Investment Range</h3>
          <h1>&#8369; 5,900,000 &ndash; &#8369; 12,600,000</h1>
          <p className='price-note'>Prices subject to change without prior notice. Contact us for the latest pricing and available units.</p>
        </div>

      </section>

      {/* ── Location ───────────────────────────────────────── */}
      <section id='location'>
        <div className='location-left anim'>
          <span className='section-num'>05</span>
          <span className='eyebrow'>Where You Live</span>
          <h2>Malate,<br />Manila</h2>
          <span className='title-accent' />
          <p className='loc-desc'>
            Positioned at the crossroads of heritage and progress, Malate is Manila's most storied
            district — home to embassies, cultural institutions, and the legendary Manila Bay sunset.
            Everything you need is within reach.
          </p>
          <p className='loc-address'>M.H. Del Pilar St., Malate, Manila, Philippines</p>
        </div>

        <div className='location-right'>
          <div className='nearby-list'>
            <h3 className='nearby-title'>Nearby Landmarks</h3>
            <div className='nearby-item'>
              <span className='nearby-name'>Manila Bay Waterfront</span>
              <span className='nearby-dist'>Steps Away</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>SM Mall of Manila</span>
              <span className='nearby-dist'>5 min walk</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>Bangko Sentral ng Pilipinas</span>
              <span className='nearby-dist'>Adjacent</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>Rizal Park (Luneta)</span>
              <span className='nearby-dist'>8 min drive</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>Cultural Center of the Philippines</span>
              <span className='nearby-dist'>10 min drive</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>Manila Ocean Park</span>
              <span className='nearby-dist'>10 min drive</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>Intramuros</span>
              <span className='nearby-dist'>12 min drive</span>
            </div>
            <div className='nearby-item'>
              <span className='nearby-name'>NAIA International Airport</span>
              <span className='nearby-dist'>20 min drive</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────── */}
      <section id='contact-us'>
        <form id="form-container" action="#">
          <span className='section-num small'>06</span>
          <h1>Reserve a Unit</h1>
          <p className="form-sub">Speak with one of our property consultants and secure your place at Manila Bay.</p>

          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" placeholder="Your full name"
            value={val.name} onChange={handleChange('name')} required />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" placeholder="you@example.com"
            value={val.email} onChange={handleChange('email')} required />

          <label htmlFor="number">Mobile Number</label>
          <div className="mobile_number">
            <div className="default_number">+63</div>
            <input type="number" name="number" id="number" placeholder="9XX XXX XXXX"
              value={val.number} onChange={handleChange('number')} required />
          </div>

          <input type="submit" value="SEND INQUIRY" id="submit" />
        </form>

        <div className="video-container">
          <iframe className='wh-vid'
            src="https://www.youtube.com/embed/RsUymX_MA3M"
            title="Sands Residences by SMDC"
            frameBorder="0" allowFullScreen />
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer>
        <div className='footer-brand'>
          <StaticImage src="../images/SMDC-Logo.png" width={100} quality={100}
            formats={["AUTO","WEBP","AVIF"]} alt="SMDC Logo" />
          <p className='footer-tagline'>A project by SM Development Corporation</p>
        </div>

        <div className='footer-links'>
          <Link to='#banner'     className='footer-link'>Home</Link>
          <Link to='#about'      className='footer-link'>About</Link>
          <Link to='#lifestyle'  className='footer-link'>Lifestyle</Link>
          <Link to='#details'    className='footer-link'>Details</Link>
          <Link to='#location'   className='footer-link'>Location</Link>
          <Link to='#contact-us' className='footer-link'>Contact</Link>
        </div>

        <div className='footer-info'>
          <p>M.H. Del Pilar St., Malate, Manila</p>
          <p>&#169; {new Date().getFullYear()} SMDC Sands Residences. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage
