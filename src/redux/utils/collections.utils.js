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
          wishlistItem.id === sectionItem.id
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
      sectionItem.id === item.id
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

export const getFilteredColorOptions=  (section, searchParams, condition, sizes, fit)=>{
 
const newSection= [...section]
  if (condition){
  newSection.filter(arrayItem=>arrayItem.condition===true)
  }

  let searchedSection=[...newSection];
if (searchParams){
  searchedSection= newSection.filter(item => {
  const searchParamsArray=  searchParams.split(" ")
return searchParamsArray.reduce((accum,searchParamsItem)=>{
    const searchParamsRE= new RegExp(`\\b${searchParamsItem}\\b`, 'gi');
  if (item["search"].search(searchParamsRE) !== -1){
     accum=true}
     else{
      accum=false;
     }
     return accum;
  },0)
})
}

const filteredSection=searchedSection.reduce((accumulator, arrayItem) => {
  sizes.length &&
    fit.length &&
    sizes.forEach((sizeItem) => {
      if (arrayItem.sizes.size === sizeItem)
        fit.forEach((fitItem) => {
          if (arrayItem.fit === fitItem)
            accumulator = [...accumulator, arrayItem.color];
          return accumulator;
        });
    });
  !sizes.length &&
    fit.length &&
    fit.forEach((fitItem) => {
      if (arrayItem.fit === fitItem)
        accumulator = [...accumulator, arrayItem.color];
      return accumulator;
    });
  sizes.length &&
    !fit.length &&
    sizes.forEach((sizeItem) => {
      arrayItem.sizes.forEach((item) => {
        if (item.size === sizeItem)
          accumulator = [...accumulator, arrayItem.color];
        return accumulator;
      });
    });
  !sizes.length &&
    !fit.length &&
    arrayItem &&
    accumulator.push(arrayItem.color);
  return accumulator;
}, [])

const updatedSection=filteredSection.reduce((accum, item) => {
  if (accum.some((newItem) => newItem.code === item.code)) {
    accum = [...accum];
  } else {
    accum = [...accum, item];
  }
  return accum;
}, [])
return updatedSection;
}

export const getFilteredSizeOptions=  (section, searchParams, condition, colors, fit)=>{
  const newSection= [...section];
    if (condition){
    newSection.filter(arrayItem=>arrayItem.condition===true)
    }
    let searchedSection=[...newSection];
    if (searchParams){
      searchedSection= newSection.filter(item => {
      const searchParamsArray=  searchParams.split(" ")
    return searchParamsArray.reduce((accum,searchParamsItem)=>{
        const searchParamsRE= new RegExp(`\\b${searchParamsItem}\\b`, 'gi');
      if (item["search"].search(searchParamsRE) !== -1){
         accum=true}
         else{
          accum=false;
         }
         return accum;
      },0)
    })
    }
    const filteredSection=searchedSection.reduce((accumulator, arrayItem) => {
      colors.length &&
        fit.length &&
        colors.forEach((colorItem) => {
          if (arrayItem.color.code === colorItem)
            fit.forEach((fitItem) => {
              if (arrayItem.fit === fitItem)
                arrayItem.sizes.map((item) => {
                  accumulator = [...accumulator, item.size];
                });
              return accumulator;
            });
        });
      !colors.length &&
        fit.length &&
        fit.forEach((fitItem) => {
          if (arrayItem.fit === fitItem)
            arrayItem.sizes.map((item) => {
              accumulator = [...accumulator, item.size];
            });
          return accumulator;
        });
      colors.length &&
        !fit.length &&
        colors.forEach((colorItem) => {
          if (arrayItem.color.code === colorItem)
            arrayItem.sizes.map((item) => {
              accumulator = [...accumulator, item.size];
            });
          return accumulator;
        });
      !colors.length &&
        !fit.length &&
        arrayItem &&
        arrayItem.sizes.map((item) => {
          accumulator = [...accumulator, item.size];
        });
      return accumulator;
    }, [])
    const updatedSection=filteredSection.reduce((accum, item) => {
      return accum.includes(item) ? accum : [...accum, item];
    }, [])
return updatedSection;
}

export const getFilteredFitOptions=  (section, searchParams,condition, colors, sizes)=>{
    const newSection= [...section];
      if (condition){
      newSection.filter(arrayItem=>arrayItem.condition===true)
      }
      let searchedSection=[...newSection];
      if (searchParams){
        searchedSection= newSection.filter(item => {
        const searchParamsArray=  searchParams.split(" ")
      return searchParamsArray.reduce((accum,searchParamsItem)=>{
          const searchParamsRE= new RegExp(`\\b${searchParamsItem}\\b`, 'gi');
        if (item["search"].search(searchParamsRE) !== -1){
           accum=true}
           else{
            accum=false;
           }
           return accum;
        },0)
      })
      }
      const filteredSection=searchedSection.reduce((accumulator, arrayItem) => {
        colors.length &&
          sizes.length &&
          colors.forEach((colorItem) => {
            if (arrayItem.color.code === colorItem)
              sizes.forEach((sizeItem) => {
                arrayItem.sizes.forEach((item) => {
                  if (item.size === sizeItem)
                    accumulator = [...accumulator, arrayItem.fit];
                  return accumulator;
                });
              });
          });
        !colors.length &&
          sizes.length &&
          sizes.forEach((sizeItem) => {
            arrayItem.sizes.forEach((item) => {
              if (item.size === sizeItem)
                accumulator = [...accumulator, arrayItem.fit];
              return accumulator;
            });
          });
        colors.length &&
          !sizes.length &&
          colors.forEach((colorItem) => {
            if (arrayItem.color.code === colorItem)
              accumulator = [...accumulator, arrayItem.fit];
            return accumulator;
          });
        !colors.length &&
          !sizes.length &&
          arrayItem &&
          accumulator.push(arrayItem.fit);
        return accumulator;
      }, [])
      const updatedSection=filteredSection.reduce((accum, item) => {
        return accum.includes(item) ? accum : [...accum, item];
      }, [])
      return updatedSection;
}

