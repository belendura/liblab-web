export const addItemToCart = (cartItems, cartItemToAdd, selectedSize) => {
  console.log("cartItemToAdd", cartItemToAdd);
  console.log("selectedSize", selectedSize);
  const { Reference, Url, Name, LastPrice, Color } = cartItemToAdd;

  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.Reference === cartItemToAdd.Reference &&
      cartItem.Color.name === cartItemToAdd.Color.name &&
      cartItem.selectedSize === selectedSize
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.Reference === cartItemToAdd.Reference &&
      cartItem.Color.name === cartItemToAdd.Color.name &&
      cartItem.selectedSize === selectedSize
        ? {
            Reference: Reference,
            Url: Url[0],
            Name: Name,
            LastPrice: LastPrice,
            Color: Color,
            selectedSize: selectedSize,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  } else {
    return [
      ...cartItems,
      {
        Reference: Reference,
        Url: Url[0],
        Name: Name,
        LastPrice: LastPrice,
        Color: Color,
        selectedSize: selectedSize,
        quantity: 1,
      },
    ];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.Reference === cartItemToRemove.Reference &&
      cartItem.Color.name === cartItemToRemove.Color.name &&
      cartItem.selectedSize === cartItemToRemove.selectedSize
  );

  if (existingCartItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.Reference === cartItemToRemove.Reference &&
      cartItem.Color.name === cartItemToRemove.Color.name &&
      cartItem.selectedSize === cartItemToRemove.selectedSize
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  } else {
    return cartItems.filter(
      (cartItem) =>
        cartItem.Reference !== cartItemToRemove.Reference ||
        (cartItem.Reference === cartItemToRemove.Reference &&
          cartItem.Color.name !== cartItemToRemove.Color.name) ||
        (cartItem.Reference === cartItemToRemove.Reference &&
          cartItem.Color.name === cartItemToRemove.Color.name &&
          cartItem.selectedSize !== cartItemToRemove.selectedSize)
    );
  }
};
