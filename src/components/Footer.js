import React from "react";

import "../assets/scss/components/_footer.scss";
import footerlogo from "../assets/img/logo-white.svg";

import NHS from "../assets/img/nhs.png";
import pharmacy from "../assets/img/pharmacy.png";
import Clogo from "../assets/img/CQC-logo.svg";




function Footer(){
    return <footer className="footer">
    <div className="container">

        <img src={footerlogo} alt="footer-logo" />
        <div className="choose-foot">Choose better</div>
    </div>
    <div className="container">
        {/* <!-- collapse--> */}
        <div className="accordion-container">
            <div className="accordion-block">
                <div>
                    <div className="custom-accordion-title">
                        <span className="title-text font-16px">Get in contact</span>
                        <i className="icon icon-angle-right"></i>
                    </div>
                </div>
                <div className="custom-accordion-content">
                    <div className="post_content">
                        <ul className="footer-menu">
                            <li><a href="#">0207 043 0716</a></li>
                            <li><a href="#">customercare@treated.com</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="accordion-block">
                <div>
                    <div className="custom-accordion-title">
                        <span className="title-text font-16px">Our treatments</span>
                        <i className="icon icon-angle-right"></i>
                    </div>
                </div>
                <div className="custom-accordion-content">
                    <div className="post_content">
                        <ul className="footer-menu">
                            <li><a href="#">Male health</a></li>
                            <li><a href="#">Female health</a></li>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Erectile dysfunction</a></li>
                            <li><a href="#">Hair loss</a></li>
                            <li><a href="#">Quit smoking</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="accordion-block">
                <div>
                    <div className="custom-accordion-title">
                        <span className="title-text font-16px">Our services</span>
                        <i className="icon icon-angle-right"></i>
                    </div>
                </div>
                <div className="custom-accordion-content">
                    <div className="post_content">
                        <ul className="footer-menu">
                            <li><a href="#">About Treated</a></li>
                            <li><a href="#">Buying medicine online safely</a></li>
                            <li><a href="#">NHS services we provide</a></li>
                            <li><a href="#">Our policies</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="accordion-block">
                <div>
                    <div className="custom-accordion-title">
                        <span className="title-text font-16px">Useful links</span>

                    </div>
                </div>
                <div className="custom-accordion-content">
                    <div className="post_content">
                        <ul className="footer-menu">
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Ask us a question</a></li>
                            <li><a href="#">Patient account</a></li>
                            <li><a href="#">Report a problem</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </div>

    <div className="container agreement-container">
        <div className="agreement">
            <div className="mb-10">HR Healthcare Ltd. Unit 18, Britannia Way, Waters Meeting, Bolton, BL2 2HH VAT: GB
                275 6735 64, GPhC:
                9010946</div>
            <div>This domain is licensed under an agreement with HR Healthcare Ltd.</div>
        </div>
        <div className="nhs">
            <div>
            <img src={NHS} alt="NHS" />
            <img src={pharmacy} alt="pharmacy" className="float-right mt-25"/>
            </div>
            <div className="cq">
                <div className="top-cq">
                    <div><img src={Clogo} alt="NHS" /></div>
                    {/* <div><img src="img/CQC-logo.svg"></div> */}
                    <div className="rating-title">
                        <div className="co">CQC overall rating</div>

                        <div className="rating">
                            <div className="rate1"></div>
                            <div className="good-text">Good</div>
                        </div>
                    </div>
                </div>
                <div className="bottom-cq">
                    <div className="hrltd">HR Healthcare Ltd</div>
                    <div className="inspection">
                        <div>Latest inspection:</div>
                        <div>20 May 2019</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
}

export default Footer