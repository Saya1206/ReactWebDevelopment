import React from "react";

export default function DemoJumbotron() {
  return (
    <>
      <div className="jumbotron text-center py-5" style={{backgroundColor:'#fbffc4'}}>
        <img src="/assests/shopping.jpeg" alt="shopping-img" style={{maxHeight:'100px'}} />
        <h1 className="display-4">Welcome to our Product Page</h1>
        <p className="lead">
          Explore our amazing range of products designed just for you.
        </p>
        <hr className="my-4" />
        <p>Check out the latest additions to our collection below.</p>
      </div>
    </>
  );
}
