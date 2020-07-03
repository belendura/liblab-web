export const getSalePrice = (price, discount) => {
  return Math.round(price - (discount * price) / 100);
};
