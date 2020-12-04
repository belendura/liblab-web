export const updateWishlist = (wishlistItems, item) => {
  const existingWishlistItem = wishlistItems.find(
    (wishlistItem) =>
      wishlistItem.reference === item.reference &&
      wishlistItem.color.name === item.color.name
  );

  if (existingWishlistItem) {
    return wishlistItems.filter(
      (wishlistItem) =>
        !(
          wishlistItem.reference === item.reference &&
          wishlistItem.color.name === item.color.name
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
