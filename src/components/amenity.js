import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { graphql, useStaticQuery } from 'gatsby'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const AmenityCarousel = () => {

  
  SwiperCore.use([Navigation, Pagination]);

  const data = useStaticQuery(
    graphql`
      query{
        allFile(filter: {name: {regex: "/amenity/"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData
                original {
                  src
                }
              }
            }
          }
        }
      }
    `
  )

  return(
    <>    
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className='swiper'
            tag='section'
          >

          {
            data.allFile.edges.map(({node}, i) => (

              <SwiperSlide tag='span' key={i}> 
                <img src={node.childImageSharp.original.src} alt='amenity' className='amenity-size'/>
              </SwiperSlide>
              )
            )
          }

          </Swiper>
    
    </>
  )
}

export default AmenityCarousel;