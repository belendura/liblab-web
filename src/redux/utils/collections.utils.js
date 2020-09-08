const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};

const getAvailableUnits = (sizes) => {
  const availableUnits = sizes.reduce((accumulator, sizeItem) => {
    return (accumulator += sizeItem.units);
  }, 0);
  return availableUnits;
};

const getAvailableColors = (section, name) => {
  const availableColors = section.reduce((accumulator, arrayItem) => {
    if (arrayItem["Name"] === name) {
      accumulator = [...accumulator, arrayItem["Color"]];
    }
    return accumulator;
  }, []);
  return availableColors;
};

export const getItems = (section, name, color) => {
  const availableItems = section.reduce((accumulator, arrayItem) => {
    const extendedItem = {
      ...arrayItem,
      LastPrice: getSalePrice(arrayItem["Price"], arrayItem["Discount"]),
      AvailableColors: getAvailableColors(section, arrayItem["Name"]),
      AvailableUnits: getAvailableUnits(arrayItem["Sizes"]),
    };
    arrayItem["Name"] === name &&
      arrayItem["Color"] === color &&
      accumulator.unshift(extendedItem);
    arrayItem["Name"] === name &&
      arrayItem["Color"] !== color &&
      accumulator.push(extendedItem);
    return accumulator;
  }, []);
  return availableItems;
};

export const addToWishlist = (section, item) => {
  const newSection = section.map((sectionItem) => {
    return sectionItem.Reference === item.Reference &&
      sectionItem.Color === item.Color
      ? { ...sectionItem, Wishlist: !sectionItem.Wishlist }
      : sectionItem;
  });
  return newSection;
};
