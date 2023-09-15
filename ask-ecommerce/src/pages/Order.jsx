import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar';

const Order = () => {
  // Create a state variable to store the order data
  const [orderData, setOrderData] = useState(null);

  // Use the useEffect hook to fetch order data when the component mounts
  useEffect(() => {
    fetch('http://localhost:8080/api/order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOrderData(data);
      })
      .catch((error) => {
        console.error('Error fetching order data:', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-44">
        <h2 className="text-3xl font-sans mb-4">Order Details</h2>
        {orderData ? (
          <div>
            <p>Order ID: {orderData._id}</p>
            <p>User ID: {orderData.userId}</p>
            <p>Amount: {orderData.amount}</p>
            <p>Status: {orderData.status}</p>
            <p>Address: {orderData.address}</p>
            <h3>Products:</h3>
            <ul>
              {orderData.products.map((product, index) => (
                <li key={index}>
                  Product ID: {product.productId}, Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading order data...</p>
        )}
      </div>
    </div>
  );
};

export default Order;
