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
