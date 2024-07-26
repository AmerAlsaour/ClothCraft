import React from 'react'

const Card = () => {
  return (
    <div className=' w-full flex justify-center items-center '>
    <div className= "bg-blue-500 text-white p-4">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name Of The T-Shert</h2>
    <p>Price of the T-Shert </p>
    <div className="card-actions justify-end">
      <button className="bg-white btn btn-secondary">Buy</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Card
