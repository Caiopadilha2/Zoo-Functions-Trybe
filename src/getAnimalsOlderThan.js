const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalParaAchar = species.find((specie) => animal === specie.name);
  // // Pq não é para usar filter e sim find? Filter vai retornar um array de objetos com o elemento inteiro.
  const idadeMinima = animalParaAchar.residents.every((resident) => resident.age >= age);

  return idadeMinima;
  // return species.every((specie) => age > specie.residents.age);
}

module.exports = getAnimalsOlderThan;
