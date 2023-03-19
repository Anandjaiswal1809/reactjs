import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/Health.scss";

import maleh from "../assets/img/male-h.png";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <div className="treament-section">
            
            <div className="container">
            <div className="main-title">Health in your hands</div>
            <div className="main-title-detail">
                <div>Care when you need it.</div>
                <div>Treatment when you want it.</div>
            </div>
                <Slider {...settings}>
                    <div>
                        <img src={maleh} className="img-health"/>
                        <div className="health-title">Male health</div>
                        <div className="health-details">
                            We provide treatments for hair loss, erectile dysfunction, and premature ejaculation.
                        </div>
                        <a href="#" tabindex="0">See treatments</a>
                    </div>

                    <div>
                        <img src={maleh} className="img-health"/>
                        <div className="health-title">Male health</div>
                        <div className="health-details">
                            We provide treatments for hair loss, erectile dysfunction, and premature ejaculation.
                        </div>
                        <a href="#" tabindex="0">See treatments</a>
                    </div>

                    <div>
                        <img src={maleh} className="img-health"/>
                        <div className="health-title">Male health</div>
                        <div className="health-details">
                            We provide treatments for hair loss, erectile dysfunction, and premature ejaculation.
                        </div>
                        <a href="#" tabindex="0">See treatments</a>
                    </div>

                    <div>
                        <img src={maleh} className="img-health"/>
                        <div className="health-title">Male health</div>
                        <div className="health-details">
                            We provide treatments for hair loss, erectile dysfunction, and premature ejaculation.
                        </div>
                        <a href="#" tabindex="0">See treatments</a>
                    </div>

                    <div>
                        <img src={maleh} className="img-health"/>
                        <div className="health-title">Male health</div>
                        <div className="health-details">
                            We provide treatments for hair loss, erectile dysfunction, and premature ejaculation.
                        </div>
                        <a href="#" tabindex="0">See treatments</a>
                    </div>

                    <div>
                        <img src={maleh} className="img-health"/>
                        <div className="health-title">Male health</div>
                        <div className="health-details">
                            We provide treatments for hair loss, erectile dysfunction, and premature ejaculation.
                        </div>
                        <a href="#" tabindex="0">See treatments</a>
                    </div>
                </Slider>
            </div>
        </div>
    );
  }
}