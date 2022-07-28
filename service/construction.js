const { Construction } = require('../models');

const getAllList = async () => {
  const tasks = await Construction.findAll();
  if (!tasks) return null;
  return tasks;
};

const createOne = async (nomeObra, cidade, rua, numero) => {
  const task = await Construction.create({ nomeObra, cidade, rua, numero });
  if (!task) return null;
  return task;
};

const updateOne = async (id, nomeObra, cidade, rua, numero) => {
  const task = await Construction.findOne({ where: {id} });
  const updatedTask = await task.update({ nomeObra, cidade, rua, numero });
  if (!updatedTask) return null;
  return updatedTask;
};

const deleteOne = async (id) => {
  const task = await Construction.destroy({ where: { id }});
  if (!task) return null;
  return task;
};

module.exports = { getAllList, updateOne, createOne, deleteOne };