import React from "react";
import About from "../About/About";
import Service from "../Service/Service";
import Header from "../Header/Header";
import Review from "../Review/Review";

import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Review></Review>

            <Footer></Footer>
        </div>
    );
};

export default Home;
