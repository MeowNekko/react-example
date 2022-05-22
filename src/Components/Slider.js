import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import {CarouselItem} from "react-bootstrap";
import slide1 from "../assets/Slider/slide-1.jpeg";
import slide2 from "../assets/Slider/slide-2.gif";

class Slider extends Component {
    render() {
        return (
            <Carousel>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="slide1"
                    />
                    <Carousel.Caption>
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="slide2"
                    />
                    <Carousel.Caption>
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default Slider;
