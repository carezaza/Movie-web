export const AddItemToCart = (item, myCarts) => {
  const existItem = myCarts.find((myItem) => myItem.id === item.id);
  if (existItem) {
    const newCarts = myCarts.map((myItem) => {
      if (myItem.id === item.id) {
        return { ...item, quantity: myItem.quantity + 1 };
      }
      return myItem;
    });
    return newCarts;
  }

  return [...myCarts, { ...item, quantity: 1 }];
};

export const DecreaseItem = (itemId, myCarts) => {
  const myItem = myCarts.find((item) => item.id === itemId);
  if (myItem.quantity > 1) {
    return myCarts.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }

  return myCarts.filter((item) => item.id !== itemId);
};

export const GetTotal = (carts) => {
  const totalItems = carts.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = carts.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  return { totalItems, totalPrice };
};
