const OrderFinder = {
  find: (orderId, orders = []) => {
    const radix = 10;
    let order;

    order = orders.find((order) => {
      return (parseInt(order.id, radix) === parseInt(orderId, radix));
    });

    return order;
  }
}

export default OrderFinder;
