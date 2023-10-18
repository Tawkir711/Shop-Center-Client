import React from 'react';

const ProductDetails = ({ product }) => {
  const { brandName , image} = product;
  return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">{ brandName}</h2>
        </div>
      </div>

  );
};

export default ProductDetails;