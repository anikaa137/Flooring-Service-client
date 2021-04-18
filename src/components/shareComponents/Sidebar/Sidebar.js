import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCog,
    faSignOutAlt,
    faCalendar,
    faHome,
    faGripHorizontal,
    faUserPlus,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "./Sidebar.css";
import { userContext } from "../../../App";
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9000/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((res) => setIsAdmin(res));
    }, []);
    // console.log(isAdmin)
    return (
        <div>
            <div
                className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
                style={{ height: "100vh" }}
            >
                <ul className="list-unstyled">
                    <li>
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="text-white">
                            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/booking/:id" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} />{" "}
                            <span>Booking</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white">
                            <FontAwesomeIcon icon={faUsers} />{" "}
                            <span>Booking List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white">
                            <FontAwesomeIcon icon={faUserPlus} />{" "}
                            <span>Add Review</span>
                        </Link>
                    </li>
                    {isAdmin && (
                        <div>
                            <li>
                                <Link to="/orderlist" className="text-white">
                                    <FontAwesomeIcon icon={faFileAlt} />{" "}
                                    <span>Order List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className="text-white">
                                    <FontAwesomeIcon icon={faUserPlus} />{" "}
                                    <span>Make Admin</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/admin/manage" className="text-white">
                                    <FontAwesomeIcon icon={faCog} />{" "}
                                    <span>Manage</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/admin/setting"
                                    className="text-white"
                                >
                                    <FontAwesomeIcon icon={faCog} />{" "}
                                    <span>Settings</span>
                                </Link>
                            </li>
                        </div>
                    )}
                </ul>
                <div>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faSignOutAlt} />{" "}
                        <span>Logout</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
