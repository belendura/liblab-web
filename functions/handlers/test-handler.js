exports.testCollectionHandler = (req, res) => {
  const { query, params } = req;
  console.log('test collection handler')
  console.log(params);
  console.log(query);
  res.status(200).send();
};

exports.testSectionHandler = (req, res) => {
  const { query, params } = req;
  console.log('test section handler')
  console.log(params);
  console.log(query);
  res.status(200).send();
};
