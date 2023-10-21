import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CardDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, brandName, name, description, photo, price, rating, type } =
    details;
  const handleAddCart = () => {
    fetch("https://assignment-server-gamma.vercel.app/myCart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Done",
            color: "red",
            background: "gray",
            text: "Add to Cart",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "Already Added",
        });
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
      <Helmet>
        <title>Shop Center | Cart Details</title>
      </Helmet>
      <figure className="px-10 pt-10">
        <img src={photo} alt="img" className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Brand Name: {brandName} </h2>
        <h2 className="card-title">Name: {name} </h2>
        <h2 className="card-title">Type: {type} </h2>
        <p> {description} </p>
        <h2 className="card-title">Price: ${price} </h2>
        <h2 className="card-title">Rating: {rating} </h2>

        <div className="card-actions">
          <button onClick={handleAddCart} className="btn-grad">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
