// Task:
// Implement a function processOrders(data) that:
// Filters orders with status === 'completed'.
// Calculates totalPrice = price * quantity.
// Removes duplicates by orderId.
// Sorts by total price (descending).
// Returns { orderId, totalPrice }.

// OUTPUT:
// [
//    { orderId: 1, totalPrice: 200 }
//    { orderId: 3, totalPrice: 150 },
// ]

const orders = [
  { orderId: 1, price: 100, quantity: 2, status: "completed" },
  { orderId: 2, price: 50, quantity: 1, status: "pending" },
  { orderId: 1, price: 10, quantity: 2, status: "completed" },
  { orderId: 3, price: 30, quantity: 5, status: "completed" },
];

function processOrder(orders) {
  return (
    orders
      // Filter completed orders
      .filter((order) => order.status === "completed")

      // Calculate totalPrice
      .map((order) => ({ ...order, totalPrice: order.price * order.quantity }))

      // Remove duplicates
      .filter(
        (order, index, arr) =>
          index === arr.findIndex((item) => item.orderId === order.orderId)
      )

      // Sort by totalPrice (descending)
      .sort((a, b) => b.totalPrice - a.totalPrice)

      // Return only required fields
      .map((order) => ({
        orderId: order.orderId,
        totalPrice: order.totalPrice,
      }))
  );
}

const processedOrders = processOrder(orders);
console.log("processedOrders", processedOrders);
