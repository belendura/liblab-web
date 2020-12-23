const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};

export const updatePictures = (pictures, sectionPictures) => {
  const updatedPictures = { ...pictures, sectionPictures };
  return updatedPictures;
};

export const getAvailableUnits = (sizes) => {
  const availableUnits = sizes.reduce((accumulator, sizeItem) => {
    return (accumulator += sizeItem.units);
  }, 0);
  return availableUnits;
};

const getAvailableColors = (section, reference) => {
  const availableColors = section.reduce((accumulator, arrayItem) => {
    if (arrayItem.reference === reference) {
      accumulator = [...accumulator, arrayItem.color];
    }
    return accumulator;
  }, []);
  return availableColors;
};

export const getAvailableColorsSection = (section) => {
  const extendedSection = section.reduce((accumulator, item) => {
    return (accumulator = [
      ...accumulator,
      {
        ...item,
        availableColors: getAvailableColors(section, item.reference),
       },
    ]);
  }, []);
  return extendedSection;
};

export const getExtendedSection = (section) => {
  const extendedSection = section.reduce((accumulator, item) => {
    return (accumulator = [
      ...accumulator,
      {
        ...item,
        lastPrice: getSalePrice(item.price, item.discount),
        availableUnits: getAvailableUnits(item.sizes),
      },
    ]);
  }, []);
  return extendedSection;
}

export const updateSectionWishlist = (section, wishlistItems) => {
 
  const updatedSection = section.reduce((accumulator, sectionItem) => {
    sectionItem.wishlist = false;

    wishlistItems.length &&
      wishlistItems.map((wishlistItem) => {
        if (
          wishlistItem.name === sectionItem.name &&
          wishlistItem.color.name === sectionItem.color.name
        ) {
          return (sectionItem.wishlist = true);
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
      sectionItem.reference === item.reference &&
      sectionItem.color === item.color
    )
      sectionItem.wishlist = !sectionItem.wishlist;

    return sectionItem;
  });
  return newSection;
};

export const setSectionOrder = (section, ascendingOrder, descendingOrder) => {
  // if (!section) return;
  let updatedSection = [];
  updatedSection = section.map((item) => {
    return item;
  });
  if (ascendingOrder)
    return updatedSection.sort((i, j) => {
      return i.lastPrice - j.lastPrice;
    });
  else if (descendingOrder)
    return updatedSection.sort((i, j) => {
      return j.lastPrice - i.lastPrice;
    });
  return updatedSection;
};

export const setSectionColorsFilter = (section, colors) => {
  return (
    (!colors.length && section) ||
    (colors.length &&
      section.reduce((accu, sectionItem) => {
        colors.includes(sectionItem.color.code) && accu.push(sectionItem);
        return accu;
      }, []))
  );
};

export const setSectionSizesFilter = (section, sizes) => {
  return (
    (!sizes.length && section) ||
    (sizes.length &&
      section.reduce((accu, sectionItem) => {
        sectionItem.sizes.map((sizeItem) => {
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
        fit.includes(sectionItem.fit) && accu.push(sectionItem);
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
      if (sizeItem.color.code === colorItem.color.code)
        return filteredFitSection.filter((fitItem) => {
          if (
            sizeItem.color.code === colorItem.color.code &&
            fitItem.fit === sizeItem.fit
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
