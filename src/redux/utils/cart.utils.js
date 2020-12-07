export const addItemToCart = (cartItems, cartItemToAdd, selectedSize) => {
  const {
    id,
    reference,
    url,
    name,
    description,
    price,
    sale,
    lastPrice,
    color,
  } = cartItemToAdd;

  const existingCartItem =
    cartItems.length &&
    cartItems.find(
      (cartItem) => cartItem.id === id && cartItem.selectedSize === selectedSize
    );

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
        description: description,
        price: price,
        lastPrice: lastPrice,
        sale: sale,
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
