export const orderDetails = [
    {
      orderId: '12345',
      status: 'Shipped',
      items: [
        { name: 'Product A', quantity: 2, price: 25.99 },
        { name: 'Product B', quantity: 1, price: 39.99 },
      ],
      shippingMethod: 'Standard Shipping',
      estimatedDelivery: 'July 15, 2024',
      customerName: 'John Doe',
      customerEmail: 'johndoe@example.com',
      shippingAddress: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
        country: 'USA',
      },
    },
    {
      orderId: '67890',
      status: 'Delivered',
      items: [
        { name: 'Product C', quantity: 1, price: 49.99 },
      ],
      shippingMethod: 'Express Shipping',
      estimatedDelivery: 'July 10, 2024',
      customerName: 'Jane Smith',
      customerEmail: 'janesmith@example.com',
      shippingAddress: {
        street: '456 Elm St',
        city: 'Smallville',
        state: 'NY',
        zip: '67890',
        country: 'USA',
      },
    },
    {
      orderId: '54321',
      status: 'Processing',
      items: [
        { name: 'Product D', quantity: 3, price: 19.99 },
      ],
      shippingMethod: 'Priority Shipping',
      estimatedDelivery: 'July 12, 2024',
      customerName: 'Michael Johnson',
      customerEmail: 'michael@example.com',
      shippingAddress: {
        street: '789 Oak St',
        city: 'Metro City',
        state: 'TX',
        zip: '54321',
        country: 'USA',
      },
    },
    {
      orderId: '98765',
      status: 'On Hold',
      items: [
        { name: 'Product E', quantity: 1, price: 99.99 },
      ],
      shippingMethod: 'Standard Shipping',
      estimatedDelivery: 'July 20, 2024',
      customerName: 'Emily Brown',
      customerEmail: 'emilybrown@example.com',
      shippingAddress: {
        street: '101 Pine St',
        city: 'Villageville',
        state: 'FL',
        zip: '98765',
        country: 'USA',
      },
    },
  ];
  