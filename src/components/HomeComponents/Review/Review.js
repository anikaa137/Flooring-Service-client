import React, { useEffect, useState } from "react";
import test2 from "../../../images/test.jpg";
import Sliderr from "react-animated-slider";

import horizontalCss from "react-animated-slider/build/horizontal.css";
const Review = () => {
    const [reviews, setREviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/reviews")
            .then((res) => res.json())
            .then((data) => setREviews(data));
    }, []);
    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-7">
                    <div class="card-body">
                        <Sliderr
                            classNames={horizontalCss}
                            class="card-text mb-5"
                            style={{ width: "50%" }}
                        >
                            {reviews.map((item, index) => (
                                <div
                                    class="slide-bg"
                                    key={index}
                                    // style={{ background: `url('${item.image}' ) no-repeat center center`, opacity: "0.9" } }
                                >
                                    <div className="center slider-info mt-5">
                                        <div class="text-center">
                                            <p>{item.comments}</p>
                                            <h4>{item.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Sliderr>
                    </div>
                </div>
                <div class="col-md-2 ">
                    <img src={test2} alt="..." />
                </div>
            </div>
        </div>
    );
};

export default Review;
