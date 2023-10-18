import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.postimg.cc/nV1ZDdz2/Ecommerce-customer-service-banner.png"
          className="lg:w-[50%] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Shop online for convenience</h1>
          <p className="py-6">
            E-commerce, electronic commerce, facilitates buying and selling
            goods and services online, revolutionizing retail, enhancing
            convenience, and providing a vast marketplace for global trade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;