const { createSizeRequestDocument, getSearchResults } = require("../helpers/firestore");

//RequestSize
exports.postSizeRequest = async (req, res) => {
  // console.log("body", req.body);
  const { itemCredentials, userCredentials } = req.body;

  try {
    await createSizeRequestDocument(itemCredentials, userCredentials);
    return res.status(200).send("Request successfully processed");
  } catch (error) {
    return res.status(500).send(`Error posting size request ${error}`);
  }
};



//Search
exports.fetchSearch= async (req, res) => {                                  
  const { search } = req.body;                                                                                                 
  const searchParams=search.split(" ")
  console.log("searchParams",searchParams)

  try {
   const results= await getSearchResults(searchParams);
    return res.status(200).send({results});
  } catch (error) {
    return res.status(500).send(`Error getting search results ${error}`);
  }
};