import queryString from "query-string";
import { fromServerEnumerate } from "../../../firebase/enumerate";

const nonFeaturedCollections = ["women", "men", "unisex"];

export const getPathName = (key) => {
  const query = {
    labels: `${fromServerEnumerate[key]}`,
  };

  return !nonFeaturedCollections.some((element) => element === key)
    ? `/shop/featured?${queryString.stringify(query, {
        arrayFormat: "comma",
      })}`
    : `/shop/${key}`;
};
