import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div className="text-center py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <h1>About Us</h1>
        <p className="lead">
          We are passionate about providing high-quality products and services
          to our customers.
        </p>
      </div>

      <div className="text-center py-4">
        <h1>Our Mission</h1>
        <p className="lead">
          Our mission is to create products that improve the lives of our
          customers. We focus on innovation, quality, and customer satisfaction
          in everyting we do,
        </p>
      </div>

      <div className="text-center py-4" style={{ backgroundColor: "#e9ecef" }}>
        <h1>Our Story</h1>
        <p className="lead">
          Founded in 2020. Brandname started as a small startup with a big
          vision.
        </p>
      </div>

      <div className="container">
        <h2 className="text-center py-4">Meet the Team</h2>

        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <img
                src="./assests/founder1.jpg"
                class="card-img-top"
                alt="founder1-img"
              />
              <div class="card-body">
                <h5 class="card-title">John Doe</h5>
                <p class="card-text">Founder & CEO</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <img
                src="./assests/founder2.jpg"
                class="card-img-top"
                alt="founder2-img"
              />
              <div class="card-body">
                <h5 class="card-title">Jane Smith</h5>
                <p class="card-text">Chief Marketing Officer</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div class="card">
              <img
                src="./assests/founder3.jpeg"
                class="card-img-top"
                alt="founder3-img"
              />
              <div class="card-body">
                <h5 class="card-title">Emily Johson</h5>
                <p class="card-text">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
