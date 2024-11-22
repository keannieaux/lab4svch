import React from 'react';
import SliderBlock from '../SliderComponent/SliderBlock';
import './MainContent.css';
import sliderData from '../../data/data.json'; // Adjusted path to your JSON file
import { Carousel } from 'react-bootstrap';
function MainContent () {
    return (
        <main>
            <div className="block-trending">
                <div className="block-trending1">
                    <div className="block-trending2">
                        <div className="text-trending">
                            <p className="dm-sansFont text-trending1">Trending</p>
                        </div>
                        <p className="poppinsFont text-trending2">The Most Popular Courses</p>
                        <p className="dm-sansFont text-trending3">Lorem ipsum dolor sit amet</p>
                    </div>
                    <Carousel>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="../../images/pc.svg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../images/pc.svg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../../images/pc.svg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
