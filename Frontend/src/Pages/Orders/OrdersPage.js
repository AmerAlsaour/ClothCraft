import React from 'react'
import OrderCard from '../../components/OrderCard';



const orders = [
  {
    id: 'ORDER-123',
    username: 'John Doe',
    email: 'johndoe@example.com',
    products: [
      {
        frontimage: 'https://via.placeholder.com/50',
        baseShirt: {
          color: 'Red',
        },
        elements: [
          {
            customType: 'Text',
            src: 'https://via.placeholder.com/20',
            position: {
              x: 10,
              y: 20,
            },
          },
        ],
      },
    ],
    Date: new Date('2022-01-01T12:00:00.000Z'),
  },
];

const OrdersPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrdersPage
