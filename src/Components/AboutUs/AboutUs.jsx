import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-2">
      <h3 className="font-bold text-center text-3xl my-6">About Us</h3>
      <div className="md:flex lg:flex gap-5">
        <figure>
          <img
            src="https://i.postimg.cc/k411zVsG/richard-tao-e59adefs-NA-unsplash.jpg"
            className=" rounded-lg w-[500px] h-[400px]"
            alt="About us img"
          />
        </figure>
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-4">
            Shop Center: Your Trusted Source for Quality Products and Seamless
            Shopping.
          </h2>
          <p className="text-xl">
            Welcome to My Shop Center E-Commerce Website, your premier online{" "}
            <br />
            shopping destination. We offer a wide selection <br /> of quality
            products, excellent customer service, and secure transactions.{" "}
            <br /> Discover convenience and satisfaction with us. Join our
            community <br /> of happy shoppers and experience the best in online
            retail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;