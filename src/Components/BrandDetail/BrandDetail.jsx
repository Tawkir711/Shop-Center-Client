import React, { useEffect, useState } from "react";
import { CarouselDefault } from "../Silder/Silder";
import { useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";

const BrandDetail = () => {
  const { brandName } = useParams();
  console.log(brandName);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);
  const remaining = data?.filter(
    (singleData) => singleData?.brandName == brandName );
  console.log(remaining);

  return (
    <div>
      <CarouselDefault></CarouselDefault>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {remaining.map((data) => (
          <DetailsCard key={data._id} data={data}></DetailsCard>
        ))}
      </div>
    </div>
  );
};

export default BrandDetail;
