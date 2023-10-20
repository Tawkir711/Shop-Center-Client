import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = ({ data }) => {
  const { _id, brandName, name, description, photo, price, rating, type } = data;
  
  
  return (
    <div>
      <div className="card card-compact h-[600px]  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={photo} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold">Brand Name: {brandName}</h2>
          <h2 className="card-title">Name: {name}</h2>
          <p> {description} </p>
          <p className="text-lg font-medium">Price: ${price}</p>
          <p>{rating}</p>
          <p>{type}</p>
          <div className="flex justify-between">
            <button className="btn btn-primary">Update Button</button>
            <Link to={`/cardInfo/${_id}`}>
              <button className="btn btn-primary">Details Button</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;