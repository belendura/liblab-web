export const toggleItem = (wishlistItems, item) => {
  const { Reference, Url, Name, LastPrice, Color } = item;

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
        Reference: Reference,
        Url: Url[0],
        Name: Name,
        LastPrice: LastPrice,
        Color: Color,
        quantity: 1,
      },
    ];
  }
};
