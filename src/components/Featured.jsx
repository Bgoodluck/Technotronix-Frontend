// import Card from "./shared/Card"
// import { useContext } from "react"
// import EcomContext from "../context/EcomContext"
// import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
// import AuthContext from "../context/AuthContext"


// function Featured() {
//   const {featured, addTocart, cartItems} = useContext(EcomContext)
//   console.log(cartItems);

//   const [state, dispatch] = useContext(AuthContext)
//   const isAuthenticated = state.accessToken !== null
//   const redirect = useNavigate()

//   const login = ()=> {
//     if (!isAuthenticated) {
//       redirect("/login")
//     }
//   }

//   return (
//     <div className="my-[20px] mx-[50px] pl-[70px]">
//         <h1 className="mb-[10px] text-orange-500 font-bold text-2xl">Featured Products</h1>
//         <div className="flex gap-5 flex-wrap">
//             {featured.map((item) =>(
//                 <Card key={item._id}>
//                 <Link to={`/detail/${item._id}`}><img src={"https://technotronix-api-eeve.onrender.com/" + item.img} alt="" className="h-[200px]" /></Link>
//                 <p className="font-semibold ">{item.name}</p>
//                 <p>₦{item.price}</p>
//                 <button onClick={isAuthenticated ? ()=> addTocart(item._id) : login} className="bg-orange-500 text-white p-[10px] rounded mt-[10px]">Add to cart</button>
//                 </Card>
//         ))}

//         </div>
//     </div>
//   )
// }

// export default Featured

import Card from "./shared/Card";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Featured() {
  const { featured, addTocart, cartItems } = useContext(EcomContext);
  console.log(cartItems);

  const [state, dispatch] = useContext(AuthContext);
  const isAuthenticated = state.accessToken !== null;
  const redirect = useNavigate();

  const login = () => {
    if (!isAuthenticated) {
      redirect("/login");
    }
  };

  return (
    <div className="my-10 mx-5 md:mx-10 lg:mx-20">
      <div className="flex text-center font-bold text-sm"><marquee behavior="" direction="">An E-commerce website designed and developed by Adebisi Bobby Goodluck</marquee></div>
      <h1 className="mb-10 text-orange-500 font-bold text-2xl md:text-3xl lg:text-4xl">Featured Products</h1>
      <div className="flex flex-wrap gap-8 justify-center md:justify-start">
        {featured.map((item) => (
          <Card key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-lg rounded-lg">
            <Link to={`/detail/${item._id}`}>
              <img src={"https://technotronix-api-eeve.onrender.com/" + item.img} alt="" className="h-48 md:h-56 lg:h-64 object-cover w-full rounded-t-lg" />
            </Link>
            <div className="p-4">
              <p className="font-semibold text-lg mt-2">{item.name}</p>
              <p className="text-xl font-bold text-gray-700">₦{item.price}</p>
              <button onClick={isAuthenticated ? () => addTocart(item._id) : login} className="bg-orange-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-orange-600 transition duration-300">
                Add to cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Featured;

