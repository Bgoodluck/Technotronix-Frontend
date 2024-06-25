import React from 'react'
import sample from '../../assets/2020 Maclaren Gt.jpg'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import EcomContext from '../../context/EcomContext'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'




function Detail() {
    const params = useParams()
    const carid = params.id;
    const {product, addTocart, garage} = useContext(EcomContext);
    const caritem = product.find((item)=> (item._id) === (carid)) 

    //&& garage.find((item)=> parseInt(item.id) === parseInt(carid))

    const [state, dispatch] = useContext(AuthContext)
  const isAuthenticated = state.accessToken !== null
  const redirect = useNavigate()

  const login = ()=> {
    if (!isAuthenticated) {
      redirect("/login")
    }
  }
  
    

  return (
    <div className='flex m-[5%] gap-4'>
        <div className='w-[50%]'>
            <img src={"http://localhost:3000/" +  caritem?.img} alt="" />
        </div>
        <div className='w-[50%]'>
            <h1 className='text-2xl font-bold border-b-2 mb-5'>{caritem?.name}</h1>
            <p>{caritem?.description}</p>
            <p className='mt-5 font-bold'>Category: <span className='italic text-orange-500'>{caritem?.category.name}</span> </p>
            <p className='text-xl font-bold mb-5 mt-5'>{caritem.price}</p>
            
            <button onClick={isAuthenticated ? ()=> addTocart(caritem._id) : login} className='bg-orange-500 p-[10px] rounded-md'>Add to cart</button>
            
            
        </div>
    </div>
  )
}

export default Detail