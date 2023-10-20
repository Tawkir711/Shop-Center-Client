import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
  const cartItem = useLoaderData();
  console.log("9", cartItem);
  const [ myData, setMyData ] = useState(cartItem);
  console.log("11",myData);

  const handleRemove = (id) => {
    console.log("14", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myCart/${id}`, {
          method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
          const remaining = myData?.filter((data) => data._id !== id);
          setMyData(remaining);
          console.log("21", data);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }
    });
  };
  return (
    <div className="px-3 max-w-screen-xl mx-auto flex my-16 min-h-[50vh] justify-between flex-wrap items-start">
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg  ">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
            <tr>
              <th scope="col" className="px-1 md:px-6 py-3">
                 Product Name
              </th>
              <th scope="col" className="px-1 md:px-6 py-3">
                Brand
              </th>

              <th scope="col" className="px-1 md:px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-1 md:px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-1 md:px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {myData?.map((cart, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-1 md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {cart.name}
                  </th>
                  <td className="px-1 md:px-6 py-4">{cart.brandName}</td>

                  <td className="px-1 md:px-6 py-4">${cart.price}</td>
                  <td className="px-1 md:px-6 py-4 " ><img className='h-[100px]' src={cart.photo} alt="" /></td>
                  <td className="px-1 md:px-6 py-4 text-right">
                    <Button
                      onClick={()=> handleRemove(cart._id)}
                      className="font-medium bg-transparent shadow-none p-2 text-blue-600  hover:shadow-none   dark:text-blue-500 hover:underline"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;