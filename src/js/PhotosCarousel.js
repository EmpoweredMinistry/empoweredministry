import React, { Component } from 'react';
import PropTypes from 'prop-types'
import carouselImgPath from './assets/carousel.png';
import {Carousel} from 'react-bootstrap';

class PhotosCarousel extends Component {
  render() {
    let {index, direction, handleSelect} = this.props;
    console.log(direction)
    return (
      <div style={{padding: "0px 200px 0px 200px"}}>
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={carouselImgPath}/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={carouselImgPath}/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={carouselImgPath}/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

PhotosCarousel.propTypes = {
  index: PropTypes.number.isRequired, 
  direction: PropTypes.string,
  handleSelect: PropTypes.func.isRequired
};

export default PhotosCarousel;
