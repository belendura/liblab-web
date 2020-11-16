const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};

export const getAvailableUnits = (sizes) => {
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

export const updateSectionWishlist = (section, wishlistItems) => {
  const updatedSection = section.reduce((accumulator, sectionItem) => {
    sectionItem["Wishlist"] = false;

    wishlistItems.length &&
      wishlistItems.map((wishlistItem) => {
        if (
          wishlistItem["Name"] === sectionItem["Name"] &&
          wishlistItem["Color"].name === sectionItem["Color"].name
        ) {
          return (sectionItem["Wishlist"] = true);
        }
      });

    accumulator.push(sectionItem);
    return accumulator;
  }, []);

  return updatedSection;
};

export const toggleSectionWishlist = (section, item) => {
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

export const setSectionColorsFilter = (section, colors) => {
  return (
    (!colors.length && section) ||
    (colors.length &&
      section.reduce((accu, sectionItem) => {
        colors.includes(sectionItem[0].Color.name) && accu.push(sectionItem);
        return accu;
      }, []))
  );
};

export const setSectionSizesFilter = (section, sizes) => {
  return (
    (!sizes.length && section) ||
    (sizes.length &&
      section.reduce((accu, sectionItem) => {
        sectionItem[0].Sizes.map((sizeItem) => {
          return sizes.includes(sizeItem.size) && accu.push(sectionItem);
        });
        return accu;
      }, []))
  );
};

export const setSectionFitFilter = (section, fit) => {
  return (
    (!fit.length && section) ||
    (fit.length &&
      section.reduce((accu, sectionItem) => {
        fit.includes(sectionItem[0].Fit) && accu.push(sectionItem);
        return accu;
      }, []))
  );
};

export const setSectionFilter = (section, colors, sizes, fit) => {
  const filteredColors = setSectionColorsFilter(section, colors);
  const filteredSizes = setSectionSizesFilter(section, sizes);
  const filteredFit = setSectionFitFilter(section, fit);

  const newSection = filteredSizes.reduce((accu, sizeItem) => {
    filteredColors.filter((colorItem) => {
      if (sizeItem[0].Color.name === colorItem[0].Color.name)
        return filteredFit.filter((fitItem) => {
          if (
            sizeItem[0].Color.name === colorItem[0].Color.name &&
            fitItem[0].Fit === sizeItem[0].Fit
          )
            return accu.push(sizeItem);
        });
    });
    return accu;
  }, []);
  const data = newSection.reduce((accum, item) => {
    return accum.includes(item) ? accum : [...accum, item];
  }, []);

  return data;
};
