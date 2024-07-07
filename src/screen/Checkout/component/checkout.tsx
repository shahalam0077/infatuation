// src/components/Checkout.js
import React from 'react';

const Checkout = () => {
  const handleCheckout = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Process checkout
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
