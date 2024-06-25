import { useEffect } from 'react'
import { useContext,  } from 'react'
import EcomContext from '../../context/EcomContext'
import { useSearchParams } from 'react-router-dom'

function ThankYou() {

  const {createOrder} = useContext(EcomContext)
  const [searchParams] = useSearchParams()
  const tx_ref = searchParams.get("tx_ref")
  const transaction_id = searchParams.get("transaction_id")


  useEffect(() => {
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref)
    }
  }, [transaction_id, tx_ref, createOrder])

  return (
    <div className='flex flex-col items-center my-[5%]'>
        <img src="/img/thank-you-sign.webp" className='h-[200px] w-[50%]' alt="" />
        <p>Thank you for your purchase RoadRunner, a respresentative will get back to you shortly</p>
        <button className='bg-orange-500 text-white p-[10px] rounded-md hover:text-black'>Manage Order</button>
    </div>
  )
}

export default ThankYou