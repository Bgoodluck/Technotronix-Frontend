import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { useContext } from 'react';
import EcomContext from '../../context/EcomContext';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Cart() {
const { cartItems, updateQuantity, removeItem, totalAmount, isAuthenticated } = useContext(EcomContext);

if (!isAuthenticated) {
   return <Navigate to='/login' /> 
}




// const handleDelete = () => {
//     removeFromCart(item.Id);
// };


const cartTable = (
    <>
        <table className='w-[90%] mx-auto h-[30vh]'>
        <thead>
            <th>Action</th>
            <th>Item</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
        </thead>
        <tbody className='text-center'>
            {cartItems.products?.map((item) => (
                <tr className='border-b-2' key={item.product._id}>
                    <td>
                        <div>
                            <button onClick={()=> removeItem(item.product._id)}>
                            <MdDeleteForever className='text-2xl text-orange-500' />
                            </button>
                        </div>
                    </td>
                    <td>{item.product.name}</td>
                    <td>
                        <div className='flex justify-center'>
                            <img src={"https://technotronix-api-eeve.onrender.com" +  item.product.img} className='h-[50px]' alt="" />
                        </div>
                    </td>
                    <td>₦{item.products?.price}</td>
                    <td>
                        <input type="number" className='outline outline-1 md:w-[50px]'
                        value={item.quantity} 
                        min={1}
                        onChange={(e)=> updateQuantity(item.product._id, e.target.value)} />
                    </td>
                    <td>₦{item.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>

    <div className='w-[90%] mx-auto mt-5 flex justify-between'>
        <div>
            <h1 className='text-4xl font-bold'>Total = ₦{totalAmount()}</h1>
        </div>
        <div>
            <Link to="/checkout">
            <button className='bg-orange-500 text-white p-[10px] rounded-md'>Checkout</button>
            </Link>
        </div>
    </div>
    </>
);



  return (
    <div className='m-[5%]'>
        <h1 className='text-3xl font-bold text-center mb-10'>Your Cart Items</h1>
        {cartItems.products?.length > 0 ? cartTable :  <h1 className='text-center font-bold'>No Items in Cart</h1> }
    </div>
  )
}

export default Cart