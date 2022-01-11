const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const numeroDeAnimais = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return numeroDeAnimais;
  }
}

module.exports = countAnimals;
