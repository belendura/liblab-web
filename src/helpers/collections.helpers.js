export const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};

export const getOrderedFilteredSectionUpdated = (
  filteredSectionUpdated,
  ascendingOrdered,
  descendingOrdered
) => {
  if (!descendingOrdered && !ascendingOrdered) {
    return filteredSectionUpdated;
  } else if (ascendingOrdered) {
    return filteredSectionUpdated.sort(function (i, j) {
      return i.LastPrice - j.LastPrice;
    });
  } else if (descendingOrdered) {
    return filteredSectionUpdated.sort(function (i, j) {
      return j.LastPrice - i.LastPrice;
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
  const availableColors = section
    .reduce((accumulator, arrayItem) => {
      if (arrayItem["Name"] === name) {
        accumulator = [...accumulator, arrayItem["Color"]];
      }
      return accumulator;
    }, [])
    .reduce((accum, index) => {
      return accum.includes(index) ? accum : [...accum, index];
    }, []);
  return availableColors;
};
