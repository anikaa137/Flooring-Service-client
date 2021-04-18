import React from "react";
import Sliderr from "react-animated-slider";
import "./Slider.css";
import horizontalCss from "react-animated-slider/build/horizontal.css";
const content = [
    {
        image:
            "https://templates.bwlthemes.com/pakkapati/images/home_1_slider_1.jpg",
        title: " BEAUTIFUL FLOOR  MAKES HOUSE AWESOME ",
        protectedName: "The Best Flooring &  Paving Service",
        button1: "Get Started Now",
        button2: "Learn More",
    },
    {
        image:
            "https://templates.bwlthemes.com/pakkapati/images/home_1_slider_2.jpg",
        title: `WE BELIEVE IN STYLE & ELEGANCE`,
        protectedName:
            " Group Of Experts Ready To Fulfill All Your Flooring Needs",
        button1: "Get Started Now",
        button2: "Learn More",
    },
    {
        image:
            "https://templates.bwlthemes.com/pakkapati/images/home_1_slider_3.jpg",
        title: "STYLISH HARDWOOD FLOORING",
        protectedName: " Customize Your Indoor With Best Design Technique",
        button1: "Get Started Now",
        button2: "Learn More",
    },
];

const Slider = () => {
    return (
        <div>
            <Sliderr classNames={horizontalCss}>
                {content.map((item, index) => (
                    <div
                        class="slide-bg"
                        key={index}
                        style={{
                            background: `url('${item.image}' ) no-repeat center center`,
                            opacity: "0.9",
                        }}
                    >
                        "
                        <div
                            className="center slider-info mt-5"
                            style={{ textShadow: "2px 2px 4px #000000" }}
                        >
                            <div>
                                <h3
                                    className="text-white"
                                    style={{
                                        fontSize: "50px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <h1 className="text-white">
                                    {item.protectedName}
                                </h1>
                                <button className="btnOne">
                                    {item.button1}
                                </button>{" "}
                                <span>
                                    {" "}
                                    <button className="btnTwo">
                                        {item.button2}
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Sliderr>
        </div>
    );
};

export default Slider;
