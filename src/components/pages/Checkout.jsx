// import React from 'react'
// import { useContext } from 'react'
// import EcomContext from '../../context/EcomContext'
// import { Navigate } from 'react-router-dom';


// function Checkout() {

//     const { cartItems, totalAmount, isAuthenticated } = useContext(EcomContext)
//     const total = totalAmount();

//     if (!isAuthenticated) {
//         return <Navigate to='/login' />
//     }

//     const handleCheckout = async (e) => {
//         e.preventDefault();

//         const amount = totalAmount()
//         const currency = "NGN";

//         const firstName = e.target.elements.firstName.value;
//         const lastName = e.target.elements.lastName.value;
//         const phone = e.target.elements.phone.value;
//         const address = e.target.elements.address.value;

//         try {
//             const res = await fetch("https://technotronix-api-eeve.onrender.com/api/payment/initiate", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "auth-token": `${localStorage.getItem("auth-token")}`,
//                 },
//                 body: JSON.stringify({ amount, currency, firstName, lastName, phone, address })
//             })

//             const data = await res.json()
//             if (res.ok) {
//                 window.location.href = data.link
//             } else {
//                 console.error(data.msg || "Failed to initiate payment");
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     }


//     return (
//         <div className='flex flex-col lg:flex-row gap-8 m-[5%] '>
//             <div className='w-[50%]'>
//                 <h1 className='font-bold text-center mb-5'>Order Summary</h1>
//                 <table className='w-[100%] mx-auto h-[50vh]'>
//                     <thead>

//                         <th>Item</th>
//                         <th>Image</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Amount</th>
//                     </thead>
//                     <tbody className='text-center'>
//                         {cartItems.products?.map((item) => (
//                             <tr className='border-b-2 font-semibold'>
//                                 <td>{item.name}</td>
//                                 <td>
//                                     <div className='flex justify-center'>
//                                         <img src={"https://technotronix-api-eeve.onrender.com/" + item.product.img} className='h-[50px]' alt="" />
//                                     </div>
//                                 </td>
//                                 <td>₦{item.product.price}</td>
//                                 <td>
//                                     {item.quantity}
//                                 </td>
//                                 <td>₦{item.amount}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div className='w-[90%] mx-auto font-bold text-2xl'>
//                     <h1>Total = ₦{totalAmount()}</h1>

//                 </div>
//             </div>
//             <div className='w-[50%] mx-auto font-semibold'>
//                 <h1 className='text-2xl font-bold'>Delivery Information</h1>
//                 <form onSubmit={(e) => handleCheckout(e)} id='orderId'>
//                     <div className='flex flex-col gap-3 mb-3'>
//                         <label htmlFor="first name"> First Name</label>
//                         <input className='outline outline-1' type="text" name='firstName' />
//                     </div>
//                     <div className='flex flex-col gap-3 mb-3'>
//                         <label htmlFor="last name"> Last Name</label>
//                         <input className='outline outline-1' type="text" name='lastName' />
//                     </div>
//                     <div className='flex flex-col gap-3 mb-3'>
//                         <label htmlFor="phone number"> Phone Number</label>
//                         <input className='outline outline-1' type="text" name='phone' />
//                     </div>
//                     <div className='flex flex-col gap-3 mb-3'>
//                         <label className='font-bold' htmlFor="Address">Address</label>
//                         <textarea className='outline outline-1' name="address" id="" cols="30" rows="10" ></textarea>

//                     </div>
//                     <div>
//                         <button className='bg-black text-white p-[10px] rounded-md hover:bg-orange-500'>
//                             Pay Now
//                         </button>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Checkout

import React from 'react';
import { useContext } from 'react';
import EcomContext from '../../context/EcomContext';
import { Navigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, totalAmount, isAuthenticated } = useContext(EcomContext);
  const total = totalAmount();

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  const handleCheckout = async (e) => {
    e.preventDefault();

    const amount = totalAmount();
    const currency = "NGN";

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const phone = e.target.elements.phone.value;
    const address = e.target.elements.address.value;

    try {
      const res = await fetch("https://technotronix-api-eeve.onrender.com/api/payment/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ amount, currency, firstName, lastName, phone, address })
      });

      const data = await res.json();
      if (res.ok) {
        window.location.href = data.link;
      } else {
        console.error(data.msg || "Failed to initiate payment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row gap-8 m-5'>
      <div className='lg:w-1/2'>
        <h1 className='font-bold text-center mb-5'>Order Summary</h1>
        <div className="overflow-x-auto">
          <table className='min-w-full mx-auto h-[50vh]'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Item</th>
                <th className='px-4 py-2'>Image</th>
                <th className='px-4 py-2'>Price</th>
                <th className='px-4 py-2'>Quantity</th>
                <th className='px-4 py-2'>Amount</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {cartItems.products?.map((item) => (
                <tr className='border-b-2 font-semibold' key={item.product._id}>
                  <td className='px-4 py-2'>{item.product.name}</td>
                  <td className='px-4 py-2'>
                    <div className='flex justify-center'>
                      <img src={"https://technotronix-api-eeve.onrender.com/" + item.product.img} className='h-[50px]' alt="" />
                    </div>
                  </td>
                  <td className='px-4 py-2'>₦{item.product.price}</td>
                  <td className='px-4 py-2'>{item.quantity}</td>
                  <td className='px-4 py-2'>₦{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='w-[90%] mx-auto font-bold text-2xl mt-4'>
          <h1>Total = ₦{totalAmount()}</h1>
        </div>
      </div>
      <div className='lg:w-1/2 mx-auto font-semibold'>
        <h1 className='text-2xl font-bold mb-5'>Delivery Information</h1>
        <form onSubmit={handleCheckout} id='orderId'>
          <div className='flex flex-col gap-3 mb-3'>
            <label htmlFor="firstName">First Name</label>
            <input className='outline outline-1 p-2' type="text" name='firstName' required />
          </div>
          <div className='flex flex-col gap-3 mb-3'>
            <label htmlFor="lastName">Last Name</label>
            <input className='outline outline-1 p-2' type="text" name='lastName' required />
          </div>
          <div className='flex flex-col gap-3 mb-3'>
            <label htmlFor="phone">Phone Number</label>
            <input className='outline outline-1 p-2' type="text" name='phone' required />
          </div>
          <div className='flex flex-col gap-3 mb-3'>
            <label htmlFor="address" className='font-bold'>Address</label>
            <textarea className='outline outline-1 p-2' name="address" id="" cols="30" rows="5" required></textarea>
          </div>
          <div>
            <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-all'>
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
