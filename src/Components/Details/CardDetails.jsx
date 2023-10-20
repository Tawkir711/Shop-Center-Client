import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
  
  const details = useLoaderData();
  console.log(details);
    const { _id, brandName, name, description, photo, price, rating, type } =details ;


  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
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
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;