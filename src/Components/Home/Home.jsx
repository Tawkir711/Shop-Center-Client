import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import ProductDetails from '../ProductDetails/ProductDetails';
import FAQ from '../FAQ/FAQ';
import AboutUs from '../AboutUs/AboutUs';
import { Helmet } from 'react-helmet';

const Home = () => {
  const products = useLoaderData();
  console.log("home",products);
  return (
    <div>
      <Helmet>
        <title>Shop Center | Home</title>
      </Helmet>
      <Banner></Banner>
      <h2 className='text-2xl font-semibold text-center mt-4'>Our Brand</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          products?.map((product) => (
            <ProductDetails key={product.id} product={product}></ProductDetails>
          ))
        }
      </div>
      <AboutUs></AboutUs>
      <FAQ></FAQ>
      
    </div>
  );
};

export default Home;