// import React, { useState, useEffect, useContext } from 'react'
// import Card from '../shared/Card'
// import EcomContext from '../../context/EcomContext';
// import { Link } from 'react-router-dom';



// function Products() {

//   const {garage, addTocart, product} = useContext(EcomContext)

//   const [searchTerm, setSearchTerm] = useState('');
  
//   const getInputData = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredInventory = garage.filter(item =>
//     item.name.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div>
//       <div className='flex justify-center items-center mt-10 sm:mt-20 lg:mt-24'>
//         <input
//           className='w-full sm:w-[300px] h-10 sm:h-12 border rounded-lg bg-orange-500 px-2 text-center text-black mb-6 font-semibold'
//           type="text"
//           placeholder='Search'
//           value={searchTerm}
//           onChange={getInputData}
//         />
//       </div>

//       <div className='my-10 sm:my-20 lg:my-24 mx-4 sm:mx-8 lg:mx-12'>
//         <h1 className='mb-6 sm:mb-8 lg:mb-10 text-orange-500 font-bold text-2xl'>Inventory</h1>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
//           {product.map((item) => (
//             <Card key={item._id}>
//               <Link to={`/detail/${item._id}`}><img src={"http://localhost:3000/" + item.img} alt="" className='h-48 sm:h-64 lg:h-72 object-contain' /></Link>
//               <p className='font-semibold'>{item.name}</p>
//               <p>{item.price}</p>
//               <button onClick={()=> addTocart({...item, quantity: 1})} className='bg-orange-500 text-white px-4 py-2 rounded mt-2'>
//                 Add to Cart
//               </button>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;


// import React, { useState, useContext } from 'react'
// import Card from '../shared/Card'
// import EcomContext from '../../context/EcomContext'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import AuthContext from '../../context/AuthContext'

// function Products() {
//   const { garage, addTocart, product } = useContext(EcomContext)
//   const [searchTerm, setSearchTerm] = useState('')

//   const [state, dispatch] = useContext(AuthContext)
//   const isAuthenticated = state.accessToken !== null
//   const redirect = useNavigate()

//   const login = ()=> {
//     if (!isAuthenticated) {
//       redirect("/login")
//     }
//   }


//   const getInputData = (e) => {
//     setSearchTerm(e.target.value.toLowerCase())
//   }

//   const filteredProducts = product.filter(item =>
//     item.name.toLowerCase().includes(searchTerm)
//   )

//   return (
//     <div>
//       <div className='flex justify-center items-center mt-10 sm:mt-20 lg:mt-24'>
//         <input
//           className='w-full sm:w-[300px] h-10 sm:h-12 border rounded-lg bg-orange-500 px-2 text-center text-black mb-6 font-semibold'
//           type='text'
//           placeholder='Search'
//           value={searchTerm}
//           onChange={getInputData}
//         />
//       </div>

//       <div className='my-10 sm:my-20 lg:my-24 mx-4 sm:mx-8 lg:mx-12'>
//         <h1 className='mb-6 sm:mb-8 lg:mb-10 text-orange-500 font-bold text-2xl'>Inventory</h1>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
//           {filteredProducts.map((item) => {
//             const garageDetails = garage.find(g => g._id === item._id) || item
//             return (
//               <Card key={item._id}>
//                 <Link to={`/detail/${item._id}`}>
//                   <img src={"https://technotronix-api-eeve.onrender.com/" + garageDetails.img} alt="" className='h-48 sm:h-64 lg:h-72 object-contain' />
//                 </Link>
//                 <p className='font-semibold'>{garageDetails.name}</p>
//                 <p>{garageDetails.price}</p>
//                 <button onClick={isAuthenticated ? ()=> addTocart(item._id) : login} className='bg-orange-500 text-white px-4 py-2 rounded mt-2'>
//                   Add to Cart
//                 </button>
//               </Card>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Products

import React, { useState, useContext } from 'react';
import Card from '../shared/Card';
import EcomContext from '../../context/EcomContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function Products() {
  const { garage, addTocart, product } = useContext(EcomContext);
  const [searchTerm, setSearchTerm] = useState('');

  const [state, dispatch] = useContext(AuthContext);
  const isAuthenticated = state.accessToken !== null;
  const redirect = useNavigate();

  const login = () => {
    if (!isAuthenticated) {
      redirect("/login");
    }
  };

  const getInputData = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = product.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div className='flex justify-center items-center mt-10 sm:mt-16 lg:mt-20'>
        <input
          className='w-full sm:w-[300px] h-10 sm:h-12 border rounded-lg bg-orange-500 px-2 text-center text-black mb-6 font-semibold'
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={getInputData}
        />
      </div>

      <div className='my-10 sm:my-16 lg:my-20 mx-4 sm:mx-8 lg:mx-12'>
        <h1 className='mb-6 sm:mb-8 lg:mb-10 text-orange-500 font-bold text-xl sm:text-2xl lg:text-3xl'>Inventory</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {filteredProducts.map((item) => {
            const garageDetails = garage.find(g => g._id === item._id) || item;
            return (
              <Card key={item._id}>
                <Link to={`/detail/${item._id}`}>
                  <img src={"https://technotronix-api-eeve.onrender.com/" + garageDetails.img} alt="" className='h-48 sm:h-64 lg:h-72 object-contain' />
                </Link>
                <p className='font-semibold mt-2'>{garageDetails.name}</p>
                <p>{garageDetails.price}</p>
                <button onClick={isAuthenticated ? () => addTocart(item._id) : login} className='bg-orange-500 text-white px-4 py-2 rounded mt-2'>
                  Add to Cart
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;




