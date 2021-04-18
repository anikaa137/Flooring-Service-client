import React from "react";
import footerlogo from "../../../images/footerLogo-footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div>
            <footer>
                <section
                    class="footer-widget-area footer-widget-area-bg section-custom-bg"
                    className="footer-bg"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="about-footer">
                                    <div class="row">
                                        <div class="col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                                            <figure>
                                                <img
                                                    class="center mt-4"
                                                    src={footerlogo}
                                                    alt=""
                                                />
                                            </figure>
                                            <p class="margin-top-24">
                                                Pakkapati is Jasonas premier and
                                                most trusted flooring provider,
                                                including carpet, vinyl,
                                                hardwood, laminate, and tile for
                                                both domestic and business
                                                spaces in all price ranges. Our
                                                warranties are superior than the
                                                manufacturers warranties, and
                                                our pricing is the absolute
                                                best.
                                            </p>
                                            <div class="footer-social-icons">
                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faFacebookF}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faInstagram}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faLinkedinIn}
                                                    />
                                                </p>

                                                <p>
                                                    <FontAwesomeIcon
                                                        icon={faPinterest}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-5">
                            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                                <div class="footer-widget">
                                    <div class="sidebar-widget-wrapper">
                                        <div class="footer-widget-header clearfix">
                                            <h3>OFFICE ADDRESS</h3>
                                        </div>

                                        <div class="textwidget">
                                            <p>
                                                <a href="f">
                                                    support-us@pakkapati.com
                                                </a>
                                                <br />
                                                <a href="f">
                                                    helpmenow@pakkapati.com
                                                </a>
                                            </p>
                                            <i class="fa fa-location-arrow fa-contact"></i>{" "}
                                            <p>
                                                Road-2,3/A East Shibgonj
                                                <br />
                                                Sylhet-3100, Bangladesh
                                            </p>
                                            <i class="fa fa-phone fa-contact"></i>{" "}
                                            <p>
                                                Office:&nbsp; (+880) 0823 560
                                                433
                                                <br />
                                                Cell:&nbsp; (+880) 0723 161 343
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                                <div class="footer-widget">
                                    <div class="sidebar-widget-wrapper">
                                        <div class="footer-widget-header clearfix">
                                            <h3>QUALITY SERVICES</h3>
                                        </div>

                                        <div class="textwidget">
                                            <ul class="footer-useful-links clearfix">
                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Wooden Flooring
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Complete Paving
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Interior Flooring
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Interior Flooring
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Complete Paving
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Complete Paving
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Carpet Installation
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Carpet Installation
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Interior Flooring
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Carpet Installation
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Wooden Flooring
                                                    </p>
                                                </li>

                                                <li>
                                                    <p>
                                                        {/* <i class="fa fa-caret-right fa-footer"></i> */}
                                                        <FontAwesomeIcon
                                                            class="service-icon"
                                                            icon={faCaretRight}
                                                        />
                                                        Wooden Flooring
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12 mt-5">
                                <div class="footer-widget">
                                    <div class="sidebar-widget-wrapper">
                                        <div class="footer-widget-header clearfix">
                                            <h3>BUSINESS HOURS</h3>
                                        </div>

                                        <div class="textwidget">
                                            <ul class="opening-shedule">
                                                <li class="clearfix">
                                                    <span> Sat - Tues : </span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        6.00 AM - 10.00 PM
                                                    </div>
                                                </li>
                                                <li>
                                                    <span> Wed - Thurs : </span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        8.00 AM - 6.00 PM
                                                    </div>
                                                </li>
                                                <li>
                                                    <span> Friday :</span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        6.00 AM - 10.00 PM
                                                    </div>
                                                </li>
                                                <li>
                                                    <span> Sunday :</span>
                                                    <div class="pull-right">
                                                        {" "}
                                                        Closed
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="footer-contents">
                    <div class="container">
                        <div class="row clearfix">
                            <div class="col-md-12 col-sm-12 text-center clearfix">
                                <p class="copyright-text">
                                    Copyright {new Date().getFullYear()} -
                                    Pakkapati by BlueWindLab. All Rights
                                    Reserved.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;
