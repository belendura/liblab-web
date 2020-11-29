const { getScenes } = require("../helpers/firestore");

//Scenes
exports.fetchScenes = async (req, res) => {
  const { section } = req.params;

  try {
    const scenes = await getScenes(section);
    return res.status(200).send(scenes);
  } catch (error) {
    return res.status(500).send(`Error getting scenes from section ${error}`);
  }
};
