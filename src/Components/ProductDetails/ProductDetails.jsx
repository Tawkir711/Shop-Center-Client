import React from 'react';
import { NavLink } from 'react-router-dom';
import { CarouselDefault } from '../Silder/Silder';

const ProductDetails = ({ product }) => {
  const {id, brandName , image} = product;
  return (
    <NavLink to={`/brandDetail/${brandName}`}>
      <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure className="px-5 pt-3">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-[250px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brandName}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductDetails;