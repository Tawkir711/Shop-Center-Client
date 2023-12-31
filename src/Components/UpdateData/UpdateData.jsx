import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateData = () => {
  const dataUpdate = useLoaderData();
  console.log("6", dataUpdate);
  const { _id, name, brandName, rating, type, price, photo } = dataUpdate;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const product = {
      name,
      brandName,
      type,
      rating,
      price,
      photo,
    };

    fetch(`https://assignment-server-gamma.vercel.app/myCart/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Done",
            text: "Your data Updated",
          });
        }
      });
  };
  return (
    <div className="bg-[#d8a305] p-4 lg:p-10 my-7">
      <Helmet>
        <title>Shop Center | Update Data</title>
      </Helmet>
      <h2 className="text-3xl font-bold">Update Product</h2>
      <form onSubmit={handleUpdate}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={name}
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={brandName}
                name="brandName"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={type}
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={photo}
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={price}
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={rating}
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Update Product" className="btn btn-block" />
      </form>
    </div>
  );
};

export default UpdateData;
