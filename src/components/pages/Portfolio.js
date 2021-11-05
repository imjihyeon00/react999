import React from "react";
import {Link} from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";

function Portfolio(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="portCont">
                    <div className="container">
                        <div className="wrap__title">
                            <h2><strong>portfolio</strong><em>Site</em></h2>
                        </div>
                        <div className="port__cont">
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                            <div className="port">
                                <a href="/">
                                    <div className="pImg">
                                        <img src="img/port01.jpg" alt="포트폴리오1" />
                                    </div>
                                    <div className="pText">
                                        <h3>PORTFOLIO HWANG</h3>
                                        <p>PORTFOLIO</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </section>

                <section id="contactInfo">
                    <div className="contact__info">
                        <div>
                            <p>Let’s create something new</p>
                            <h3>LET`S Get IN<br />TOUCH</h3>
                            <Link to="contact.html" className="contact">Contact Me</Link>
                        </div>
                    </div>
                </section>
            </Contents>    
            <Footer />
        </div>
    )
}

export default Portfolio;