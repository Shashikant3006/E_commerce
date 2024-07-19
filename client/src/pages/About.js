import React from "react";
import Layout from "../components/Layout/layout";


const About = () => {
  return (
    <Layout title={'About Us -Shopify'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./images/About.png"
            alt="About"
            style={{ width: "100%" , height:"60vh"}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our Shopify project is designed to simplify e-commerce for businesses 
          of all sizes. With its powerful features, user-friendly interface, and 
          comprehensive support, it provides everything you need to build and grow 
          a successful online store. Experience the future of e-commerce with our Shopify platform.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;