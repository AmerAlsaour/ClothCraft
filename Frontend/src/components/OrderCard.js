import React from 'react';
import picFront from '../Images/T-shirts/Black/front.png'
import picBack from '../Images/T-shirts/Black/back.png'
import { AuthContext, useAuthContext } from '../context/AuthContext';
import { Link, NavLink } from 'react-router-dom';

const OrderCard = ({ front,back,buyer,location }) => {
const { authUser } = useAuthContext()
  console.log(authUser.username , "username");
  return (
    
<div class="flex pl-5 hover:cursor-pointer flex-col  items-center bg-stone-100 border border-gray-200 rounded-lg shadow md:flex-row md:w-[80%] hover:bg-stone-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 gap-4">
    <img className="object-cover max-w-[30%] rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg" src={front} alt=""/>
    <img className="object-cover mr-24 max-w-[30%] rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg" src={back} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <p className=" my-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Buyer : {buyer}
        </p>
        <p className=" text-2xl my-8  tracking-tight text-gray-900 dark:text-white">
          Price : 50,000 s.p
        </p>
        <p className=" text-2xl my-8  tracking-tight text-gray-900 dark:text-white">
          Location : {location}
        </p>
        <NavLink className="focus:outline-none text-center text-white bg-orange-400 hover:bg-yellow-500 focus:ring-4 my-8 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:focus:ring-yellow-900"
        to={'/OrderDetails'}>Details</NavLink>
    </div>  
</div>


  );
};

export default OrderCard;