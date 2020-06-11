exports.checkCollectionAndSection = (req, res, next) => {
  const { referer } = req.headers;
  const path = referer.split("/shop/")[1].trim();
  const collection = path.split("/")[0];
  const section = path.split("/")[1];

  if (!collection || !section) {
    return;
  }

  req.body.collection = collection;
  req.body.section = section;
  return next();
};
