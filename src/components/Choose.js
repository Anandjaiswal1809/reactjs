import React  from "react";

import "../assets/scss/Choose.scss";
import "../assets/scss/global/_common.scss";

import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";

function Choose(){
    return<div className="choose">
    <div className="container">
        <div className="main-title">Choose how you do healthcare</div>
        <div className="main-title-detail">
            <div>Skip the hassle and awkward waiting rooms.</div>
            <div>Get access to what you need, when you need it</div>
        </div>
        <div className="choose-how">
            <div className="choose-item">
                <div className="choose-item-box">
                <img src={icon1} />
                   
                </div>
                <div className="choose-details">
                    <div className="item-title">Find your treatment</div>
                    <div className="s-details">Find the right treatment or medication for you</div>
                </div>
            </div>
            <div className="choose-item">
                <div className="choose-item-box">
                <img src={icon2} />
                    {/* <img src="img/icon2.png"> */}
                </div>
                <div className="choose-details">
                    <div className="item-title">Discuss your options</div>
                    <div className="s-details">We'll advise on your options so you can make an informed decision
                    </div>
                </div>
            </div>
            <div className="choose-item">
                <div className="choose-item-box">
                <img src={icon3} />
                    {/* <img src="img/icon3.png"> */}
                </div>
                <div className="choose-details">
                    <div className="item-title">Get it the next day</div>
                    <div className="s-details">Receive your medication quickly and easily with 24hr next day
                        delivery
                    </div>
                </div>
            </div>
            <div className="choose-item">
                <div className="choose-item-box">
                <img src={icon4} />
                    {/* <img src="img/icon4.png"> */}
                </div>
                <div className="choose-details">
                    <div className="item-title">Repeat</div>
                    <div className="s-details">We’ve got your repeat order covered whenever you need it</div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default Choose