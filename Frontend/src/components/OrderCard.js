import React from 'react';
import picFront from '../Images/T-shirts/Black/front.png'
import picBack from '../Images/T-shirts/Black/back.png'

const OrderCard = ({ order }) => {
  return (
    <div className=" max-w-[50vw] card lg:card-side bg-stone-100 shadow-xl gap-8 mx-auto  ">
  <figure>
    <img className='w-[10vw]'
      src={picFront}
      alt="Album" />
  </figure>

  <figure>
    <img className='w-[10vw]'
      src={picBack}
      alt="Album" />
  </figure>
</div>

  );
};

export default OrderCard;