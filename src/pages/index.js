import React, {useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import '../styles/index.scss'
import UnitCarousel from '../components/unit' 
import AmenityCarousel from '../components/amenity'

import Seo from "../components/seo"

const IndexPage = () => {

  const [navToggle, setNavToggle] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  const [val, setVal] = useState({
    name:'',
    number: '',
    email:''
  })


  const style = {
    top: navToggle ? '0' : '-100rem'
  }

  const navAnim = () => {
    setNavToggle(!navToggle)
  }

  window.addEventListener('scroll',() => {

    const height = window.scrollY;

    if( height > 10 ) setNavScroll(true)
    else setNavScroll(false)
  })

  return(

    <>

      <Helmet>
        <meta charSet='utf-8' />
        <title> Sands Residences </title>
      </Helmet>
    
      <Seo title="Sands Residences" author='Brian Rienz Erjas' lang='en'/>

      <header id='header' className={`${navScroll ? 'header_bg' : ''}`}>
        
        <StaticImage
          src="../images/SMDC-Logo.png"
          width={150}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="SMDC Logo"
        />

        <button 
          onClick={ navAnim }
          className='navToggle'
        >
        </button>

        <nav style={ style }>

          <Link to='#banner' 
            className='text'
            onClick={ navAnim }
          > 
          - Banner -
          </Link>
        
          <Link to='#brochure' 
            className='text'
            onClick={ navAnim }
          > 
          - Brochure - 
          </Link>
          
          <Link to='#details' 
            className='text'
            onClick={ navAnim }  
          > 
          - Details -
          </Link> 
          
          <Link to='#contact-us' 
            id='contact' 
            className='text' 
            onClick={ navAnim }
          >
          - Contact us -
          </Link>
        
        </nav>

        
        <Link to='#contact-us' id='contact_us' className='text'> 
          Contact us 
        </Link>

      </header>

      <section id='banner'>

          <div className='banner_title'>
              <h1>
                  Sand Residences
              </h1>
              <p >
                  <span role='img' aria-label='target-location'> &#127919; </span> M.H. Del Pilar St., Malate, Manila
              </p>
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
      </section>

      <section id='brochure'>
        <div className='brochure_img'></div>

        <div className='brochure_text'>
          <h2>
              — bayside home in the city
          </h2>
          <p>
              Welcome to Sands Residences. A luxurious, 51-floor master-planned community by Manila Bay where the sun and sand amidst 
              a sea of luxury await you. Luxury living by the bay. Live where the city’s gateway, entertainment, culture, and the Manila 
              Bay sunset is just a heartbeat away. 
          </p>

          <a href='https://www.flipsnack.com/SMDCMarketing/sands-residences-brochure/full-view.html'>
            brochure
          </a>
        </div>

        <h1>
          - PRESELLING -
        </h1>

      </section>

      <section id='details'>
        
        <div className='units'>

          {/* Unit types */}
          <ul className="unit-type">
            <h1>
                Unit Type
            </h1>

            <li>
                Studio
            </li>

            <li>
                1-Bedroom Unit
            </li>

            <li>
                1-Bedroom Unit with Balcony
            </li>

            <li>
                1-Bedroom End Unit
            </li>

            <li>
                1-Bedroom End Unit with Balcony
            </li>

            <li>
                2-Bedroom Unit
            </li>

            <li>
                2-Bedroom End Unit
            </li>
          </ul>

          {/* Unit Types Carousel */}
          <UnitCarousel/>

        </div>

        <div className='amenity'>
          
          {/* Amenities */}
          <ul className="amenities">
                    
              <h1>
                  Amenities
              </h1>

              <li>
                  Lap Pool
              </li>

              <li>
                  Kiddie Pool
              </li>
              
              <li>
                  Sunset Lounge
              </li>

              <li>
                  Fitness Gym
              </li>

              <li>
                  Grand Lobby
              </li>
              
              <li>
                  Sunset Lanai
              </li>
              
              <li>
                  Celebration Hall
              </li>
          </ul>

          {/* Amenities Carousel */}
          <AmenityCarousel/>

        </div>

        <div className='price'>
          
          <h3>
              price range
          </h3>

          <h1>
              ₱ 5,900,000 - ₱ 12,600,000
          </h1>

        </div>

      </section>

      <section id='contact-us'>
        <form id="form-container" className="form-container" action="#">

          <h1>
              Reserve a unit now
          </h1>
          <p>
              Sign up and get the best quote!
          </p>

          <input type="text" 
              name="name" 
              placeholder="Your Name" 
              id="name"
              value={val.name}
              onChange={(e) => setVal({name: e.target.value})}
              required
          />


          <input type="email" 
              name="name"
              placeholder="Email"
              id="email"
              value={val.email}
              onChange={(e) => setVal({email: e.target.value})}
              required
          />

          
          <div className="mobile_number">

          <div className="default_number">
              <p>
                 <span role='img' aria-label="PH-flag"> &#x1F1F5;&#x1F1ED; </span> +63
              </p>
          </div>

          <input type="number" 
              name="number"
              id="number"
              placeholder="Mobile number"
              value={val.number}
              onChange={(e) => setVal({number: e.target.value})}
              required
          />

          </div>

          <input type="submit" value="SEND" id="submit"/>

          </form>

          <div className="video-container">
            <iframe className='wh-vid'
              src="https://www.youtube.com/embed/RsUymX_MA3M" 
              title="YouTube video player" frameBorder="0" 
              // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
              // picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

      </section>

    </>
  )
}
export default IndexPage