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
    <div className="my-5 mx-5 md:mx-10 lg:mx-20">
      <h1 className="mb-5 text-orange-500 font-bold text-xl md:text-2xl">Featured Products</h1>
      <div className="flex flex-wrap gap-5 justify-center md:justify-start">
        {featured.map((item) => (
          <Card key={item._id}>
            <Link to={`/detail/${item._id}`}>
              <img src={"https://technotronix-api-eeve.onrender.com/" + item.img} alt="" className="h-40 md:h-48 lg:h-56" />
            </Link>
            <p className="font-semibold mt-2">{item.name}</p>
            <p>₦{item.price}</p>
            <button onClick={isAuthenticated ? () => addTocart(item._id) : login} className="bg-orange-500 text-white py-2 px-4 rounded mt-2">
              Add to cart
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Featured;
