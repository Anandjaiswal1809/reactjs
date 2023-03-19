import React  from "react";

import "../assets/scss/Promise.scss";
import "../assets/scss/global/_common.scss";

import proimg1 from "../assets/img/pro-img1.png";
import picon1 from "../assets/img/pro-icon1.png";
import picon2 from "../assets/img/pro-img2.png";
import pcon1 from "../assets/img/pro-icon1.png";
import proimg3 from "../assets/img/pro-img3.png";








function Promise(){
    return<div className="bg">
    <section className="promise">
        <div className="container">
            <div className="main-title">Our promise to you</div>
            <div className="main-title-detail mb-80">
                <div>We believe that everyone has the right to good health and</div>
                <div>we’re dedicated to providing a safe, secure service.</div>
            </div>

          

            <div className="promise-content">
                <div className="pro1">
                    <img src={proimg1} />
                </div>
                <div className="pro1">
                    <div className="text-center w-330">
                        <img src={picon1} className="pro-icon"/>
                        <div className="pro-title">You’re in safe hands</div>
                        <div className="pro-details">We’re committed to safeguarding any medical information you share.
                        </div>
                    </div>
                </div>
            </div>

            <div className="promise-content">
                <div className="pro1">
                    <img src={picon2} className="pro-icon"/>
                </div>
                <div className="pro1">
                    <div className="text-center w-330">
                        <img src={pcon1} className="pro-icon"/>
                        <div className="pro-title">You’re in safe hands</div>
                        <div className="pro-details">We’re committed to safeguarding any medical information you share.
                        </div>
                    </div>
                </div>
            </div>

            <div className="promise-content">
                <div className="pro1">
                <img src={proimg3} className="pro-icon"/>
                    {/* <img src="img/pro-img3.png"> */}
                </div>
                <div className="pro1">
                    <div className="text-center w-330">
                    <img src={pcon1} className="pro-icon"/>
                        {/* <img src="img/pro-icon1.png" className="pro-icon"> */}
                        <div className="pro-title">You’re in safe hands</div>
                        <div className="pro-details">We’re committed to safeguarding any medical information you share.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
}

export default Promise