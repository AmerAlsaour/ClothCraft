import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CustomClothingDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  useEffect(() => {
    const getOrderDetails = async () => {
      const res = await fetch('http://localhost:5000/order/getorders/' + id, {
        credentials: "include"
      })
      const data = await res.json()
      if (res.ok) {
        setData(data)
      }
    }

    getOrderDetails()
  }, [])
  if (data)
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Custom Clothing Details</h1>
        <div className="mb-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
          <p><strong>Size:</strong> {data.size}</p>
          <p><strong>Buyer:</strong> {data.buyerId.username}</p>
          <p><strong>Email:</strong> {data.buyerId.email}</p>
          <p><strong>Phone:</strong> {data.buyerId.phone}</p>
          <p><strong>Location:</strong> {data.buyerId.location}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Front View</h2>
            <img src={data.frontImage} alt="Front View" className="w-full h-auto mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Front Elements:</h3>
            {data.frontElements.map((element) => (
              <div key={element.id} className="mb-4 p-4 bg-gray-100 rounded">
                <p><strong>Type:</strong> {element.type}</p>
                {element.type === 'image' && (
                  <img src={element.content} alt="Added Element" className="w-24 h-24 object-contain mb-2" />
                )}
                {element.type === 'text' && (
                  <>
                    <p><strong>Content:</strong> {element.content}</p>
                    <p><strong>Font:</strong> {element.fontFamily}, {element.fontSize}</p>
                    <p><strong>Style:</strong> {element.isBold ? 'Bold' : ''} {element.isItalic ? 'Italic' : ''}</p>
                    <p><strong>Color:</strong> {element.textColor}</p>
                  </>
                )}
                <p><strong>Position:</strong> X: {element.x}, Y: {element.y}</p>
                <p><strong>Size:</strong> {element.width}x{element.height}</p>
                <p><strong>Rotation:</strong> {element.rotation}°</p>
              </div>
            ))}
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Back View</h2>
            <img src={data.backImage} alt="Back View" className="w-full h-auto mb-4 rounded" />
            <h3 className="text-xl font-semibold mb-2">Back Elements:</h3>
            {data.backElements.map((element) => (
              <div key={element.id} className="mb-4 p-4 bg-gray-100 rounded">
                <p><strong>Type:</strong> {element.type}</p>
                {element.type === 'image' && (
                  <img src={element.content} alt="Added Element" className="w-24 h-24 object-contain mb-2" />
                )}
                {element.type === 'text' && (
                  <>
                    <p><strong>Content:</strong> {element.content}</p>
                    <p><strong>Font:</strong> {element.fontFamily}, {element.fontSize}</p>
                    <p><strong>Style:</strong> {element.isBold ? 'Bold' : ''} {element.isItalic ? 'Italic' : ''}</p>
                    <p><strong>Color:</strong> {element.textColor}</p>
                  </>
                )}
                <p><strong>Position:</strong> X: {element.x}, Y: {element.y}</p>
                <p><strong>Size:</strong> {element.width}x{element.height}</p>
                <p><strong>Rotation:</strong> {element.rotation}°</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    );

};

export default CustomClothingDetails;