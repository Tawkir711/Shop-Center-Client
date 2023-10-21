import React, { useEffect, useState } from "react";
import { CarouselDefault } from "../Silder/Silder";
import { useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";
import { Helmet } from "react-helmet";

const BrandDetail = () => {
  const { brandName } = useParams();
  console.log(brandName);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://assignment-server-gamma.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  const remaining = data?.filter(
    (singleData) => singleData?.brandName == brandName
  );
  console.log(remaining);

  return (
    <div>
      <Helmet>
        <title>Shop Center | Brand Details</title>
      </Helmet>
      <CarouselDefault></CarouselDefault>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {remaining.length > 0 ? (
          remaining.map((data) => (
            <DetailsCard key={data._id} data={data}></DetailsCard>
          ))
        ) : (
          <div className="text-3xl font-bold text-center  my-10">
            <img
              src="https://i.postimg.cc/HkfNr0mg/365923266-310060981587089-6038640626746651061-n.gif"
              alt=""
            />
            <p>No Data Available </p>
            <p>Data is Coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetail;
