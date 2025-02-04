import React, { useEffect, useState } from "react";
import axios from "axios";

/*
//display data using cards

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
  */

/*
//display data using list

export default function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className="text-center py-3">Products</h1>
      <ul>
        {data.map((d) => (
          <div>
            <li>{d.id}</li>
            <p>{d.title}</p>
            <p>{d.body}</p>
          </div>
        ))}
      </ul>
    </>
  );
}
  */

//display data using table

export default function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className="text-center py-3">Products</h1>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>

        {data.map((d) => (
          <tbody>
            <tr>
              <th scope="row">{d.id}</th>
              <td>{d.title}</td>
              <td>{d.body}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
