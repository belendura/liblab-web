export const filterCollection = (section, colors, sizes, fit) => {
  const filteredCollection = section.filter((arrayItem) => {
    return colors.length
      ? colors.find(arrayItem["Color"].name) && arrayItem
      : arrayItem;

    return sizes.length
      ? sizes.find(arrayItem["Sizes"].sizes.forEach((item) => item)) &&
          arrayItem
      : arrayItem;

    return fit.length ? fit.find(arrayItem["Fit"]) && arrayItem : arrayItem;
  });
  return filteredCollection;
};

// export const orderCollectionHighToLow (section) =>{
//     return filtered.section:

// }
