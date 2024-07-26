import React from 'react';
const OrderCard = ({ order }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className='flex items-start justify-start'>
        <img src={pic}/>  
      </div>
      <h2 className="text-lg font-bold mb-2">{order.id}</h2>
      <p className="text-gray-600 mb-4">Ordered by: {order.username} </p>
      <div className="flex items-center mb-4">
      </div>
      <p className="text-gray-600 mb-4">Order details:</p>
      <ul className="list-none mb-4">
        {order.products.map((product, index) => (
          <li key={index} className="flex items-center mb-2">
            <img
              src={product.frontimage}
              alt={product.baseShirt.color}
              className="w-12 h-12 rounded mr-4"
            />
            <div>
              <p className="text-lg font-bold">{product.baseShirt.color}</p>
              <p className="text-gray-600">{product.elements.length} elements</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-gray-600 mb-4">Ordered on: {order.Date.toLocaleDateString()}</p>
    </div>
  );
};

export default OrderCard;