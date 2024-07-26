import React from 'react';
import picFront from '../Images/T-shirts/Black/front.png'
import picBack from '../Images/T-shirts/Black/back.png'

const OrderCard = ({ order }) => {
  return (
    
<div class="flex flex-col mx-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 gap-4">
    <img className="object-cover max-w-[20%] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={picFront} alt=""/>
    <img className="object-cover max-w-[20%] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={picBack} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Buyer : Yazan Al Khalil
        </p>
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Price : 50,000 s.p
        </p>
       
    </div>  
</div>


  );
};

export default OrderCard;