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

export const getExtendedSection = (section) => {
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
    if (
      sectionItem.Reference === item.Reference &&
      sectionItem.Color === item.Color
    )
      sectionItem.Wishlist = !sectionItem.Wishlist;

    return sectionItem;
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
      return i.LastPrice - j.LastPrice;
    });
  else if (descendingOrder)
    return updatedSection.sort((i, j) => {
      return j.LastPrice - i.LastPrice;
    });
  return updatedSection;
};

export const setSectionColorsFilter = (section, colors) => {
  return (
    (!colors.length && section) ||
    (colors.length &&
      section.reduce((accu, sectionItem) => {
        colors.includes(sectionItem.Color.name) && accu.push(sectionItem);
        return accu;
      }, []))
  );
};

export const setSectionSizesFilter = (section, sizes) => {
  return (
    (!sizes.length && section) ||
    (sizes.length &&
      section.reduce((accu, sectionItem) => {
        sectionItem.Sizes.map((sizeItem) => {
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
        fit.includes(sectionItem.Fit) && accu.push(sectionItem);
        return accu;
      }, []))
  );
};

export const setSectionFilter = (section, colors, sizes, fit) => {
  const filteredColorsSection = setSectionColorsFilter(section, colors);

  const filteredSizesSection = setSectionSizesFilter(section, sizes);

  const filteredFitSection = setSectionFitFilter(section, fit);

  const newSection = filteredSizesSection.reduce((accu, sizeItem) => {
    filteredColorsSection.filter((colorItem) => {
      if (sizeItem.Color.name === colorItem.Color.name)
        return filteredFitSection.filter((fitItem) => {
          if (
            sizeItem.Color.name === colorItem.Color.name &&
            fitItem.Fit === sizeItem.Fit
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
