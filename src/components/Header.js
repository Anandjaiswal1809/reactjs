import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/img/Treated_logo.png";
// import "../assets/scss/components/header.scss";
import "../assets/scss/components/header.scss";
// import "../assets/scss/global/_fonts.scss";
import "../assets/scss/global/_common.scss";
// import "../assets/scss/find-section.scss";
// import "../assets/scss/global/_accordion.scss";


function Header() {

    // const [show, setShow] = useState(false)

    return (

        
       
            <div className="container">
                <header class="main-header" id="h-me1qnu">
                    <img src={logo} alt="Logo" />
                    {/* <span style="font-size:30px;cursor:pointer" id="menuControlOpen">&#9776;</span> */}

                    {/* <span>&#9776;</span> */}
                    <div className="menu">
                        <div className="menu-inner">
                            <span className="menu-control-close" id="menuControlClose">&times;</span>
                            <nav>
                                <ul className="menu-h">
                                    <li><a href="#">UK</a></li>
                                    <li>
                                        <a id="side-menu" href="#">Find treatment</a>
                                        <div className="dropdown">
                                            <div className="dropdown-content">
                                                <div id="close-submenu">×</div>
                                                <div className="container">
                                                    <div className="accordion-container">
                                                        <div className="accordion-block">
                                                            <div>
                                                                <div className="custom-accordion-title submenu-title">
                                                                    <span>Get in
                                                                        contact</span>
                                                                </div>
                                                            </div>
                                                            <div className="custom-accordion-content">
                                                                <div className="post_content">
                                                                    <ul className="main-submenu">
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
                                                                <div className="custom-accordion-title submenu-title">
                                                                    <span>Get in
                                                                        contact</span>
                                                                </div>
                                                            </div>
                                                            <div className="custom-accordion-content">
                                                                <div className="post_content">
                                                                    <ul className="main-submenu">
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
                                                                <div className="custom-accordion-title submenu-title">
                                                                    <span>Get in
                                                                        contact</span>
                                                                </div>
                                                            </div>
                                                            <div className="custom-accordion-content">
                                                                <div className="post_content">
                                                                    <ul className="main-submenu">
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
                                                                <div className="custom-accordion-title submenu-title">
                                                                    <span>Get in
                                                                        contact</span>
                                                                </div>
                                                            </div>
                                                            <div className="custom-accordion-content">
                                                                <div className="post_content">
                                                                    <ul className="main-submenu">
                                                                        <li><a href="#">0207 043 0716</a></li>
                                                                        <li><a href="#">customercare@treated.com</a></li>
                                                                        <li><a href="#">Instagram</a></li>
                                                                        <li><a href="#">Facebook</a></li>
                                                                        <li><a href="#">Twitter</a></li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#">Ask a question</a></li>
                                    <li><a href="#">Search</a></li>
                                    <li><a href="#">Welcome</a></li>
                                    {/* <Link href="#">Go to my amazing page</Link> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>         
    );
}

export default Header;