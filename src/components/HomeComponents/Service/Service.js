import React, { useEffect, useState } from "react";
import ServiceDetailes from "../../AdminComponents/ServiceDetailes/ServiceDetailes";

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [services]);
    return (
        <div>
            <div class="text-center mb-5">
                <h2 class="heading-alt-style text-uppercase text-dark-color">
                    Services &amp; Pricing
                </h2>
                <h4 class="heading-alt-style text-uppercase text-dark-color mt-3">
                    Our ranges are available in a wealth of sizes and styles, to
                    ensure seamless co-ordination services
                </h4>
                <h5 class="highlight-text mt-4">
                    *Prices based on a 500-square-foot room for entire room,
                    100-square-feet for small area
                </h5>
            </div>
            <div className="row row-cols-2 row-cols-md-3 g-4 ">
                {services.length > 0 &&
                    services.map((service) => (
                        <ServiceDetailes service={service}></ServiceDetailes>
                    ))}
            </div>
        </div>
    );
};

export default Service;
