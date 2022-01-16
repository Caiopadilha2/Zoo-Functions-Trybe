const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;
  // Aqui estou filtrando as pessoas desse array entrant pelas idades e pegando a quantidade de quantos tem de cada uma das faixa etátias com o .length
  return { child, adult, senior };
  // Vai retornar um objeto já com a chave e seus valores.
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0); return 0;
  // Eu tava tentando passar entrant.length === 0 para representar um objeto vazio, mas não fazia sentido.
  // Antes disso eu tava usando dois ifs, mas posso fazer os dois em um só.
  // if (entrants === undefined) {
  //   return 0;
  // }
  // if (Object.keys(entrants).length === 0) {
  //   return 0;
  // }
}

module.exports = { calculateEntry, countEntrants };
