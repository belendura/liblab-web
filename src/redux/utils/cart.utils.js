export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log("cartItemToAdd", cartItemToAdd);

  const {
    id,
    reference,
    url,
    name,
    price,
    discount,
    lastPrice,
    color,
    selectedSize,
  } = cartItemToAdd;

  const existingCartItem =
    cartItems.length &&
    cartItems.find(
      (cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize
    );
  console.log("existingCartItem", existingCartItem);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === id && cartItem.selectedSize === selectedSize
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  } else {
    return [
      ...cartItems,
      {
        id: id,
        reference: reference,
        url: url[0],
        name: name,
        price: price,
        discount: discount,
        lastPrice: lastPrice,
        color: color,
        selectedSize: selectedSize,
        quantity: 1,
      },
    ];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const { id, selectedSize } = cartItemToRemove;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === id && cartItem.selectedSize === selectedSize
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter(
      (cartItem) =>
        cartItem.id !== id ||
        (cartItem.id === id && cartItem.selectedSize !== selectedSize)
    );
  }
};
