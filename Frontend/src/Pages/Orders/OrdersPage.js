import React, { useEffect, useState } from "react";
import OrderCard from "../../components/OrderCard";
import { Resizable } from "react-moveable";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getOrders() {
      const res = await fetch("http://localhost:5000/order/getorders", {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data);
        console.log(data);
      }
    }
    getOrders();
  }, []);
  return (
    <>
      <div className="container items-center p-4 flex flex-col gap-8 max-w-full min-h-[100vh]  mx-auto  ">
      <h1 className="text-3xl mx-auto font-bold mb-4">Orders</h1>
        {orders.map((order) => (
          <OrderCard
            front={order.frontImage}
            back={order.backImage}
            buyer={order.buyerId.username}
            location={order.buyerId.location}
          />
        ))}
      </div>
    </>
  );
};

export default OrdersPage;
