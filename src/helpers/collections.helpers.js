export const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};

export const getOrderedFilteredSection = (
  filteredSection,
  ascendingOrdered,
  descendingOrdered
) => {
  if (!descendingOrdered && !ascendingOrdered) {
    return filteredSection;
  } else if (ascendingOrdered) {
    return filteredSection.sort((i, j) => {
      return i[0].LastPrice - j[0].LastPrice;
    });
  } else if (descendingOrdered) {
    return filteredSection.sort((i, j) => {
      return j[0].LastPrice - i[0].LastPrice;
    });
  }
};

export const getAvailableUnits = (sizes) => {
  const availableUnits = sizes.reduce((accumulator, sizeItem) => {
    return (accumulator += sizeItem.units);
  }, 0);
  return availableUnits;
};

export const getAvailableColors = (section, name) => {
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
