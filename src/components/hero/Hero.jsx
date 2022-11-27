import React from 'react'
import './Hero.css'
import { Carousel } from 'react-bootstrap';

import art1 from '../../assets/art1.jpeg'
import art2 from '../../assets/art2.jpeg'
import art3 from '../../assets/art3.jpeg'
import art4 from '../../assets/art4.jpeg'
import art5 from '../../assets/art5.jpeg'
import art6 from '../../assets/art6.jpeg'
import art7 from '../../assets/art7.jpeg'
import art8 from '../../assets/art8.jpeg'
import art9 from '../../assets/art9.jpeg'


const Hero = () => {
        return (
          <>
          <Carousel>
          <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art2}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={art3}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={art4}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art5}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art6}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art7}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art8}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 img-item"
                src={art9}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
          </>
      
        )
      }
      
      export default Hero