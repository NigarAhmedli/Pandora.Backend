import basketModel from "../models/basketModels.js"

const getBasket = async (req, res) => {
  const basket = await basketModel.find();
  res.json(basket);
};

const postBasket = async (req, res) => {
  const newBasket = {
    ...req.body,
    quantity: req.body.quantity || 1 
  };

  const createdItem = await basketModel.create(newBasket);
  res.json(createdItem);  // 👈 cavab olaraq yaradılmış item-i göndər
};

const deleteBasket = async (req, res) => {
  const { id } = req.params;
  await basketModel.findByIdAndDelete(id);
  res.json('delete');
};

const updateBasket = async (req, res) => {
  const { id } = req.params;
  const updatedItem = await basketModel.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedItem);
};

export { getBasket, postBasket, deleteBasket, updateBasket };
