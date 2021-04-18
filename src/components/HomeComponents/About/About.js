import React from "react";
import aboutIMg from "../../../images/about_us_persons.jpg";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWrench,
    faHandPeace,
    faUsers,
    faSmile,
    faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <>
            <section class="section-content-block ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div class="row section-heading-wrapper margin-bottom-12">
                                <div class="col-md-12 col-sm-12 text-left">
                                    <h4 class="heading-alt-style text-uppercase text-dark-color">
                                        Bring Shine House
                                        <br class="hidden-sm" />
                                        Floor &amp; Tiles Forever
                                    </h4>
                                    <p>
                                        Looking at your house and it floor
                                        everyone will praise your choice and
                                        quality of our work. Pellentesque
                                        habitant morbi tristique senectus et
                                        netus et malesuada fames ac turpis
                                        egestas.
                                    </p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 mt-5">
                                    <div class="highlight-layout-2">
                                        <div class="highlight-icon">
                                            <FontAwesomeIcon icon={faWrench} />
                                        </div>

                                        <div class="highlight-text">
                                            <h5> Free Estimation </h5>
                                            <div>
                                                No extra payment will be charged
                                                for the estimation. Our expert
                                                team members will analyze,
                                                measure and provide you the
                                                accurate floor repairing cost of
                                                your house.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-4">
                                    <div class="highlight-layout-2">
                                        <div class="highlight-icon">
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>

                                        <div class="highlight-text">
                                            <h5> Customer Satisfaction </h5>
                                            <div>
                                                We ensure our customer to
                                                deliver the quality work. Get
                                                guaranteed customer satisfaction
                                                from us and build a strong
                                                customer relationship with our
                                                company.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12 mt-5">
                                    <div class="highlight-layout-2 ">
                                        <div class="highlight-icon">
                                            <FontAwesomeIcon
                                                icon={faHandPeace}
                                            />
                                        </div>

                                        <div class="highlight-text">
                                            <h5>On Time Delivery </h5>
                                            <div>
                                                Get your job done within our
                                                estimated time frame. We will
                                                deliver the quality material and
                                                expert team members to hand over
                                                your required work on time.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
                            <img
                                src={aboutIMg}
                                alt=""
                                class="img-responsive"
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>

                    <hr class="no-border border-bottom-1p-solid-light margin-top-24 margin-bottom-32" />

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="counter-block-1 text-center ">
                                <div>
                                    <FontAwesomeIcon
                                        className="icons"
                                        icon={faSmile}
                                    />
                                </div>

                                <div>
                                    <span class="counter">9,000</span>
                                    <span class="counter-postfix">+</span>
                                    <p class="text-capitalize">
                                        Happy Customers
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="counter-block-1 text-center">
                                <div>
                                    <FontAwesomeIcon
                                        className="icons"
                                        icon={faUsers}
                                    />
                                </div>
                                <div>
                                    <span class="counter">35</span>
                                    <span class="counter-postfix">+</span>
                                    <p class="text-capitalize">
                                        Years Of services
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="counter-block-1 text-center">
                                <div>
                                    <i class="fa fa-forumbee"></i>
                                    <FontAwesomeIcon
                                        className="icons"
                                        icon={faProjectDiagram}
                                    />
                                </div>
                                <div>
                                    <span class="counter">100</span>
                                    <span class="counter-postfix">%</span>
                                    <p class="text-capitalize">
                                        Projects Delivered
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <div class="counter-block-1 text-center">
                                <div>
                                    <FontAwesomeIcon
                                        className="icons"
                                        icon={faWrench}
                                    />
                                </div>
                                <div>
                                    <span class="counter">1275</span>
                                    <p class="text-capitalize">
                                        On-Going Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
