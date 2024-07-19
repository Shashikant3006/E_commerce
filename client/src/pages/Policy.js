import React from "react";
import Layout from "../components/Layout/layout";


const Policy = () => {
  return (
    <Layout title={'Privacy policy-Shopify'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="./images/privacy.jpg"
            alt="contactus"
            style={{ width: "100%", height:"50vh"}}
          />
        </div>
        <div className="col-md-4">
          <p>
            Welcome to Shopify. We are committed to protecting your 
            privacy and ensuring the security of your personal information.
             This Privacy Policy explains how we collect, use, and safeguard your
              data when you visit our website and use our services.</p>
          <p> Information We Collect
          We collect various types of information to provide and improve our services to you, including:
            <br/>
            Personal Information: Name, email address, phone number, billing and shipping address. <br/>
            Payment Information: Credit card details and payment transaction details. <br/>
            Technical Data: IP address, browser type, operating system, and access times. <br/>
            Usage Data: Information about how you use our website, products, and services.</p>
          
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
