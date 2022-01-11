const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const numeroDeAnimais = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return numeroDeAnimais;
  }
  const findSpecie = species.find((specie) => animal.specie === specie.name).residents.length;
  return findSpecie;
}

module.exports = countAnimals;
