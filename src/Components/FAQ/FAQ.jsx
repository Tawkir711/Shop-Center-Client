import React from 'react';

const FAQ = () => {
  return (
    <section className="md:flex lg:flex gap-5 my-20 lg:flex-row-reverse">
      <div className="flex justify-center items-center rounded-xl md:w-[100%] lg:w-[50%] px-4">
        <img src="https://i.postimg.cc/1zvwcBn2/faq-vector.png" alt="FAQ img" />
      </div>
      <div className=" md:w-[100%] lg:w-[50%]">
        <h1 className="text-3xl font-semibold text-center py-4">
          Frequently asked Questions?
        </h1>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            01. What is the FAQ of e-commerce store?
          </div>
          <div className="collapse-content">
            <p>
              A FAQ page, short for Frequently Asked Questions, is a space on an
              ecommerce store where important information about a business is
              shared to clarify questions and uncertainties on the part of
              shoppers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            02. What is eCommerce problems?
          </div>
          <div className="collapse-content">
            <p>
              Lack of Personal Interaction: Customers may miss the personalized
              experience of shopping in person and interacting with sales
              associates. Security Threats: E-commerce platforms are vulnerable
              to security threats, such as data breaches, hacking, and fraud,
              which can compromise customer data and harm businesses.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            03. How do eCommerce stores find customers?
          </div>
          <div className="collapse-content">
            <p>
              Take advantage of social media. Social media includes Facebook,
              Twitter, Instagram, Snapchat, Pinterest, and other online social
              platforms. It's a great way to attract new customers both through
              organic and paid strategies
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            04. What is e commerce basics?
          </div>
          <div className="collapse-content">
            <p>
              An ecommerce business uses digital methods to sell products and
              services to customers. Ecommerce businesses can be online-only or
              have a physical presence as well. Selling to customers online
              typically requires a website or digital storefront, plus a way to
              process payments digitally and ship orders to customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;