const { getfeaturedShopMenu } = require("./utils/get-featured-shop-menu");
const { getShopMenu } = require("./utils/get-shop-menu");
const { getHeaderPictures } = require("./utils/get-header-pictures");

exports.getShopMenuDocuments = async () => {
  try {
    const shopMenu = await getShopMenu();
    const featuredShopMenu = await getfeaturedShopMenu();
    const shopMenuPictures = await getHeaderPictures();
    return { shopMenu, featuredShopMenu, shopMenuPictures };
  } catch (error) {
    throw new Error(error);
  }
};
