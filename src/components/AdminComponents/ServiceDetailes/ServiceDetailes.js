import React from "react";
import { useHistory } from "react-router";

const ServiceDetailes = ({ service }) => {
    // console.log(service)

    let history = useHistory();

    const serviceHandler = (id) => {
        history.push(`/booking/${id}`);
        console.log("click");
    };
    return (
        <div>
            <div class="col ">
                <div class="card service-card tr">
                    <img
                        src={service.imageURL}
                        style={{ height: "20%" }}
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body text-center">
                        <h3 class="card-title">{service.name}</h3>
                        <h6 class="card-text">
                            Small Area: {service.smallArea}
                        </h6>
                        <h6 class="card-text">
                            Entire Room: {service.entireRoom}
                        </h6>
                        <button
                            class="btn btn-primary"
                            onClick={() => serviceHandler(service._id)}
                        >
                            Get Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailes;
