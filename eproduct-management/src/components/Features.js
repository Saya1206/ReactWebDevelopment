import React from "react";

export default function Features() {
  return (
    <div className="container my-4">
      <h1 className="text-center py-2">Why Choose Us?</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-primary">
            <div className="card-body">
              <h5 className="card-title">Fast Delivery</h5>
              <p className="card-text">
                We offer fast and reliable delivery on all our products.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-success">
            <div className="card-body">
              <h5 className="card-title">High Quality</h5>
              <p className="card-text">
                Our products are sourced from the best manufactures around the
                world.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-danger">
            <div className="card-body">
              <h5 className="card-title">Customer Support</h5>
              <p className="card-text">
                Our dedicated support team is always post to help you with any
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
