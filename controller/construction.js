const constructionService = require('../service/construction');

const getAllConstruction = async (_req, res) => {
  try {
    const tasks = await constructionService.getAllList();
    res.status(200).json(tasks);
  } catch (error) {
    console.log({message: error.message});
    res.status(404).json({ message: 'Not Fount List' });
  }
};

const createConstruction = async (req, res) => {
  try {
    console.log("zzzzzzz", req.body);
    const {nomeObra, cidade, rua, numero} = req.body;
    const task = await constructionService.createOne(nomeObra, cidade, rua, numero);
    res.status(200).json(task);
  } catch (error) {
    console.log({message: error.message});
    res.status(404).json({ message: 'Not Created Task' });
  }
};

const updateConstruction = async (req, res) => {
  try {
    const {id, nomeObra, cidade, rua, numero} = req.body;
    const tasks = await constructionService.updateOne(id, nomeObra, cidade, rua, numero);
    res.status(200).json(tasks);
  } catch (error) {
    console.log({message: error.message});
    res.status(404).json({ message: 'Not Fount Task' });
  }
};

const deleteConstruction = async (req, res) => {
  try {
    const { id } = req.body;
    const task = await constructionService.deleteOne(id);
    res.status(200).json(task);
  } catch (error) {
    console.log({message: error.message});
    res.status(404).json({ message: 'Not Delete Task' });
  }
};

module.exports = {
  getAllConstruction,
  updateConstruction,
  createConstruction,
  deleteConstruction
};