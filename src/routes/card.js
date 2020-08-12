const cardHandler = require('../handlers/card');

module.exports = [
  {
    method: 'GET',
    path: '/card',
    handler: cardHandler.getAllCards
  },
  {
    method: 'GET',
    path: '/card/{id}',
    handler: cardHandler.getCard
  },
  {
    method: 'POST',
    path: '/card',
    handler: cardHandler.saveCard
  },
  {
    method: 'DELETE',
    path: '/card/{id}',
    handler: cardHandler.removeCard
  }
]