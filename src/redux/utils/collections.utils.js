const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};

export const updatePictures = (pictures, shopItemsPictures) => {
  const updatedPictures = { ...pictures, shopItemsPictures };
  return updatedPictures;
};

export const getAvailableUnits = (sizes) => {
  const availableUnits = sizes.reduce((accumulator, sizeItem) => {
    return (accumulator += sizeItem.units);
  }, 0);
  return availableUnits;
};

const getAvailableColors = (shopItems, reference) => {
  const availableColors = shopItems.reduce((accumulator, shopItem) => {
    if (shopItem.reference === reference) {
      accumulator = [...accumulator, shopItem.color];
    }
    return accumulator;
  }, []);
  return availableColors;
};

export const getAvailableColorsShopItems = (shopItems) => {
  const extendedShopItems = shopItems.reduce((accumulator, shopItem) => {
    return (accumulator = [
      ...accumulator,
      {
        ...shopItem,
        availableColors: getAvailableColors(shopItems, shopItem.reference),
      },
    ]);
  }, []);
  return extendedShopItems;
};

export const getExtendedShopItems = (shopItems) => {
  const extendedShopItems = shopItems.reduce((accumulator, shopItem) => {
    return (accumulator = [
      ...accumulator,
      {
        ...shopItem,
        lastPrice: getSalePrice(shopItem.price, shopItem.discount),
        availableUnits: getAvailableUnits(shopItem.sizes),
      },
    ]);
  }, []);
  return extendedShopItems;
};

export const updateShopItemsWishlist = (shopItems, wishlistItems) => {
  const updatedShopItems = shopItems.reduce((accumulator, shopItem) => {
    shopItem.wishlist = false;

    wishlistItems.length &&
      wishlistItems.map((wishlistItem) => {
        if (wishlistItem.id === shopItem.id) {
          return (shopItem.wishlist = true);
        }
      });

    accumulator.push(shopItem);
    return accumulator;
  }, []);

  return updatedShopItems;
};

export const toggleShopItemsWishlist = (shopItems, item) => {
  const updatedShopItems = shopItems.map((shopItem) => {
    if (shopItem.id === item.id) shopItem.wishlist = !item.wishlist;

    return shopItem;
  });
  return updatedShopItems;
};

export const setShopItemsOrder = (
  shopItems,
  ascendingOrder,
  descendingOrder
) => {
  // if (!ShopItems) return;
  let updatedShopItems = [];
  updatedShopItems = shopItems.map((item) => {
    return item;
  });
  if (ascendingOrder)
    return updatedShopItems.sort((i, j) => {
      return i.lastPrice - j.lastPrice;
    });
  else if (descendingOrder)
    return updatedShopItems.sort((i, j) => {
      return j.lastPrice - i.lastPrice;
    });
  return updatedShopItems;
};

export const setShopItemsColorsFilter = (shopItems, colors) => {
  return (
    (!colors.length && shopItems) ||
    (colors.length &&
      shopItems.reduce((accu, shopItem) => {
        colors.includes(shopItem.color.code) && accu.push(shopItem);
        return accu;
      }, []))
  );
};

export const setShopItemsSizesFilter = (shopItems, sizes) => {
  return (
    (!sizes.length && shopItems) ||
    (sizes.length &&
      shopItems.reduce((accu, shopItems) => {
        shopItems.sizes.map((sizeItem) => {
          return sizes.includes(sizeItem.size) && accu.push(shopItems);
        });
        return accu;
      }, []))
  );
};

export const setShopItemsFitFilter = (shopItems, fit) => {
  return (
    (!fit.length && shopItems) ||
    (fit.length &&
      shopItems.reduce((accu, shopItem) => {
        fit.includes(shopItem.fit) && accu.push(shopItem);
        return accu;
      }, []))
  );
};

export const setShopItemsFilter = (shopItems, colors, sizes, fit) => {
  const filteredColorsShopItems = setShopItemsColorsFilter(shopItems, colors);

  const filteredSizesShopItems = setShopItemsSizesFilter(shopItems, sizes);

  const filteredFitShopItems = setShopItemsFitFilter(shopItems, fit);

  const newShopItems = filteredSizesShopItems.reduce((accu, sizeItem) => {
    filteredColorsShopItems.filter((colorItem) => {
      if (sizeItem.color.code === colorItem.color.code)
        return filteredFitShopItems.filter((fitItem) => {
          if (
            sizeItem.color.code === colorItem.color.code &&
            fitItem.fit === sizeItem.fit
          )
            return accu.push(sizeItem);
        });
    });
    return accu;
  }, []);
  const filteredShopItems = newShopItems.reduce((accum, item) => {
    return accum.includes(item) ? accum : [...accum, item];
  }, []);

  return filteredShopItems;
};

export const getFilteredColorOptions = (
  shopItems,
  searchParams,
  condition,
  sizes,
  fit
) => {
  const newShopItems = [...shopItems];
  if (condition) {
    newShopItems.filter((shopItem) => shopItem.condition === true);
  }

  let searchedShopItems = [...newShopItems];
  if (searchParams) {
    searchedShopItems = newShopItems.filter((item) => {
      const searchParamsArray = searchParams.split(" ");
      return searchParamsArray.reduce((accum, searchParamsItem) => {
        const searchParamsRE = new RegExp(`\\b${searchParamsItem}\\b`, "gi");
        if (item["search"].search(searchParamsRE) !== -1) {
          accum = true;
        } else {
          accum = false;
        }
        return accum;
      }, 0);
    });
  }

  const filteredShopItems = searchedShopItems.reduce(
    (accumulator, shopItem) => {
      sizes.length &&
        fit.length &&
        sizes.forEach((sizeItem) => {
          if (shopItem.sizes.size === sizeItem)
            fit.forEach((fitItem) => {
              if (shopItem.fit === fitItem)
                accumulator = [...accumulator, shopItem.color];
              return accumulator;
            });
        });
      !sizes.length &&
        fit.length &&
        fit.forEach((fitItem) => {
          if (shopItem.fit === fitItem)
            accumulator = [...accumulator, shopItem.color];
          return accumulator;
        });
      sizes.length &&
        !fit.length &&
        sizes.forEach((sizeItem) => {
          shopItem.sizes.forEach((item) => {
            if (item.size === sizeItem)
              accumulator = [...accumulator, shopItem.color];
            return accumulator;
          });
        });
      !sizes.length &&
        !fit.length &&
        shopItem &&
        accumulator.push(shopItem.color);
      return accumulator;
    },
    []
  );

  const updatedShopItems = filteredShopItems.reduce((accum, item) => {
    if (accum.some((newItem) => newItem.code === item.code)) {
      accum = [...accum];
    } else {
      accum = [...accum, item];
    }
    return accum;
  }, []);
  return updatedShopItems;
};

export const getFilteredSizeOptions = (
  shopItems,
  searchParams,
  condition,
  colors,
  fit
) => {
  const newShopItems = [...shopItems];
  if (condition) {
    newShopItems.filter((shopItem) => shopItem.condition === true);
  }
  let searchedShopItems = [...newShopItems];
  if (searchParams) {
    searchedShopItems = newShopItems.filter((item) => {
      const searchParamsArray = searchParams.split(" ");
      return searchParamsArray.reduce((accum, searchParamsItem) => {
        const searchParamsRE = new RegExp(`\\b${searchParamsItem}\\b`, "gi");
        if (item["search"].search(searchParamsRE) !== -1) {
          accum = true;
        } else {
          accum = false;
        }
        return accum;
      }, 0);
    });
  }
  const filteredShopItems = searchedShopItems.reduce(
    (accumulator, shopItem) => {
      colors.length &&
        fit.length &&
        colors.forEach((colorItem) => {
          if (shopItem.color.code === colorItem)
            fit.forEach((fitItem) => {
              if (shopItem.fit === fitItem)
                shopItem.sizes.map((item) => {
                  accumulator = [...accumulator, item.size];
                });
              return accumulator;
            });
        });
      !colors.length &&
        fit.length &&
        fit.forEach((fitItem) => {
          if (shopItem.fit === fitItem)
            shopItem.sizes.map((item) => {
              accumulator = [...accumulator, item.size];
            });
          return accumulator;
        });
      colors.length &&
        !fit.length &&
        colors.forEach((colorItem) => {
          if (shopItem.color.code === colorItem)
            shopItem.sizes.map((item) => {
              accumulator = [...accumulator, item.size];
            });
          return accumulator;
        });
      !colors.length &&
        !fit.length &&
        shopItem &&
        shopItem.sizes.map((item) => {
          accumulator = [...accumulator, item.size];
        });
      return accumulator;
    },
    []
  );
  const updatedShopItems = filteredShopItems.reduce((accum, item) => {
    return accum.includes(item) ? accum : [...accum, item];
  }, []);
  return updatedShopItems;
};

export const getFilteredFitOptions = (
  shopItems,
  searchParams,
  condition,
  colors,
  sizes
) => {
  const newShopItems = [...shopItems];
  if (condition) {
    newShopItems.filter((shopItem) => shopItem.condition === true);
  }
  let searchedShopItems = [...newShopItems];
  if (searchParams) {
    searchedShopItems = newShopItems.filter((item) => {
      const searchParamsArray = searchParams.split(" ");
      return searchParamsArray.reduce((accum, searchParamsItem) => {
        const searchParamsRE = new RegExp(`\\b${searchParamsItem}\\b`, "gi");
        if (item["search"].search(searchParamsRE) !== -1) {
          accum = true;
        } else {
          accum = false;
        }
        return accum;
      }, 0);
    });
  }
  const filteredShopItems = searchedShopItems.reduce(
    (accumulator, shopItem) => {
      colors.length &&
        sizes.length &&
        colors.forEach((colorItem) => {
          if (shopItem.color.code === colorItem)
            sizes.forEach((sizeItem) => {
              shopItem.sizes.forEach((item) => {
                if (item.size === sizeItem)
                  accumulator = [...accumulator, shopItem.fit];
                return accumulator;
              });
            });
        });
      !colors.length &&
        sizes.length &&
        sizes.forEach((sizeItem) => {
          shopItem.sizes.forEach((item) => {
            if (item.size === sizeItem)
              accumulator = [...accumulator, shopItem.fit];
            return accumulator;
          });
        });
      colors.length &&
        !sizes.length &&
        colors.forEach((colorItem) => {
          if (shopItem.color.code === colorItem)
            accumulator = [...accumulator, shopItem.fit];
          return accumulator;
        });
      !colors.length &&
        !sizes.length &&
        shopItem &&
        accumulator.push(shopItem.fit);
      return accumulator;
    },
    []
  );
  const updatedShopItems = filteredShopItems.reduce((accum, item) => {
    return accum.includes(item) ? accum : [...accum, item];
  }, []);
  return updatedShopItems;
};
