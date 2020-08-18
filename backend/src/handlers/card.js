const CardModel = require('../models/card');

const formatter = card => ({
  type: 'card',
  id: card.id,
  attributes: {
    name: card.name,
    front: card.front,
    back: card.back
  },
  links: {
    self: `/card/${card.id}`
  }
});

const getAllCards = async (request, h) => {
  const cards = await CardModel.find({});
  return { data: cards.map(formatter) };
};

const getCard = async (request, h) => {
  const card = await CardModel.findById(request.params.id);
  return { data: formatter(card) };
};

const saveCard = async (request, h) => {
  const {name, front, back } = request.payload;
  const card = new CardModel;

  card.name = name;
  card.front = front;
  card.back = back;

  await card.save();

  return h.response(formatter(card)).code(201);
};

const removeCard = async (request, h) => {
  await CardModel.findOneAndDelete({ _id: request.params.id});
  return h.response().code(200);
}

module.exports = {
  getAllCards,
  getCard,
  saveCard,
  removeCard
};