import React from "react";
import logo from "../../../images/logo.png";

import "./NabbarTop.css";
const NabarTop = () => {
    return (
        <div>
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-12 col-xs-12 header-col-logo">
                            <div class="header-logo ">
                                <img class="mt-4" src={logo} alt="Logo" />
                            </div>
                        </div>

                        <div class="col-md-8 col-sm-12 hidden-xs">
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <div class="text mt-5">
                                        <span class="head-heading">
                                            OFFICE ADDRESS
                                        </span>
                                        <span class="head-content">
                                            Chittagong, Bangladesh
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="text mt-5">
                                        <span class="head-heading">
                                            WORKING HOUR
                                        </span>
                                        <span class="head-content">
                                            Monday-Friday 9:00-18:00
                                        </span>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 clearfix">
                                    <button class="mt-5 head-btn">
                                        BOOK APPOINTMENT
                                    </button>
                                </div>
                                <div class="col-md-2 col-sm-2 clearfix">
                                    {/* <img src={loggedInUser.image} style={{width:"50px"}} class="rounded-circle" alt="..."/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NabarTop;
