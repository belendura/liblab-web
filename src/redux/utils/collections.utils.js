import { selectItem } from "../selectors/collections.selectors";

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

const getExtendedSection = (section) => {
  const extendedSection = section.reduce((accumulator, item) => {
    return (accumulator = [
      ...accumulator,
      {
        ...item,
        LastPrice: getSalePrice(item["Price"], item["Discount"]),
        AvailableColors: getAvailableColors(section, item["Name"]),
        AvailableUnits: getAvailableUnits(item["Sizes"]),
        Wishlist: false,
      },
    ]);
  }, []);
  return extendedSection;
};

const getAvailableColorsItem = (section) => {
  const newItems = section.reduce((accumulator, extendedItem) => {
    const extendedAvailableColorsItem = section.reduce((accu, colorsItem) => {
      extendedItem["Name"] === colorsItem["Name"] &&
        extendedItem["Color"] === colorsItem["Color"] &&
        accu.unshift(colorsItem);

      extendedItem["Name"] === colorsItem["Name"] &&
        extendedItem["Color"] !== colorsItem["Color"] &&
        accu.push(colorsItem);

      return accu;
    }, []);

    accumulator.push(extendedAvailableColorsItem);
    return accumulator;
  }, []);
  return newItems;
};

export const getExtendedItems = (section) => {
  const extendedSection = getExtendedSection(section);
  const newItems = getAvailableColorsItem(extendedSection);
  return newItems;
};

export const updateSectionWishlist = (wishlistItems, item) => {
  wishlistItems.length &&
    wishlistItems.map((wishlistItem) => {
      if (
        wishlistItem["Reference"] === item["Reference"] &&
        wishlistItem["Color"] === item["Color"]
      )
        item["Wishlist"] = true;
    });
  return item["Wishlist"];
};

// export const toggleSectionWishlist = (section, item) => {
//   const newSection = section.map((sectionItem) => {
//     return sectionItem.Reference === item.Reference &&
//       sectionItem.Color === item.Color
//       ? { ...sectionItem, Wishlist: !sectionItem.Wishlist }
//       : sectionItem;
//   });
//   console.log("newSection", newSection);
//   return newSection;
// };

export const toggleSectionWishlist = (section, item) => {
  console.log("item", item);
  const newSection = section.map((sectionItem) => {
    if (sectionItem.length > 1) {
      const indexItem = sectionItem.findIndex((findItem) => {
        return (
          findItem.Reference === item.Reference && findItem.Color === item.Color
        );
      });

      if (indexItem === -1) {
        return sectionItem;
      } else {
        const newObject = {
          ...sectionItem[indexItem],
          Wishlist: !sectionItem[indexItem].Wishlist,
        };
        const newSectionItem = [...sectionItem];
        newSectionItem.splice(indexItem, 1);
        newSectionItem.splice(indexItem, 0, newObject);
        return newSectionItem;
      }
    } else {
      if (
        sectionItem[0].Reference === item.Reference &&
        sectionItem[0].Color === item.Color
      )
        sectionItem[0].Wishlist = !sectionItem[0].Wishlist;

      return sectionItem;
    }
  });
  return newSection;
};

export const setSectionOrder = (section, ascendingOrder, descendingOrder) => {
  let updatedSection = [];
  updatedSection = section.map((item) => {
    return item;
  });
  if (ascendingOrder)
    return updatedSection.sort((i, j) => {
      return i[0].LastPrice - j[0].LastPrice;
    });
  else if (descendingOrder)
    return updatedSection.sort((i, j) => {
      return j[0].LastPrice - i[0].LastPrice;
    });
  return updatedSection;
};
