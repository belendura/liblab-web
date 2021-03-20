const isObject = (value) => typeof value === "object";
exports.isEmptyObject = (object) =>
  !isObject(object) || (isObject(object) && Object.keys(object).length === 0);
