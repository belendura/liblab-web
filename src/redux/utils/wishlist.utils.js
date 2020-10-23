export const updateWishlist = (wishlistItems, item) => {
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) =>
      wishlistItem.Reference === item.Reference &&
      wishlistItem.Color.name === item.Color.name
  );

  if (existingWishlistItem) {
    return wishlistItems.filter(
      (wishlistItem) =>
        !(
          wishlistItem.Reference === item.Reference &&
          wishlistItem.Color.name === item.Color.name
        )
    );
  } else {
    return [
      ...wishlistItems,
      {
        ...item,
        quantity: 1,
      },
    ];
  }
};
