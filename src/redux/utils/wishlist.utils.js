export const toggleItem = (wishlistItems, item) => {
  const {
    Reference,
    Url,
    Name,
    LastPrice,
    Color,
    Sizes,
    NewItem,
    Sale,
    Price,
    Discount,
    AvailableUnits,
    AvailableColors,
  } = item;

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
        Price: Price,
        LastPrice: LastPrice,
        Color: Color,
        Sizes: Sizes,
        NewItem: NewItem,
        Discount: Discount,
        Sale: Sale,
        AvailableUnits: AvailableUnits,
        AvailableColors: AvailableColors,
        quantity: 1,
      },
    ];
  }
};
