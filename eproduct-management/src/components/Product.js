import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);

  const myStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "90%",
  };

  return (
    <div>
      <h1 className="text-center py-3">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4">
            <div className="card mb-3" style={myStyle}>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text"> {product.description}</p>
                <p className="card-text"> {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
