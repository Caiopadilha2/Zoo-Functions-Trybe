const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalParaAchar = species.find((specie) => animal === specie.name);
  // console.log(animalParaAchar);
  // // Pq não é para usar filter e sim find? Filter vai retornar um array de objetos com o elemento inteiro.
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  // Entendi porque usar find. Ele retorna todo o elemento, no caso era um objeto.
  const temIdadeMinima = animalParaAchar.residents.every((resident) => resident.age >= age);
  // Se eu colocar o mouse em cima de ''animalParaAchar'', vejo tudo o que ele é/retornou lá de cima.
  return temIdadeMinima;
}
// getAnimalsOlderThan('tigers', 2);

module.exports = getAnimalsOlderThan;
