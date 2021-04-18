import React from "react";
import Sidebar from "../../shareComponents/Sidebar/Sidebar";

const OrdersDetails = ({ booking }) => {

    return (
        <div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <div class="col-md-5 mt-5   container">
                    <div class="card " style={{ width: "25rem" }}>
                        <img
                            src={booking.image}
                            class="rounded mt-5"
                            style={{ width: "200px", marginLeft: "30px" }}
                            alt="..."
                        />
                        <div class="card-body">
                            <h5 class="card-title">{booking.name}</h5>
                            <p class="card-text">
                                customer email: {booking.email}
                            </p>
                            <p>Order time: {booking.orderTime}</p>
                            <button class="position-absolute top-0 end-0 mt-3 me-3">
                                panding
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersDetails;
